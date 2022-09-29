import React from "react";
import { ReactDOM } from "react";

const User = () => {
  return ReactDOM.createPortal(<div></div>, document.querySelector("body"));
};

export default User;
