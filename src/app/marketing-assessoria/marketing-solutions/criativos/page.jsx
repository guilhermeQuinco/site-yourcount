import { PanelMarketingSolutions } from "../../../../components/structure/panel-marketing-solution";

const item = {
  title: "Criativos",
  description: "Seus anúncios criados pelos copyrights e designers",
  topics: [
    "Mais foco em conversão não apenas em estética",
    "Abasteça seu atendimento com oportunidades de venda",

    "Tenha mais previsibilidade e mensure o retorno do seu investimento",
  ],
};

export default function Creative() {
  return <PanelMarketingSolutions item={item} />;
}
