import React from "react";
import { Rating } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAction } from "@/redux/action/cartAction";
import {ShoppingCart} from "lucide-react"

import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

function CardProduct({
  _id,
  title,
  imgUrl,
  cardId,
  final_price,
}) {
  const navigate = useNavigate();

  const { toast } = useToast();

  const user = useSelector((state) => state.user.userInfo);

  const titleCard = title || "Product";

  const firstLine = titleCard.length > 27 ? titleCard.slice(0, 27) : titleCard;

  const secondLine = titleCard.length > 27 ? titleCard.slice(27) : "";

  const ratings = Math.round(Math.random() * 5);

  const stars = Array.from({ length: ratings }, (_, index) => index);

  const dispatch = useDispatch();

  const addToCart = async() => {

    const dataProduct = {
      _id: _id,
      name: title,
      price: final_price,
      image: imgUrl,
      selectedColor: null,
      selectedSize: null,
      quantity_cart: 1,
    }


    const data = {product: dataProduct, user: user.uid}

    const res = await dispatch(addToCartAction(data));

    if (res.success === true) {
      toast({
        title: "Thêm báo",
        description: res.message,
        action: (
          <ToastAction altText="Goto schedule to undo">Quay lại</ToastAction>
        ),
      });
    }

  }

  return (
    <div
      className="bg-white w-[188px] h-[338px] rounded-lg cursor-pointer hover:border-gray-200 hover:border-[1px]"
      onClick={() => {
        navigate("/product/" + _id);
      }}
    >
      <div className="flex justify-center items-center rounded-md">
        <img className="w-[188px] h-[188px] object-cover " src={imgUrl} />
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
            <h1>{final_price}</h1>
            <p className="px-1">VND</p>
          </div>
          <div className="flex font-sm text-xs line-through text-gray-600">
            <h1>{final_price}</h1>
            <p className="px-1">VND</p>
          </div>
        </div>
        <div
          className="h-12 flex items-center"
          onClick={(e) => {
            e.stopPropagation();
            addToCart();
          }}
        >
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
