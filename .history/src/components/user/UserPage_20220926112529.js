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
      <div className="rounded-xl p-5 border border-gray-400 relative flex items-center gap-3 mb-5">
        <img
          src="https://thinkpro.vn/_nuxt/img/person-laptop.0220751.png"
          alt=""
          className="-mb-5"
        />
        <div className="flex flex-col gap-3 justify-start">
          <span className="text-sky-400 font-medium text-sm">
            ThinkPro xin chào!
          </span>
          <span className="text-sm">
            Hãy đăng nhập để theo dõi đơn hàng và bảo hành dễ dàng nhé
          </span>
          <button className="w-full p-2 text-white bg-primary text-md font-semibold rounded-xl">
            Đăng nhập
          </button>
          <span className=" text-sm">
            Chưa có tài khoản?{" "}
            <span className="text-blue-500 underline">Đăng ký</span>
          </span>
        </div>
      </div>
      <UserPageItem
        icon={
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        }
        label="Thông tin tài khoản"
      ></UserPageItem>
    </div>,
    document.querySelector("body")
  );
};

function UserPageItem({ icon, label }) {
  return (
    <div className="flex items-center">
      <div>{icon}</div>
      <span>{label}</span>
      <div className="ml-auto">
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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default UserPage;
