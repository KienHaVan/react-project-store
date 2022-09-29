import React from "react";
import { ReactDOM } from "react";

const User = () => {
  if (typeof document === "undefined") return;
  return ReactDOM.createPortal(
    <div className="User-main flex flex-col gap-8 bg-white p-3 overflow-y-auto rounded-xl w-[425px] shadow-xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam voluptate
      eaque reprehenderit nam omnis? Natus quis commodi labore pariatur iusto?
      Numquam possimus laborum nostrum libero ad eum placeat corporis ex?
    </div>,
    document.querySelector("body")
  );
};

export default User;
