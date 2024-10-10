export const ProductCard = ({ product }) => (
  <div className="border p-4 m-2 w-1/4 hover:border-[#46b193] duration-200">
    <div className="relative">
      <span className="absolute top-0 left-0 bg-pink-200 text-pink-600 px-2 py-1 text-xs font-bold">
        SALE!
      </span>
      <img
        src={product.image}
        alt={product.alt}
        className="w-full sm:h-48 h-24 object-cover mt-4"
      />
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <i
            key={i}
            className={`fa fa-star ${
              i < product.rating ? "text-red-500" : "text-gray-300"
            }`}
          ></i>
        ))}
      </div>
    </div>
    <h2 className="text-center sm:text-lg text-sm font-semibold mt-4">
      {product.title}
    </h2>
    <div className="text-center mt-2">
      <span className="text-green-600 sm:text-xl text-xs font-bold">
        {product.price}
      </span>
      <span className="text-gray-500 line-through ml-2 text-sm">
        {product.oldPrice}
      </span>
    </div>
    <div className="text-center mt-4">
      <button className="border-[2px] border-[#46b193] text-[#46b193] sm:px-2 sm:py-1 sm:text-base text-xs  px-2 py-1 rounded hover:text-white hover:bg-[#46b193] duration-200">
        {product.buttonText}
      </button>
    </div>
  </div>
);
