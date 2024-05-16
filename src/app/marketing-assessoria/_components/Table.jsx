import React from "react";

const Table = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container flexCenter flex-col gap-10">
        <div className="flex items-center w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded-full border-2 border-white">
          <span className="text-whitetext-xs lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
            Vantagens
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

        <div className="w-[80%] h-[500px] bg-black"></div>
      </div>
    </section>
  );
};

export default Table;
