import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";

import big_img1 from "../assets/big_img1.jpg";
import banner1 from "../assets/banner_bg1-1.jpg";
import banner2 from "../assets/banner_bg2-1.jpg";
import banner3 from "../assets/banner_bg3-1.jpg";

import { ProductCard } from "../components/ProductCard";
import { BlogPost } from "../components/BlogPost";
import Banner from "../components/Banner";

import Dog4 from "../assets/dog4.jpg";
import Category1 from "../assets/category_1.jpg";
import Dog5 from "../assets/dog5.jpg";
import Dog1 from "../assets/dog1.jpg";
import ImageUpload from "@/components/cloud/UploadCloudinary";

const products = [
  {
    id: "670ced269e9d13e94920d7c6",
    image:
      "https://www.petmart.vn/wp-content/uploads/2013/03/binh-uong-nuoc-cho-cho-meo-gai-chuong-bobo-300x300.jpg",
    alt: "Bình nước gài chuồng cho chó BoBo",
    title: "Bình nước gài chuồng cho chó BoBo",
    price: "80000VND",
    oldPrice: "120000VND",
    rating: 5,
    buttonText: "Select options",
  },
  {
    id: "670ced269e9d13e94920d7ce",
    image:
      "https://www.petmart.vn/wp-content/uploads/2020/10/balo-dung-cho-meo-dang-hop-mat-luoi-loffe-pet-space-backpack123-300x300.jpg",
    alt: "Balo đựng chó dáng hộp mặt lưới LOFFE Pet Space Backpack",
    title: "Balo đựng chó dáng hộp mặt lưới LOFFE Pet Space Backpack",
    price: "550000VND",
    oldPrice: "750000VND",
    rating: 4,
    buttonText: "Select options",
  },
  {
    id: "670ced269e9d13e94920d7d2",
    image:
      "https://www.petmart.vn/wp-content/uploads/2019/05/vong-co-cho-meo-kem-day-dat-co-be-hand-in-hand-300x300.jpg",
    alt: "Dây xích chó kèm dây dắt cỡ bé HAND IN HAND",
    title: "Dây xích chó kèm dây dắt cỡ bé HAND IN HAND",
    price: "90000VND",
    oldPrice: "120000VND",
    rating: 4,
    buttonText: "Select options",
  },
];

function Home() {
  return (
    <div>
      <Nav />
      <div className="relative grid">
        <img src={big_img1} />
        <div className="absolute top-[20%] left-8">
          <div className="text-3xl six-caps-font sm:flex hidden">
            KẾT NỐI BẠN VỚI{" "}
          </div>
          <div className="text-3xl six-caps-font sm:flex hidden my-6">
            NHỮNG NGƯỜI BẠN
          </div>
          <div className="text-3xl six-caps-font sm:flex hidden">
            BỐN CHÂN HOÀN HẢO
          </div>
          <div className="text-[120px]  six-caps-font-2  my-2 sm:flex hidden">
            THIS LOVE
          </div>
        </div>
      </div>

      <div className="flex mx-24 my-16">
        <div>
          <img
            src={banner1}
            className="hover:brightness-110 cursor-pointer duration-200"
          />
        </div>
        <div>
          <img
            src={banner2}
            className="hover:brightness-110 cursor-pointer duration-200"
          />
        </div>
        <div>
          <img
            src={banner3}
            className="hover:brightness-110 cursor-pointer duration-200"
          />
        </div>
      </div>

      <div className="mx-24">
        <Banner />
      </div>

      <div className="my-8">
        <div className="container mx-auto p-4">
          <h1 className="text-center text-3xl font-bold text-green-600">
            PRODUCTS <span className="text-black">ON SALE</span>
          </h1>
          <div className="flex flex-wrap justify-center mt-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 mx-24">
        <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-0 gap-4">
          <div className="">
            <img
              src={Dog1}
              alt="A small dog with a red bow tie"
              className="w-full h-[300px] object-cover"
            />
            <div className="bg-teal-500 text-center py-4  hover:bg-gray_bg duration-200">
              <h2 className="text-white text-xl font-bold">DOGS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  M
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={Category1}
              alt="A grey cat"
              className="w-full h-[300px] object-cover"
            />
            <div className="bg-yellow-500 text-center py-4 hover:bg-gray_bg duration-200">
              <h2 className="text-white text-xl font-bold">DOGS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  L
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={Dog4}
              alt="A colorful parrot"
              className="w-full h-[300px] object-cover"
            />
            <div className="bg-red-500 text-center py-4 hover:bg-gray_bg duration-200">
              <h2 className="text-white text-xl font-bold">DOGS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  XL
                </span>
              </div>
            </div>
          </div>
          <div className="">
            <img
              src={Dog5}
              alt="A small rabbit"
              className="w-full h-[300px] object-cover"
            />
            <div className="bg-blue-500 text-center py-4 hover:bg-gray_bg duration-200">
              <h2 className="text-white text-xl font-bold">DOGS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  XXL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center text-green-600 my-8">
            SEE WHAT’S NEW IN OUR BLOG
          </h1>
          <div className="flex justify-center">
            <div className="text-center mx-4">
              <p className="text-green-600 font-bold">DECEMBER 22</p>
              <p className="text-gray-600">
                Posted by <span className="text-black">admin</span> • 3 Comments
              </p>
            </div>
            <div className="text-center mx-4">
              <p className="text-green-600 font-bold">DECEMBER 22</p>
              <p className="text-gray-600">
                Posted by <span className="text-black">admin</span> • 0 Comments
              </p>
            </div>
            <div className="text-center mx-4">
              <p className="text-green-600 font-bold">DECEMBER 22</p>
              <p className="text-gray-600">
                Posted by <span className="text-black">admin</span> • 0 Comments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
