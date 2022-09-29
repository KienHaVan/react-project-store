import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNavbar } from "../../context/NavbarContext";
import { v4 as uuidv4 } from "uuid";

const CartPage = () => {
  const { cartList } = useNavbar();
  const [cartItemHandled, setCartItemHandled] = useState([]);
  useEffect(() => {
    let cartItemCopy = [...cartList];
    const cartItemHandled = [];
    cartItemCopy.map((item) => {
      const { cartItemCounted, count } = countCartItem(cartItemCopy, item);
      cartItemCopy = cartItemCounted;
      cartItemHandled.push({
        cartItem: item,
        count,
      });
    });
    const output = cartItemHandled.filter((item) => item.count !== 0);
    setCartItemHandled(output);
  }, [cartList]);
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
      <h2 className="text-4xl font-medium mb-5">Giỏ hàng: {cartList.length}</h2>
      <div className="cart-container w-full">
        {cartList.length > 0 ? (
          <CartList data={cartItemHandled}></CartList>
        ) : (
          <CartEmpty></CartEmpty>
        )}
      </div>
    </div>
  );
};

function CartEmpty() {
  const navigate = useNavigate();
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
      <button
        onClick={() => navigate("/")}
        className="p-4 bg-primary rounded-xl font-semibold text-white"
      >
        Trở về trang chủ
      </button>
    </div>
  );
}

function CartList({ data }) {
  const [voucherData, setVoucherData] = useState("");
  return (
    <div className="flex items-start gap-10">
      <div className="cartList-left flex flex-col items-start gap-5">
        {data.length > 0 &&
          data.map((item, index) => {
            return <CartItem key={uuidv4()} item={item}></CartItem>;
          })}
      </div>
      <div className="cartList-right basis-1/3 flex-shrink-0">
        <div className="flex flex-col gap-5 bg-blue-100 rounded-xl p-3 mb-3">
          <div className="header flex items-center gap-3">
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
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            <span className="font-bold text-xl">Mã khuyến mại</span>
          </div>
          <div className="content flex gap-3 rounded-xl p-3 relative bg-blue-700">
            <div className="absolute left-0 bottom-0">
              <img
                src="https://thinkpro.vn/_nuxt/img/promo-image.93bb1ff.png"
                alt=""
              />
            </div>
            <div className="w-full rounded-xl pl-[80px] ">
              <div className="w-full flex items-center bg-white rounded-xl">
                <input
                  type="text"
                  placeholder="Nhập mã khuyến mại"
                  className="p-3 w-full rounded-xl outline-none"
                  onChange={(e) => setVoucherData(e.target.value)}
                />
                {voucherData && (
                  <span className="text-secondary uppercase font-semibold text-xl flex-shrink-0 mr-3">
                    ÁP DỤNG
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 bg-blue-100 rounded-xl p-3">
          <div className="flex items-center gap-3">
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
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>
            <span>Tóm tắt đơn hàng</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function CartItem({ item }) {
  const { setCartList } = useNavbar();
  const { cartItem, count } = item;
  const [quantity, setQuantity] = useState(count);
  const [isValid, setIsValid] = useState(true);
  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      setIsValid(false);
      setCartList((prev) => prev.filter((item) => item.id !== cartItem.id));
    } else {
      setQuantity((item) => item - 1);
      setCartList((prev) => {
        const index = prev.findIndex((item) => item.id === cartItem.id);
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      });
    }
  };
  const handleIncreaseQuantity = () => {
    setQuantity((item) => item + 1);
    setCartList((prev) => [...prev, cartItem]);
  };
  const handleDelete = () => {
    setIsValid(false);
    setCartList((prev) => prev.filter((item) => item.id !== cartItem.id));
  };
  return (
    isValid && (
      <div className=" basis-2/3 flex w-full items-start gap-5 bg-blue-100 rounded-xl p-4">
        <div className="w-20 h-20 rounded-xl">
          <img
            src={cartItem.images[0]}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="flex-1 flex flex-col items-start gap-3">
          <h2 className="text-lg font-medium">{cartItem.title}</h2>
          <p>{cartItem.description}</p>
          <span className="text-primary text-xl font-semibold">
            {cartItem.price} $
          </span>
        </div>
        <div className="flex items-center gap-5 mr-5">
          <button
            className="font-semibold text-lg"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <span className="font-semibold text-lg">{quantity}</span>
          <button
            className="font-semibold text-lg"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
        </div>
        <div className="flex flex-col items-end gap-5">
          <span className="text-primary text-xl font-semibold">
            {cartItem.price * quantity} $
          </span>
          <button className="text-secondary" onClick={handleDelete}>
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
    )
  );
}

export default CartPage;
