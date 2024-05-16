import React from "react";

import FaqStructure from "../structure/faq-structure";
import { HOME_FAQ } from "../../constants";
const FAQ = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px] pb-28">
      <div className="max-container padding-container flex lg:flex-row flex-col gap-10 justify-between">
        <div className="flex flex-col gap-5 max-w-[500px]">
          <div className="flex items-center w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded-full border-2 border-white">
            <span className="text-whitetext-xs lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
              FAQ
            </span>
          </div>
          <h1 className="font-bold text-4xl leading-relaxed text-white ">
            Dúvidas frequentes
          </h1>
          <p className="text-gray-300 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
            quae dolor at id dolores incidunt aliquam corporis repudiandae
            minus.
          </p>
        </div>
        <FaqStructure items={HOME_FAQ} />
      </div>
    </section>
  );
};

export default FAQ;
