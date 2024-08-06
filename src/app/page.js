import Grid from "@/components/HomePage/Grid";
import EspecifiedSolutions from "../components/HomePage/EspecifiedSolutions";
import FAQ from "../components/HomePage/FAQ";
import Hero from "../components/HomePage/Hero";
import ProgressBar from "../components/HomePage/ProgressBar";
import Solutions from "../components/HomePage/Solutions";
import Video from "../components/HomePage/Video";
import Form from "@/components/HomePage/Form";

export default function Home() {
  return (
    <div className="bg-[#171326]">
      <Hero />
      <Solutions />
      {/* <Video /> */}
      {/* <Grid /> */}
      <Form />
      {/* <EspecifiedSolutions /> */}
      <FAQ />
    </div>
  );
}
