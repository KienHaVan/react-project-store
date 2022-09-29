import React from "react";
import { NavLink } from "react-router-dom";

const linkList = [
  {
    id: 1,
    title: "Electronics",
  },
];

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-center gap-x-5 mb-10">
      <NavLink
        to={"/electronic"}
        className={`py-2 px-4 text-lg text-black font-medium rounded-full ${({
          isActive,
        }) => (isActive ? "bg-blue-100" : "")}`}
      >
        Electronics
      </NavLink>
      <NavLink
        to={"/electronic"}
        className={`py-2 px-4 text-lg text-black font-medium rounded-full ${({
          isActive,
        }) => (isActive ? "bg-blue-100" : "")}`}
      >
        Jewelery
      </NavLink>
      <NavLink
        to={"/electronic"}
        className={`py-2 px-4 text-lg text-black font-medium rounded-full ${({
          isActive,
        }) => (isActive ? "bg-blue-100" : "")}`}
      >
        Men's clothing
      </NavLink>
      <NavLink
        to={"/electronic"}
        className={`py-2 px-4 text-lg text-black font-medium rounded-full ${({
          isActive,
        }) => (isActive ? "bg-blue-100" : "")}`}
      >
        Women's clothing
      </NavLink>
    </div>
  );
};

export default Navbar;
