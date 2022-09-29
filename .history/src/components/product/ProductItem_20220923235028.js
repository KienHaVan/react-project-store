import React from "react";

const ProductItem = ({ data }) => {
  const { category, image, title, price, rating } = data;
  return (
    <div className="product-item px-3 py-4 bg-blue-50 rounded-xl flex flex-col gap-3">
      <div className="w-full h-[300px] rounded-xl relative">
        <img
          src={category.image || image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute top-5 right-5 p-3 rounded-full text-white bg-blue-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div>
      </div>
      <h2 className="font-medium text-xl text-clamp">{title}</h2>
      <h3 className="font-medium text-lg text-primary mb-10">{price}$</h3>
      {/* <div className="flex items-center justify-between mb-5">
        <span>Rate: {rating.rate}</span>
        <span>Count: {rating.count}</span>
      </div> */}
      <button className="w-full p-3 bg-secondary rounded-xl text-white font-semibold mt-auto">
        Mua ngay
      </button>
    </div>
  );
};

export default ProductItem;
