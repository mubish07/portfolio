import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <AnimatedSection direction="up" delay={0.2}>
        <About />
      </AnimatedSection>
      <AnimatedSection direction="fade" delay={0.1}>
        <Skills />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <Projects />
      </AnimatedSection>
      <AnimatedSection direction="right" delay={0.1}>
        <Experience />
      </AnimatedSection>
      <AnimatedSection direction="left" delay={0.1}>
        <Education />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.2}>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
