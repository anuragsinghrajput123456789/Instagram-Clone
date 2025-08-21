import React from "react";
import Navbar from "../components/Navbar";
import TopUsers from "../components/TopUsers";
import Post from "../components/Post";
import Bottom from "../components/Bottom";

const Home = () => {
  return (
    <>
      <Navbar />
      <TopUsers />
      <Post />
      <Bottom/>

    </>
  );
};

export default Home;
