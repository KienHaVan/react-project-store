import React from "react";
import { useNavbar } from "../../context/NavbarContext";
import ProductItem from "../product/ProductItem";

const FavoritePage = () => {
  const { favoriteList, setFavoriteList } = useNavbar();
  console.log("file: FavoritePage.js ~ line 6 ~ favoriteList", favoriteList);
  return (
    <div className="pt-[110px]">
      <div className="text-4xl font-medium mb-5">
        Yêu thích: {favoriteList.length}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {favoriteList.length > 0 &&
          favoriteList
            .slice(0, 20)
            .map((item) => (
              <ProductItem
                key={item.id}
                data={item}
                showFavorite={false}
              ></ProductItem>
            ))}
      </div>
    </div>
  );
};

export default FavoritePage;
