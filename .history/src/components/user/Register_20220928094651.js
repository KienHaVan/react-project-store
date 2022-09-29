import React from "react";
import { createPortal } from "react-dom";

const Register = () => {
  if (typeof document === "undefined") return <div className="modal "></div>;
  return createPortal(
    <div className="flex items-center justify-center z-50">
      <div className="overlay bg-black bg-opacity-20"></div>
      <div className="w-[878px] h-[300px] flex items-center justify-between bg-white rounded-xl"></div>
    </div>,
    document.querySelector("body")
  );
};

export default Register;
