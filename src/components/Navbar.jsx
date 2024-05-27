"use client";

import Image from "next/image";
import React from "react";
import Logo from "../assets/logoYC.png";
import Logo2 from "../assets/logoYC2.png";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  COUNT_CONTENT,
  EDUCATION_CONTENT,
  MARKETING_CONTENT,
} from "../constants/index";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header
        className={`w-full lg:fixed absolute transition-all top-0 py-6 z-10 shadow-xl bg-black
      lg:top-0`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            <Link href={"/"}>
              <Image src={Logo} width={200} height={100} alt="logoNavbar" />
            </Link>
            <div className="flex flex-row gap-5 items-center ">
              <Link
                href={"/"}
                className="flexCenter text-lg text-gray-400 font-medium mr-5"
              >
                Sobre nós
              </Link>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg flexCenter text-gray-400">
                  Marketing
                </NavigationMenuTrigger>

                <NavigationMenuContent className=" bg-black p-6">
                  <div className="flex w-screen flexCenter px-36 ">
                    <div className="row-span-3 flex flex-row gap-8">
                      {MARKETING_CONTENT.map((item, index) => (
                        <div
                          className="flex h-full w-full max-w-[400px] bg-gradient-to-b  select-none gap-3 flex-col 
                    justify-end rounded-md from-[#171326] to-[#1d1c40] p-6 no-underline outline-none focus:shadow-md space-y-2"
                          key={index}
                        >
                          <div className=" mt-4 text-2xl font-medium text-white">
                            {item.title}
                          </div>
                          <p className="text-lg leading-tight  text-muted-foreground text-white">
                            {item.description}
                          </p>

                          <Link
                            href={item.href}
                            className=" text-white w-[30%] font-bold rounded-lg py-2 "
                          >
                            Saiba mais
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg text-gray-400">
                  Contabilidade
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" bg-black p-6">
                  <div className="flex w-screen flexCenter px-36 ">
                    <div className="row-span-3 flex flex-row gap-8 ">
                      {COUNT_CONTENT.map((item, index) => (
                        <div
                          className="flex h-full w-full max-w-[400px] bg-gradient-to-b  select-none gap-3
                     flex-col justify-end rounded-md from-[#171326] to-[#1d1c40] p-6 no-underline outline-none focus:shadow-md space-y-2"
                          key={index}
                        >
                          <div className=" mt-4 text-2xl font-medium text-white">
                            {item.title}
                          </div>
                          <p className="text-lg leading-tight  text-muted-foreground text-white">
                            {item.description}
                          </p>

                          <Link
                            href={"/"}
                            className=" text-white w-[30%] font-bold rounded-lg py-2 "
                          >
                            Saiba mais
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg text-gray-400">
                  Educação
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" bg-black p-6">
                  <div className="flex  w-screen flexCenter px-36 ">
                    <div className="row-span-3 flex flex-row gap-8 ">
                      {EDUCATION_CONTENT.map((item, index) => (
                        <div
                          className="flex h-full w-full max-w-[400px] bg-gradient-to-b  select-none gap-3 
                    flex-col justify-end rounded-md from-[#171326] to-[#1d1c40] p-6 no-underline 
                    outline-none focus:shadow-md space-y-2"
                          key={index}
                        >
                          <div className=" mt-4 text-2xl font-medium text-white">
                            {item.title}
                          </div>
                          <p className="text-lg leading-tight  text-muted-foreground text-white">
                            {item.description}
                          </p>

                          <Link
                            href={"/"}
                            className=" text-white w-[30%] font-bold rounded-lg py-2 "
                          >
                            Saiba mais
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <div className="pl-10  border-l-2 border-gray-600">
                <Button
                  className="text-xl py-6 px-10 font-bold "
                  variant="secondary"
                >
                  Fale com a gente
                </Button>
              </div>
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* MOBILE */}

        <nav className=" lg:hidden flex max-container padding-container flexBetween">
          <div className="flex flex-row items-center gap-5">
            <Link href={"/"}>
              <Image src={Logo2} width={50} height={50} alt="logoMobile" />
            </Link>
            <div
              className="px-5 border-l-2 border-zinc-800"
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? (
                <MdOutlineClose size={60} color="#6a6969" />
              ) : (
                <IoMenu size={60} color="#6a6969" />
              )}
            </div>
          </div>

          <Button
            className="text-md w-[50%] py-6 font-bold "
            variant="secondary"
          >
            Fale com a gente
          </Button>
        </nav>
      </header>

      <div
        className={` ${
          toggle
            ? " lg:hidden absolute z-30 bg-black  top-24 left-0 w-full py-5 max-container padding-container flex flex-col gap-10 ease-in duration-100"
            : "lg:hidden absolute z-30 bg-black  -left-[100%] top-24 w-full py-5 max-container padding-container flex flex-col gap-10 ease-in duration-100"
        }  `}
      >
        <ul>
          <li className="w-full py-6 border-b text-white  text-xl font-bold ">
            Sobre Nós
          </li>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Marketing</AccordionTrigger>
              <AccordionContent>
                {MARKETING_CONTENT.map((item, index) => (
                  <div
                    className="flex h-full w-full  bg-gradient-to-b  select-none gap-3 flex-col 
               justify-end rounded-md from-[#171326] to-[#1d1c40] p-6 no-underline outline-none 
               focus:shadow-md space-y-2 mt-5"
                    key={index}
                  >
                    <div className=" mt-4 text-2xl font-medium text-white">
                      {item.title}
                    </div>
                    <p className="text-lg leading-tight  text-muted-foreground text-white">
                      {item.description}
                    </p>

                    <Link
                      href={"/"}
                      className=" text-white w-[30%] font-bold rounded-lg py-2 "
                    >
                      Saiba mais
                    </Link>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Contabilidade</AccordionTrigger>
              <AccordionContent>
                {COUNT_CONTENT.map((item, index) => (
                  <div
                    className="flex h-full w-full  bg-gradient-to-b  select-none gap-3 flex-col 
             justify-end rounded-md from-[#171326] to-[#1d1c40] p-6 no-underline outline-none 
             focus:shadow-md space-y-2 mt-5"
                    key={index}
                  >
                    <div className=" mt-4 text-2xl font-medium text-white">
                      {item.title}
                    </div>
                    <p className="text-lg leading-tight  text-muted-foreground text-white">
                      {item.description}
                    </p>

                    <Link
                      href={"/"}
                      className=" text-white w-[30%] font-bold rounded-lg py-2 "
                    >
                      Saiba mais
                    </Link>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Educação</AccordionTrigger>
              <AccordionContent>
                {EDUCATION_CONTENT.map((item, index) => (
                  <div
                    className="flex h-full w-full  bg-gradient-to-b  select-none gap-3 flex-col 
             justify-end rounded-md from-[#171326] to-[#1d1c40] p-6 no-underline outline-none 
             focus:shadow-md space-y-2 mt-5"
                    key={index}
                  >
                    <div className=" mt-4 text-2xl font-medium text-white">
                      {item.title}
                    </div>
                    <p className="text-lg leading-tight  text-muted-foreground text-white">
                      {item.description}
                    </p>

                    <Link
                      href={"/"}
                      className=" text-white w-[30%] font-bold rounded-lg py-2 "
                    >
                      Saiba mais
                    </Link>
                  </div>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
