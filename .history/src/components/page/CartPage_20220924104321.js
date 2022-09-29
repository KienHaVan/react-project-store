import React from "react";
import Navbar from "../navbar/Navbar";

const CartPage = () => {
  return (
    <div className="pt-[110px]">
      <h2 className="text-4xl font-medium mb-5">Giỏ hàng: {}</h2>
      <div className="cart-container w-full bg-blue-100 min-h-[300px] rounded-xl">
        <CartEmpty></CartEmpty>
      </div>
    </div>
  );
};

function CartEmpty() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <div className="cart-icon p-3 rounded-full bg-white mb-3">
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      <h2 className="mb-3">Giỏ hàng trống</h2>
      <p className="mb-3">Hãy thoải mái lựa sản phẩm bạn nhé</p>
    </div>
  );
}

export default CartPage;
