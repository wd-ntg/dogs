import Nav from "@/components/Nav";
import React, { useEffect, useState } from "react";
import userService from "@/service/userService";
import productService from "@/service/productService";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSelector } from "react-redux";

import { useToast } from "@/components/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";

function Profile() {
  const [dataProfile, setDataProfile] = useState(null);

  const user = useSelector((state) => state.user.userInfo);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");

  const { toast } = useToast();

  const [gender, setGender] = useState("");
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const callApi = async () => {
    let res = await userService.getProfile({ uid: user.uid });

    if (res.data) {
      setDataProfile(res.data);

    }
  };

  useEffect(() => {
    callApi();
    handleUpdateProdcut()
  }, []);

 
  const handleUpdateProdcut = async () => {
    const updateProduct = await productService.updateAllProductsQuantity();
  };
    

  const handleSave = async () => {
    const updatedProfile = {
      name: name || user.name,
      email: email || user.email,
      phoneNumber: phoneNumber,
      userName: userName,
      address: address,
      uid: user.uid,
    };
    
    let res = await userService.updateProfile(updatedProfile);

    toast({
      title: "Thông báo",
      description: res.message,
      action: (
        <ToastAction altText="Goto schedule to undo">Quay lại</ToastAction>
      ),
    });
  };
  return (
    <div>
      <Nav />
      <div className=" sm:mx-24 sm:my-16 mx-4 my-6">
        <div className="px-6 flex items-center space-x-2">
          <div>TÀI KHOẢN</div>
          <div className="w-2 h-2 rounded-full bg-[#46b193]"></div>
        </div>
        <div className="flex">
          <aside className="w-1/4 bg-white p-4">
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
                            href="#"
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

          <main className="w-3/4 bg-white p-8">
            <h1 className="text-2xl font-bold mb-4">Hồ Sơ Của Tôi</h1>
            <p className="text-gray-600 mb-6">
              Quản lý thông tin hồ sơ để bảo mật tài khoản
            </p>
            <div className="flex">
              <div className="w-2/3">
                <div className="mb-4">
                  <label className="block text-gray-700">Tên đăng nhập</label>
                  <input
                    value={dataProfile?.name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <p className="text-gray-500 text-sm">
                    Đăng nhập chỉ có thể thay đổi một lần.
                  </p>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Tên người dùng</label>
                  <input
                    value={dataProfile?.userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={dataProfile?.email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Địa chỉ</label>
                  <div className="flex items-center">
                    <input
                      type="text"
                      value={dataProfile?.address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Số điện thoại</label>
                  <input
                    type="text"
                    value={dataProfile?.phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded"
                  />
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-2"
                    role="alert"
                  >
                    <span className="block sm:inline">
                      Liên kết số điện thoại bạn đang sử dụng với tài khoản của
                      shop để có thể đăng nhập và mua hàng
                    </span>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Giới tính</label>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Nam"
                      className="mr-2"
                      checked={gender === "Nam"}
                      onChange={handleGenderChange}
                    />{" "}
                    Nam
                    <input
                      type="radio"
                      name="gender"
                      value="Nữ"
                      className="ml-4 mr-2"
                      checked={gender === "Nữ"}
                      onChange={handleGenderChange}
                    />{" "}
                    Nữ
                    <input
                      type="radio"
                      name="gender"
                      value="Khác"
                      className="ml-4 mr-2"
                      checked={gender === "Khác"}
                      onChange={handleGenderChange}
                    />{" "}
                    Khác
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="bg-orange-500 text-white px-4 py-2 rounded"
                >
                  Lưu
                </button>
              </div>
              <div className="w-1/3 flex flex-col items-center">
                <img
                  src="https://placehold.co/100x100"
                  alt="Profile picture"
                  className="rounded-full w-24 h-24 mb-4"
                />
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">
                  Chọn Ảnh
                </button>
                <p className="text-gray-500 text-sm mt-2">
                  Dụng lượng file tối đa 1 MB
                </p>
                <p className="text-gray-500 text-sm">Định dạng: .JPEG, .PNG</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Profile;
