import React from "react";
import {
  Tabs,
  TabsTrigger,
  TabsList,
  TabsContent,
} from "../../../../components/ui/tabs";

const SolutionsErp = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px]">
      <div className="max-container padding-container flex justify-center flex-col  gap-8">
        <h1 className="text-center text-3xl font-bold ">
          Qual a importância de um ERP no seu negócio?
        </h1>

        <Tabs defaultValue="marketing" className="w-full flexCenter flex-col">
          <TabsList className="grid lg:w-[60%] w-[100%] lg:grid-cols-4 grid-cols-2 gap-10">
            <TabsTrigger
              className="data-[state=active]:bg-[#1cbae9]"
              value="marketing"
            >
              Marketing
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#1cbae9]"
              value="contabilidade"
            >
              Contabilidade
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#1cbae9]"
              value="educacao"
            >
              Educação
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-[#1cbae9]"
              value="tech"
            >
              Tecnologia
            </TabsTrigger>
          </TabsList>
          <div className="bg-[#dbf0f9] rounded-lg p-8">
            <TabsContent
              value="marketing"
              className="flex flex-row gap-10 w-[1200px] "
            >
              Sim
            </TabsContent>

            <TabsContent
              value="contabilidade"
              className="flex flex-row gap-10 w-[1200px]"
            >
              Não
            </TabsContent>
            <TabsContent
              value="educacao"
              className="flex flex-row gap-10 w-[1200px] "
            >
              Jamais
            </TabsContent>
            <TabsContent
              value="tech"
              className="flex flex-row gap-10  w-[1200px] "
            >
              Nunca
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default SolutionsErp;
