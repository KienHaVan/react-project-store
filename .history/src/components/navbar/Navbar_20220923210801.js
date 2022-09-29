import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavbar } from "../../context/NavbarContext";

const Navbar = () => {
  const [, setItem] = useNavbar({});
  const [active, setActive] = useState(1);
  const { data } = useSWR(
    "https://api.escuelajs.co/api/v1/categories",
    fetcher
  );
  if (!data) return null;

  const handleClick = (item) => {
    setItem(item);
    setActive(item.active);
  };
  return (
    <>
      <div className="navbar flex items-center justify-center gap-x-5 mb-10">
        {data.length > 0 &&
          data.map((item, index) => (
            <button
              key={item.id}
              className={`py-2 px-4 flex items-center gap-2 rounded-full {({
                isActive
              }) => (isActive ? "bg-blue-100" : "")}`}
              onClick={() => handleClick(item)}
            >
              <img
                src={item.image}
                alt=""
                className="w-10 h-10 object-cover rounded-full"
              />
              <span className="text-lg text-black font-medium">
                {item.name}
              </span>
            </button>
          ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Navbar;
