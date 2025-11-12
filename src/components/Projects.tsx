import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Voice Based Authentication",
      description: "A secure voice-based authentication system enabling login through voice recognition. Enhances security by verifying unique voice patterns instead of traditional passwords.",
      icon: Mic,
      technologies: ["HTML", "Python", "Voice Recognition", "Security"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Voice to Text Converter",
      description: "A real-time voice-to-text system that converts spoken input into accurate text. Improves accessibility and efficiency by replacing manual typing with speech recognition.",
      icon: FileText,
      technologies: ["HTML", "Python", "Speech Recognition", "Real-time Processing"],
      gradient: "from-secondary to-primary",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:bg-card-hover transition-all duration-300 hover:-translate-y-2 card-glow overflow-hidden group"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary"
                      className="bg-muted hover:bg-muted/80"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
