import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";

const Navbar = () => {
  const { data } = useSWR(
    "https://api.escuelajs.co/api/v1/categories",
    fetcher
  );
  if (!data) return null;
  return (
    <>
      <div className="navbar flex items-center justify-center gap-x-5 mb-10">
        {data.length > 0 &&
          data.map((item) => (
            <NavLink
              id={item.id}
              to={item.name}
              className={`py-2 px-4 flex items-center gap-2 rounded-full ${({
                isActive,
              }) => (isActive ? "text-red-400" : "")}`}
            >
              <img
                src={item.image}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <span className="text-lg text-black font-medium">
                {item.name}
              </span>
            </NavLink>
          ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
