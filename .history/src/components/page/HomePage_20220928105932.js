import React from "react";
import { useNavbar } from "../../context/NavbarContext";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import ProductList from "../product/ProductList";
import Register from "../user/Register";

const HomePage = () => {
  const { searchInput } = useNavbar();
  return (
    <>
      {!searchInput && (
        <>
          <Navbar></Navbar>
          <Banner></Banner>
          <ProductList></ProductList>
        </>
      )}
    </>
  );
};

export default HomePage;
