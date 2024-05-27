import React from "react";
import { products } from "../data";
const Products = () => {
  const imageContainer = "overflow-hidden rounded-[30px] border-2 ";

  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container flex flex-col space-y-10 ">
        <div className="flex items-center w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded-full border-2 border-white">
          <span className="text-whitetext-xs lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
            Produtos
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col space-y-5 max-w-[50%]">
            <h1 className="text-white  text-4xl font-bold max-w-[500px]">
              Alavanque as vendas do seu produto
            </h1>

            <span className="text-gray-400 max-w-[500px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
              qui provident quo harum error voluptatum, eaque facere debitis
              libero. Minima, nam. Eveniet eos aut beatae quod, adipisci at ab
              soluta!
            </span>
          </div>
          <div className="grid grid-cols-2 auto-rows-[200px] gap-5 w-[50%]">
            {products.map((item, index) => (
              <div
                className={`${imageContainer} ${
                  index === 0 ? " col-span-2" : ""
                }`}
              >
                <img
                  src={item}
                  alt="products"
                  className="rounded-lg "
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
