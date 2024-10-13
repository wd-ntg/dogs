import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageUpload from "./cloud/UploadCloudinary";
import { Link } from "react-router-dom";
import { removeFromCartAction } from "@/redux/action/cartAction";
import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  ShoppingCart,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useNavigate } from "react-router-dom";
import cartService from "@/service/cartService";

function Nav() {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const { toast } = useToast();

  const user = useSelector((state) => state.user.userInfo);
  const quantityCart = useSelector((state) => state.cart.quantityCart);
  const cart_products = useSelector((state) => state.cart.products);

  // const totalPrice = cart_products.reduce(
  //   (total, product) => total + product.final_price * product.quantity_cart,
  //   0
  // );

  const handleRemoveCart = async (data) => {
    const removeData = {
      product: data,
      user: user.uid,
    };
    const res = await dispatch(removeFromCartAction(removeData));

    console.log(res);

    toast({
      title: "Thông báo",
      description: res.message,
      action: (
        <ToastAction altText="Goto schedule to undo">Quay lại</ToastAction>
      ),
    });
  };

  return (
    <div className="grid ">
      <div className="flex row-start-1 justify-between mx-4 my-4 items-center sm:mx-24">
        <Sheet>
          <SheetTrigger asChild>
            <div className="w-6 h-6 relative">
              <ShoppingCart className="cursor-pointer" />
              <div className="absolute top-[-12px] right-[-8px]">
                {quantityCart}
              </div>
            </div>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Giỏ hàng</SheetTitle>
              <SheetDescription>Tất cả sản phẩm bạn đã lưu</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              {cart_products?.map((product) => (
                <li key={product?._id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      alt={product?._id}
                      src={product?.image}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          {product?.name && product?.name.length > 20 ? (
                            <a href={`/product/${product?._id}`}>
                              {product?.name.substring(0, 20)}...
                            </a>
                          ) : (
                            <a href={product?._id}>{product?.name}</a>
                          )}
                        </h3>
                        <p className="ml-4">{product?.price}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">
                        Số lượng {product?.quantity_cart}
                      </p>

                      <div className="flex">
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={() => handleRemoveCart(product)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </div>
            <SheetFooter>
              <SheetClose asChild>
                <Button type="submit">Lưu giỏ hàng</Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <div className="flex space-x-4 justify-between items-center">
          {user ? (
            <>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex justify-center items-center space-x-2">
                    <div>
                      {user?.photoURL ? (
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={user.photoURL}
                        />
                      ) : (
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                        />
                      )}
                    </div>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Cài đặt</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Đăng xuất</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <div>Đăng nhập</div>
              <div className="w-[2px] h-8 bg-black/60"></div>
              <div>Đăng ký</div>
            </>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center  flex-col my-2">
        <div className="text-2xl font-semibold my-4 cursor-pointer hover:text-[#46b193] duration-200">
          <a href="/">NHẬN NUÔI CÚN CƯNG</a>
        </div>
        <div className="flex w-[520px] justify-between">
          <div className="text-sm font-semibold hover:text-[#46b193] duration-200 cursor-pointer">
            <a href="/dogs"> KHÁM PHÁ</a>
          </div>
          <div className="w-[2px] h-6 bg-black/20 transform rotate-12"></div>
          <div className="text-sm font-semibold hover:text-[#46b193] duration-200 cursor-pointer">
            <a href="/dogs">NHẬN NUÔI</a>
          </div>
          <div className="w-[2px] h-6 bg-black/20 transform rotate-12"></div>
          <div className="text-sm font-semibold hover:text-[#46b193] duration-200 cursor-pointer">
            <a href="/dogs">ĐĂNG TIN</a>
          </div>
          <div className="w-[2px] h-6 bg-black/20 transform rotate-12"></div>
          <div className="text-sm font-semibold cursor-pointer hover:text-[#46b193] duration-200">
            <a href="/products"> ĐỒ DÙNG THÚ CƯNG</a>
          </div>
          <div className="w-[2px] h-6 bg-black/20 transform rotate-12"></div>
          <div className="text-sm font-semibold hover:text-[#46b193] duration-200">
            LIÊN HỆ
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6">
        <input
          className="p-4 sm:w-[664px] w-[320px] rounded-md outline-none border-none bg-gray-400/30"
          placeholder="Tìm kiếm chó cưng thích hợp với bạn ..."
        />
        <div className="w-6 h-6 translate-x-[-36px] cursor-pointer">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M20 10.9696L11.9628 18.5497C10.9782 19.4783 9.64274 20 8.25028 20C6.85782 20 5.52239 19.4783 4.53777 18.5497C3.55315 17.6211 3 16.3616 3 15.0483C3 13.7351 3.55315 12.4756 4.53777 11.547M14.429 6.88674L7.00403 13.8812C6.67583 14.1907 6.49144 14.6106 6.49144 15.0483C6.49144 15.4861 6.67583 15.9059 7.00403 16.2154C7.33224 16.525 7.77738 16.6989 8.24154 16.6989C8.70569 16.6989 9.15083 16.525 9.47904 16.2154L13.502 12.4254M8.55638 7.75692L12.575 3.96687C13.2314 3.34779 14.1217 3 15.05 3C15.9783 3 16.8686 3.34779 17.525 3.96687C18.1814 4.58595 18.5502 5.4256 18.5502 6.30111C18.5502 7.17662 18.1814 8.01628 17.525 8.63535L16.5 9.601"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>
      </div>
      <></>
    </div>
  );
}

export default Nav;
