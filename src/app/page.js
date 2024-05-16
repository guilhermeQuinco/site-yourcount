import EspecifiedSolutions from "../components/HomePage/EspecifiedSolutions";
import FAQ from "../components/HomePage/FAQ";
import Hero from "../components/HomePage/Hero";
import ProgressBar from "../components/HomePage/ProgressBar";
import Solutions from "../components/HomePage/Solutions";
import Video from "../components/HomePage/Video";

export default function Home() {
  return (
    <div className="bg-[#171326]">
      <Hero />
      <Solutions />
      <Video />
      <ProgressBar />
      <EspecifiedSolutions />
      <FAQ />
    </div>
  );
}
