import Nav from "@/components/Nav";
import React, { useState, useEffect } from "react";

import userService from "@/service/userService";
import { useParams } from "react-router-dom";

function DogAdop() {
  const [dog, setDog] = useState(null);

  const params = useParams();

  const callApi = async () => {
    console.log(params.id);
    let res = await userService.getDogAdop(params.id);
    setDog(res.data);

    console.log(dog);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <Nav />

      <div className=" sm:mx-24 sm:my-16 mx-4 my-6">
        <div className="px-6 flex items-center space-x-2">
          <div>HOME</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>NHẬN NUÔI</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>THÔNG TIN</div>
        </div>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
          <div className="bg-gray-300 w-full py-4 flex justify-center">
            <h1 className="text-4xl font-bold text-white">NHẬN NUÔI</h1>
          </div>
          <div className="mt-8">
            <img
              src={dog?.post_dogs?.imageUrl}
              alt="A cute dog with a finger on its nose"
              className="rounded-full w-64 h-64 object-cover"
            />
          </div>
          <div className="mt-8 text-center px-4">
            <p className="text-lg text-gray-700">
              Hy vọng với những thông tin sau mà chúng tôi cung cấp bạn sẽ hiểu rõ về chú chó bạn sẽ dự định nhận nuôi trong tương lai. Chúng tôi luôn hướng đến một mục đích trên hết là kết nối mọi người lại với nhau
            </p>
          </div>
          <div className="mt-8">
            <div className="px-6 py-2 border border-black text-black hover:bg-gray-200">
              {dog?.post_dogs?.name}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center min-h-screen bg-gray-100 px-8">
          <div className="grid grid-cols-2 gap-8">
            <div className="flex justify-center items-center">
              <img
                src={dog?.post_dogs?.imageUrl}
                alt="A dog wearing glasses"
                className="w-[400px]  h-400px object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">#02</h2>
                <h3 className="text-xl font-semibold text-gray-600 mt-2">
                  TÌNH TRẠNG SỨC KHỎE
                </h3>
                <p className="text-gray-600 mt-2">{dog?.post_dogs?.health}</p>
                <p className="text-gray-600 mt-2">{dog?.post_dogs?.medical}</p>
                <p className="text-gray-600 mt-2">
                  {dog?.post_dogs?.sterilization}
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">#01</h2>
                <h3 className="text-xl font-semibold text-gray-600 mt-2">
                  THÔNG TIN
                </h3>
                <p className="text-gray-600 mt-2">
                  Tên chú chó: {dog?.post_dogs?.name}
                </p>
                <p className="text-gray-600 mt-2">
                  Thuộc giống: {dog?.post_dogs?.line}
                </p>
                <p className="text-gray-600 mt-2">
                  Sở thích (đặc điểm): {dog?.post_dogs?.habit}
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">#04</h2>
                <h3 className="text-xl font-semibold text-gray-600 mt-2">
                  KẾT NỐI CHỦ CHÚ CHÓ
                </h3>
                <p className="text-gray-600 mt-2">
                  Số điện thoại: {dog?.phoneNumber}
                </p>
                <p className="text-gray-600 mt-2">
                  Địa chỉ nhà: {dog?.address}
                </p>
              </div>
              <div className="text-center">
                <h2 className="text-4xl font-bold text-gray-800">#03</h2>
                <h3 className="text-xl font-semibold text-gray-600 mt-2">
                  CÁCH CHĂM SÓC KHUYẾN NGHỊ
                </h3>
                <p className="text-gray-600 mt-2">{dog?.post_dogs?.takeCare}</p>
                <p className="text-gray-600 mt-2">
                  {dog?.post_dogs?.specialTakeCare}
                </p>
                <p className="text-gray-600 mt-2">
                  {dog?.post_dogs?.liveTogether}
                </p>
                <p className="text-gray-600 mt-2">{dog?.post_dogs?.train}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DogAdop;
