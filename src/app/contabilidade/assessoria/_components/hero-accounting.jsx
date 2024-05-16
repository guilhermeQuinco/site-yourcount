import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Illustration from "@/components/svg/illustration";
const HeroAccounting = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="max-container padding-container mt-[100px] flex flex-row justify-between ">
        <div className="relative flex justify-center  flex-1 flex-col xl:w-1/2 max-w-[600px]">
          <p className="text-center lg:text-left regular-20 mt-2 text-white xl:max-w-[520px] text-lg    ">
            Procurando uma CONTABILIDADE?
          </p>
          <h1 className="text-gray-300 text-5xl text-center lg:text-left font-bold bold-52 lg:bold-52 leading-snug">
            Temos um time <span className="text-[#67d7f9]">especializado </span>
            para cuidar da sua empresa
          </h1>

          <Link
            href={"https://1tdy9ja9kmz.typeform.com/to/pHh0yPEs"}
            target="_blank"
          >
            <Button
              type="button"
              className="bg-[#1cabe9] w-[40%] mt-8 p-6 text-lg font-bold hover:bg-[#7acdf0] "
            >
              Montar meu plano
            </Button>
          </Link>
        </div>

        <Illustration className="w-[50%] h-[50%]" />
      </div>
    </section>
  );
};

export default HeroAccounting;
