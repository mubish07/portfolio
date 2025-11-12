import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Anna University (SINCET), Nagapattinam",
      year: "2022 - 2026",
      score: "CGPA: 7.7",
      icon: GraduationCap,
      color: "primary",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Govt. Hr. Sec. School, Thalainayar",
      year: "2021",
      score: "79.5%",
      icon: Award,
      color: "secondary",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Govt. Hr. Sec. School, Oradiyambulam",
      year: "2019",
      score: "76.2%",
      icon: Award,
      color: "primary",
    },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
          Education
        </h2>
        
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:bg-card-hover transition-all card-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${edu.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'}`}>
                    <edu.icon className={`h-6 w-6 ${edu.color === 'primary' ? 'text-primary' : 'text-secondary'}`} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-1 text-foreground">{edu.degree}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-2">
                      {edu.institution}
                    </CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="text-muted-foreground">{edu.year}</span>
                      <span className="font-semibold text-primary">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
