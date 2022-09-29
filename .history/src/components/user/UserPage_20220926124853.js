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
        disabled
        color="text-cyan-400"
      ></UserPageItem>
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
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
        }
        label="Thông tin liên hệ & Sổ địa chỉ"
        disabled
        color="text-blue-400"
        borderBottom
      ></UserPageItem>
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        }
        label="Lịch sử mua hàng"
        color="text-blue-400"
      ></UserPageItem>
      <div className="flex items-center gap-5">
        <miniItem
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
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>
          }
        ></miniItem>
      </div>
    </div>,
    document.querySelector("body")
  );
};

function UserPageItem({
  icon,
  label,
  color = "text-black",
  disabled = false,
  borderBottom = false,
}) {
  return (
    <>
      <div
        className={`p-3 rounded-xl mb-2 flex items-center hover:bg-blue-100 ${
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        } `}
      >
        <div className={`mx-3 ${color}`}>{icon}</div>
        <span className="font-semibold text-md">{label}</span>
        <div className="ml-auto mr-3">
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
      {borderBottom && <div className="w-full h-[1px] bg-gray-200 mb-2"></div>}
    </>
  );
}

function miniItem({ icon, color = "text-black", label, content }) {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div>{icon}</div>
      <span>{label}</span>
      <span>{content}</span>
    </div>
  );
}

export default UserPage;
