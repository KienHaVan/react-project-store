import React from "react";
import { useState } from "react";
import UserPage from "../user/UserPage";

const User = () => {
  const [showUserPage, setShowUserPage] = useState(false);
  const const [coords, setCoords] = useState();
  const handleShowUserPage = (e) => {
    console.log(e.target.getBoundingClientRect());
  };
  return (
    <div
      className="user p-3 rounded-full bg-gray-200 cursor-pointer relative"
      onClick={handleShowUserPage}
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
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      {showUserPage && (
        <div className="absolute">
          <UserPage></UserPage>
        </div>
      )}
    </div>
  );
};

export default User;