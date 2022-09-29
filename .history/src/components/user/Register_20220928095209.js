import React from "react";
import { createPortal } from "react-dom";

const Register = () => {
  if (typeof document === "undefined") return <div className="modal "></div>;
  return createPortal(
    <div className="modal fixed inset-0 flex items-center justify-center z-50">
      <div className="overlay absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="w-[878px] z-10 flex items-center justify-between bg-white rounded-xl">
        <div className="w-1/2"></div>
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
