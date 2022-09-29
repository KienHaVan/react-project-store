import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar flex items-center justify-center gap-x-5 mb-10">
      <span className="py-2 px-4 bg-blue-100 text-lg text-black font-medium rounded-full">
        <NavLink to={"/electronic"}>Electronics</NavLink>
      </span>
      <span className="py-2 px-4 text-lg text-black font-medium rounded-full">
        Jewelery
      </span>
      <span className="py-2 px-4 text-lg text-black font-medium rounded-full">
        Men's clothing
      </span>
      <span className="py-2 px-4 text-lg text-black font-medium rounded-full">
        Women's clothing
      </span>
    </div>
  );
};

export default Navbar;
