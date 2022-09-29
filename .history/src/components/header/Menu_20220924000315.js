import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <div
        className="menu p-3 bg-gray-200 rounded-full"
        onClick={handleOpenMenu}
      >
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
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <h2 className="font-semibold">Danh mục</h2>
    </div>
  );
};

export default Menu;
