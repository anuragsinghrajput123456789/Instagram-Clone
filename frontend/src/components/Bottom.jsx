import React from "react";
import { MdHome } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"; // ✅ import this

const Bottom = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bottomnav flex items-center justify-between px-[10px] fixed bottom-0 left-0 right-0 w-screen h-[50px] bg-black">
        <i className="text-[23px] cursor-pointer" onClick={() => navigate("/")}>
          <MdHome />
        </i>
        <i className="text-[23px] cursor-pointer">
          <IoSearch />
        </i>
        <i
          className="text-[23px] cursor-pointer"
          onClick={() => navigate("/create")}
        >
          <FaPlus />
        </i>
        <i className="text-[23px] cursor-pointer">
          <FaHeart />
        </i>
        <i
          className="text-[23px] cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <FaRegUserCircle />
        </i>
      </div>
    </>
  );
};

export default Bottom;
