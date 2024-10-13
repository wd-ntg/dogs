import ImageUpload from "@/components/cloud/UploadCloudinary";
import Nav from "@/components/Nav";
import { Button } from "flowbite-react";
import React from "react";

function Post() {
  return (
    <>
      <Nav />
      <div className="px-32 flex items-center space-x-2 ">
        <div>HOME</div>
        <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
        <div>ĐĂNG TIN</div>
        <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
        <div>{}</div>
      </div>
      <div className="flex justify-center items-start p-10 px-32 bg-[#f5f5f5]">
        <div className="w-1/2 pr-10">
          <h1 className="text-2xl font-bold text-black">
            <span className="text-orange-600">Đăng Tin</span>
          </h1>
          <h2 className="text-4xl font-light mt-4">
            Hãy đọc những câu hỏi sau và hoàn thành biểu mẫu bên dưới
          </h2>
          <p className="text-gray-500 mt-4">Tên và tuổi của chú chó là gì?</p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">Chú chó thuộc giống nào?</p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">
            Tình trạng sức khỏe của chú chó như thế nào? Có tiền sử bệnh tật
            không?
          </p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">
            Chú chó có tiêm chủng đầy đủ chưa?
          </p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">Chú chó đã được triệt sản chưa?</p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">Yêu cầu chăm sóc</p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">Yêu cầu chăm sóc đặc biệt</p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">
            Những thói quen hay sở thích đặc biệt nào của chú chó mà người nuôi
            hộ cần lưu ý không?
          </p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">
            Chú chó có quen với việc sống cùng trẻ em hoặc các vật nuôi khác
            không?
          </p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-gray-500 mt-4">
            Chú chó có quen được huấn luyện cơ bản (ngồi, đứng, nghe lệnh)
            không?
          </p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
        </div>
        <div className="w-1/2 pl-10">
          <h3 className="text-xl font-bold text-black">Thông tin của bạn</h3>
          <p className="text-2xl font-bold text-black mt-2">Số điện thoại</p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />
          <p className="text-2xl font-bold text-black mt-2">
            Địa chỉ nhà của bạn
          </p>
          <input className="w-full p-2 outline-none hover:border-[#46b193] border-2 rounded-2xl focus:border-[#46b193]" />

          <p className="text-gray-500 mt-2">
            If you have any questions, comments or ideas we can be reached by
            phone, fax or mail. Weekdays between 8.30-19.00 & weekends
            10.00-19.00
          </p>
          <p className="text-2xl font-bold text-black mt-2">
            Ảnh cún cưng của bạn
          </p>
          <ImageUpload />
          <div className="flex justify-center">
            <button className="px-2 py-2 bg-blue-400 text-white rounded-2xl">
              Hoàn Thành
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Post;
