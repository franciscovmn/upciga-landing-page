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
  Upload, 
  Mail, 
  ArrowRight, 
  WifiOff, 
  Headset, 
  Rocket, 
  Lock,
  Monitor, 
  Package,
  ShoppingCart,
  BarChart3,
  Wallet,
  Zap,
  ShieldCheck,
  Database
} from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import SegmentCard from "@/components/SegmentCard";
import ChatWidget from "@/components/ChatWidget";

// Imagens
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
  { id: "varejo", image: retailImage, title: "Varejo em Geral", description: "Controle de caixa e vendas ágil.", features: ["Frente de Caixa Rápido", "Etiquetas de Gôndola", "Controle de Estoque"] },
  { id: "autopecas", image: autopartsImage, title: "Autopeças", description: "Gestão de milhares de itens.", features: ["Busca por Veículo", "Produtos Similares", "Comissão de Mecânicos"] },
  { id: "farmacia", image: pharmacyImage, title: "Farmácia", description: "Segurança fiscal e SNGPC.", features: ["SNGPC Anvisa", "Farmácia Popular", "Controle de Lotes"] },
  { id: "construcao", image: constructionImage, title: "Material de Construção", description: "Entregas e múltiplos depósitos.", features: ["Entrega Futura", "Gestão de Obras", "Venda Fracionada"] },
  { id: "moda", image: fashionImage, title: "Moda e Calçados", description: "Grade de cor e tamanho.", features: ["Grade Completa", "Etiquetas de Código", "Crediário Próprio"] },
  { id: "petshop", image: petshopImage, title: "Petshop & Vet", description: "Produtos e serviços.", features: ["Agenda de Banho/Tosa", "Histórico Clínico", "Vacinas"] },
  { id: "distribuidora", image: distributionImage, title: "Distribuidora", description: "Logística e força de vendas.", features: ["App Força de Vendas", "Rotas de Entrega", "MDF-e"] },
  { id: "servicos", image: servicesImage, title: "Serviços", description: "Contratos e OS.", features: ["Ordem de Serviço", "Contratos Recorrentes", "NFS-e"] },
  { id: "otica", image: opticalImage, title: "Ótica", description: "Receituário e laboratório.", features: ["Receituário", "Ordens de Laboratório", "Histórico de Grau"] },
];

const modules = [
  {
    title: "Vendas & PDV",
    icon: ShoppingCart,
    description: "O coração da sua loja batendo forte e rápido.",
    features: ["Frente de caixa intuitivo", "Kits e Cestas", "Pré-venda no balcão", "NFC-e em 2 segundos"]
  },
  {
    title: "Estoque Inteligente",
    icon: Package,
    description: "Acabe com as perdas e furos no estoque.",
    features: ["Importação XML (NFe)", "Curva ABC de produtos", "Inventário pelo celular", "Grade e Lotes"]
  },
  {
    title: "Financeiro Blindado",
    icon: Wallet,
    description: "Controle total de cada centavo que entra e sai.",
    features: ["Contas a Pagar/Receber", "Conciliação Bancária", "Gestão de Cartões", "DRE Gerencial"]
  },
  {
    title: "Gestão Fiscal",
    icon: BarChart3,
    description: "Tranquilidade com a Receita Federal.",
    features: ["SPED Fiscal/Contribuições", "Sintegra", "Emissão de NFe/NFCe/MDF-e", "Cálculo automático de impostos"]
  }
];

