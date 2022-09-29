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
              className="bg-transparent outline-none text-xl placeholder:font-bold placeholder-gray-200 mb-5"
              placeholder="Số điện thoại"
            />
            <button className="w-full rounded-xl bg-gray-200 p-4 font-bold text-lg text-gray-400 mb-10">
              Tiếp theo
            </button>
            <span className="text-gray-400">Hoặc</span>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={48}
                height={48}
                viewBox="0 0 48 48"
                style={{ fill: "#000000" }}
              >
                <linearGradient
                  id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                  x1="9.993"
                  x2="40.615"
                  y1="9.993"
                  y2="40.615"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset={0} stopColor="#2aa4f4" />
                  <stop offset={1} stopColor="#007ad9" />
                </linearGradient>
                <path
                  fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                  d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                />
                <path
                  fill="#fff"
                  d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                />
              </svg>
            </div>
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
