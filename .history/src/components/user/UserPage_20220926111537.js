import React from "react";
import ReactDOM, { createPortal } from "react-dom";

const UserPage = () => {
  if (typeof document === "undefined") return;
  return ReactDOM.createPortal(
    <div className="User-main bg-white p-3 overflow-y-auto rounded-xl w-[425px] shadow-xl">
      <div className="flex items-center justify-between mb-5">
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
      <div className="rounded-xl p-3 border border-gray-400 relative flex items-center gap-3">
        <img
          src="https://thinkpro.vn/_nuxt/img/person-laptop.0220751.png"
          alt=""
          className="-mb-3"
        />
        <div className="flex flex-col gap-3 justify-start">
          <span className="text-sky-400 font-medium">ThinkPro xin chào!</span>
          <span>
            Hãy đăng nhập để theo dõi đơn hàng và bảo hành dễ dàng nhé
          </span>
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default UserPage;
