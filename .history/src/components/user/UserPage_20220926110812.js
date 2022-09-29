import React from "react";
import ReactDOM, { createPortal } from "react-dom";

const UserPage = () => {
  if (typeof document === "undefined") return;
  return ReactDOM.createPortal(
    <div className="User-main flex flex-col gap-8 bg-blue-100 p-3 overflow-y-auto rounded-xl w-[425px] shadow-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Tài khoản</h2>
        <button>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default UserPage;
