"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "../../../assets/arrowdownanimation.json";
const TransitionSection = () => {
  return (
    <section className="w-full overflow-hidden mt-[100px]">
      <div className="max-container padding-container flexCenter flex-col gap-14">
        <div className="flex items-center w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded-full border-2 border-white">
          <span className="text-whitetext-xs lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
            Como podemos ajudar
          </span>
        </div>
        <div className="flex flex-col gap-5 text-center flexCenter max-w-[900px]">
          <h1 className="text-white text-5xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet
          </h1>
          <h2 className="text-xl text-gray-500 max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit
            dolor sit amet consectetur adipisicing
          </h2>
          <Lottie animationData={animationData} className="w-16 h-16" />
        </div>
      </div>
    </section>
  );
};

export default TransitionSection;
