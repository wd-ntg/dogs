import ImageUpload from "@/components/cloud/UploadCloudinary";
import Nav from "@/components/Nav";
import { Button, Checkbox, Label, Radio } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";
import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import userService from "@/service/userService";

function Post() {
  const user = useSelector((state) => state.user.userInfo);
  const { toast } = useToast();

  const [name, setName] = useState("");
  const [line, setLine] = useState("");

  const [character, setCharacter] = useState("");

  const [selectedHealth, setSelectedHealth] = useState("");

  const [medical, setMedical] = useState("");
  const [fullVaccin, setFullVaccin] = useState("");
  const [vaccin, setVaccin] = useState("");
  const [sterilization, setSterilization] = useState("");
  const [takeCare, setTakeCare] = useState("");
  const [specialTakeCare, setSpecialTakeCare] = useState("");
  const [habit, setHabit] = useState("");
  const [liveTogether, setLiveTogether] = useState("");
  const [train, setTrain] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = (url) => {
    setImageUrl(url);
  };

  const handleHealthChange = (event) => {
    setSelectedHealth(event.target.value);
  };

  const handlePostDog = async () => {
    const dataDog = {
      name: name,
      line: line,
      character: character,
      health: selectedHealth,
      medical: medical,
      fullVaccin: fullVaccin,
      vaccin: vaccin,
      sterilization: sterilization,
      takeCare: takeCare,
      specialTakeCare: specialTakeCare,
      habit: habit,
      liveTogether: liveTogether,
      train: train,
      imageUrl: imageUrl,
    };

    const data = {
      post: dataDog,
      user: user.uid,
      phoneNumber: phoneNumber,
      address: address,
    };

    const res = await userService.userPostDog(data);

    toast({
      title: "Thông báo",
      description: res.message,
      action: (
        <ToastAction altText="Goto schedule to undo">Quay lại</ToastAction>
      ),
    });
  };

  return (
    <>
      <Nav />
      <div className="px-32 flex items-center space-x-2 ">
        <div>HOME</div>
        <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
        <div>ĐĂNG TIN</div>
  
      </div>
      <div className="flex justify-center items-start p-10 px-32 bg-[#f5f5f5]">
        <div className="w-1/2 pr-10">
          <h1 className="text-2xl font-bold text-black">
            <span className="text-orange-600">Đăng Tin</span>
          </h1>
          <h2 className="text-4xl font-light mt-4">
            Hãy đọc những câu hỏi sau và hoàn thành biểu mẫu bên dưới
          </h2>
          <div className="flex space-x-12 items-center">
            <div>
              <p className="text-gray-500 mt-4">
                Tên và tuổi của chú chó là gì?
              </p>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
              />
            </div>
            <div>
              <p className="text-gray-500 mt-4">Chú chó thuộc giống nào?</p>
              <input
                value={line}
                onChange={(e) => setLine(e.target.value)}
                className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
              />
            </div>
          </div>
          <div className="flex space-x-12 items-center">
            <div>
              <p className="text-gray-500 mt-4">
                Tính cách của chú chó như thế nào?
              </p>
              <input
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
                className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
              />
            </div>
            
          </div>
          <div>
            <p className="text-gray-500 mt-4">
              Tình trạng sức khỏe của chú chó như thế nào?
            </p>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="health1"
                name="health"
                value="Loại 1 (Sức khỏe tốt và không bệnh tật)"
                checked={
                  selectedHealth === "Loại 1 (Sức khỏe tốt và không bệnh tật)"
                }
                onChange={handleHealthChange}
              />
              <label htmlFor="health1" className="text-sm">
                Loại 1 (Sức khỏe tốt và không bệnh tật)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="health2"
                name="health"
                value="Loại 2 (Mức độ sức khỏe tốt nhưng có một số hạn chế nhỏ)"
                checked={
                  selectedHealth ===
                  "Loại 2 (Mức độ sức khỏe tốt nhưng có một số hạn chế nhỏ)"
                }
                onChange={handleHealthChange}
              />
              <label htmlFor="health2" className="text-sm">
                Loại 2 (Mức độ sức khỏe tốt nhưng có một số hạn chế nhỏ)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="health3"
                name="health"
                value="Loại 3 (Mức độ sức khỏe trung bình, có một số hạn chế nhất định)"
                checked={
                  selectedHealth ===
                  "Loại 3 (Mức độ sức khỏe trung bình, có một số hạn chế nhất định)"
                }
                onChange={handleHealthChange}
              />
              <label htmlFor="health3" className="text-sm">
                Loại 3 (Mức độ sức khỏe trung bình, có một số hạn chế nhất định)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="health4"
                name="health"
                value="Loại 4 (Mức độ sức khỏe dưới trung bình, có nhiều hạn chế)"
                checked={
                  selectedHealth ===
                  "Loại 4 (Mức độ sức khỏe dưới trung bình, có nhiều hạn chế)"
                }
                onChange={handleHealthChange}
              />
              <label htmlFor="health4" className="text-sm">
                Loại 4 ( Mức độ sức khỏe dưới trung bình, có nhiều hạn chế)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                id="health5"
                name="health"
                value="Loại 5 (Mức độ sức khỏe kém)"
                checked={selectedHealth === "Loại 5 (Mức độ sức khỏe kém)"}
                onChange={handleHealthChange}
              />
              <label htmlFor="health5" className="text-sm">
                Loại 5 (Mức độ sức khỏe kém)
              </label>
            </div>

            {/* Hiển thị tình trạng sức khỏe đã chọn */}
            <p className="mt-4">Tình trạng đã chọn: {selectedHealth}</p>
          </div>
          <p className="text-gray-500 mt-4">Có tiền sử bệnh tật không?</p>
          <input
            value={medical}
            onChange={(e) => setMedical(e.target.value)}
            className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
          />
          <div>
            <p className="text-gray-500 mt-4">
              Chú chó có tiêm chủng đầy đủ chưa? (Ghi rõ những mũi đã tiêm)
            </p>
            <div className="flex space-x-12">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="yes"
                  name="livingStatus"
                  value="Đã tiêm đầy đủ"
                  checked={fullVaccin === "Đã tiêm đầy đủ"}
                  onChange={(e) => setFullVaccin(e.target.value)}
                />
                <label htmlFor="yes">Có</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="no"
                  name="livingStatus"
                  value="Không tiêm đầy đủ"
                  checked={fullVaccin === "Không tiêm đầy đủ"}
                  onChange={(e) => setFullVaccin(e.target.value)}
                />
                <label htmlFor="no">Không</label>
              </div>
            </div>
            <input
              value={vaccin}
              onChange={(e) => setVaccin(e.target.value)}
              className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
            />
          </div>
          <div>
            <p className="text-gray-500 mt-4">
              Chú chó đã được triệt sản chưa?
              <div className="flex space-x-12">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="neutered"
                    name="neuteringStatus"
                    value="Đã triệt sản"
                    checked={sterilization === "Đã triệt sản"}
                    onChange={(e) => setSterilization(e.target.value)}
                  />
                  <label htmlFor="neutered">Đã triệt sản</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="notNeutered"
                    name="neuteringStatus"
                    value="Chưa triệt sản"
                    checked={sterilization === "Chưa triệt sản"}
                    onChange={(e) => setSterilization(e.target.value)}
                  />
                  <label htmlFor="notNeutered">Chưa triệt sản</label>
                </div>
              </div>
            </p>
          </div>
          <p className="text-gray-500 mt-4">Yêu cầu chăm sóc</p>
          <Textarea
            placeholder="..."
            value={takeCare}
            onChange={(e) => setTakeCare(e.target.value)}
          />
          <p className="text-gray-500 mt-4">Yêu cầu chăm sóc đặc biệt</p>
          <Textarea
            placeholder="..."
            value={specialTakeCare}
            onChange={(e) => setSpecialTakeCare(e.target.value)}
          />

          <p className="text-gray-500 mt-4">
            Những thói quen hay sở thích đặc biệt nào của chú chó mà người nuôi
            hộ cần lưu ý không?
          </p>
          <input
            value={habit}
            onChange={(e) => setHabit(e.target.value)}
            className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
          />
          <div>
            <p className="text-gray-500 mt-4">
              Chú chó có quen với việc sống cùng trẻ em hoặc các vật nuôi khác
              không?
            </p>
            <div className="flex space-x-12">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="yes"
                  name="livingStatus"
                  value="Có thói quen sống chung với trẻ em hoặc vật nuôi"
                  checked={
                    liveTogether ===
                    "Có thói quen sống chung với trẻ em hoặc vật nuôi"
                  }
                  onChange={(e) => setLiveTogether(e.target.value)}
                />
                <label htmlFor="yes">Có</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="no"
                  name="livingStatus"
                  value="Không thói quen sống chung với trẻ em hoặc vật nuôi"
                  checked={
                    liveTogether ===
                    "Không thói quen sống chung với trẻ em hoặc vật nuôi"
                  }
                  onChange={(e) => setLiveTogether(e.target.value)}
                />
                <label htmlFor="no">Không</label>
              </div>
            </div>

            {/* Hiển thị trạng thái đã chọn */}
            <p className="mt-4">
              Trạng thái sống cùng trẻ em hoặc vật nuôi: {liveTogether}
            </p>
          </div>
          <div>
            <p className="text-gray-500 mt-4">
              Chú chó có quen được huấn luyện cơ bản (ngồi, đứng, nghe lệnh)
              không?
            </p>
            <div className="flex space-x-12">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="yes"
                  name="trainingStatus"
                  value="Có thói quen được huấn luyện cơ bản (ngồi, đứng, nghe lệnh)"
                  checked={
                    train ===
                    "Có thói quen được huấn luyện cơ bản (ngồi, đứng, nghe lệnh)"
                  }
                  onChange={(e) => setTrain(e.target.value)} // Gọi hàm khi có thay đổi
                />
                <label htmlFor="yes">Có</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="no"
                  name="trainingStatus"
                  value="Không có thói quen được huấn luyện cơ bản (ngồi, đứng, nghe lệnh)"
                  checked={
                    train ===
                    "Không có thói quen được huấn luyện cơ bản (ngồi, đứng, nghe lệnh)"
                  }
                  onChange={(e) => setTrain(e.target.value)} // Gọi hàm khi có thay đổi
                />
                <label htmlFor="no">Không</label>
              </div>
            </div>

            {/* Hiển thị trạng thái đã chọn */}
            <p className="mt-4">Trạng thái huấn luyện: {train}</p>
          </div>
        </div>
        <div className="w-1/2 pl-10">
          <h3 className="text-xl font-bold text-black">Thông tin của bạn</h3>
          <p className="text-2xl font-bold text-black mt-2">Số điện thoại</p>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
          />
          <p className="text-2xl font-bold text-black mt-2">
            Địa chỉ nhà của bạn
          </p>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]"
          />

          <p className="text-gray-500 mt-2">
            Nếu bạn có bất kì câu hỏi liên quan nào hãy liên hệ với AD ở số điện
            thoại .....
          </p>
          <p className="text-2xl font-bold text-black mt-2">
            Ảnh cún cưng của bạn
          </p>
          <ImageUpload onUpload={handleImageUpload} />
          <div className="flex justify-center">
            <button
              onClick={handlePostDog}
              className="px-2 py-2 bg-blue-400 text-white rounded-sm hover:bg-blue-500 duration-200"
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
