import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxLayer from "./ParallaxLayer";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(var(--hero-gradient-end))] to-background opacity-50" />
      
      {/* 3D Animated Circles with Parallax */}
      <ParallaxLayer speed={-0.3}>
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.3}>
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </ParallaxLayer>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MUBISH M
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Web Developer | UI/UX Designer | Programmer
          </motion.p>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Final-year B.E. Computer Science Engineering student passionate about creating innovative digital solutions
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className="glow-effect hover:scale-105 transition-transform"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="hover:scale-105 transition-transform"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div 
            className="flex gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <a href="https://www.linkedin.com/in/mubish/" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href="mailto:mmubshmuthu@gmail.com">
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://github.com/mubish07" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
