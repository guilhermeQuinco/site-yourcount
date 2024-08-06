import { PiInstagramLogoBold } from "react-icons/pi";
import { PiFacebookLogoBold } from "react-icons/pi";
import { PiTiktokLogoBold } from "react-icons/pi";
import { LuLinkedin } from "react-icons/lu";
import { PiYoutubeLogoBold } from "react-icons/pi";
import { inbounding, website, socialmedia } from "@/assets";

import cardGrid3 from "../assets/cardGrid3.png";

export const MARKETING_CONTENT = [
  {
    href: "/marketing-assessoria",
    title: "Assessoria de Marketing",
    description:
      " A assessoria de marketing aumentará a visibilidade da sua marca com estratégias personalizadas e baseadas em dados.",
  },
  {
    href: "/",
    title: "Criação de sites",
    description:
      "A criação de sites personalizados desenvolverá um website único e otimizado, adaptado às necessidades específicas da sua marca.",
  },
  {
    href: "/social-media",
    title: " Social Media",
    description:
      "O serviço de social media impulsionará sua presença online com estratégias criativas e análise de dados..",
  },
];
export const COUNT_CONTENT = [
  {
    href: "/contabilidade/assessoria",
    title: "Assessoria Contabil",
    description: "Como fazer sua empresa nunca parar de vender",
  },
  {
    href: "/",
    title: "ERP Financeiro",
    description: "Eleve Seu Negócio ao Próximo Nível com um Site Personalizado",
  },
];
export const EDUCATION_CONTENT = [
  {
    href: "/",
    title: "Plataforma",
    description: "Como fazer sua empresa nunca parar de vender",
  },
  {
    href: "/",
    title: "Conteúdos",
    description: "Eleve Seu Negócio ao Próximo Nível com um Site Personalizado",
  },
];

export const ALL_SOLUTIONS = [
  {
    href: "/marketing-assessoria",
    title: "Assessoria de Marketing",
    description: "Como fazer sua empresa nunca parar de vender",
  },
  {
    href: "/",
    title: "Criação de sites",
    description: "Eleve Seu Negócio com um Site Personalizado",
  },
  {
    href: "/social-media",
    title: " Social Media",
    description: "Eleve Seu Negócio com um Site Personalizado",
  },
];

export const CONTENTS = [
  { title: "Teste1", href: "/" },
  { title: "Teste2", href: "/" },
  { title: "teste3", href: "/" },
  { title: "Tetse4", href: "/" },
];

export const SOCIAL_MEDIA = [
  {
    icon: <PiInstagramLogoBold size={30} color="#fff" />,
    href: "https://www.instagram.com/grupoyourcount/",
  },
  {
    icon: <PiFacebookLogoBold size={30} color="#fff" />,
    href: "https://www.facebook.com/profile.php?id=100092381762398",
  },
  {
    icon: <PiTiktokLogoBold size={30} color="#fff" />,
    href: "https://www.tiktok.com/@yourcount.br",
  },
  {
    icon: <PiYoutubeLogoBold size={30} color="#fff" />,
    href: "https://www.youtube.com/@YourCount",
  },
  {
    icon: <LuLinkedin size={30} color="#fff" />,
    href: "https://www.linkedin.com/company/your-count/mycompany/verification/",
  },
];

export const MARKETING_SOLUTIONS = [
  {
    href: "/marketing-assessoria/kpi",
    value: "kpi",
    title: "KPI",
    description: "Gestão dos seus anúncios online no Google e Meta",
    topics: [
      "Atraia seus clientes para seu funil de vendas.",
      "Abasteça seu atendimento com oportunidades de venda",

      "Tenha mais previsibilidade e mensure o retorno do seu investimento",
    ],
  },
  {
    value: "traffic",
    title: "Tráfego Pago",
    description: "Gestão dos seus anúncios online no Google e Meta",
    topics: [
      "Atraia seus clientes para seu funil de vendas.",
      "Abasteça seu atendimento com oportunidades de venda",

      "Tenha mais previsibilidade e mensure o retorno do seu investimento",
    ],
  },
];

