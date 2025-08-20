import React from "react";
import logo from "../images/logo.png";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <div className="nav p-[10px] py-[20px] flex items-center justify-between">
        <img src={logo} alt="" className="w-[100px] object-cover" />
        <div className="flex items-center gap-[15px]">
          <i className="text-[20px] cursor-pointer">
            <FaRegHeart />
          </i>
          <i className="text-[20px] cursor-pointer">
            <AiOutlineMessage />
          </i>
        </div>
      </div>
    </>
  );
};

export default Navbar;
