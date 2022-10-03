import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../../config";
import { useNavbar } from "../../context/NavbarContext";
import ReactPaginate from "react-paginate";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Navbar = () => {
  const { item, setItem } = useNavbar();
  const [active, setActive] = useState(1);
  const { data } = useSWR(
    "https://api.escuelajs.co/api/v1/categories",
    fetcher
  );
  if (!data) return null;
  const handleClick = (item) => {
    setItem(item);
    setActive(item.id);
  };
  return (
    <div className="navbar flex items-center justify-center gap-x-5 mb-10 pt-[110px]">
      <Swiper>
        {new Array(15).fill(0).map((item) => {
          return (
            <SwiperSlide>
              <button
                className={`py-2 px-4 flex items-center gap-2 rounded-full transition-all inline-block`}
              >
                <img
                  src="https://api.lorem.space/image?w=640&h=480&r=4450"
                  alt=""
                  className="w-10 h-10 object-cover rounded-full"
                />
                <span className="text-lg text-black font-medium">Clothes</span>
              </button>
            </SwiperSlide>
          );
        })}
        {/* {data.length > 0 &&
        data.map((item, index) => (
          <button
            key={item.id}
            className={`py-2 px-4 flex items-center gap-2 rounded-full transition-all ${
              active === index + 1 ? "bg-blue-100" : ""
            }`}
            onClick={() => handleClick(item)}
          >
            <img
              src={item.image}
              alt=""
              className="w-10 h-10 object-cover rounded-full"
            />
            <span className="text-lg text-black font-medium">{item.name}</span>
          </button>
        ))} */}
      </Swiper>
    </div>
  );
};

export default Navbar;
