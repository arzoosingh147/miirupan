import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Community from "./Community";
import PostProject from "./Postproject";

const Home = () => {
  return (
    <div className="bg-white text-black">
      <Hero />
      <Features />
      <Community />
      <PostProject />
    </div>
  );
};

export default Home;

  