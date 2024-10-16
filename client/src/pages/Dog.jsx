import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import dogService from "@/service/dogService";
import { useParams } from "react-router-dom";

function Dog() {
  const params = useParams();

  const [dog, setDog] = React.useState([]);
  const [loadingApi, setLoadingApi] = useState(false);

  const callApi = async () => {
    setLoadingApi(true);
    const id = params.id;
    let res = await dogService.getDog(id);
    setDog(res.data);

    setLoadingApi(false);
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <Nav />
      <div className=" sm:mx-24 sm:my-16 mx-4 my-6">
        <div className="px-6 flex items-center space-x-2 my-8">
          <div>HOME</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>KHÁM PHÁ</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>CÁC LOÀI CHÓ</div>
        </div>
        <div className="relative px-6">
          <img
            src={dog.image}
            alt="A happy dog running on the grass"
            className=" h-auto object-contain"
          />
          <div className="absolute top-1/4 left-1/4 bg-green-600 bg-opacity-90 p-8">
            <h1 className="text-white text-sm uppercase">Thông Tin</h1>
            <h2 className="text-white text-5xl font-bold">{dog.name}</h2>
            <p className="text-white mt-4">
             {dog.des}
            </p>
            <button className="mt-4 bg-white text-green-600 font-bold py-2 px-4">
              Nhận nuôi
            </button>
          </div>
        </div>
        <div className="bg-green-500 p-8">
          <h2 className="text-white text-3xl font-bold">Đào Tạo</h2>
          <h3 className="text-white text-lg italic mt-2">Giới Thiệu Chăm Sóc</h3>
          <ul className="text-white mt-4 list-disc list-inside">
            <li>
             {dog.take_care}
            </li>
            <li>
              {dog.sick}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dog;
