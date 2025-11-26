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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-border/40 shadow-sm" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Bloco Esquerdo: Logo + Navegação */}
        <div className="flex items-center gap-10">
          {/* Logo com tamanho otimizado */}
          <img
            src={logoHorizontal}
            alt="Upciga Sistemas"
            className="h-8 md:h-10 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />

          {/* Navegação Desktop - Mais próxima do logo para leitura fluida */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Segmentos", id: "segmentos" },
              { label: "Sobre Nós", id: "sobre" },
              { label: "Diferenciais", id: "diferenciais" },
              { label: "Contato", id: "contato" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
              >
                {item.label}
                {/* Micro-interação: linha animada ao passar o mouse */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300"></span>
              </button>
            ))}
          </nav>
        </div>

        {/* Bloco Direito: Ação Principal */}
        <div className="flex items-center">
          <Button
            size="default" // Tamanho padrão é mais elegante no header
            onClick={() => scrollToSection("contato")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
          >
            Solicitar Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;