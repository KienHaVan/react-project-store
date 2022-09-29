import React, { useEffect, useRef, useState } from "react";
import { useNavbar } from "../../context/NavbarContext";

const ProductItem = ({ data }) => {
  const { setCartList, setFavoriteList, favoriteList } = useNavbar();
  const { category, image, title, price, rating, showFavorite = true } = data;
  const [liked, setLiked] = useState(false);
  let isFavorite = false;
  const handleFavoriteList = (data) => {
    isFavorite = favoriteList.some((item) => item.id === data.id);
    if (!isFavorite) {
      setFavoriteList((prev) => [...prev, data]);
      setLiked(true);
    } else {
      const output = favoriteList.filter((item) => item.id !== data.id);
      setFavoriteList(output);
      setLiked(false);
    }
  };
  return (
    <div className="product-item px-3 py-4 bg-blue-50 rounded-xl flex flex-col gap-3">
      <div className="w-full h-[300px] rounded-xl relative">
        <img
          src={category.image || image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <button
          className="like-logo absolute top-5 right-5 p-2 rounded-full text-primary bg-blue-100 cursor-pointer"
          onClick={() => handleFavoriteList(data)}
        >
          {data.showFavorite && liked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
          ) : (
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
          )}
        </button>
      </div>
      <h2 className="font-medium text-xl text-clamp">{title}</h2>
      <h3 className="font-medium text-lg text-primary mb-10">{price}$</h3>
      {rating && (
        <div className="flex items-center justify-between mb-5">
          <span>Rate: {rating.rate}</span>
          <span>Count: {rating.count}</span>
        </div>
      )}
      <button
        className="w-full p-3 bg-secondary rounded-xl text-white font-semibold mt-auto"
        onClick={() => setCartList((prev) => [...prev, data])}
      >
        Mua ngay
      </button>
    </div>
  );
};

export default ProductItem;
