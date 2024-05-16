import React from "react";
import { Button } from "../../../components/ui/button";

const FormCTA = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container flexCenter flex-col gap-10">
        <div className="flex items-center w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded-full border-2 border-white">
          <span className="text-whitetext-xs lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
            Fale Conosco
          </span>
        </div>

        <div className="flex flex-col gap-5 text-center flexCenter max-w-[900px]">
          <h1 className="text-white text-4xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.amet
          </h1>
          <h2 className="text-xl text-gray-500 max-w-[600px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex impedit
          </h2>
        </div>
        <div className="w-[50%] border-2 h-[200px] rounded-[40px]"></div>
        <div className="w-[50%] border-2 h-[200px] rounded-[40px] "></div>

        <Button
          className="mt-[50px] md:w-[30%] w-full bg-[#f22e9a] hover:bg-[#5a4ea6] text-lg font-bold
           h-[50px] rounded-lg px-8 hover:-translate-y-5 transition-all duration-500"
        >
          Receber mais informações
        </Button>
      </div>
    </section>
  );
};

export default FormCTA;
