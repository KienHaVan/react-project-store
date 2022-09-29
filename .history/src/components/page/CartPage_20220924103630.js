import React from "react";

const CartPage = () => {
  return (
    <div className="pt-[110px]">
      <h2 className="text-4xl font-medium mb-5">Giỏ hàng: {}</h2>
      <div className="cart-container w-full bg-blue-100 min-h-[300px] rounded-xl"></div>
    </div>
  );
};

function CartEmpty() {
  return <div>Cart Empty</div>;
}

export default CartPage;
