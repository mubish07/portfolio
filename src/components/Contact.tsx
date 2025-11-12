import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mmubshmuthu@gmail.com",
      href: "mailto:mmubshmuthu@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9750551032",
      href: "tel:+919750551032",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/mubish",
      href: "https://www.linkedin.com/in/mubish/",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Nagapattinam, Tamil Nadu",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gradient">
          Get In Touch
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {contactInfo.map((item, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:bg-card-hover transition-all card-glow"
            >
              {item.href ? (
                <a 
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-start gap-4 group"
                >
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-medium text-foreground">{item.value}</p>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-card border-border text-center card-glow">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">Let's Work Together</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Whether you have a project in mind or just want to connect, feel free to reach out. 
            I'm always excited to collaborate on innovative ideas!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg"
              className="glow-effect"
              onClick={() => window.location.href = 'mailto:mmubshmuthu@gmail.com'}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => window.open('https://www.linkedin.com/in/mubish/', '_blank')}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              Connect on LinkedIn
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
