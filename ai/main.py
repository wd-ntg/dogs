from flask import Flask, request, jsonify
import torch
from ultralytics import YOLO
import cv2
import requests
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split


from pymongo import MongoClient

# Kết nối đến MongoDB cục bộ hoặc thay bằng URI kết nối của bạn
client = MongoClient("mongodb://localhost:27017/")

# Chọn database
db = client['dog']  # Thay thế 'mydatabase' bằng tên database của bạn

# Chọn collection
collection = db['search']  # Thay thế 'mycollection' bằng tên collection của bạn


# Đường dẫn đến mô hình đã huấn luyện
model_path = 'yl.pt'  # Thay bằng đường dẫn mô hình của bạn

# Tải mô hình đã huấn luyện
model = YOLO(model_path)

# Hàm để tải ảnh từ URL và chuyển thành định dạng OpenCV
def load_image_from_url(image_url):
    try:
        # Gửi yêu cầu GET để tải dữ liệu ảnh từ URL
        response = requests.get(image_url, timeout=10)
        response.raise_for_status()  # Kiểm tra xem yêu cầu có thành công không
        
        # Chuyển dữ liệu ảnh về dạng mảng byte và sau đó chuyển thành ảnh
        image_arr = np.asarray(bytearray(response.content), dtype=np.uint8)
        img = cv2.imdecode(image_arr, cv2.IMREAD_COLOR)
        
        if img is None:
            return None, "Không thể tải ảnh, vui lòng kiểm tra URL."
        return img, None
    except Exception as e:
        return None, f"Lỗi khi tải ảnh: {e}"

# Tạo ứng dụng Flask
app = Flask(__name__)

@app.route('/detect', methods=['POST'])
def detect_pets():
    data = request.get_json()
    
    # Kiểm tra dữ liệu đầu vào
    if 'image_url' not in data:
        return jsonify({'error': 'Vui lòng cung cấp đường dẫn URL của hình ảnh'}), 400
    
    image_url = data['image_url']
    img, error = load_image_from_url(image_url)
    
    if img is None:
        return jsonify({'error': error}), 400

    # Thực hiện dự đoán
    results = model.predict(source=img, conf=0.5)

    # Tạo danh sách các nhãn đã nhận diện
    detected_classes = []
    for result in results:
        for box in result.boxes:
            class_id = int(box.cls[0])
            class_name = model.names[class_id]
            detected_classes.append(class_name)

    # Trả về kết quả dưới dạng JSON
    return jsonify({'detected_objects': detected_classes})


def get_dog_by_text_search(dog_search):
    file_path = './Updated_and_Balanced_Labeled_Dog_Breed_Data.csv'  # Đường dẫn đến file CSV của bạn
    df = pd.read_csv(file_path)

    X = df['User Question'].values  # Dữ liệu câu hỏi
    y = df[['Labrador_retriever', 'Golden_retriever', 'German_shepherd', 'French_bulldog',
            'Chihuahua', 'beagle', 'Siberian_husky', 'boxer', 'Border_collie', 'Shih-Tzu']].values
    
    vectorizer = TfidfVectorizer(stop_words='english')
    X_tfidf = vectorizer.fit_transform(X)

    X_train, X_test, y_train, y_test = train_test_split(X_tfidf, y, test_size=0.2, random_state=42)

    knn = KNeighborsClassifier(n_neighbors=3)
    knn.fit(X_train, y_train)
    
    related_keywords = ['chó', 'cún']

    # Kiểm tra nếu câu hỏi không chứa từ khóa liên quan
    if not any(keyword in dog_search.lower() for keyword in related_keywords):
        return "Câu hỏi của bạn không liên quan đến các tiêu chí về giống chó. Vui lòng nhập câu hỏi liên quan."

    # Chuyển đổi câu hỏi người dùng thành vector TF-IDF
    user_input_tfidf = vectorizer.transform([dog_search])
    
    # Dự đoán nhãn
    predicted_breeds = knn.predict(user_input_tfidf)
    
    # Trả về giống chó tương ứng với nhãn
    breed_names = ['Labrador_retriever', 'Golden_retriever', 'German_shepherd', 'French_bulldog',
                   'Chihuahua', 'beagle', 'Siberian_husky', 'boxer', 'Border_collie', 'Shih-Tzu']
    
    # Chỉ trả về những giống chó có nhãn 1
    result = [breed for breed, label in zip(breed_names, predicted_breeds[0]) if label == 1]
    
    # Nếu không có giống chó nào phù hợp, trả về thông báo
    if not result:
        return "Không tìm thấy giống chó phù hợp."
    
    return result


@app.route('/search/<string:dog_search>', methods=['GET'])
def get_dog_by_search(dog_search):
    result = get_dog_by_text_search(dog_search)
    if result:
        return jsonify(result)
    return jsonify({"error": "Dog not found"}), 404


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
