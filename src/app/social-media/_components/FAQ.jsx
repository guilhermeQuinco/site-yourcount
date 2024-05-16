import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";
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
        <Accordion type="single" collapsible className="lg:w-[50%] w-full ">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
