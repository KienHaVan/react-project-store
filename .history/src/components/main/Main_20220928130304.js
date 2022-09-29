import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outl>
      <Footer></Footer>
    </>
  );
};

export default Main;
