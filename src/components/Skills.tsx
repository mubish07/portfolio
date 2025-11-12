import { Card } from "@/components/ui/card";
import { Code, Palette, Users, Clock, Target, Lightbulb } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "UI/UX Design", level: 90, icon: Palette },
    { name: "HTML & CSS", level: 95, icon: Code },
    { name: "JavaScript", level: 85, icon: Code },
    { name: "React", level: 80, icon: Code },
    { name: "Tailwind CSS", level: 90, icon: Palette },
    { name: "Python", level: 75, icon: Code },
  ];

  const softSkills = [
    { name: "Team Collaboration", icon: Users },
    { name: "Attention to Detail", icon: Target },
    { name: "Problem-solving", icon: Lightbulb },
    { name: "Critical Thinking", icon: Lightbulb },
    { name: "Time Management", icon: Clock },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="p-4 bg-card border-border hover:bg-card-hover transition-all card-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Soft Skills</h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:bg-card-hover transition-all cursor-pointer group card-glow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <skill.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{skill.name}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
