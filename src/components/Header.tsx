import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between h-20">
          <img
            src={logoHorizontal}
            alt="Upciga Sistemas"
            className="h-10 md:h-12"
          />

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("segmentos")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Segmentos
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contato
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="hidden md:inline-flex"
              asChild
            >
              <a href="https://upciga.com.br/area-cliente" target="_blank" rel="noopener noreferrer">
                Área do Cliente
              </a>
            </Button>
            <Button
              size="sm"
              onClick={() => scrollToSection("contato")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              Solicitar Demo
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
