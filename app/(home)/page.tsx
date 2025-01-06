import ScrollHandler from "../_components/scroll-handler";
import AnimateBackground from "./_components/animate-background";
import Hero from "./_components/hero-section";
import Projects from "./_components/projects-section";
import Techs from "./_components/techs-section";

export default function Home() {
  return (
    <>
      <AnimateBackground />
      <ScrollHandler />
      <Hero />
      <Techs />
      <Projects />
    </>
  );
}
