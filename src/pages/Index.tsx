import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  CheckCircle2, 
  Users, 
  Shield, 
  Clock, 
  Upload, 
  Mail, 
  ArrowRight, 
  WifiOff, 
  Headset, 
  Rocket, 
  Lock 
} from "lucide-react";
import { toast } from "sonner";
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
  const [isCVDialogOpen, setIsCVDialogOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCVSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Currículo enviado com sucesso!", {
      description: "Nossa equipe de RH entrará em contato em breve.",
    });
    setIsCVDialogOpen(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Inscrição realizada!", {
      description: "Você receberá nossas novidades por e-mail.",
    });
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium animate-bounce shadow-sm">
              🏆 Mais de 10 anos de liderança no mercado
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Gestão completa e sólida para <span className="text-primary relative inline-block">empresas que crescem</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Junte-se a mais de <span className="text-accent font-bold">1000 clientes</span> que confiam na Upciga para controlar estoques, finanças e vendas com estabilidade garantida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
                className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8 h-12 shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-1"
              >
                Falar com Consultor
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("segmentos")}
                className="text-base px-8 h-12 border-2 hover:bg-muted transition-all"
              >
                Conhecer Setores
              </Button>
            </div>

            {/* Social Proof Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Clock, text: "+10 anos de história" },
                { icon: Shield, text: "Suporte Humanizado" },
                { icon: Users, text: "1000+ Clientes" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                  <item.icon className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-sm font-semibold text-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
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
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
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
              <div key={index} className="hover:-translate-y-2 transition-transform duration-300">
                <SegmentCard
                  image={segment.image}
                  title={segment.title}
                  description={segment.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Melhorados */}
      <section id="diferenciais" className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Coluna Visual */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                <img 
                  src={servicesImage} 
                  alt="Equipe Upciga trabalhando" 
                  className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                
                {/* Card Flutuante */}
                <div className="absolute bottom-8 left-8 bg-background/95 backdrop-blur p-6 rounded-xl shadow-xl border border-border max-w-xs animate-in slide-in-from-bottom-4 duration-1000 delay-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-green-100 rounded-full">
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="font-bold text-lg">Suporte Nota 10</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nossa taxa de satisfação é superior a 98%. Resolvemos seu problema na hora.
                  </p>
                </div>
              </div>
              
              {/* Elemento Decorativo */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-dashed border-primary/20 rounded-2xl"></div>
            </div>

            {/* Coluna de Conteúdo */}
            <div className="lg:w-1/2 space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 text-primary border-primary/30">Por que a Upciga?</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Não é apenas software.<br/>É tranquilidade.
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  { 
                    icon: WifiOff, 
                    title: "Venda Sem Internet", 
                    desc: "Caiu a conexão? Sem pânico. Nosso PDV continua operando 100% offline e sincroniza tudo automaticamente quando a rede voltar." 
                  },
                  { 
                    icon: Headset, 
                    title: "Suporte de Verdade", 
                    desc: "Nada de robôs irritantes. Fale com especialistas reais via WhatsApp ou telefone que entendem do seu negócio e resolvem rápido." 
                  },
                  { 
                    icon: Rocket, 
                    title: "Implantação Ágil", 
                    desc: "Não perca meses configurando. Nossa metodologia garante que você comece a usar o sistema em tempo recorde, já faturando." 
                  },
                  { 
                    icon: Lock, 
                    title: "Segurança Total", 
                    desc: "Seus dados fiscais e financeiros protegidos com backups automáticos e tecnologia de ponta. Durma tranquilo." 
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-12 h-12 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center transition-colors duration-300">
                        <item.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("contato")}
                  className="h-14 px-8 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/20"
                >
                  Quero essa tranquilidade
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Dúvidas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border bg-background rounded-lg px-4 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">O sistema funciona sem internet?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Sim! Nosso PDV (Frente de Caixa) opera normalmente offline para garantir que suas vendas nunca parem. Os dados são sincronizados assim que a conexão retornar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border bg-background rounded-lg px-4 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">Vocês oferecem treinamento?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Com certeza. A implantação inclui treinamento completo para sua equipe, além de acesso à nossa base de conhecimento e suporte humanizado.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border bg-background rounded-lg px-4 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-lg font-medium hover:no-underline py-6">O sistema atende a legislação fiscal?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6">
                Sim, a Upciga mantém o sistema sempre atualizado com as últimas exigências fiscais estaduais e federais (NFe, NFCe, SAT, MFE, etc.), garantindo a conformidade do seu negócio.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 animate-bounce">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-muted-foreground mb-8">
            Receba dicas de gestão, atualizações fiscais e novidades da Upciga diretamente no seu e-mail.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input 
              type="email" 
              placeholder="Digite seu melhor e-mail" 
              className="h-12 bg-background border-input focus-visible:ring-primary"
              required
            />
            <Button type="submit" size="lg" className="h-12 px-8 font-semibold">
              Inscrever-se
            </Button>
          </form>
        </div>
      </section>

      {/* Trabalhe Conosco */}
      <section id="trabalhe-conosco" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-muted to-background rounded-2xl p-8 md:p-12 border border-border shadow-sm relative overflow-hidden group">
            <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-background/50 to-transparent pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
            
            <div className="mb-8 md:mb-0 md:mr-8 max-w-2xl relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="outline" className="bg-background border-primary/30 text-primary">Carreiras</Badge>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Quer fazer parte do time Upciga?
              </h2>
              <p className="text-lg text-muted-foreground">
                Estamos sempre em busca de talentos para integrar nossa equipe de desenvolvimento e suporte. Se você busca crescimento e um ambiente sólido, envie seu currículo.
              </p>
            </div>

            <Dialog open={isCVDialogOpen} onOpenChange={setIsCVDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 shrink-0 h-12 px-8 text-base relative z-10 shadow-md"
                >
                  Enviar Currículo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Trabalhe Conosco</DialogTitle>
                  <DialogDescription>
                    Preencha seus dados abaixo e anexe seu currículo para participar do nosso processo seletivo.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCVSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo</Label>
                    <Input id="name" required placeholder="Digite seu nome completo" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required placeholder="seu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" required placeholder="(83) 99999-9999" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn (Opcional)</Label>
                    <Input id="linkedin" placeholder="https://linkedin.com/in/seu-perfil" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="file">Currículo (PDF ou DOCX)</Label>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted transition-colors border-border hover:border-primary group/upload">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-8 h-8 mb-2 text-muted-foreground group-hover/upload:text-primary transition-colors" />
                          <p className="text-sm text-muted-foreground"><span className="font-semibold">Clique para enviar</span> ou arraste</p>
                          <p className="text-xs text-muted-foreground">PDF ou DOCX (MAX. 5MB)</p>
                        </div>
                        <Input id="file" type="file" className="hidden" required accept=".pdf,.doc,.docx" />
                      </label>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button type="submit" className="w-full h-11 text-base font-semibold">Enviar Candidatura</Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contato" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            {/* Coluna 1: Chamada */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">
                Transforme sua gestão
              </h2>
              <p className="text-primary-foreground/90 mb-8 text-lg leading-relaxed">
                Entre em contato conosco e descubra como a Upciga pode elevar o seu negócio ao próximo nível.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 w-full sm:w-auto font-semibold h-12 shadow-lg"
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

            {/* Coluna 2: Contatos */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-primary-foreground/20 pb-2 inline-block">Canais de Atendimento</h3>
                <div className="space-y-4 text-primary-foreground/90">
                  <p className="flex flex-col">
                    <span className="font-semibold text-sm opacity-80 mb-1">E-mail Corporativo</span>
                    <a href="mailto:upciga@gmail.com" className="hover:text-white hover:translate-x-1 transition-all text-lg flex items-center gap-2">
                      <Mail className="w-4 h-4" /> upciga@gmail.com
                    </a>
                  </p>
                  <p className="flex flex-col">
                    <span className="font-semibold text-sm opacity-80 mb-1">WhatsApp Comercial</span>
                    <a
                      href="https://wa.me/5583999007432"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white hover:translate-x-1 transition-all text-lg flex items-center gap-2"
                    >
                      <Headset className="w-4 h-4" /> (83) 99900-7432
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4 border-b border-primary-foreground/20 pb-2 inline-block">Endereço</h3>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Avenida+Juarez+Tavora+Empresarial+Maximun+Joao+Pessoa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-white transition-colors block leading-relaxed group"
                >
                  <p className="group-hover:translate-x-1 transition-transform">
                    Avenida Juarez Tavora<br />
                    Empresarial Maximun - Sala 507<br />
                    João Pessoa/PB
                  </p>
                </a>
              </div>
            </div>

            {/* Coluna 3: Mapa Visual (Google Maps Embed) */}
            <div className="h-72 w-full rounded-xl overflow-hidden border-4 border-primary-foreground/10 bg-muted shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.026776797499!2d-34.8735704!3d-7.1229207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7acdd6199b97f17%3A0x9c3c303e3e3e3e3e!2sAv.%20Juarez%20T%C3%A1vora%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: "grayscale(20%)" }} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Mapa de Localização Upciga"
               ></iframe>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Upciga Sistemas. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60 font-medium">
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;