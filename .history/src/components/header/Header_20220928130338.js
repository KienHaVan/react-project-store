import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import Like from "./Like";
import Logo from "./Logo";
import Menu from "./Menu";
import Notification from "./Notification";
import SearchMenu from "./SearchMenu";
import User from "./User";

const Header = () => {
  return (
    <>
      <div className="header fixed top-0 left-0 right-0 bg-white z-10 shadow-md">
        <div className="page-container flex items-center justify-start gap-x-5">
          <Logo></Logo>
          <Menu></Menu>
          <button className="font-semibold cursor-pointer text-primary hover:text-secondary">
            Khuyến mại
          </button>
          <SearchMenu></SearchMenu>
          <Cart></Cart>
          <Like></Like>
          <Notification></Notification>
          <User></User>
        </div>
      </div>
    </>
  );
};

export default Header;
