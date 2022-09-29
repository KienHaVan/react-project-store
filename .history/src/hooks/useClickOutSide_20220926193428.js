import { useEffect, useRef, useState } from "react";

export default function useClickOutSide(dom = "button") {
  const [show, setShow] = useState(false);
  const nodeRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        nodeRef.current &&
        !nodeRef.current.contains(e.target) &&
        !e.target.matches(dom)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", (e) => handleClickOutside(e));
    return document.removeEventListener("click", handleClickOutside);
  }, []);
  return {
    show,
    setShow,
    nodeRef,
  };
}
