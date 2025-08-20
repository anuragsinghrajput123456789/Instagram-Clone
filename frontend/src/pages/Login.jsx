import React from "react";
import logo from "../images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const signUP = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const submitForm = () => {};

  return (
    <>
      <div className="con flex items-center h-screen justify-center flex-col">
        <form
          onSubmit={submitForm}
          className="w-full px-[10px] flex flex-col items-center justify-center"
          action=""
        >
          <img className="w-[150px] object-cover " src={logo} alt="" />

          <div className="inputBox mt-4">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="email"
            />
          </div>
          <div className="inputBox">
            <input
              type="password"
              onChange={(e) => {
                setPwd(e.target.value);
              }}
              value={pwd}
              placeholder="password"
            />
          </div>
          <p className="text-[14px] text-gray-50 self-between mt-2.5">
            Already have an account{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>

          <button className="btnNormal w-1/4 text-black font-semibold text-center mt-4 bg-violet-400 rounded-3xl hover:bg-violet-600 px-4 py-5">
            <Link>Login</Link>
          </button>
        </form>
      </div>
    </>
  );
};

export default signUP;
