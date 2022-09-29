import { createContext, useContext, useState } from "react";

const AppContext = createContext();
function NavbarProvider(props) {
  const [item, setItem] = useState({ id: 1, name: "Clothes" });
  const value = { item, setItem };
  return <AppContext.Provider value={value} {...props}></AppContext.Provider>;
}
function useNavbar() {
  const context = useContext(AppContext);
  if (typeof context === "undefined")
    throw new Error("useNavbar must be used within a NavbarProvider");
  return context;
}

export { NavbarProvider, useNavbar };
