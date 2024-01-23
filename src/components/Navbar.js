import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex text-white justify-around items-center h-[10vh]">
        <div className="w-[10vw] h-full">
          <img src="./Group 7.svg" className="h-[80%] p-1" />
        </div>
        <div className="w-[60vw] h-full"></div>
        <div className="w-[20vw] h-full flex justify-end items-center">
          {" "}
          <img src="ion.svg" className="h-[80%] p-1" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
