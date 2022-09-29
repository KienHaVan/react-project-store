import React from "react";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import ProductList from "../product/ProductList";

const HomePage = () => {
  return (
    {<>
      <Navbar></Navbar>
      <Banner></Banner>
      <ProductList></ProductList>
    </>}
  );
};

export default HomePage;
