import React from "react";

function Banner() {
  return (
    <div className="sm:flex block  items-center sm:space-x-8 space-x-2 py-8 bg-white oswald-font sm:mx-24 mx-4 justify-between">
      <div className="text-center">
        <h2 className="text-teal-500 sm:text-3xl text-base ">NEW ARRIVALS</h2>
        <p className="text-gray-800 mt-2 sm:text-base text-sm">
          SEE OUR LATEST MUST HAVES &gt;&gt;
        </p>
      </div>
      <div className="border-l border-gray-300 h-16 sm:flex hidden"></div>
      <div className="bg-gray-300 h-[1px] w-full sm:hidden flex my-4"></div>
      <div className="text-center">
        <h2 className="text-red-500 sm:text-3xl text-base  flex items-center justify-center">
          WE LOVE <i className="fas fa-heart ml-2"></i>
        </h2>
        <p className="text-gray-800 mt-2 sm:text-base text-sm">
          CHECK OUT STYLIST FAVORITES &gt;&gt;
        </p>
      </div>
      <div className="border-l border-gray-300 h-16 sm:flex hidden"></div>
      <div className="bg-gray-300 h-[1px] w-full sm:hidden flex my-4"></div>

      <div className="text-center">
        <h2 className="text-yellow-500 sm:text-3xl text-base ">
          FREE SHIPPING
        </h2>
        <p className="text-gray-800 mt-2 sm:text-base text-sm">
          FOR ALL OF 2016, NO CODE NEEDED &gt;&gt;
        </p>
      </div>
    </div>
  );
}

export default Banner;
