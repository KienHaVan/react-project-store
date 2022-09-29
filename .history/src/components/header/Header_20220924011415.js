import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "./Cart";
import Like from "./Like";
import Logo from "./Logo";
import Menu from "./Menu";
import SearchMenu from "./SearchMenu";

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
          <div className="notification p-3 rounded-full bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </div>
          <div className="user p-3 rounded-full bg-gray-200 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
