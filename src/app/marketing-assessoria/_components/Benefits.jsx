import React from "react";

const Benefits = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container flex flex-col gap-28">
        <div className="w-full flex flex-row gap-10 items-center">
          <div className="bg-gray-800 w-[80%] h-[400px] rounded-xl"></div>
          <div className="flex flex-col max-w-[720px] gap-5">
            <h1 className="text-4xl text-white font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
            <span className="text-gray-500 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              ipsa in, reiciendis beatae ad animi nulla eaque optio vel cum
            </span>
          </div>
        </div>

        <div className="w-full flex flex-row gap-10 items-center">
          <div className="flex flex-col max-w-[720px] gap-5">
            <h1 className="text-4xl text-white font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </h1>
            <span className="text-gray-500 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              ipsa in, reiciendis beatae ad animi nulla eaque optio vel cum
            </span>
          </div>
          <div className="bg-gray-800 w-[80%] h-[400px] rounded-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
