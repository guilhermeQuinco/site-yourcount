import Explain from "./_components/explain-section";
import Features from "./_components/features";
import FormAccounting from "./_components/form-accountig";
import HeroAccounting from "./_components/hero-accounting";
import Informations from "./_components/informations-solutions";

export default function Accounting() {
  return (
    <div className="bg-[#171326]">
      <HeroAccounting />
      <FormAccounting />
      <Informations />
      <Explain />
      <Features />
    </div>
  );
}