const Index = () => {
  const [isCVDialogOpen, setIsCVDialogOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<typeof segments[0] | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80;
    if (element) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleCVSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Recebemos seu currículo!", { description: "Entraremos em contato caso seu perfil se encaixe." });
    setIsCVDialogOpen(false);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Sucesso!", { description: "Você está inscrito em nossa newsletter." });
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Header />
      <ChatWidget />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border mb-6 animate-in fade-in zoom-in duration-500 delay-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">Sistema Desktop Nativo</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Estabilidade total <br className="hidden lg:block" />
                para o seu <span className="text-primary">negócio.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Não dependa da internet para vender. Tenha um sistema robusto, instalado localmente, que garante a operação da sua loja 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contato")}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8 h-14 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
                >
                  Solicitar Demonstração
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("segmentos")}
                  className="text-base px-8 h-14 rounded-full border-2 hover:bg-muted/50"
                >
                  Ver meu Segmento
                </Button>
              </div>

              <div className="mt-10 pt-8 border-t border-border/50 grid grid-cols-2 gap-8 text-left">
                <div>
                  <p className="text-3xl font-bold text-foreground">+10</p>
                  <p className="text-sm text-muted-foreground">Anos de Mercado</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-foreground">+1000</p>
                  <p className="text-sm text-muted-foreground">Clientes Satisfeitos</p>
                </div>
              </div>
            </div>

            {/* Visual do Sistema (Conceitual/CSS) */}
            <div className="lg:w-1/2 w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative mx-auto bg-slate-900 rounded-2xl shadow-2xl border border-slate-800 max-w-[600px] aspect-[16/10] overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-950 flex flex-col p-1">
                  {/* Window Bar */}
                  <div className="h-8 bg-slate-900 rounded-t-xl flex items-center px-4 gap-2 border-b border-slate-800">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-slate-500 font-mono">Upciga ERP - v24.0</div>
                  </div>
                  
                  {/* App Layout */}
                  <div className="flex-1 flex overflow-hidden bg-slate-900">
                     {/* Sidebar */}
                     <div className="w-16 border-r border-slate-800 flex flex-col items-center py-4 gap-4">
                        <div className="w-8 h-8 bg-primary/20 rounded flex items-center justify-center text-primary"><ShoppingCart size={16}/></div>
                        <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-slate-500"><Package size={16}/></div>
                        <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center text-slate-500"><Wallet size={16}/></div>
                     </div>
                     
                     {/* Main Content */}
                     <div className="flex-1 p-6 bg-slate-950 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
                        
                        <div className="grid grid-cols-3 gap-4 mb-6">
                           {[1,2,3].map(i => (
                             <div key={i} className="h-24 bg-slate-900 rounded-lg border border-slate-800 p-4">
                               <div className="h-2 w-12 bg-slate-800 rounded mb-2"></div>
                               <div className="h-6 w-20 bg-slate-700 rounded"></div>
                             </div>
                           ))}
                        </div>
                        <div className="h-48 bg-slate-900 rounded-lg border border-slate-800 p-4 flex items-end gap-2">
                           {[40, 70, 50, 90, 60, 80, 45].map((h, i) => (
                             <div key={i} className="flex-1 bg-primary/80 hover:bg-primary transition-all rounded-t-sm" style={{ height: `${h}%` }}></div>
                           ))}
                        </div>
                     </div>
                  </div>
                </div>
              </div>
              {/* Efeito de Sombra/Reflexo */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-primary/20 blur-[80px] rounded-full pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Dor vs Solução */}
      <section className="py-16 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Por que escolher um sistema Desktop?</h2>
              <p className="text-muted-foreground">A nuvem é ótima, mas para o varejo físico, a estabilidade vem em primeiro lugar.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="bg-background p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                  <div className="p-3 bg-yellow-100 rounded-full mb-4"><Zap className="w-6 h-6 text-yellow-600" /></div>
                  <h3 className="font-bold text-lg mb-2">Performance Nativa</h3>
                  <p className="text-sm text-muted-foreground">Aproveita todo o poder do seu computador. Sem "loading" de navegador.</p>
               </div>
               <div className="bg-background p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                  <div className="p-3 bg-green-100 rounded-full mb-4"><ShieldCheck className="w-6 h-6 text-green-600" /></div>
                  <h3 className="font-bold text-lg mb-2">Dados Locais</h3>
                  <p className="text-sm text-muted-foreground">Seus dados ficam na sua empresa, protegidos e acessíveis mesmo sem rede.</p>
               </div>
               <div className="bg-background p-6 rounded-xl border border-border shadow-sm flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                  <div className="p-3 bg-blue-100 rounded-full mb-4"><Rocket className="w-6 h-6 text-blue-600" /></div>
                  <h3 className="font-bold text-lg mb-2">Zero Dependência</h3>
                  <p className="text-sm text-muted-foreground">Caiu a internet? Sua loja continua vendendo, emitindo cupom e recebendo.</p>
               </div>
            </div>
        </div>
      </section>

      {/* Módulos do Sistema */}
      <section id="modulos" className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-2xl">
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">Funcionalidades</Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                O que a Upciga faz por você
              </h2>
            </div>
            <p className="text-muted-foreground max-w-md text-right md:text-left">
              Uma suíte completa de ferramentas integradas para gerenciar cada centavo e cada produto da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <div key={index} className="bg-muted/20 p-8 rounded-3xl border border-border/50 hover:border-primary/50 hover:bg-muted/40 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-background shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-primary">
                    <module.icon className="w-7 h-7" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{module.title}</h3>
                <p className="text-muted-foreground mb-6">{module.description}</p>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Grid (Interactive) */}
      <section id="segmentos" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Especialistas no seu negócio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clique no cartão do seu segmento para ver as ferramentas exclusivas que desenvolvemos para ele.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedSegment(segment)}
                className="cursor-pointer transform hover:-translate-y-2 transition-all duration-300"
              >
                <SegmentCard
                  image={segment.image}
                  title={segment.title}
                  description={segment.description}
                />
              </div>
            ))}
          </div>

          {/* Modal Detalhes */}
          <Dialog open={!!selectedSegment} onOpenChange={(open) => !open && setSelectedSegment(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              {selectedSegment && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold flex items-center gap-3 text-primary">
                      {selectedSegment.title}
                    </DialogTitle>
                    <DialogDescription className="text-lg mt-2 text-foreground/80">
                      {selectedSegment.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-6 bg-muted/30 p-6 rounded-xl border border-border">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Database className="w-4 h-4" /> Diferenciais do Módulo:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedSegment.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-muted-foreground bg-background p-3 rounded-lg border border-border/50 shadow-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
                    <Button variant="ghost" onClick={() => setSelectedSegment(null)}>
                      Voltar
                    </Button>
                    <Button onClick={() => {
                      setSelectedSegment(null);
                      scrollToSection("contato");
                    }} className="bg-primary text-primary-foreground hover:bg-primary/90">
                      Solicitar Orçamento para {selectedSegment.title}
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-card border px-6 py-2 rounded-xl shadow-sm data-[state=open]:border-primary transition-colors">
              <AccordionTrigger className="text-lg font-medium">O sistema precisa de internet?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Não para operar! Você vende, controla estoque e financeiro offline. A internet é necessária apenas momentaneamente para autorizar notas fiscais (SEFAZ) e realizar atualizações.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-card border px-6 py-2 rounded-xl shadow-sm data-[state=open]:border-primary transition-colors">
              <AccordionTrigger className="text-lg font-medium">Qual computador eu preciso?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nosso sistema é leve e otimizado. Um computador com Windows 10 ou superior, 4GB de RAM e processador i3 (ou equivalente) já roda o sistema perfeitamente. Não exigimos servidores caros.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-card border px-6 py-2 rounded-xl shadow-sm data-[state=open]:border-primary transition-colors">
              <AccordionTrigger className="text-lg font-medium">E se o computador quebrar?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Fique tranquilo. Configuramos backups automáticos (locais e em nuvem, opcionalmente) para que seus dados estejam sempre salvos. Reinstalar o sistema em outra máquina é rápido e sem custo adicional de licença.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <div className="inline-flex items-center justify-center p-4 bg-background shadow-sm rounded-full mb-8">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Estratégia e Gestão no seu e-mail
          </h2>
          <p className="text-muted-foreground mb-8">
            Inscreva-se para receber dicas de como reduzir impostos, organizar estoque e aumentar vendas.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Input type="email" placeholder="Seu melhor e-mail" className="h-12 bg-background border-input shadow-sm" required />
              <Button type="submit" size="lg" className="h-12 px-6 font-semibold">Enviar</Button>
            </div>
            <p className="text-xs text-muted-foreground">Zero spam. Cancele quando quiser.</p>
          </form>
        </div>
      </section>

      {/* Trabalhe Conosco */}
      <section id="trabalhe-conosco" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-16 relative overflow-hidden text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Faça parte do time</h2>
              <p className="text-slate-300 text-lg">
                Estamos em constante expansão na Paraíba. Se você é desenvolvedor, suporte técnico ou vendedor, queremos conhecer você.
              </p>
            </div>

            <Dialog open={isCVDialogOpen} onOpenChange={setIsCVDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 h-14 px-8 text-base font-bold shadow-lg shrink-0 relative z-10">
                  <Upload className="mr-2 w-5 h-5" /> Enviar Currículo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Envie seu Currículo</DialogTitle>
                  <DialogDescription>Aceitamos PDF ou DOCX (Max 5MB).</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCVSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2"><Label>Nome Completo</Label><Input required /></div>
                  <div className="space-y-2"><Label>Email para contato</Label><Input type="email" required /></div>
                  <div className="space-y-2">
                    <Label>Seu Currículo</Label>
                    <Input type="file" required accept=".pdf,.doc,.docx" className="cursor-pointer" />
                  </div>
                  <Button type="submit" className="w-full font-bold">Enviar Aplicação</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-primary text-primary-foreground py-16 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              <p className="opacity-90 mb-6 leading-relaxed">
                Pronto para profissionalizar sua gestão? Agende uma visita técnica sem compromisso.
              </p>
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto font-bold shadow-lg">
                <a href="https://wa.me/5583999007432" target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg border-b border-white/20 pb-2 inline-block">Contatos</h3>
              <p className="flex items-center gap-2"><Mail className="w-4 h-4"/> upciga@gmail.com</p>
              <p className="flex items-center gap-2"><Headset className="w-4 h-4"/> (83) 99900-7432</p>
              <p className="opacity-80 text-sm mt-4">
                Avenida Juarez Tavora<br/>
                Empresarial Maximun - Sala 507<br/>
                João Pessoa/PB
              </p>
            </div>
            <div className="h-48 rounded-xl overflow-hidden bg-white/10 border border-white/20 shadow-inner">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0792078696775!2d-34.8696884241639!3d-7.116773572007677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81c95604125%3A0xc3924f78326e5728!2sAv.%20Juarez%20T%C3%A1vora%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1709228392819!5m2!1spt-BR!2sbr" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
                 allowFullScreen={true} 
                 loading="lazy"
                 title="Mapa Upciga"
               ></iframe>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <p>© {new Date().getFullYear()} Upciga Sistemas. CNPJ: XX.XXX.XXX/0001-XX</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;