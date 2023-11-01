import React, { useEffect, useState } from "react";

function Nav (){
  const [showmenu, setShowmenu] = useState(false);

  const headerScroll = () => {
    if (window.scrollY >= 50) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", headerScroll);
    return () => {
      window.addEventListener("scroll", headerScroll);
    };
  }, []);

  return(
  <div>
   <div
      className={` ${
        header
          ? "blueS fixed w-[100%] top-0  "
          : " red relative  top-0 z-[9999999]"
      }`}
    >
  </div>
)
}
