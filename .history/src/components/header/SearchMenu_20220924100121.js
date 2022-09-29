import React, { useEffect, useState } from "react";
import { useNavbar } from "../../context/NavbarContext";
import useDebounce from "../../hooks/useDebounce";

const SearchMenu = () => {
  const [focus, setFocus] = useState(false);
  const { searchInput, setSearchInput } = useNavbar();
  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <label
      htmlFor="search"
      className={`flex-1 py-2 px-4 bg-gray-200 flex items-center gap-4 rounded-full border-2 transition-all ${
        focus ? "border-blue-400" : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        className="bg-transparent outline-none w-full"
        id="search"
        name="search"
        autoComplete="off"
        onChange={(e) => handleSearch(e)}
        placeholder="Tên sản phẩm, nhu cầu, hãng ..."
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      {searchInput && (
        <button className="flex-shrink-0 px-4 py-2 bg-primary text-white font-semibold rounded-full transition-all">
          Tìm Kiếm
        </button>
      )}
    </label>
  );
};

export default SearchMenu;
