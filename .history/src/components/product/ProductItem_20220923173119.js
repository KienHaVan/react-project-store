import React from "react";

const ProductItem = ({ data }) => {
  const { category, title, price, rating } = data;
  return (
    <div className="product-item px-3 py-4 bg-blue-50 rounded-xl flex flex-col gap-3">
      <div className="w-full h-[300px] rounded-xl">
        <img
          src={category.image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h2 className="font-medium text-xl text-clamp">{title}</h2>
      <h3 className="font-medium text-lg text-primary">{price}$</h3>
      <div className="flex items-center justify-between mb-5">
        <span>Rate: {rating.rate}</span>
        <span>Count: {rating.count}</span>
      </div>
      <button className="w-full p-3 bg-secondary rounded-xl text-white font-semibold mt-auto">
        Mua ngay
      </button>
    </div>
  );
};

export default ProductItem;
