"use client";

import React from "react";
import Image from "next/image";

import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Table = () => {
  return (
    <section
      className="w-full flex-col p-10 mb-[100px] bg-gradient-to-b from-white to-[#f1f1f1]"
      id="table"
    >
      <div className="max-container padding-container flex-col flexCenter">
        <h1 className="text-3xl text-center">Por que escolher a Your Count?</h1>
        <div className="bg-[#1cbae9] h-[4px] w-[15%] mt-5 mb-10"></div>
        <div className="shadow-md  lg:flex hidden"></div>

        {/* mobile */}
        <Carousel className=" w-[100%] max-w-xs lg:hidden flex mt-[20px]">
          <CarouselContent></CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <Link href={"#form"}>
          <button className="p-4 bg-[#1cbae9] text-white rounded-md mt-8 hover:scale-105">
            Preciso de vocês
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Table;
