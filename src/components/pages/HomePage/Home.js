import React from "react";
import HeroSection from "../../HeroSection";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjFour} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
    </>
  );
}

export default Home;
