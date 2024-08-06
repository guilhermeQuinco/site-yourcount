import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ALL_SOLUTIONS, CONTENTS, SOCIAL_MEDIA } from "../constants";
import Logo from "../assets/logoYC.png";
import Link from "next/link";
import Image from "next/image";
import { Card } from "./ui/card";
import { LuMailCheck } from "react-icons/lu";

const Footer = () => {
  return (
    <section className="w-full bg-black overflow-hidden py-10">
      <div className="max-container padding-container flex flex-col gap-8  ">
        <div className="w-full flex lg:flex-row flex-col justify-between items-end gap-5">
          <div className="flex flex-col ">
            <LuMailCheck size={40} color="#7e7e7e" />
            <span className="text-zinc-700 text-xl font-bold">NEWSLETTER</span>
            <h1 className="text-3xl text-white font-bold">
              Receba conteúdos do mundo empresarial
            </h1>
          </div>

          <form className="flex flex-col lg:w-[40%] w-[100%]">
            <div className="flex flex-row gap-3">
              <Input
                className="w-full text-white bg-zinc-900 border-none "
                type="email"
                placehoder="email"
              />
              <Button className="h-12 px-10" variant="secondary">
                Enviar
              </Button>
            </div>
          </form>
        </div>

        <div className="w-full flex lg:flex-row flex-col gap-10 justify-between mt-[50px]">
          <div className="flex flex-col gap-5">
            <h1 className="text-zinc-500 text-xl uppercase">Soluções</h1>
            <div className="flex flex-col space-y-2">
              {ALL_SOLUTIONS.map((item, index) => (
                <Link href={item.href}>
                  <span
                    className="text-white text-lg  hover:text-[#f22e9a]"
                    key={index}
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-zinc-500 text-xl uppercase">Empresa</h1>
            <div className="flex flex-col space-y-2">
              {CONTENTS.map((item, index) => (
                <Link href={item.href}>
                  <span
                    className="text-white text-lg  hover:text-[#f22e9a]"
                    key={index}
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-zinc-500 text-xl uppercase">
              Entre em contato
            </h1>
            <div className="flex flex-col space-y-2">
              <Link href={"/"}>
                <span className="text-white text-lg  hover:text-[#f22e9a]">
                  contato@yourcount.com.br
                </span>
              </Link>
              <Link href={"/"}>
                <span className="text-white text-lg  hover:text-[#f22e9a]">
                  (92) 98121-4434
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full py-8 border-t border-b border-zinc-800 flex lg:flex-row flex-col gap-5 lg:flexBetween">
          <Image src={Logo} width={200} height={180} alt="LogoFooter" />

          <div className="flex flex-row gap-5">
            {SOCIAL_MEDIA.map((item, index) => (
              <Card className="bg-zinc-800 p-2 border-none" key={index}>
                <Link
                  href={item.href}
                  className="hover:text-[#f22e9a]"
                  target="_blank"
                >
                  {item.icon}
                </Link>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex lg:flex-row flex-col flexCenter gap-6 lg:justify-between py-5">
          <div className="flex flex-col gap-3">
            <span className="text-white">
              R. Rio De Janeiro, 145 - Flores, Manaus - AM, 69058-421 - Sala 15
            </span>

            <span className="text-zinc-500">
              Copyright©2024 | Your Count | Todos os direitos reservados
            </span>
          </div>
          <Link href={"#hero"}>
            <Button
              className="  bg-[#f22e9a] hover:bg-[#5a4ea6] text-lg font-bold
           h-[50px] rounded-lg px-8 hover:-translate-y-3 transition-all duration-500"
            >
              Voltar ao topo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
