import { Card } from "@/components/ui/card";
import { Code2, Palette, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed">
              To build a challenging career in the software domain by applying my programming skills and 
              problem-solving abilities to develop innovative solutions. I aim to contribute to organizational 
              growth while continuously enhancing my technical expertise and adapting to emerging technologies.
            </p>
            
            <div className="grid gap-4 pt-4">
              <Card className="p-4 bg-card border-border hover:bg-card-hover transition-colors card-glow">
                <div className="flex items-start gap-3">
                  <Code2 className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Development</h4>
                    <p className="text-sm text-muted-foreground">Building responsive web applications with modern technologies</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card border-border hover:bg-card-hover transition-colors card-glow">
                <div className="flex items-start gap-3">
                  <Palette className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Design</h4>
                    <p className="text-sm text-muted-foreground">Creating intuitive and beautiful user experiences</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card border-border hover:bg-card-hover transition-colors card-glow">
                <div className="flex items-start gap-3">
                  <Brain className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Problem Solving</h4>
                    <p className="text-sm text-muted-foreground">Applying critical thinking to develop innovative solutions</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="flex justify-center" >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse" />
              <div className="relative w-full h-full rounded-full border-4 border-primary/30 flex items-center justify-center bg-card/50 backdrop-blur-sm">
                <div className="text-center">
                  <div className="img">
                   <img src="public\img.png" /*  ABOUT IMAGE  */ alt="Mubish" className="rounded-full w-80 h-80 object-cover" />
                  </div>
                  {/* <div className="text-6xl font-bold text-gradient mb-2">MM</div>
                  <p className="text-sm text-muted-foreground">Full Stack Developer</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
