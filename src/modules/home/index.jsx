import React from "react";
import { Reveal } from "@/components/motion-system";
import Hero from "./Hero";
import Features from "./Features";
import Plans from "./Plans";
import Future from "./Future";



const index = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* <Reveal delay={0.04} direction="bottom">
        <HeroSection />
      </Reveal> */}

      <Hero/>
      <Features/>
      {/* <Plans/> */}
      {/* <Future/> */}

    </div>
  );
};

export default index;
