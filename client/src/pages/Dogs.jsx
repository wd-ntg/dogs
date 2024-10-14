import React, { useState, useEffect } from "react";
import CardProduct from "@/components/CardProduct";
import { Dropdown, Button, Spinner, Pagination } from "flowbite-react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import dogService from "@/service/dogService";
import Nav from "@/components/Nav";
import CardDog from "@/components/CardDog";

function Dogs() {
  const [loadingApi, setLoadingApi] = useState(false);

  const [listDogs, setlistDogs] = useState([]);

  let callAPI = async () => {
    setLoadingApi(true);

    let products = await dogService.getAllDogs();

    if (products && products.data) {
      setlistDogs(products.data);
    }

    setLoadingApi(false);
  };

  useEffect(() => {
    callAPI();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 20;

  const totalPages = Math.ceil(listDogs.length / productsPerPage);

  // Lấy sản phẩm cho trang hiện tại
  const currentDogs = listDogs.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Nav />
      <div className="mx-4 md:mx-24 flex my-12 justify-center">
        <div className="bg-bg_bg w-[1200px]">
          <div className="px-6 flex items-center space-x-2">
            <div>HOME</div>
            <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
            <div>KHÁM PHÁ</div>
        
          </div>
          <div className="flex justify-center items-center text-xl  my-8 text-[#46b193]">
            CÁC GIỐNG CHÓ PHỔ BIẾN TRÊN THẾ GIỚI
          </div>

          <div className="flex justify-between bg-navbar py-4 px-6 my-4">
            <div className="space-x-4 flex">
              <div className="h-[34px] flex items-center justify-center">
                Sắp xếp theo size
              </div>
              <div className="bg-orange-500 text-white px-4 h-[34px] flex items-center justify-center">
                M
              </div>
              <div className="bg-white px-4 h-[34px]  flex items-center justify-center">
                L
              </div>
              <div className="bg-white px-4 h-[34px] flex items-center justify-center">
                XL
              </div>
              <div className="bg-white px-4 h-[34px] flex items-center justify-center">
                XXL
              </div>
            </div>
          </div>
          <div>
            {loadingApi ? (
              <div className="flex justify-center items-center my-12">
                <Spinner
                  size={"xl"}
                  color="info"
                  aria-label="Info spinner example"
                />
              </div>
            ) : (
              <>
                <div className="grid grid-cols-5 gap-2 px-6">
                  {currentDogs.map((product) => (
                    <CardDog
                      key={product._id}
                      _id={product._id}
                      name={product.name}
                      image={product.image}
                      size={product.size}
                      life_span={product.life_span}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="flex justify-center items-center my-6">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dogs;
