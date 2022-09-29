import React from "react";
import { useNavbar } from "../../context/NavbarContext";

const FavoritePage = () => {
  const { favoriteList, setFavoriteList } = useNavbar();
  return <div className="pt-[110px]"></div>;
};

export default FavoritePage;
