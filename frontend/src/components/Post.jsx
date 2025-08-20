import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { PiBookmarkSimpleBold } from "react-icons/pi";

const Post = () => {
  return (
    <>
      <div className="posts mt-5">
        <div className="post">
          <div className="flex px-[8px] items-center justify-between">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[45px] h-[45px] rounded-[50%] object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6k-XfeS9JpRSWGruWiP6vmsNnMs9nFrRb7Q&s"
                alt=""
              />
              <div>
                <p>Username</p>
                <p className="text-[13px] text-[gray] -mt-1">
                  Join in 13 jan 2022
                </p>
              </div>
            </div>

            <i className="text-[20px] cursor-pointer">
              <BsThreeDotsVertical />
            </i>
          </div>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6k-XfeS9JpRSWGruWiP6vmsNnMs9nFrRb7Q&s"
            alt=""
            className="mt-4 w-full h-auto object-cover"
          />
          <div className="flex mt-3 px-[10px] items-between">
            <div className="flex items-center gap-[15px]">
              <i className="text-[20px] cursor-pointer">
                <CiHeart />
              </i>
              <i className="text-[20px] cursor-pointer">
                <FaRegComment />
              </i>
              <i className="text-[20px] cursor-pointer">
                <FiSend />
              </i>
            </div>
          </div>
            <i className="text-[20px] cursor-pointer">
              <PiBookmarkSimpleBold />
            </i>
        </div>
      </div>
    </>
  );
};

export default Post;
