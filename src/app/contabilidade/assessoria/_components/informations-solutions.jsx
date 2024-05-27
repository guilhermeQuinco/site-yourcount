"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import cardSlide from "../../../../assets/Carousel1.svg";
import cardSlide2 from "../../../../assets/Carousel1.svg";
import cardSlide3 from "../../../../assets/Carousel1.svg";
import cardSlide4 from "../../../../assets/Carousel1.svg";
import cardSlide5 from "../../../../assets/Carousel1.svg";
import cardSlide6 from "../../../../assets/Carousel1.svg";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import Slide from "./slide-solutions";

const imageItemsDesktop = [
  <Image src={cardSlide} className="w-full h-full" alt="card1" />,
  <Image src={cardSlide2} className="w-full h-full" alt="card2" />,
  <Image src={cardSlide3} className="w-full h-full" alt="card3" />,
  <Image src={cardSlide4} className="w-full h-full" alt="card4" />,
  <Image src={cardSlide5} className="w-full h-full" alt="card5" />,
  <Image src={cardSlide6} className="w-full h-full" alt="card6" />,
];

const Informations = () => {
  return (
    <section className="w-full  mt-[100px] overflow-hidden " id="informations">
      <div className="max-container padding-container flex flex-col items-center">
        <h1 className="text-3xl text-white text-center max-w-[700px] mb-[20px]">
          A Your Count estrutura a contabilidade da sua empresa com soluções
          personalizadas
        </h1>
        <div className="h-[4px] w-[150px] rounded-full  bg-secundary-blue mb-6"></div>

        <span className="text-lg text-gray-400 text-center max-w-[500px] mb-[20px]">
          Descubra todos os serviços que oferecemos para impulsionar os
          resultados do seu negócio
        </span>

        <Slide items={imageItemsDesktop} />

        <Button type="button" className="btn_blue">
          Agendar Reunião
        </Button>
      </div>
      <div className="w-full max-w-[300px] m-auto mt-10 ">
        <div className="lg:hidden ">
          <div className="mt-10">
            <Link href={"#form"}>
              <Button
                type="button"
                title="AGENDAR UMA REUNIÃO"
                variant="btn_green"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Informations;
