import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function HomePage() {
    return (
      <>
        <section id="section1">
          <Hero />
        </section>
        <section id="section2" className="non-hero">
          <About />
        </section>
        <section id="section3" className="non-hero">
          <Projects />
        </section>
        <section id="section4" className="non-hero">
          <Contact />
        </section>
      </>
    );
  }
  
  export default HomePage;
