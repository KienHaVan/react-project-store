import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useNavbar } from "../../context/NavbarContext";
import useClickOutSide from "../../hooks/useClickOutSide";

const Register = () => {
  const [phoneData, setPhoneData] = useState("");
  const { showRegister, setShowResigter } = useNavbar();
  // useEffect(() => {
  //   if (showRegister) {
  //     return () => (document.querySelector("body").style.overflowY = "hidden");
  //   }
  //   // else {
  //   //   document.querySelector("body").style.overflowY = "visible";
  //   // }
  // }, [showRegister]);
  if (typeof document === "undefined") return <div className="modal "></div>;
  return createPortal(
    <div className="modal fixed inset-0 flex items-center justify-center z-50 disable-scrolling">
      <div
        className="overlay absolute inset-0 bg-black bg-opacity-20"
        onClick={() => setShowResigter(false)}
      ></div>
      <div className="w-[878px] z-10 flex items-center justify-between bg-white rounded-xl">
        <div className="w-1/2 p-6 flex flex-col">
          <div className="py-4 px-6  flex items-center justify-between">
            <h2 className="text-2xl">Đăng ký / đăng nhập</h2>
            <button onClick={() => setShowResigter(false)}>
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
              value={phoneData}
              onChange={(e) => setPhoneData(e.target.value)}
            />
            <button
              className={`w-full rounded-xl bg-gray-200 p-4 font-bold text-lg text-gray-400 mb-10 ${
                phoneData ? "bg-primary text-white" : ""
              }`}
            >
              Tiếp theo
            </button>
            <span className="text-gray-400 mb-3">Hoặc</span>
            <div className="flex items-center gap-5">
              <span className="cursor-pointer scale-75">
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
              </span>
              <span className="cursor-pointer scale-75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width={48}
                  height={48}
                  viewBox="0 0 48 48"
                  style={{ fill: "#000000" }}
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
              </span>
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
