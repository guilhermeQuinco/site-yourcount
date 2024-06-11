import React from "react";
import dashboardImage from "../../../../assets/Hero-ERP.png";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";

const ErpHero = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container flex flex-row justify-between items-center">
        <div className="max-w-[550px] flex flex-col gap-5 ">
          <h1 className="text-4xl font-bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium voluptates
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            explicabo nihil architecto dignissimos perspiciatis eum sapiente ex
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
            laboriosam. In nam tempora eaque ducimus, dolore, facilis maxime
          </p>

          <Button className="w-[40%] bg-[#1cbae9] p-6 rounded-lg font-bold text-lg">
            Explorar
          </Button>
        </div>
        <div>
          <Image
            src={dashboardImage}
            width={600}
            height={600}
            className="rounded-xl border-4 border-gray-300"
          />
        </div>
      </div>
    </section>
  );
};

export default ErpHero;
