import React from "react";
import Navbar from "../components/Navbar";
import Avatar from "react-avatar";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className="flex px-[10px] items-center gap-[15px]">
        <Avatar
          name="test test"
          round="50%"
          size="50"
          className="cursor-pointer"
        />
        <div>
          <p className="text-[20px]">Username</p>
          <p className="text-[13px] text-[gray] -mt-1">Join in 13 jan 2022</p>
          <p className="text-[13px] text-[gray] -mt-1">
            <b>3</b> followers | <b>4</b> posts
          </p>
        </div>
      </div>
      <div className="posts mt-6">
        <div className="post w-[100%] h-[100px] bg-red-400">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3i9llDH8dczNQ1nIvh1eJDmoyW8hlAR5MQ&s"
            alt=""
          />
        </div>
        <div className="post w-[100%] h-[100px] bg-red-400">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3i9llDH8dczNQ1nIvh1eJDmoyW8hlAR5MQ&s"
            alt=""
          />
        </div>

        <div className="post w-[100%] h-[100px] bg-red-400">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3i9llDH8dczNQ1nIvh1eJDmoyW8hlAR5MQ&s"
            alt=""
          />
        </div>
        <div className="post w-[100%] h-[100px] bg-red-400">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3i9llDH8dczNQ1nIvh1eJDmoyW8hlAR5MQ&s"
            alt=""
          />
        </div>

        <div className="post w-[100%] h-[100px] bg-red-400">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3i9llDH8dczNQ1nIvh1eJDmoyW8hlAR5MQ&s"
            alt=""
          />
        </div>

        <div className="post w-[100%] h-[100px] bg-red-400">
          <img
            className="w-full h-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3i9llDH8dczNQ1nIvh1eJDmoyW8hlAR5MQ&s"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
