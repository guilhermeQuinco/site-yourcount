"use client";

import React from "react";
import { Button } from "../../../../components/ui/button";
import card from "../../../../assets/Carousel1.svg";
import card2 from "../../../../assets/Carousel2.svg";
import card3 from "../../../../assets/Carousel3.svg";
import card4 from "../../../../assets/Carousel4.svg";
import card5 from "../../../../assets/Carousel5.svg";
import card6 from "../../../../assets/Carousel6.svg";

import Slide from "./slide";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import SlideMobile from "./slide-mobile";
const imageItemsDesktop = [
  <Image src={card} className="w-full h-full" alt="card" />,
  <Image src={card2} className="w-full h-full" alt="card" />,
  <Image src={card3} className="w-full h-full" alt="card" />,
  <Image src={card4} className="w-full h-full" alt="card" />,
  <Image src={card5} className="w-full h-full" alt="card" />,
  <Image src={card6} className="w-full h-full" alt="card" />,
];

const Informations = () => {
  return (
    <section
      className="w-full mb-[50px] mt-[100px] overflow-hidden "
      id="informations"
    >
      <div className="max-container padding-container flex flex-col items-center">
        <h1 className="text-3xl text-center max-w-[700px] mb-[20px]">
          A Your Count estrutura a contabilidade da sua empresa com soluções
          personalizadas
        </h1>
        <div className="h-[4px] w-[150px] rounded-full  bg-secundary-blue mb-6"></div>

        <span className="text-lg text-primary-blue text-center max-w-[500px] mb-[20px]">
          Descubra todos os serviços que oferecemos para impulsionar os
          resultados do seu negócio
        </span>

        <Slide items={imageItemsDesktop} />

        <div className="hidden lg:flex">
          <Link href={"#form"}>
            <Button
              type="button"
              title="AGENDAR UMA REUNIÃO"
              variant="btn_green"
            />
          </Link>
        </div>
      </div>
      <div className="w-full max-w-[300px] m-auto mt-10 ">
        <div className="lg:hidden ">
          <SlideMobile />
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
