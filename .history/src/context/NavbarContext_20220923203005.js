import { createContext, useState } from "react";

const NavbarContext = createContext();
function NavbarProvider(props) {
  const [index, setIndex] = useState(1);
  return <NavbarContext.Provider {...props}></NavbarContext.Provider>;
}
function useNavbar() {}
