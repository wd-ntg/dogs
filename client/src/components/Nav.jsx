import React from "react";
import { useSelector } from "react-redux";

function Nav() {
  const user = useSelector((state) => state.user.userInfo);

  return (
    <div className="grid ">
      <div className="flex row-start-1 justify-between mx-4 my-4 items-center sm:mx-24">
        <div className="w-6 h-6">
          <svg
            fill="#000000"
            viewBox="0 -2 28 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="m5.216 11.998c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"></path>
              <path d="m5.216 2.608c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"></path>
              <path d="m5.216 21.389c0 1.44-1.168 2.608-2.608 2.608s-2.608-1.168-2.608-2.608 1.168-2.608 2.608-2.608 2.608 1.168 2.608 2.608z"></path>
              <path d="m9.794 0h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"></path>
              <path d="m9.794 9.39h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"></path>
              <path d="m9.794 18.781h15.247c1.441 0 2.61 1.168 2.61 2.61s-1.168 2.61-2.61 2.61h-15.247c-1.441 0-2.61-1.168-2.61-2.61s1.168-2.61 2.61-2.61z"></path>
            </g>
          </svg>
        </div>
        <div className="flex space-x-4 justify-between items-center">
          {user ? (
            <>
              <div className="flex justify-center items-center space-x-2">
                <div>
                  <img
                    className="w-12 h-12 rounded-full object-cover"
                    src={user.photoURL}
                  />
                </div>
                <div>{user.name}</div>
              </div>
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
        <div className="text-2xl font-semibold my-4">NHẬN NUÔI CÚN CƯNG</div>
        <div className="flex w-[336px] justify-between">
          <div className="text-sm font-semibold ">NHẬN NUÔI</div>
          <div className="w-[2px] h-6 bg-black/20 transform rotate-12"></div>
          <div className="text-sm font-semibold ">ĐỒ DÙNG THÚ CƯNG</div>
          <div className="w-[2px] h-6 bg-black/20 transform rotate-12"></div>
          <div className="text-sm font-semibold ">LIÊN HỆ</div>
        </div>
      </div>
      <div className="flex justify-center items-center my-6">
        <input
          className="p-4 sm:w-[664px] w-[320px] rounded-md outline-none border-none bg-gray-400/30"
          placeholder="Search ..."
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
    </div>
  );
}

export default Nav;
