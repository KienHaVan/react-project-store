import { createContext } from "react";

const NavbarContext = createContext();
function NavbarProvider(props) {
  return (
    <NavbarContext.Provider value={value} {...props}></NavbarContext.Provider>
  );
}
