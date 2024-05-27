import React from "react";
import { gridImages } from "../data";
const GridSection = () => {
  const imageContainer = "overflow-hidden rounded-[30px] border-2 ";

  return (
    <section className="w-full overflow-hidden mt-[100px]">
      <div className="max-container padding-container flex flex-col space-y-10">
        <h1 className="text-white  text-3xl font-bold max-w-[700px]">
          Fotos profissionais para o BRANDING da sua marca
        </h1>

        <div className="grid grid-cols-4 auto-rows-[200px] gap-4 ">
          {gridImages.map((item, index) => (
            <div
              className={`${imageContainer} ${
                index === 0 || index === 4 ? "col-span-2 " : ""
              } ${index === 2 ? "row-span-2" : ""}`}
            >
              <img
                src={item}
                alt="socialmedia"
                className="rounded-lg"
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridSection;
