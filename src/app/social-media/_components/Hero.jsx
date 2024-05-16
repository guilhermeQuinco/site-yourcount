import React from "react";
import { Button } from "../../../components/ui/button";
const Hero = () => {
  return (
    <section
      className="w-full overflow-hidden bg-img-bg-home  bg-cover bg-center"
      id="hero"
    >
      <div className="max-container padding-container mt-[150px] lg:flex-row flex flex-col  gap-14">
        <div className="max-w-[550px] flex flex-col lg:text-left text-center gap-8">
          <span className="text-zinc-300 text-xl">
            Dê um UP nas suas redes sociais
          </span>
          <h1 className="text-6xl text-white">
            Criamos conteúdos modelados para o seu público
          </h1>

          <Button className="lg:w-[50%] w-[100%] p-6 text-xl text-white font-bold bg-[#f22e9a] hover:bg-[#5a4ea6]">
            Fale com um consultor
          </Button>
        </div>

        <div className="lg:w-[50%] w-[100%] rounded-[50px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
