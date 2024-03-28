import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function HomePage() {
  return (
    <main>
      <section id="section1" className="hero">
        <Hero />
      </section>
      <section id="section2">
        <About />
      </section>
      <section id="section3">
        <Skills />
      </section>
      <section id="section4">
        <Projects />
      </section>
      <section id="section5">
        <Contact />
      </section>
    </main>
  );
}

export default HomePage;
