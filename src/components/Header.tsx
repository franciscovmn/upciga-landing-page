import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controle do menu mobile

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false); // Fecha o menu mobile ao clicar
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Compensa a altura do header fixo
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const navItems = [
    { label: "Segmentos", id: "segmentos" },
    { label: "Sobre Nós", id: "sobre" },
    { label: "Diferenciais", id: "diferenciais" },
    { label: "Módulos", id: "modulos" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border/40 shadow-sm" 
          : "bg-background/50 backdrop-blur-sm border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img
            src={logoHorizontal}
            alt="Upciga Sistemas"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation (Centralizada) */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group py-2"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full duration-300"></span>
            </button>
          ))}
        </nav>

        {/* Desktop CTA (Direita) */}
        <div className="hidden md:flex items-center">
          <Button
            onClick={() => scrollToSection("contato")}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-semibold rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5"
          >
            Solicitar Demo
          </Button>
        </div>

        {/* Mobile Menu (Hambúrguer) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col pt-10">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-lg font-medium text-left text-foreground hover:text-primary transition-colors py-2 border-b border-border/50"
                  >
                    {item.label}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="mt-4 bg-primary hover:bg-primary-hover w-full h-12 text-lg"
                >
                  Solicitar Demo
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;