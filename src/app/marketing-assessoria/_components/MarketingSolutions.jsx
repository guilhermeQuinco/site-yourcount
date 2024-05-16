import React from "react";

import { BsFillArrowRightSquareFill } from "react-icons/bs";
import Illustration from "../../../components/svg/illustration";
import { MainNavBar } from "../../../components/structure/nav-structure";
import KPI from "../marketing-solutions/kpi/page";

const MarketingSolutions = () => {
  return (
    <section className="w-full overflow-hidden mt-[150px]  py-[50px]" id="hero">
      <div className="max-container padding-container  flex flex-col flexCenter gap-10  ">
        <div className="flex flex-col gap-10 flexCenter">
          <div className="border-[#f22e9a] w-[40%] border"> </div>
        </div>

        <MainNavBar className="[&>a:first-child]:text-primary [&>a:first-child]:bg-muted " />
        <KPI />
      </div>
    </section>
  );
};

export default MarketingSolutions;
