import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          © 2025 Mubish Mutharasu — Designed with 
          <Heart className="h-4 w-4 text-red-500 fill-red-500" /> 
          and Code
        </p>
      </div>
    </footer>
  );
};

export default Footer;
