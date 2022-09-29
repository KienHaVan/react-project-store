import { createContext } from "react";

const NavbarContext = createContext();
function NavbarProvider(props) {
  return <NavbarContext.Provider {...props}></NavbarContext.Provider>;
}
function useNavbar() {}
