import React from "react";
import dashboardImage from "../../../../assets/Hero-ERP.png";
import Image from "next/image";
import { Button } from "../../../../components/ui/button";

const ErpHero = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container flex flex-row justify-between items-center">
        <div className="max-w-[550px] flex flex-col gap-5 ">
          <h1 className="text-5xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Accusantium voluptates
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            explicabo nihil architecto dignissimos perspiciatis eum sapiente ex
          </p>

          <Button className="w-[40%] bg-[#1cbae9] p-6 rounded-lg">
            Explorar
          </Button>
        </div>
        <div>
          <Image
            src={dashboardImage}
            width={600}
            height={600}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ErpHero;
