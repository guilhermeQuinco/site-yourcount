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
import Marketing from "./svg/Marketing";
import Accounting from "./svg/Accounting";
import Company from "./svg/Company";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <header
        className={`w-full  lg:fixed absolute transition-all top-0 py-4 z-10 shadow-xl bg-black
      lg:top-0 backdrop-filter backdrop-blur-sm`}
      >
        <NavigationMenu className="w-full lg:flex hidden flex-row max-container padding-container justify-between ">
          <Link href="/">
            <Image src={Logo} width={150} height={90} />
          </Link>

          <NavigationMenuList className=" flex justify-between gap-10">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Empresa</NavigationMenuTrigger>
              <NavigationMenuContent className="flex">
                <ul className="flex flex-col p-6 md:w-[400px] lg:w-[400px]">
                  <h1 className="px-3 text-white font-bold text-xl flex items-center gap-3">
                    <div className="p-2 bg-[#f22e9a] rounded-lg">
                      <Company className="w-5" />
                    </div>{" "}
                    Empresa
                  </h1>

                  <li className="mt-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-full p-3 select-none flex-col rounded-md hover:bg-gray-600"
                        href={""}
                      >
                        <div className="mb-2  text-lg font-medium text-white">
                          <span>Sobre Nós</span>
                        </div>
                        <p className="text-sm leading-tight text-gray-300">
                          Somos uma empresa que oferece soluções em
                          contabilidade e marketing para impulsionar o sucesso
                          dos nossos clientes.
                        </p>
                      </a>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <a
                        className="flex w-full p-3 select-none flex-col rounded-md hover:bg-gray-600"
                        href={""}
                      >
                        <div className="mb-2  text-lg font-medium text-white">
                          <span>Carreiras</span>
                        </div>
                        <p className="text-sm leading-tight text-gray-300">
                          Somos uma empresa que oferece soluções em
                          contabilidade e marketing para impulsionar o sucesso
                          dos nossos clientes.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Soluções</NavigationMenuTrigger>
              <NavigationMenuContent className="flex">
                <ul className="flex flex-col p-6 md:w-[400px] lg:w-[400px]">
                  <h1 className="px-3 text-white font-bold text-xl flex items-center gap-3">
                    <div className="p-2 bg-[#f22e9a] rounded-lg">
                      <Marketing className="w-5" />
                    </div>
                    Marketing
                  </h1>
                  {MARKETING_CONTENT.map((item) => (
                    <li className="mt-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex w-full p-3 select-none flex-col rounded-md hover:bg-gray-600"
                          href={item.href}
                        >
                          <div className="mb-2  text-lg font-medium text-white">
                            {item.title}
                          </div>
                          <p className="text-sm leading-tight text-gray-300">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>

          <Button className="bg-white text-black font-bold text-md py-5">
            Fale conosco
          </Button>
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
            Fale conosco
          </Button>
        </nav>
      </header>

      <div
        className={` ${
          toggle
            ? " lg:hidden absolute z-30 bg-black  top-20 left-0 w-full py-5 max-container padding-container flex flex-col gap-10 ease-in duration-100"
            : "lg:hidden absolute z-30 bg-black  -left-[100%] top-24 w-full py-5 max-container padding-container flex flex-col gap-10 ease-in duration-100"
        }  `}
      >
        <ul className="w-full">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Empresa</AccordionTrigger>
              <AccordionContent>
                <ul className="w-full flex flex-col">
                  <h1 className="px-3 text-white font-bold text-xl flex items-center gap-3">
                    <div className="p-2 bg-[#f22e9a] rounded-lg">
                      <Company className="w-5" />
                    </div>{" "}
                    Empresa
                  </h1>

                  <li className="mt-3">
                    <a
                      className="flex w-full p-3 select-none flex-col rounded-md hover:bg-gray-600"
                      href={""}
                    >
                      <div className="mb-2  text-lg font-medium text-white">
                        <span>Sobre Nós</span>
                      </div>
                      <p className="text-sm leading-tight text-gray-300">
                        Somos uma empresa que oferece soluções em contabilidade
                        e marketing para impulsionar o sucesso dos nossos
                        clientes.
                      </p>
                    </a>

                    <a
                      className="flex w-full p-3 select-none flex-col rounded-md hover:bg-gray-600"
                      href={""}
                    >
                      <div className="mb-2  text-lg font-medium text-white">
                        <span>Carreiras</span>
                      </div>
                      <p className="text-sm leading-tight text-gray-300">
                        Somos uma empresa que oferece soluções em contabilidade
                        e marketing para impulsionar o sucesso dos nossos
                        clientes.
                      </p>
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Soluções</AccordionTrigger>
              <AccordionContent>
                <ul className="flex flex-col  w-full">
                  <h1 className="px-3 text-white font-bold text-xl flex items-center gap-3">
                    <div className="p-2 bg-[#f22e9a] rounded-lg">
                      <Marketing className="w-5" />
                    </div>
                    Marketing
                  </h1>
                  {MARKETING_CONTENT.map((item) => (
                    <li className="mt-3">
                      <a
                        className="flex w-full p-3 select-none flex-col rounded-md hover:bg-gray-600"
                        href={item.href}
                      >
                        <div className="mb-2  text-lg font-medium text-white">
                          {item.title}
                        </div>
                        <p className="text-sm leading-tight text-gray-300">
                          {item.description}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col md:w-[400px] w-full mt-10">
                  <h1 className="px-3 text-white font-bold text-xl flex gap-3 items-center">
                    <div className="p-2 rounded-lg bg-[#1cbae9]">
                      <Accounting className="w-5" />
                    </div>
                    Contabilidade
                  </h1>
                  {COUNT_CONTENT.map((item) => (
                    <li className=" mt-3">
                      <a
                        className="flex  w-full p-3 select-none flex-col  rounded-md hover:bg-gray-600"
                        href={item.href}
                      >
                        <div className="mb-2  text-lg font-medium text-white">
                          {item.title}
                        </div>
                        <p className="text-sm leading-tight text-gray-300">
                          {item.description}
                        </p>
                      </a>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
