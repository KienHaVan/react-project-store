import React from "react";

const ProductItem = ({ data }) => {
  const { image, title, price, rating } = data;
  return (
    <div className="product-item px-3 py-4 bg-blue-50 rounded-xl flex flex-col gap-3">
      <div className="w-full h-[250px] rounded-xl">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h2 className="font-medium text-xl">{title}</h2>
      <h3 className="font-medium text-lg text-primary">{price}$</h3>
      <div className="flex items-center justify-between">
        <span>Rate: {rating.rate}</span>
        <span>Count: 120</span>
      </div>
      <button className="w-full p-3 bg-secondary rounded-xl text-white font-medium mt-5">
        Mua ngay
      </button>
    </div>
  );
};

export default ProductItem;
