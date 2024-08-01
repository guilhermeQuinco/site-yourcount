"use client";

import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "../../assets/arrowdownanimation.json";

const Hero = () => {
  return (
    <section
      className="w-full overflow-hidden relative bg-gradient-to-b from-[#03030c]  to-[#171326] pt-20 "
      id="hero"
    >
      <div className="max-container padding-container mt-[80px]  flex flex-col gap-10 flexCenter z-10">
        <div className="flex items-center  w-fit p-5 max-h-8 lg:px-5 lg:h-9 rounded-full border-2 border-white">
          <span className="text-whitetext-xs lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
            O ecossistesma perfeito para o seu negócio
          </span>
        </div>
        <h1 className="max-w-[780px] text-center text-white font-normal text-5xl">
          Somos o melhor amigo da sua empresa
        </h1>

        <p className="text-gray-400">
          Soluções práticas para maximizar seus resultados
        </p>

        <Button
          className="bg-[#f22e9a] text-white w-[20%] py-6 text-xl font-semibold "
          variant="secondary"
        >
          Começar aqui
        </Button>

        <Lottie animationData={animationData} className="w-16 h-16 mt-10" />
      </div>
    </section>
  );
};

export default Hero;
