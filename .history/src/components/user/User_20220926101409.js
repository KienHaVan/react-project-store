import React from "react";
import { ReactDOM } from "react";

const User = () => {
  if (typeof document === "undefined") return;
  return ReactDOM.createPortal(
    <div className="User-main"></div>,
    document.querySelector("body")
  );
};

export default User;
