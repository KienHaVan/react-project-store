import React from "react";
import { useNavbar } from "../../context/NavbarContext";
import ProductItem from "../product/ProductItem";

const FavoritePage = () => {
  const { favoriteList, setFavoriteList } = useNavbar();
  console.log("file: FavoritePage.js ~ line 6 ~ favoriteList", favoriteList);
  return (
    <>
      <div className="pt-[110px] grid grid-cols-4 gap-5">
        {favoriteList.length > 0 &&
          favoriteList
            .slice(0, 20)
            .map((item) => (
              <ProductItem key={item.id} data={item}></ProductItem>
            ))}
      </div>
    </>
  );
};

export default FavoritePage;
