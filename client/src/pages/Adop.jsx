import Nav from "@/components/Nav";
import React, { useState, useEffect } from "react";
import userService from "@/service/userService";
import { useNavigate } from "react-router-dom";

function Adop() {
  const [adop, setAdop] = useState(null);

  const [arryAdop, setArryAdop] = useState(null);

  const navigate = useNavigate();

  const callApi = async () => {
    let res = await userService.getAllAdop();
    if (res.data) {
      setAdop(res.data);

      setArryAdop(res.data.slice(11));
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  if (!adop || adop.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav />

      <div className=" sm:mx-24 sm:my-16 mx-4 my-6">
        <div className="px-6 flex items-center space-x-2">
          <div>HOME</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>NHẬN NUÔI</div>
          
        </div>

        <div className="flex flex-col items-center mt-10">
          <h1 className="text-5xl font-bold">Nhận nuôi</h1>
          <p className="text-lg text-blue-500 mt-2 mb-12">IN THE FOCUS!</p>

          <div className="grid grid-cols-3 grid-rows-12 gap-4">
            <div
              className="row-span-4 col-start-1 row-start-2"
              onClick={() => navigate(`/dog-adop/${adop[0]._id}`)}
            >
              <img
                src={adop[0]?.post_dogs?.imageUrl}
                alt="A dog with a yellow background"
                className="w-48 h-full object-cover"
              />
            </div>
            <div
              className="row-span-5 col-start-1 row-start-6"
              onClick={() => navigate(`/dog-adop/${adop[1]._id}`)}
            >
              <img
                src={adop[1]?.post_dogs.imageUrl}
                alt="A dog with a yellow background"
                className="w-48 h-full object-cover"
              />
            </div>
            <div
              className="row-span-6 col-start-2 row-start-1"
              onClick={() => navigate(`/dog-adop/${adop[2]._id}`)}
            >
              <img
                src={adop[2]?.post_dogs.imageUrl}
                alt="A dog with a yellow background"
                className="w-48 h-full object-cover"
              />
            </div>
            <div
              className="row-span-6 col-start-2 row-start-7"
              onClick={() => navigate(`/dog-adop/${adop[3]._id}`)}
            >
              <img
                src={adop[3]?.post_dogs.imageUrl}
                alt="A dog with a yellow background"
                className="w-48 h-full object-cover"
              />
            </div>
            <div
              className="row-span-3 col-start-3 row-start-2"
              onClick={() => navigate(`/dog-adop/${adop[3]._id}`)}
            >
              <img
                src={adop[4]?.post_dogs.imageUrl}
                alt="A dog with a yellow background"
                className="w-48 h-full object-cover"
              />
            </div>
            <div
              className="row-span-6 col-start-3 row-start-5"
              onClick={() => navigate(`/dog-adop/${adop[5]._id}`)}
            >
              <img
                src={adop[5]?.post_dogs.imageUrl}
                alt="A dog with a yellow background"
                className="w-48 h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-8">
            <div></div>

            <img
              src={adop[6]?.post_dogs.imageUrl}
              alt="A dog with a pink background"
              className="w-48 h-64 object-cover"
              onClick={() => navigate(`/dog-adop/${adop[6]._id}`)}
            />
            <img
              src={adop[7]?.post_dogs.imageUrl}
              alt="A dog with a gray background"
              className="w-48 h-48 object-cover "
              onClick={() => navigate(`/dog-adop/${adop[7]._id}`)}
            />
            <img
              src={adop[8]?.post_dogs.imageUrl}
              alt="A dog with a gray background"
              className="w-48 h-48 object-cover"
              onClick={() => navigate(`/dog-adop/${adop[8]._id}`)}
            />
            <img
              src={adop[9]?.post_dogs.imageUrl}
              alt="A dog with a green background"
              className="w-48 h-64 object-cover"
              onClick={() => navigate(`/dog-adop/${adop[9]._id}`)}
            />
            <img
              src={adop[10]?.post_dogs.imageUrl}
              alt="A dog with a blue background"
              className="w-48 h-48 object-cover"
              onClick={() => navigate(`/dog-adop/${adop[10]._id}`)}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {arryAdop?.map((item, index) => (
              <div
                key={index}
                className="m-6"
                onClick={() => navigate(`/dog-adop/${item._id}`)}
              >
                <img
                  src={item.post_dogs.imageUrl}
                  alt={item.post_dogs.name}
                  className="w-64 h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Adop;
