import React from "react";
import Nav from "../components/Nav";

import big_img1 from "../assets/big_img1.jpg";
import banner1 from "../assets/banner_bg1-1.jpg";
import banner2 from "../assets/banner_bg2-1.jpg";
import banner3 from "../assets/banner_bg3-1.jpg";

import { ProductCard } from "../components/ProductCard";
import { BlogPost } from "../components/BlogPost";
import Banner from "../components/Banner";

import Dog4 from '../assets/dog4.jpg';
import Category1 from '../assets/category_1.jpg'
import Dog5 from "../assets/dog5.jpg";
import Dog1 from "../assets/dog1.jpg";

const products = [
  {
    id: 1,
    image: "https://placehold.co/300x200",
    alt: "Leopet Htbt03 Dog Bed Different Sizes And Colours",
    title: "Leopet Htbt03 Dog Bed Different Sizes And Colours",
    price: "$150.00",
    oldPrice: "$152.00",
    rating: 5,
    buttonText: "Add to cart",
  },
  {
    id: 2,
    image: "https://placehold.co/300x200",
    alt: "Andrew James 4-Day Meal Automatic Pet Feeder",
    title: "Andrew James 4-Day Meal Automatic Pet Feeder",
    price: "$10.00",
    oldPrice: "$12.00",
    rating: 4,
    buttonText: "Select options",
  },
  {
    id: 3,
    image: "https://placehold.co/300x200",
    alt: "Easipet Fabric Pet Carrier",
    title: "Easipet Fabric Pet Carrier",
    price: "$30.00",
    oldPrice: "$35.00",
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
          <div className="text-3xl six-caps-font sm:flex hidden">KẾT NỐI BẠN VỚI </div>
          <div className="text-3xl six-caps-font sm:flex hidden my-6">NHỮNG NGƯỜI BẠN</div>
          <div className="text-3xl six-caps-font sm:flex hidden">BỐN CHÂN HOÀN HẢO</div>
          <div className="text-[120px]  six-caps-font-2  my-2 sm:flex hidden">THIS LOVE</div>
        </div>
      </div>

      <div className="flex mx-24 my-16">
        <div>
          <img src={banner1} className="hover:brightness-110 cursor-pointer duration-200" />
        </div>
        <div>
          <img src={banner2} className="hover:brightness-110 cursor-pointer duration-200" />
        </div>
        <div>
          <img src={banner3} className="hover:brightness-110 cursor-pointer duration-200" />
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
            <div className="bg-teal-500 text-center py-4  hover:bg-gray_bg">
              <h2 className="text-white text-xl font-bold">DOGS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  19 products
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
            <div className="bg-yellow-500 text-center py-4 hover:bg-gray_bg">
              <h2 className="text-white text-xl font-bold">CATS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  19 products
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
            <div className="bg-red-500 text-center py-4 hover:bg-gray_bg">
              <h2 className="text-white text-xl font-bold">BIRDS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  14 products
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
            <div className="bg-blue-500 text-center py-4 hover:bg-gray_bg">
              <h2 className="text-white text-xl font-bold">SMALL PETS</h2>
              <div className="mt-2">
                <span className="text-white border sm:text-base text-xs border-white py-1 px-3 inline-block">
                  6 products
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      <div className="container mx-auto">
                <h1 className="text-3xl font-bold text-center text-green-600 my-8">SEE WHAT’S NEW IN OUR BLOG</h1>
                <div className="flex justify-center">
                    <div className="text-center mx-4">
                        <p className="text-green-600 font-bold">DECEMBER 22</p>
                        <p className="text-gray-600">Posted by <span className="text-black">admin</span> • 3 Comments</p>
                    </div>
                    <div className="text-center mx-4">
                        <p className="text-green-600 font-bold">DECEMBER 22</p>
                        <p className="text-gray-600">Posted by <span className="text-black">admin</span> • 0 Comments</p>
                    </div>
                    <div className="text-center mx-4">
                        <p className="text-green-600 font-bold">DECEMBER 22</p>
                        <p className="text-gray-600">Posted by <span className="text-black">admin</span> • 0 Comments</p>
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <BlogPost
                        date="DECEMBER 22"
                        author="admin"
                        comments="3 Comments"
                        imageSrc="https://placehold.co/600x400"
                        imageAlt="A woman hugging a dog on a couch"
                        title="A Doggie Kiss A Day Keeps the Doctor Away"
                        description="This above-average dry product has a dry matter protein reading of 38%, a fat level of 13% and estimated carbohydrates"
                    />
                    <BlogPost
                        date="DECEMBER 22"
                        author="admin"
                        comments="0 Comments"
                        imageSrc="https://placehold.co/600x400"
                        imageAlt="A puppy running on the ground"
                        title="A Dog’s Short Term Memory is... Pretty Short"
                        description="Taste of the Wild The Taste of the Wild product line includes seven dry dog foods, and they’re all praised by dog"
                    />
                    <BlogPost
                        date="DECEMBER 22"
                        author="admin"
                        comments="0 Comments"
                        imageSrc="https://placehold.co/600x400"
                        imageAlt="A cat lying on a bed"
                        title="Introducing A New Pet To Your Furry Family"
                        description="Well, to the contrary of how pets generally feel warmer during the cold season of the year, as opposed to us humans"
                    />
                </div>
            </div>
      </div>
    </div>
  );
}

export default Home;
