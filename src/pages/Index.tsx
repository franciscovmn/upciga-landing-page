import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Users, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import SegmentCard from "@/components/SegmentCard";

import retailImage from "@/assets/segment-retail.jpg";
import autopartsImage from "@/assets/segment-autoparts.jpg";
import pharmacyImage from "@/assets/segment-pharmacy.jpg";
import constructionImage from "@/assets/segment-construction.jpg";
import fashionImage from "@/assets/segment-fashion.jpg";
import petshopImage from "@/assets/segment-petshop.jpg";
import distributionImage from "@/assets/segment-distribution.jpg";
import servicesImage from "@/assets/segment-services.jpg";
import opticalImage from "@/assets/segment-optical.jpg";

const segments = [
  {
    image: retailImage,
    title: "Varejo",
    description: "Controle de caixa e vendas ágil para sua loja.",
  },
  {
    image: autopartsImage,
    title: "Autopeças",
    description: "Gestão de milhares de itens e compatibilidade veicular.",
  },
  {
    image: pharmacyImage,
    title: "Farmácia",
    description: "Integração SNGPC e controle rigoroso de lotes.",
  },
  {
    image: constructionImage,
    title: "Material de Construção",
    description: "Gestão de entregas e múltiplos depósitos.",
  },
  {
    image: fashionImage,
    title: "Moda",
    description: "Grade completa de cores e tamanhos.",
  },
  {
    image: petshopImage,
    title: "Petshop",
    description: "Agenda de banho e tosa integrada ao sistema.",
  },
  {
    image: distributionImage,
    title: "Distribuidora",
    description: "Força de vendas e rotas de entrega otimizadas.",
  },
  {
    image: servicesImage,
    title: "Serviços",
    description: "Ordens de serviço e gestão de contratos.",
  },
  {
    image: opticalImage,
    title: "Ótica",
    description: "Receituário e controle de laboratório integrado.",
  },
];

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Mais de 10 anos de liderança no mercado
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Gestão completa e sólida para empresas que crescem
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Junte-se a mais de <span className="text-accent font-semibold">1000 clientes</span> que confiam na Upciga para controlar stocks, finanças e vendas com estabilidade garantida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8 h-12"
              >
                Falar com Consultor
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("segmentos")}
                className="text-base px-8 h-12 border-2"
              >
                Conhecer Setores
              </Button>
            </div>

            {/* Social Proof */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  +10 anos de história
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50">
                <Shield className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  Suporte Humanizado
                </span>
              </div>
              <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-muted/50">
                <Users className="w-5 h-5 text-accent shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  1000+ Clientes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Presentation */}
      <section id="sobre" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Uma década de excelência em gestão empresarial
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A Upciga Sistemas não é uma startup improvisada. Somos uma empresa consolidada com mais de 10 anos de mercado, oferecendo soluções de software de gestão empresarial com estabilidade, segurança e suporte humanizado.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nossa experiência permite entregar ferramentas robustas que realmente funcionam, sem surpresas desagradáveis. Seja qual for o seu segmento, temos a tecnologia certa para o seu crescimento.
            </p>
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section id="segmentos" className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Soluções especializadas para o seu setor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Software de gestão personalizado para as necessidades específicas do seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <SegmentCard
                key={index}
                image={segment.image}
                title={segment.title}
                description={segment.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section id="diferenciais" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Por que escolher a Upciga?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Experiência Comprovada
                  </h3>
                  <p className="text-muted-foreground">
                    Mais de uma década servindo empresas de todos os portes com solidez e confiabilidade.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Suporte Humanizado
                  </h3>
                  <p className="text-muted-foreground">
                    Equipe dedicada pronta para ajudar sempre que você precisar, sem robôs ou respostas automáticas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Tecnologia Estável
                  </h3>
                  <p className="text-muted-foreground">
                    Sistema testado e aprovado por milhares de usuários ao longo dos anos.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Especialização por Setor
                  </h3>
                  <p className="text-muted-foreground">
                    Funcionalidades específicas para cada tipo de negócio, do varejo à ótica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Pronto para transformar sua gestão?
              </h2>
              <p className="text-primary-foreground/90 mb-8 text-lg">
                Entre em contato conosco e descubra como a Upciga pode elevar o seu negócio ao próximo nível.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90"
                asChild
              >
                <a
                  href="https://wa.me/5583999007432"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3">Contato</h3>
                <div className="space-y-2 text-primary-foreground/90">
                  <p>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:upciga@gmail.com" className="hover:text-accent transition-colors">
                      upciga@gmail.com
                    </a>
                  </p>
                  <p>
                    <strong>WhatsApp:</strong>{" "}
                    <a
                      href="https://wa.me/5583999007432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      (83) 99900-7432
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3">Endereço</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Avenida Juarez Tavora<br />
                  Empresarial Maximun - Sala 507<br />
                  João Pessoa/PB
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-center text-primary-foreground/80">
              © {new Date().getFullYear()} Upciga Sistemas - Mais de uma década de excelência em gestão empresarial
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
