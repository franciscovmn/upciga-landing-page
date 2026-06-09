import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logoHorizontal from "@/assets/logo-horizontal.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
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

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    open: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  };

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

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-foreground block rounded-full origin-left"
                animate={isOpen ? { rotate: 45, y: -1, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <motion.span
                className="w-full h-0.5 bg-foreground block rounded-full"
                animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              />
              <motion.span
                className="w-full h-0.5 bg-foreground block rounded-full origin-left"
                animate={isOpen ? { rotate: -45, y: 1, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 bottom-0 w-[300px] sm:w-[350px] bg-background z-50 md:hidden shadow-2xl flex flex-col"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Menu Header */}
              <div className="h-20 flex items-center justify-between px-6 border-b border-border/50">
                <span className="font-display font-bold text-lg text-foreground">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
                  aria-label="Fechar menu"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <line x1="3" y1="3" x2="17" y2="17" />
                    <line x1="17" y1="3" x2="3" y2="17" />
                  </svg>
                </button>
              </div>

              {/* Menu Items */}
              <nav className="flex-1 flex flex-col px-6 pt-8 gap-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    custom={i}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-4 px-2 rounded-xl hover:bg-muted/80 active:scale-[0.98]"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                className="px-6 pb-8 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.45, duration: 0.4 } }}
              >
                <Button
                  onClick={() => scrollToSection("contato")}
                  className="w-full h-14 text-lg bg-primary hover:bg-primary-hover rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-[0.98]"
                >
                  Solicitar Demo
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
