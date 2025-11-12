import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Experience
        </h2>
        
        <Card className="bg-card border-border hover:bg-card-hover transition-all card-glow">
          <div className="h-2 bg-gradient-to-r from-primary to-secondary" />
          <CardHeader>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-2xl mb-2 text-foreground">Web Development Intern</CardTitle>
                <CardDescription className="text-lg text-muted-foreground mb-3">
                  CodeBind Technologies, Trichy
                </CardDescription>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>July 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>Trichy, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "PHP", "MySQL"].map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-muted">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-foreground">Key Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Developed responsive web designs using modern HTML5 and CSS3</li>
                <li>Implemented DOM manipulation and interactive features with JavaScript</li>
                <li>Built and presented a complete web application as a mini-project</li>
                <li>Collaborated with team members to deliver high-quality solutions</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
