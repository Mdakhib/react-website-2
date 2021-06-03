import React from "react";
import HeroSection from "../../HeroSection";
import Pricing from "../../Pricing";
import { homeObjTwo , homeObjThree } from "./Data";

function Services() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjThree} />
    </>
  );
}

export default Services;
