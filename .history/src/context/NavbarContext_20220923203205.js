import { createContext, useContext, useState } from "react";

const NavbarContext = createContext();
function NavbarProvider(props) {
  const [index, setIndex] = useState(1);
  const value = [index, setIndex];
  return (
    <NavbarContext.Provider value={value} {...props}></NavbarContext.Provider>
  );
}
function useNavbar() {
  const context = useContext(NavbarContext);
  if (typeof context === "undefined")
    throw new Error("useNavbar must be used within a NavbarProvider");
}
