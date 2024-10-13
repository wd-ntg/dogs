import React, { useState, useEffect } from "react";
import CardProduct from "@/components/CardProduct";
import { Dropdown, Button, Spinner, Pagination } from "flowbite-react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import productService from "@/service/productService";
import Nav from "@/components/Nav";

function Products() {
  const [loadingApi, setLoadingApi] = useState(false);

  const [listProduct, setListProduct] = useState([]);

  let callAPI = async () => {
    setLoadingApi(true);

    let products = await productService.getAllProducts();

    if (products && products.data) {
      setListProduct(products.data);
    }

    setLoadingApi(false);
  };

  useEffect(() => {
    callAPI();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const productsPerPage = 20;

  const totalPages = Math.ceil(listProduct.length / productsPerPage);

  // Lấy sản phẩm cho trang hiện tại
  const currentProducts = listProduct.slice(
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
            <div>TẤT CẢ SẢN PHẨM</div>
            <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
            <div>{}</div>
          </div>
          <div className="flex justify-between bg-navbar py-4 px-4 my-4">
            <div className="space-x-4 flex">
              <div className="h-[34px] flex items-center justify-center">
                Sắp xếp theo
              </div>
              <div className="bg-orange-500 text-white px-4 h-[34px] flex items-center justify-center">
                Phổ biến
              </div>
              <div className="bg-white px-4 h-[34px]  flex items-center justify-center">
                Mới nhất
              </div>
              <div className="bg-white px-4 h-[34px] flex items-center justify-center">
                Bán chạy
              </div>
              <div className="bg-white px-4 h-[34px] flex items-center justify-center">
                <Dropdown
                  dismissOnClick={false}
                  renderTrigger={() => (
                    <div className="flex items-center w-[120px] justify-between">
                      <div>Giá</div>
                      <div>
                        <ChevronDown />
                      </div>
                    </div>
                  )}
                >
                  <Dropdown.Item>
                    <div className="flex items-center text-center space-x-2">
                      <div>Giá: Từ cao đến thâp</div>
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <div className="flex items-center text-center space-x-2">
                      <div>Giá: Từ thấp đến cao</div>
                      <div></div>
                    </div>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <div>1/9</div>
              <div className="flex">
                <div>
                  <Button color="gray">
                    <ChevronLeft />
                  </Button>
                </div>
                <div>
                  <Button color="gray">
                    <ChevronRight />
                  </Button>
                </div>
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
              <div className="grid grid-cols-5 gap-2">
                {currentProducts.map((product) => (
                  <CardProduct
                    key={product._id}
                    _id = {product._id}
                    title={product.name}
                    imgUrl={product.image[0]}
                    cardId={product._id}
                    final_price={product.price}
                  />
                ))}
              </div>
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

export default Products;
