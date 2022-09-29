import React from "react";

const ProductItem = () => {
  return (
    <div className="product-item px-3 py-4 bg-blue-50 rounded-xl flex flex-col gap-3">
      <div className="w-full h-[250px] rounded-xl">
        <img
          src="https://media-api-beta.thinkpro.vn/media/core/products/2022/7/3/UX3402ZA-KM218W-1.png?w=500&h=500"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <h2 className="font-medium text-xl">ASUS Zenbook 14 OLED</h2>
      <h3 className="font-medium text-lg text-primary">22.990.000</h3>
      <div className="flex items-center justify-between">
        <span>Rate: 3.9</span>
        <span>Count: 120</span>
      </div>
      <button className="w-full p-3 bg-secondary rounded-xl text-white font-medium mt-5">
        Mua ngay
      </button>
    </div>
  );
};

export default ProductItem;
