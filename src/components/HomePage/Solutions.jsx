import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const Solutions = () => {
  const solutions = ["marketing", "educação", "contablidade", "tecnologia"];

  return (
    <section className="w-full overflow-hidden mt-[150px] mb-[100px] py-12 ">
      <div className="max-container padding-container flex lg:flex-row flex-col gap-10 justify-between ">
        <div className="flex flex-col gap-5 max-w-[400px]">
          <div className="flex items-center  w-fit p-5 max-h-8 lg:px-6 lg:h-9 rounded-full border-2 border-white">
            <span className="text-whitetext-xs lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
              Serviços
            </span>
          </div>
          <h1 className="font-bold text-4xl leading-relaxed text-whitetext-xs text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60  ">
            O ecossistema que seu negócio merece
          </h1>
          <p className="text-gray-300 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
            quae dolor at id dolores incidunt aliquam corporis repudiandae
          </p>
        </div>

        <div className="lg:max-w-[700px]  ">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {solutions.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/1 lg:basis-1/2 ml-2"
                >
                  <div className="p-1 ">
                    <a href="">
                      {" "}
                      <Card className="lg:w-[320px] w-[320px] h-[500px] rounded-[40px] flexCenter hover:scale-105 transition-all duration-500">
                        <span>{item}</span>
                      </Card>
                    </a>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
