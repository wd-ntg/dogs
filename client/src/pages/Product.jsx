import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "@/redux/action/productAction";

import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { addToCartAction } from "@/redux/action/cartAction";

function Product() {
  const [loadingApi, setLoadingApi] = useState(false);
  const [product, setProduct] = useState(null);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [image, setImage] = useState(null);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const user = useSelector((state) => state.user.userInfo);
  const cart_products = useSelector((state) => state.cart.products);

  const { toast } = useToast();
  const params = useParams();
  const dispatch = useDispatch();

  const callApi = async () => {
    setLoadingApi(true);
    let res = await dispatch(getProduct(params.id));

    if (res.success === true) {
      setProduct(res.data);
      setColor(res.data.color.split(",").map((e) => e.trim()));
      setSize(res.data.size.split(",").map((e) => e.trim()));
      setImage(res.data.image[2]);
      setLoadingApi(false);
    } else {
      setLoadingApi(false);
      toast({
        title: "Thông báo",
        description: res.message,
        action: (
          <ToastAction altText="Goto schedule to undo">Quay lại</ToastAction>
        ),
      });
    }
  };

  const addToCart = async () => {
    const quantity_cart = Number(selectedQuantity);

    const dataProduct = {
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image[0],
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      quantity_cart: quantity_cart,
    }


    const data = {product: dataProduct, user: user.uid}

    console.log(data)

    const res = await dispatch(addToCartAction(data));

    if (res.success === true) {
      toast({
        title: "Thông báo",
        description: res.message,
        action: (
          <ToastAction altText="Goto schedule to undo">Quay lại</ToastAction>
        ),
      });
    }
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
          <div>SẢN PHẨM</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>{}</div>
        </div>
        <div className="container mx-auto p-4">
          <div className="flex flex-wrap ">
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col items-center">
                <img
                  src={image}
                  alt="Main product image"
                  className="w-full mb-4 "
                />
                <div className="flex space-x-2">
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full max-w-sm"
                  >
                    <CarouselContent>
                      {Array.from({ length: product?.image.length }).map(
                        (_, index) => (
                          <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3"
                          >
                            <div className="p-1">
                              <Card>
                                <CardContent
                                  className="flex aspect-square items-center justify-center p-6"
                                  onClick={() =>
                                    setImage(product?.image[index])
                                  }
                                >
                                  <img src={product?.image[index]} />
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        )
                      )}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="p-4">
                <span className="text-red-500 font-bold text-sm">SALE</span>
                <h1 className="text-2xl font-bold mb-2">{product?.name}</h1>
                <div className="flex items-center mb-2">
                  <span className="text-green-500 text-xl font-bold mr-2">
                    VND{product?.price}
                  </span>
                  <span className="text-gray-500 line-through">$12.00</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-yellow-500">
                    <i className="fas fa-star-half-alt"></i>
                  </span>
                  <span className="text-gray-300">
                    <i className="fas fa-star"></i>
                  </span>
                  <span className="text-gray-600 ml-2">
                    (2 customer reviews)
                  </span>
                </div>
                <div className="mb-2">
                  <span className="font-bold">SKU:</span> N/A
                </div>
                <div className="mb-2">
                  <span className="font-bold">Size:</span> {product?.size}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Color:</span> {product?.color}
                </div>
                <p className="mb-4">
                  Ideal for carrying your small dog. This pet carrier is ideal
                  for the transport of small dogs and cats and other small
                  animals.
                </p>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Color</label>
                  <select
                    value={selectedColor}
                    onChange={(e) => setSelectedColor(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                  >
                    <option>Choose an option</option>
                    {color?.map((color, index) => (
                      <option key={index}>{color}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 font-bold">Size</label>
                  <select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="border border-gray-300 p-2 w-full"
                  >
                    <option>Choose an option</option>
                    {size?.map((size, index) => (
                      <option key={index}>{size}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    type="number"
                    className="border border-gray-300 p-2 w-16 mr-2"
                    min={1}
                    max={10}
                    value={selectedQuantity}
                    onChange={(e) => setSelectedQuantity(e.target.value)}
                  />
                  <button
                    onClick={addToCart}
                    className="bg-green-500 text-white p-2 flex items-center"
                  >
                    <i className="fas fa-cart-plus mr-2"></i> Add to cart
                  </button>
                </div>
                <div className="flex space-x-4 mb-4">
                  <button className="text-gray-600">
                    <i className="fas fa-heart mr-2"></i> Add to Wishlist
                  </button>
                  <button className="text-gray-600">
                    <i className="fas fa-exchange-alt mr-2"></i> Add to Compare
                  </button>
                </div>
                <div className="flex space-x-2">
                  <a href="#" className="text-gray-600">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-600">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-600">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="text-gray-600">
                    <i className="fab fa-pinterest-p"></i>
                  </a>
                  <a href="#" className="text-gray-600">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex space-x-4 border-b border-gray-300 pb-2">
              <button className="font-bold text-green-500">DESCRIPTION</button>
              <button className="font-bold text-gray-600">
                ADDITIONAL INFORMATION
              </button>
              <button className="font-bold text-gray-600">REVIEWS (2)</button>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-xl mb-2">Mô Tả Sản Phẩm</h2>
              <p>{product?.des}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
