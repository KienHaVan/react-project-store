import { createContext, useContext, useState } from "react";
import useClickOutSide from "../hooks/useClickOutSide";

const NavbarContext = createContext();
function NavbarProvider(props) {
  const [item, setItem] = useState({ id: 1, name: "Clothes" });
  const [searchInput, setSearchInput] = useState("");
  const [cartList, setCartList] = useState([]);
  const [cartCount, setCartCount] = useState();
  const [favoriteList, setFavoriteList] = useState([]);
  const [showRegister, setShowResigter] = useState(false);
  const { show, setShow, nodeRef } = useClickOutSide();
  const [showRegister, setShowResigter] = useState(false);
  const value = {
    item,
    setItem,
    searchInput,
    setSearchInput,
    cartList,
    setCartList,
    cartCount,
    setCartCount,
    favoriteList,
    setFavoriteList,
    show,
    setShow,
    nodeRef,
    showRegister,
    setShowResigter,
  };
  return (
    <NavbarContext.Provider value={value} {...props}></NavbarContext.Provider>
  );
}
function useNavbar() {
  const context = useContext(NavbarContext);
  if (typeof context === "undefined")
    throw new Error("useNavbar must be used within a NavbarProvider");
  return context;
}

export { NavbarProvider, useNavbar };