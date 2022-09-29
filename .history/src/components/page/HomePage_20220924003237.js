import React from "react";
import { useNavbar } from "../../context/NavbarContext";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import ProductList from "../product/ProductList";

const HomePage = () => {
  const { searchInput } = useNavbar();
  return (
    <>
      {searchInput && (
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
