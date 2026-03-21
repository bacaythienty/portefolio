import Hero from "../composants/Hero";
import About from "../composants/About";
import Projects from "../composants/Projects";
import Contact from "../composants/Contact";

function Home() {
  return (
    <div className="main">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;