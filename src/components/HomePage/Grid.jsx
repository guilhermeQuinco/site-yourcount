import { CARD_GRIDS } from "@/constants";
import Image from "next/image";
import React from "react";

const Grid = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container">
        <div className="grid grid-cols-2 gap-4 ">
          {CARD_GRIDS.map((item, index) => (
            <div
              className={`rounded-2xl text-white flex flex-col border  overflow-hidden`}
            >
              <Image src={item.image} className="w-full h-full" />
              <div className="p-3 flex flex-col gap-2">
                <h1 className="text-[1.2rem]">{item.title}</h1>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Grid;
