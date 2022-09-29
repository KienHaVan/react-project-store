import React from "react";
import { useNavbar } from "../../context/NavbarContext";

const FavoritePage = () => {
  const { favoriteList, setFavoriteList } = useNavbar();
  console.log("file: FavoritePage.js ~ line 6 ~ favoriteList", favoriteList);
  return <div className="pt-[110px]"></div>;
};

export default FavoritePage;
