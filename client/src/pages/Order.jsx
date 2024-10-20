import Nav from "@/components/Nav";
import React, { useState, useEffect } from "react";

import userService from "@/service/userService";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSelector } from "react-redux";

function Order() {
  const [order, setOrder] = useState(null);

  const user = useSelector((state) => state.user.userInfo);

  const callApi = async () => {
    const uid = user?.uid;

    let res = await userService.getAllOrder({ uid: uid });
    if (res && res.data) {
      setOrder(res.data);

      console.log(order);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div>
      <Nav />

      <div className=" sm:mx-24 sm:my-16 mx-4 my-6">
        <div className="px-6 flex items-center space-x-2">
          <div>TÀI KHOẢN</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
          <div>ĐƠN MUA</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
        </div>

        <div className="flex  space-x-24 backdrop-blur-sm">
          <aside className="  p-4">
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex items-center mb-4">
                  <img
                    src="https://placehold.co/50x50"
                    alt="User avatar"
                    className="rounded-full w-12 h-12"
                  />
                  <div className="ml-2">
                    <p className="font-bold">vxlc2xtm1</p>
                    <a href="#" className="text-blue-500">
                      Sửa Hồ Sơ
                    </a>
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Tính năng</h4>
                    <p className="text-sm text-muted-foreground">
                      Cài đặt cho tài khoản
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <nav>
                      <ul>
                        <li className="mb-2">
                          <a
                            href="/profile"
                            className="flex items-center text-red-500"
                          >
                            <i className="fas fa-gift mr-2"></i>
                            Ưu Đãi Dành Riêng Cho Bạn
                            <span className="ml-2 bg-red-500 text-white text-xs px-1 rounded">
                              New
                            </span>
                          </a>
                        </li>
                        <li className="mb-2">
                          <a
                            href="/profile"
                            className="flex items-center text-gray-700"
                          >
                            <i className="fas fa-user mr-2"></i>
                            Tài Khoản Của Tôi
                          </a>
                        </li>

                        <li className="mb-2">
                          <a
                            href="#"
                            className="flex items-center text-gray-700"
                          >
                            <i className="fas fa-map-marker-alt mr-2"></i>
                            Địa Chỉ
                          </a>
                        </li>
                        <li className="mb-2">
                          <a
                            href="#"
                            className="flex items-center text-gray-700"
                          >
                            <i className="fas fa-lock mr-2"></i>
                            Đổi Mật Khẩu
                          </a>
                        </li>

                        <li className="mb-2">
                          <a
                            href="/order"
                            className="flex items-center text-gray-700"
                          >
                            <i className="fas fa-shopping-cart mr-2"></i>
                            Đơn Mua
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </aside>

          <main className="">
            <div className="bg-white p-4">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-4 text-lg">
                  <a
                    href="#"
                    className="text-red-500 border-b-2 border-red-500 pb-2"
                  >
                    Tất cả
                  </a>
                  <a href="#" className="text-gray-700">
                    Chờ thanh toán
                  </a>
                  <a href="#" className="text-gray-700">
                    Vận chuyển
                  </a>
                  <a href="#" className="text-gray-700">
                    Chờ giao hàng
                  </a>
                  <a href="#" className="text-gray-700">
                    Hoàn thành
                  </a>
                  <a href="#" className="text-gray-700">
                    Đã hủy
                  </a>
                  <a href="#" className="text-gray-700">
                    Trả hàng/Hoàn tiền
                  </a>
                </nav>
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Bạn có thể tìm kiếm theo tên Shop, ID đơn hàng hoặc Tên Sản phẩm"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mt-4 p-4 border border-gray-200 rounded">
                {order?.map((item, index) => {
                  return (
                    <div>
                      <div className="flex items-center space-x-4">
                        <div className="bg-red-500 text-white px-2 py-1 rounded">
                          Mall
                        </div>
                        <div className="font-bold">
                          Nhận nuôi thú cưng Store
                        </div>
                      </div>
                      <div className="flex mt-4">
                        <img
                          src="https://placehold.co/100x100"
                          alt="Image of a blue stapler and a box of staples"
                          className="w-24 h-24"
                        />
                        <div className="ml-4">
                          <div className="font-bold">
                            {item?.name}
                          </div>
                          <div className="text-gray-500">
                            Phân loại hàng: {item?.color} -- Kích thước: {item?.size}
                          </div>
                          <div>x{item?.quantity}</div>
                          <div className="flex space-x-2 mt-2">
                            <div className="bg-red-500 text-white px-2 py-1 rounded">
                              15 ngày trả hàng
                            </div>
                            <div className="border border-green-500 text-green-500 px-2 py-1 rounded">
                              Trả hàng miễn phí 15 ngày
                            </div>
                          </div>
                        </div>
                        {/* <div className="ml-auto text-right">
                    <div className="text-green-500 flex items-center">
                      <i className="fas fa-truck"></i> Giao hàng thành công
                    </div>
                    <div className="text-red-500 font-bold">HOÀN THÀNH</div>
                    <div className="line-through text-gray-500">₫63.000</div>
                    <div className="text-red-500 font-bold">₫35.000</div>
                  </div> */}
                      </div>
                      <div className="flex justify-end items-center mt-4">
                        <div className="text-lg">
                          Thành tiền:{" "}
                          <span className="text-red-500 text-2xl font-bold">
                            ₫ {item?.price*item?.quantity}
                          </span>
                        </div>
                        <button className="bg-red-500 text-white px-6 py-2 ml-4 rounded">
                          Mua Lại
                        </button>
                        <button className="border border-gray-300 px-6 py-2 ml-4 rounded">
                          Liên Hệ Người Bán
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Order;
