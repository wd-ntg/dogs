import React from "react";
import { Rating } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "@/redux/action/cartAction";
import { ShoppingCart } from "lucide-react";

import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Dog } from "lucide-react";

function CardDog({ _id, name, size, life_span, image }) {
  const navigate = useNavigate();

  const { toast } = useToast();

  const user = useSelector((state) => state.user.userInfo);

  const nameDog = name || "Dog";

  const firstLine = nameDog.length > 27 ? nameDog.slice(0, 27) : nameDog;

  const secondLine = nameDog.length > 27 ? nameDog.slice(27) : "";

  const ratings = Math.round(Math.random() * 5);

  const stars = Array.from({ length: ratings }, (_, index) => index);

  return (
    <div
      className="bg-white w-[188px] h-[338px] rounded-lg cursor-pointer hover:border-gray-200 hover:border-[1px]"
      onClick={() => {
        navigate("/dog/" + _id);
      }}
    >
      <div className="flex justify-center items-center rounded-md">
        <img className="w-[188px] h-[188px] object-cover " src={image} />
      </div>
      <div>
        <p className="text-xs px-2 pt-2">{firstLine}</p>
        <p className="text-xs truncate px-2 pt-2 pb-4">{secondLine}</p>
      </div>
      <div className="flex justify-between items-center px-2 py-1">
        <div>
          <Rating size={"12px"}>
            {stars.map((_, index) => (
              <p key={index}>
                <Rating.Star />
              </p>
            ))}
          </Rating>
        </div>
      </div>
      <div className="flex justify-between px-2 font-semibold">
        <div className="">
          <div className="flex text-black">
            <h1>{size}</h1>
            <p className="px-1">Kích thước</p>
          </div>
          <div className="flex font-sm text-xs line-through text-gray-600">
            <h1>{life_span}</h1>
            <p className="px-1">Tuổi thọ</p>
          </div>
        </div>
        <div className="h-12 flex items-center">
        <Dog />
        </div>
      </div>
    </div>
  );
}

export default CardDog;
