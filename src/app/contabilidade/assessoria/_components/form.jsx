"use client";
import * as React from "react";
import Image from "next/image";
import { CONTACTS } from "../../../../constants";
import { DropdownForm } from "../../../../constants";

const Form = () => {
  return (
    <section className="w-full bg-[#1b2f53] mb-10" id="form">
      <div className="max-container padding-container flex flex-col items-center lg:gap-56 gap-28  py-10 pb-32  lg:py-20 lg:flex-row">
        <div className=" flex w-full flex-col lg:w-[50%]">
          <div className="relative flex flex-col lg:items-start items-center">
            <h2 className="font-bold text-[35px] lg:text-left text-center leading-[120%] text-white ">
              Acabar com a burocracia leva menos de um minuto
            </h2>

            <div className="h-[4px] lg:w-[250px] w-[200px]  bg-[#1cbae9] mt-5"></div>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-1 lg:mg-20 lg:gap-20">
            {CONTACTS.map((feature) => (
              <ContactItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <form className="flex-1  p-8 rounded-[20px] border-2 border-white">
            <div className="space-y-10 mt-5 mb-5">
              <div>
                <input
                  className="w-full outline-none  bg-white p-3  rounded  focus:shadow-md focus:shadow-secundary-blue"
                  type="text"
                  placeholder="Qual seu nome?"
                />
              </div>
              <div>
                <input
                  className="w-full outline-none  bg-white p-3 rounded focus:shadow-md focus:shadow-secundary-blue"
                  type="text"
                  placeholder="E-mail corporativo"
                />
              </div>
              <div>
                <input
                  className="w-full outline-none  bg-white p-3 rounded focus:shadow-md focus:shadow-secundary-blue"
                  type="tel"
                  placeholder="Seu Telefone"
                />
              </div>
              <div>
                <input
                  className="w-full outline-none  bg-white p-3 rounded focus:shadow-md focus:shadow-secundary-blue"
                  type="text"
                  placeholder="Nome da empresa"
                />
              </div>
              <div>
                <select className="w-full outline-none bg-white p-3 rounded focus:shadow-md focus:shadow-secundary-blue">
                  <option>Selecione o Faturmento mensal</option>
                  {DropdownForm.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="text-white mt-6 w-full bg-[#1cbae9] p-3 mb-3 rounded hover:scale-105"
            >
              RECEBER MAIS INFORMAÇÕES
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ title, icon, description }) => {
  return (
    <li className="flex w-full flex-1 flex-row gap-5 p-5  items-center bg-primary-blue border rounded-[20px]">
      <div className="">
        <Image src={icon} alt="map" width={100} height={100} />
      </div>
      <div className="flex flex-col">
        <h2 className="text-white text-[15px] text-center lg:text-left font-bold lg:text-[25px] lg:font-bold  capitalize">
          {title}
        </h2>
        <p className="regular-16 mt-5  text-center lg:text-left  text-white lg:mt-[10px] lg:bg-none">
          {description}
        </p>
      </div>
    </li>
  );
};

export default Form;
