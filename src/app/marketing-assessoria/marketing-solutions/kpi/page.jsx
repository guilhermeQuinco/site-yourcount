import { PanelMarketingSolutions } from "../../../../components/structure/panel-marketing-solution";

const item = {
  title: "KPI",
  description: "Gestão dos seus anúncios online no Google e Meta",
  topics: [
    "Atraia seus clientes para seu funil de vendas.",
    "Abasteça seu atendimento com oportunidades de venda",

    "Tenha mais previsibilidade e mensure o retorno do seu investimento",
  ],
};

export default function KPI() {
  return <PanelMarketingSolutions item={item} />;
}
