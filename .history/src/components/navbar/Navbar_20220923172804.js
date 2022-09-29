import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const linkList = [
  {
    id: 1,
    title: "Electronics",
    to: "/elec",
  },
  {
    id: 2,
    title: "Jewelery",
    to: "/jewelery",
  },
  {
    id: 3,
    title: "Men's clothing",
    to: "menclothing",
  },
  {
    id: 4,
    title: "Women's clothing",
    to: "womenclothing",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-center gap-x-5 mb-10">
        {linkList.length > 0 &&
          linkList.map((link) => (
            <NavLink
              id={link.id}
              to={link.to}
              className={`py-2 px-4 text-lg text-black font-medium rounded-full bg-blue-100 ${({
                isActive,
              }) => (isActive ? "text-red-400" : "")}`}
            >
              {link.title}
            </NavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
