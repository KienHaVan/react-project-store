import React, { useEffect, useState } from "react";
import { useNavbar } from "../../context/NavbarContext";

const CartPage = () => {
  const { cartItem } = useNavbar();
  // console.log("file: CartPage.js ~ line 6 ~ cartItem", cartItem);
  const [cartItemHandled, setCartItemHandled] = useState([]);
  useEffect(() => {
    let cartItemCopy = [...cartItem];
    const cartItemHandled = [];
    cartItemCopy.map((item) => {
      const { cartItemCounted, count } = countCartItem(cartItemCopy, item);
      cartItemCopy = cartItemCounted;
      cartItemHandled.push({
        item,
        count,
      });
    });
    const output = cartItemHandled.filter((item) => item.count !== 0);
    setCartItemHandled(output);
  }, [cartItem]);
  function countCartItem(cartItem, miniItem) {
    const cartItemCopy = [...cartItem];
    const count = cartItemCopy.filter((item) => item.id === miniItem.id).length;
    const cartItemCounted = cartItemCopy.filter(
      (item) => item.id !== miniItem.id
    );
    return { cartItemCounted, count };
  }
  return (
    <div className="pt-[110px]">
      <h2 className="text-4xl font-medium mb-5">Giỏ hàng: {cartItem.length}</h2>
      <div className="cart-container w-full">
        {cartItem.length > 0 ? (
          <CartList data={cartItem}></CartList>
        ) : (
          <CartEmpty></CartEmpty>
        )}
      </div>
    </div>
  );
};

function CartEmpty() {
  return (
    <div className="relative w-full bg-blue-100  min-h-[300px] rounded-xl flex flex-col items-center justify-center">
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

function CartList({ data }) {
  return (
    <div className="flex items-start gap-20">
      <div className="cartList-left flex flex-col items-start gap-5">
        {data.length > 0 &&
          data.map((item, index) => (
            <CartItem key={index} item={item}></CartItem>
          ))}
      </div>
      <div className="cartList-right basis-1/3"></div>
    </div>
  );
}

function CartItem({ item }) {
  return (
    <div className=" basis-2/3 flex w-full items-start gap-5 bg-blue-100 rounded-xl p-4">
      <div className="w-20 h-20 rounded-xl">
        <img
          src={item.images[0]}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex-1 flex flex-col items-start gap-3">
        <h2 className="text-lg font-medium">{item.title}</h2>
        <p>{item.description}</p>
        <span className="text-primary text-xl font-semibold">
          {`${item.price}$`}
        </span>
      </div>
      <div className="flex items-center gap-5 mr-5">
        <button className="font-semibold text-lg">-</button>
        <span className="font-semibold text-lg">2</span>
        <button className="font-semibold text-lg">+</button>
      </div>
      <div className="flex flex-col items-end gap-5">
        <span className="text-primary text-xl font-semibold">22.990.000</span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CartPage;