export const MARKETING_FAQ = [
  {
    value: "item-1",
    title: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    value: "item-2",
    title: "Is it styled?",
    content:
      "Yes. It comes with default styles that matches the other components aesthetic.",
  },
  {
    value: "item-3",
    title: "Is it animated? ",
    content:
      " Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-4",
    title: "Is it animated? ",
    content:
      " Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-5",
    title: "Is it animated? ",
    content:
      " Yes. It's animated by default, but you can disable it if you prefer.",
  },
  {
    value: "item-6",
    title: "Is it animated? ",
    content:
      " Yes. It's animated by default, but you can disable it if you prefer.",
  },
];
export const HOME_FAQ = [
  {
    value: "Quais serviços vocês oferecem?",
    title: "Quais serviços vocês oferecem?",
    content:
      "Oferecemos serviços de social media, criação de sites e inbound marketing. Cada serviço é projetado para melhorar sua presença digital, atrair clientes e impulsionar seu crescimento.",
  },
  {
    value: " O que é inbound marketing e como ele pode beneficiar meu negócio?",
    title: " O que é inbound marketing e como ele pode beneficiar meu negócio?",
    content:
      "Inbound marketing é uma estratégia que atrai, engaja e encanta clientes através de conteúdo relevante. Ele ajuda a aumentar a visibilidade online, atrair clientes qualificados e construir relacionamentos duradouros, resultando em mais vendas e fidelização de clientes.",
  },
  {
    value: "Quais são as etapas do inbound marketing?",
    title: "Quais são as etapas do inbound marketing? ",
    content:
      "As principais etapas são: atração (atrair visitantes), conversão (converter visitantes em leads), fechamento (transformar leads em clientes) e encantamento (fidelizar clientes).",
  },
  {
    value: " O que envolve o serviço de social media?",
    title: " O que envolve o serviço de social media? ",
    content:
      " Nosso serviço de social media inclui a criação de estratégias de conteúdo, gerenciamento de perfis sociais, interação com seguidores e análise de desempenho para aumentar visibilidade e engajamento.",
  },
  {
    value: "O que está incluído no serviço de criação de sites?",
    title: "O que está incluído no serviço de criação de sites? ",
    content:
      "Criamos sites modernos e funcionais com design personalizado e tecnologia de ponta, otimizados para performance e usabilidade, destacando sua marca e atraindo visitantes.",
  },
  {
    value: "Vocês oferecem relatórios de desempenho para todos os serviços?",
    title: "Vocês oferecem relatórios de desempenho para todos os serviços? ",
    content:
      "Sim, fornecemos relatórios detalhados e regulares sobre o desempenho de todas as nossas campanhas e serviços, destacando as principais métricas e insights para otimização contínua.",
  },
];

export const CONTACTS = [
  {
    title: "Preencha o formulário",

    variant: "green",
    description:
      "Envie suas informações de contato. Garantimos a total segurança e privacidade dos seus dados e nos comprometemos a ",
  },
  {
    title: "Receba nossa ligação",

    variant: "green",
    description:
      "Dentro de um período de 12 horas, um de nossos especialistas entrará em contato para organizar um encontro significativo com você.",
  },
];

export const DropdownForm = [
  "Até 20 mil",
  "de 20 mil a 50 mil",
  "de 50 mil até 70 mil",
  "de 70 mil até 100 mil",
  "de 400 mil até 1 milhão",
  "1 milhão +",
];

export const FEATURES = [
  {
    title: "Cumprimento Legal",
    icon: "",
    variant: "green",
    description:
      "Garante que a empresa esteja em conformidade com todas as leis fiscais e regulamentações contábeis, evitando multas e penalidades.",
  },
  {
    title: "Tomada de decisão informada",
    icon: "",
    variant: "green",
    description:
      "Dados financeiros precisos e detalhados que são essenciais para a tomada de decisões estratégicas informadas e planejamento financeiro eficaz.",
  },
  {
    title: "Gestão Eficiente de Fluxo de Caixa",
    icon: "",
    variant: "green",
    description:
      "Ajuda na gestão eficaz do fluxo de caixa, permitindo um controle melhor sobre as entradas e saídas de recursos financeiros.",
  },
  {
    title: "Transparência e Confiança ",
    icon: "",
    variant: "orange",
    description:
      " Transparência e a confiança com stakeholders, incluindo investidores, bancos e outras partes interessadas, através de relatórios financeiros claros e confiáveis. ",
  },
];

export const CARD_GRIDS = [
  {
    title: "Inovação estratégica",
    description:
      "Transforme ideias em ações concretas e veja seu negócio crescer exponencialmente. A inovação é a chave para se destacar no mercado.",
  },
  {
    title: "Crescimento Sustentável",
    description:
      "Construa uma base sólida para o seu negócio e prepare-se para um crescimento sustentável a longo prazo. Planejamento é essencial.",
  },
  {
    title: "Conexões que Impulsionam",
    description: "Construa redes de contatos que agreguem valor  ",
  },
  {
    title: "Tomada de Decisão Informada",
    description:
      "Tome decisões baseadas em dados concretos e insights valiosos. O conhecimento é poder para o empreendedor moderno",
  },
];

export const SERVICES_CAROUSEL = [
  {
    title: "Social media",
    description:
      "Elevamos sua presença digital com estratégias de conteúdo criativas e análises precisas.",
    image: socialmedia,
  },
  {
    title: "Criação de sites",
    description:
      "Criamos sites modernos e funcionais que destacam sua marca e atraem visitantes.",
    image: website,
  },
  {
    title: "Inbounding",
    description:
      "Atraímos e engajamos seu público-alvo, convertendo visitantes em clientes fiéis.",
    image: inbounding,
  },
];
