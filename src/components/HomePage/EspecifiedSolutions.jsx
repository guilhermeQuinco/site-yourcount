import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";

const EspecifiedSolutions = () => {
  return (
    <section className="w-full overflow-hidden mt-[200px] bg-black py-10">
      <div className="max-container padding-container flex flex-col gap-10">
        <div className="max-w-[400px] space-y-5">
          <div className="flex items-center  w-fit p-2 max-h-8 lg:px-4 lg:h-9 rounded-full border-2 border-white">
            <span className="text-whitetext-xs lg:text-lg text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 font-medium font-mono">
              Soluções
            </span>
          </div>
          <h1 className="text-4xl text-whitetext-xs text-transparent font-bold bg-clip-text bg-gradient-to-r from-white to-white/60">
            Conheça nossas principais soluções
          </h1>
        </div>
        <Tabs defaultValue="marketing" className="w-full flexCenter flex-col  ">
          <TabsList className="grid lg:w-[60%] w-[100%] lg:grid-cols-4 grid-cols-2 gap-10">
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="contabilidade">Contabilidade</TabsTrigger>
            <TabsTrigger value="educacao">Educação</TabsTrigger>
            <TabsTrigger value="tech">Tecnologia</TabsTrigger>
          </TabsList>
          <TabsContent value="marketing" className="flex flex-row gap-10">
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>
                  Make changes to your Marketing here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>
                  Make changes to your Marketing here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>
                  Make changes to your Marketing here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>

          <TabsContent value="contabilidade" className="flex flex-row gap-10">
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Contabil</CardTitle>
                <CardDescription>
                  Make changes to your Contabil here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Contabil</CardTitle>
                <CardDescription>
                  Make changes to your Marketing here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>
                  Make changes to your Marketing here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="educacao" className="flex flex-row gap-10">
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Educaçao</CardTitle>
                <CardDescription>
                  Make changes to your Marketing here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>educação</CardTitle>
                <CardDescription>
                  Make changes to your educação here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>educação</CardTitle>
                <CardDescription>
                  Make changes to your educação here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
          <TabsContent value="tech" className="flex flex-row gap-10">
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Tech</CardTitle>
                <CardDescription>
                  Make changes to your Tech here. Click save when you're done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Tech</CardTitle>
                <CardDescription>
                  Make changes to your Tech here. Click save when you're done.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="py-56">
              <CardHeader>
                <CardTitle>Marketing</CardTitle>
                <CardDescription>
                  Make changes to your Marketing here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default EspecifiedSolutions;
