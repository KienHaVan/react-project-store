import React from "react";
import { createPortal } from "react-dom";

const Register = () => {
  if (typeof document === "undefined") return <div className="modal "></div>;
  return createPortal(
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="overlay absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="w-[878px] z-10 flex items-center justify-between bg-white rounded-xl">
        <div className="w-1/2 p-6 flex flex-col">
          <div className="py-4 px-6  flex items-center justify-between">
            <h2 className="text-2xl">Đăng ký / đăng nhập</h2>
            <span>
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
            </span>
          </div>
          <div className="px-6 mt-3 flex flex-col">
            <span className="font-semibold text-cyan-400 text-lg">
              ThinkPro xin chào!
            </span>
            <span className="text-xl text-blue-600 mb-5">
              Hãy bắt đầu với số điện thoại của bạn nhé
            </span>
            <input
              type="text"
              className="bg-transparent outline-none text-xl placeholder:font-bold placeholder-gray-200"
              placeholder="Số điện thoại"
            />
            <button className="w-full rounded-xl bg-gray-400">
              Tiếp theo >
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src="https://thinkpro.vn/_nuxt/img/signin-pattern.d7c5fe2.png"
            alt=""
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
      </div>
    </div>,
    document.querySelector("body")
  );
};

export default Register;
