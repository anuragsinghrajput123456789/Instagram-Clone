import React from "react";
import Navbar from "../components/Navbar";
import Bottom from "../components/Bottom";

const Create = () => {
  return (
    <>
      <Navbar />
      <div className="create px-[10px] mb-5">
        <h1 className="text-xl">Create</h1>
        <input type="file" id="file" required />
        <div className="inputBox mt-4">
          <textarea placeholder="Caption" name="" id=""></textarea>
        </div>
        <button className="btnNormal w-full  bg-purple-500 font-bold">Create</button>
      </div>
      <Bottom/>
    </>
  );
};

export default Create;
