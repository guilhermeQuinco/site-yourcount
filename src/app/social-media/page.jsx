import FAQ from "./_components/FAQ";
import GridSection from "./_components/GridSection";
import Hero from "./_components/Hero";
import MidiaManagement from "./_components/MidiaManagement";
import Products from "./_components/Products";

export default function SocialMedia() {
  return (
    <div className="bg-[#171326]">
      <Hero />
      <GridSection />
      <Products />
      <MidiaManagement />
      <FAQ />
    </div>
  );
}
