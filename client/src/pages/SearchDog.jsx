import Nav from "@/components/Nav";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userService from "@/service/userService";

import Lottie from "lottie-react";

import dog1 from "../assets/dog1.json"
import dog2 from "../assets/dog2.json"
import dog3 from "../assets/dog3.json"

function SearchDog() {
  const [dataDog, setDataDog] = useState(null);

  const [loadingApi, setLoadingApi] = useState(false);

  const params = useParams();

  const callApi = async () => {
    setLoadingApi(true);

    let res = await userService.getSearchDog(params.label);

    setDataDog(res.data[0]);

    console.log(dataDog);

    setLoadingApi(false);
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
          <div>TIM KIEM</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>CHI TIET</div>
        </div>

        <div className="flex flex-col items-center justify-center my-8">
          <div className="bg-[#46b193] p-8 rounded-lg flex items-center">
            <div className="text-white max-w-md">
              <h1 className="text-4xl font-bold mb-4">THÔNG TIN </h1>
              <div>
                <h2>Thuộc loài</h2>
                <p className="mb-2">{dataDog?.name}</p>
              </div>
              <div>
                <h2>Tuổi thọ</h2>
                <p className="mb-2">{dataDog?.life_span}</p>
              </div>
              <div>
                <h2>Tính cách</h2>
                <p className="mb-2">{dataDog?.temperament}</p>
              </div>
              <div>
                <h2>Tính cách</h2>
                <p className="mb-2">{dataDog?.temperament}</p>
              </div>
              <div>
                <h2>Nguồn gốc</h2>
                <p className="mb-2">{dataDog?.des}</p>
              </div>
            </div>
            <div className="ml-8">
              <img
                src={dataDog?.image}
                alt="A dog wearing yellow sunglasses"
                className="rounded-full w-80 h-80 object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center min-h-screen p-10">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2">
                  <h1 className="text-4xl font-bold mb-4">CHĂM SÓC</h1>
                  <p className="text-lg mb-4">{dataDog?.take_care}</p>
                  <h1>BỆNH DỄ GẶP</h1>
                  <p className="text-lg mb-4">{dataDog?.sick}</p>
                </div>
                <div className="md:w-1/2 flex flex-wrap justify-center mt-10 md:mt-0">
                  <div className="w-1/2 p-2">
                  <Lottie animationData={dog1} loop={true} />
                  </div>
                  <div className="w-1/2 p-2">
                  <Lottie animationData={dog2} loop={true} />
                  </div>
                  <div className="w-1/2 p-2">
                  <Lottie animationData={dog3} loop={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchDog;
