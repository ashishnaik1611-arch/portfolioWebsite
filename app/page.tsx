import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Education from "./components/Education";
import SkillsAndContact from "./components/SkillsAndContact";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-background font-sans">
      <ScrollProgress />
      <Nav />
      <main className="flex w-full flex-1 flex-col items-center">
        <Hero />
        <Expertise />
        <Languages />
        <Projects />
        <About />
        <Education />
        <SkillsAndContact />
      </main>
    </div>
  );
}
