import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();
function NavbarProvider(props) {
  const [item, setItem] = useState({ id: 1, name: "Clothes" });
  const [searchInput, setSearchInput] = useState("");
  const value = { item, setItem, searchInput, setSearchInput };
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
