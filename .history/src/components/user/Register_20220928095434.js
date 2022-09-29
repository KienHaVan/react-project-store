import React from "react";
import { createPortal } from "react-dom";

const Register = () => {
  if (typeof document === "undefined") return <div className="modal "></div>;
  return createPortal(
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="overlay absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="w-[878px] z-10 flex items-center justify-between bg-white rounded-xl">
        <div className="w-1/2 p-6 flex flex-col">
          <div className="flex items-center justify-between">
            <h2>Đăng ký / đăng nhập</h2>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
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
