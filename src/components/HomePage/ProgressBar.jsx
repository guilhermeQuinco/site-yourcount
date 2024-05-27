import React from "react";
import Logo from "../../assets/logoYC2.png";
import Image from "next/image";
import { Button } from "../ui/button";
const ProgressBar = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px] mb-[100px]">
      <div className="max-container padding-container flexCenter flex-col gap-14">
        <div className="flex flex-col gap-3 text-center flexCenter space-y-5">
          <div className="flex items-center  w-fit p-5 max-h-8 lg:px-5 lg:h-9 rounded-full border-2 border-white">
            <span className="text-whitetext-xs lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
              Metas
            </span>
          </div>
          <h1 className="font-bold lg:text-5xl text-3xl text-white">
            A principal meta do Grupo Your Count
          </h1>
          <p className="lg:text-3xl text-xl text-gray-300">
            Ajudar 1 milhão de empresários a alavancarem seus negócios até 2030
          </p>
        </div>

        <div className="w-[100%] flexCenter flex-col">
          <div className="lg:w-[46%] md:w-[52%] w-[60%] h-[30px] font-bold text-3xl flexBetween">
            <div className=" p-2 bg-[#f22e9a] rounded-full flexCenter">
              <Image src={Logo} width={30} height={30} alt="logoBar" />
            </div>
          </div>
          <div className="lg:w-[80%] md:w-[90%] w-[100%] rounded-full h-[40px] border-2 border-white py-5 px-[0.45rem] mt-[20px] flex items-center">
            <div className="w-[24%]  h-[30px] bg-[#f22e9a] rounded-full"></div>
          </div>
          <div className="lg:w-[80%] md:w-[90%] w-[90%] text-white h-[30px] font-bold md:text-3xl text-md mt-[20px]  flexBetween">
            <span>0</span>
            <span className="lg:mr-[30rem] md:mr-[18rem] mr-[10rem]">1K</span>
            <span>1M</span>
          </div>

          <Button
            className="mt-[50px] md:w-[30%] w-full bg-[#f22e9a] hover:bg-[#5a4ea6] text-lg font-bold
           h-[50px] rounded-lg px-8 hover:-translate-y-5 transition-all duration-500"
          >
            Venha fazer parte
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgressBar;
