import FAQ from "./_components/FAQ";
import TransitionSection from "./_components/TransitionSection";
import Hero from "./_components/Hero";
import MarketingSolutions from "./_components/MarketingSolutions";
import Benefits from "./_components/Benefits";
import Table from "./_components/Table";
import FormCTA from "./_components/FormCTA";

export default function MarketingConsultancy() {
  return (
    <div className="bg-[#171326]">
      <Hero />
      <MarketingSolutions />
      <TransitionSection />
      <Benefits />
      <Table />
      <FormCTA />
      <FAQ />
    </div>
  );
}
