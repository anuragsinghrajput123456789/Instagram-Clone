import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopUsers from "../components/TopUsers";
import Post from "../components/Post";

const Home = () => {
  return (
    <>
      <Navbar />
      <TopUsers />
      <Post />
      <Footer />
    </>
  );
};

export default Home;
