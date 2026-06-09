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
  X
} from "lucide-react";
import { toast } from "sonner";
import Header from "@/components/Header";
import SegmentCard from "@/components/SegmentCard";
import ChatWidget from "@/components/ChatWidget";

import retailImage from "@/assets/segment-retail.jpg";
import autopartsImage from "@/assets/segment-autoparts.jpg";
import pharmacyImage from "@/assets/segment-pharmacy.jpg";
import constructionImage from "@/assets/segment-construction.jpg";
import fashionImage from "@/assets/segment-fashion.jpg";
import petshopImage from "@/assets/segment-petshop.jpg";
import distributionImage from "@/assets/segment-distribution.jpg";
import servicesImage from "@/assets/segment-services.jpg";
import opticalImage from "@/assets/segment-optical.jpg";

// Dados enriquecidos com funcionalidades específicas para cada setor
const segments = [
  { 
    id: "varejo",
    image: retailImage, 
    title: "Varejo em Geral", 
    description: "Agilidade no caixa e controle total de estoque para supermercados e lojas.",
    features: [
      "PDV Frente de Caixa ultra rápido",
      "Integração com balanças de checkout",
      "Controle de validade de perecíveis",
      "Emissão de etiquetas de gôndola",
      "Relatório de curva ABC de produtos"
    ]
  },
  { 
    id: "autopecas",
    image: autopartsImage, 
    title: "Autopeças", 
    description: "Organização para milhares de itens e compatibilidade veicular.",
    features: [
      "Busca inteligente por aplicação/veículo",
      "Controle de produtos similares",
      "Venda rápida no balcão",
      "Histórico de peças por cliente",
      "Controle de comissão de mecânicos"
    ]
  },
  { 
    id: "farmacia",
    image: pharmacyImage, 
    title: "Farmácia", 
    description: "Segurança fiscal e controle rigoroso exigido pela ANVISA.",
    features: [
      "Integração total com SNGPC (ANVISA)",
      "Farmácia Popular integrado",
      "Controle rigoroso de lotes e validade",
      "Pré-venda no balcão e caixa rápido",
      "Gestão de convênios e crediário"
    ]
  },
  { 
    id: "construcao",
    image: constructionImage, 
    title: "Material de Construção", 
    description: "Gestão eficiente de entregas e múltiplos locais de estoque.",
    features: [
      "Controle de entrega futura",
      "Gestão de múltiplos depósitos",
      "Orçamentos complexos para obras",
      "Venda de itens fracionados (areia, brita)",
      "Crediário próprio para construtores"
    ]
  },
  { 
    id: "moda",
    image: fashionImage, 
    title: "Moda e Calçados", 
    description: "Controle detalhado de grade para não perder vendas por falta de tamanho.",
    features: [
      "Controle de Grade (Cor e Tamanho)",
      "Impressão de etiquetas com código de barras",
      "Controle de crediário e condicional",
      "Gestão de trocas e devoluções facilitada",
      "Curva de tamanho mais vendido"
    ]
  },
  { 
    id: "petshop",
    image: petshopImage, 
    title: "Petshop & Vet", 
    description: "Venda de produtos e serviços em um único lugar.",
    features: [
      "Agenda de Banho e Tosa integrada",
      "Controle de vacinas e retornos",
      "Histórico clínico do animal",
      "Venda de ração a granel",
      "Pacotes de serviços recorrentes"
    ]
  },
  { 
    id: "distribuidora",
    image: distributionImage, 
    title: "Distribuidora", 
    description: "Força de vendas e logística para quem vende em volume.",
    features: [
      "Aplicativo de Força de Vendas (Android)",
      "Roteirização de entregas",
      "Tabelas de preço por perfil de cliente",
      "Conferência cega de estoque",
      "Emissão de MDF-e para transporte"
    ]
  },
  { 
    id: "servicos",
    image: servicesImage, 
    title: "Prestadores de Serviço", 
    description: "Organização de contratos e ordens de serviço.",
    features: [
      "Controle de Ordens de Serviço (OS)",
      "Gestão de contratos recorrentes",
      "Emissão de NFS-e (Nota de Serviço)",
      "Controle de horas trabalhadas",
      "Orçamentos com peças e serviços"
    ]
  },
  { 
    id: "otica",
    image: opticalImage, 
    title: "Ótica", 
    description: "Controle técnico de receitas e ordens de laboratório.",
    features: [
      "Cadastro de Receituário completo",
      "Controle de ordens de serviço para laboratório",
      "Venda casada (Armação + Lente)",
      "Histórico de grau do cliente",
      "Etiquetas personalizadas para óculos"
    ]
  },
];

const modules = [
  {
    title: "Vendas & PDV",
    icon: ShoppingCart,
    features: [
      "Frente de caixa rápido e intuitivo",
      "Kits e Cestas de produtos",
      "Controle de entrega futura",
      "Fidelização de clientes e pontuação",
      "Emissão de NF-e e NFC-e automática"
    ]
  },
  {
    title: "Estoque Inteligente",
    icon: Package,
    features: [
      "Importação automática de XML (Entrada)",
      "Sugestão de compras baseada em giro",
      "Controle por Lote, Validade e Série",
      "Grade de cor e tamanho",
      "Inventário com coletor de dados"
    ]
  },
  {
    title: "Financeiro Completo",
    icon: Wallet,
    features: [
      "Contas a Pagar e Receber",
      "Conciliação Bancária e Cheques",
      "Controle de Cartões e Convênios",
      "Fluxo de Caixa em tempo real",
      "Impressão de recibos e duplicatas"
    ]
  },
  {
    title: "Gestão Administrativa",
    icon: BarChart3,
    features: [
      "Análise de Rentabilidade por setor",
      "DRE (Demonstrativo de Resultado)",
      "Formação de Preço inteligente",
      "Controle Patrimonial",
      "Relatórios gerenciais detalhados"
    ]
  }
];

const Index = () => {
  const [isCVDialogOpen, setIsCVDialogOpen] = useState(false);
  const [selectedSegment, setSelectedSegment] = useState<typeof segments[0] | null>(null);

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
    <div className="min-h-screen bg-background overflow-x-hidden font-sans">
      <Header />
      <ChatWidget />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-background pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <div className="lg:w-1/2 text-center lg:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium animate-bounce shadow-sm bg-primary/10 text-primary border-primary/20">
                🚀 O ERP que mais cresce na Paraíba
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
                Software Desktop <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">robusto e seguro.</span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Esqueça sistemas web lentos que travam quando a internet cai. Tenha a performance e a segurança de um sistema instalado localmente, com controle total do seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => scrollToSection("contato")}
                  className="bg-primary hover:bg-primary-hover text-primary-foreground text-base px-8 h-14 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1"
                >
                  Agendar Demonstração
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("modulos")}
                  className="text-base px-8 h-14 rounded-full border-2 hover:bg-muted"
                >
                  Ver Módulos
                </Button>
              </div>

              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground font-medium">
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span>Instalação Local</span>
                </div>
                <div className="flex items-center gap-2">
                  <WifiOff className="w-5 h-5 text-primary" />
                  <span>100% Offline</span>
                </div>
              </div>
            </div>

            {/* Notebook Mockup */}
            <div className="lg:w-1/2 w-full animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative mx-auto bg-gray-900 rounded-[1.5rem] shadow-2xl border-[4px] border-gray-800 max-w-[600px] aspect-[16/10] overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-slate-950 flex flex-col">
                  <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="flex-1 p-6 grid grid-cols-12 gap-4 overflow-hidden relative">
                     <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/5 pointer-events-none"></div>
                     <div className="col-span-3 bg-slate-900/50 rounded-lg p-3 space-y-2 border border-white/5">
                        <div className="h-2 w-20 bg-slate-800 rounded mb-4"></div>
                        <div className="h-8 w-full bg-primary/20 rounded"></div>
                        <div className="h-8 w-full bg-slate-800/50 rounded"></div>
                        <div className="h-8 w-full bg-slate-800/50 rounded"></div>
                     </div>
                     <div className="col-span-9 space-y-4">
                        <div className="flex justify-between">
                          <div className="h-8 w-32 bg-slate-800 rounded"></div>
                          <div className="h-8 w-8 bg-slate-800 rounded-full"></div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                           <div className="h-24 bg-slate-800/80 rounded-lg border border-slate-700/50"></div>
                           <div className="h-24 bg-slate-800/80 rounded-lg border border-slate-700/50"></div>
                           <div className="h-24 bg-slate-800/80 rounded-lg border border-slate-700/50"></div>
                        </div>
                        <div className="h-40 bg-slate-800/50 rounded-lg border border-slate-700/50 mt-4 flex items-end p-4 gap-2">
                           <div className="w-full bg-primary/40 h-[40%] rounded-t"></div>
                           <div className="w-full bg-primary/60 h-[70%] rounded-t"></div>
                           <div className="w-full bg-primary/80 h-[50%] rounded-t"></div>
                           <div className="w-full bg-primary h-[90%] rounded-t"></div>
                        </div>
                     </div>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto bg-gray-800 rounded-b-xl rounded-t-sm h-[18px] max-w-[650px] shadow-xl">
                 <div className="absolute left-1/2 top-0 -translate-x-1/2 w-24 h-2 bg-gray-700 rounded-b-lg"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Dor vs Solução */}
      <section className="py-12 bg-muted/20 border-y border-border/50">
        <div className="container mx-auto px-4 text-center">
            <div className="grid md:grid-cols-3 gap-8">
               <div className="flex flex-col items-center">
                  <Zap className="w-10 h-10 text-yellow-500 mb-3" />
                  <h3 className="font-bold text-lg">Sem Travamentos</h3>
                  <p className="text-sm text-muted-foreground">Sistema nativo que não depende do navegador.</p>
               </div>
               <div className="flex flex-col items-center">
                  <ShieldCheck className="w-10 h-10 text-green-500 mb-3" />
                  <h3 className="font-bold text-lg">Dados Seguros</h3>
                  <p className="text-sm text-muted-foreground">Backup automático e banco de dados local.</p>
               </div>
               <div className="flex flex-col items-center">
                  <Rocket className="w-10 h-10 text-blue-500 mb-3" />
                  <h3 className="font-bold text-lg">Emissão Instantânea</h3>
                  <p className="text-sm text-muted-foreground">Nota fiscal autorizada em segundos.</p>
               </div>
            </div>
        </div>
      </section>

      {/* Brand Presentation */}
      <section id="sobre" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Uma década de excelência
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Upciga Sistemas não é uma aventura. Somos uma empresa consolidada com mais de 10 anos de mercado, entregando tecnologia robusta que não deixa seu negócio na mão.
            </p>
          </div>
        </div>
      </section>

      {/* Módulos do Sistema */}
      <section id="modulos" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Completo</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Tudo o que sua empresa precisa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nosso sistema é modular e se adapta ao tamanho do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-background p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <module.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{module.title}</h3>
                </div>
                <ul className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments Grid - Agora com Modal Interativo */}
      <section id="segmentos" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Atendemos o seu setor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clique no seu segmento para ver as ferramentas exclusivas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {segments.map((segment, index) => (
              <div 
                key={index} 
                onClick={() => setSelectedSegment(segment)}
                className="hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              >
                <SegmentCard
                  image={segment.image}
                  title={segment.title}
                  description={segment.description}
                />
              </div>
            ))}
          </div>

          {/* Modal de Detalhes do Segmento */}
          <Dialog open={!!selectedSegment} onOpenChange={(open) => !open && setSelectedSegment(null)}>
            <DialogContent className="max-w-2xl">
              {selectedSegment && (
                <>
                  <DialogHeader>
                    <DialogTitle className="text-3xl font-bold flex items-center gap-3">
                      {selectedSegment.title}
                    </DialogTitle>
                    <DialogDescription className="text-lg mt-2">
                      {selectedSegment.description}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-4">Funcionalidades Específicas:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedSegment.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 border border-border/50">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-3">
                    <Button variant="outline" onClick={() => setSelectedSegment(null)}>
                      Fechar
                    </Button>
                    <Button onClick={() => {
                      setSelectedSegment(null);
                      scrollToSection("contato");
                    }}>
                      Quero uma demonstração para {selectedSegment.title}
                    </Button>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-3xl"></div>
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-card">
                  <div className="p-8 md:p-12 space-y-6">
                    <Lock className="w-16 h-16 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">Seus dados, sua propriedade</h3>
                    <p className="text-muted-foreground">
                      Diferente de sistemas em nuvem onde você aluga o acesso aos seus próprios dados, com a Upciga o banco de dados está fisicamente na sua empresa. Mais segurança, privacidade e velocidade.
                    </p>
                    <div className="flex gap-4 pt-4">
                      <div className="flex items-center gap-2 text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">
                        <WifiOff className="w-4 h-4" /> Zero Dependência de Internet
                      </div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div>
                <Badge variant="outline" className="mb-4 text-primary border-primary/30">Por que a Upciga?</Badge>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                  Tranquilidade para você focar em vender.
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Headset, title: "Suporte Humano e Rápido", desc: "Fale com especialistas reais via WhatsApp. Nada de tickets que demoram dias." },
                  { icon: Rocket, title: "Performance Nativa", desc: "O sistema roda direto no hardware do computador, aproveitando todo o processamento para ser instantâneo." },
                  { icon: CheckCircle2, title: "100% Fiscal", desc: "Emissão de NFe, NFCe, MDF-e sempre atualizados com a SEFAZ." }
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
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Perguntas Frequentes</h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="bg-background border px-4 rounded-lg">
              <AccordionTrigger>O sistema precisa de internet para funcionar?</AccordionTrigger>
              <AccordionContent>
                Não para as operações diárias. Como é um sistema Desktop instalado localmente, você pode vender, controlar estoque e financeiro totalmente offline. A internet é usada apenas para autorizar notas fiscais e atualizações.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="bg-background border px-4 rounded-lg">
              <AccordionTrigger>Preciso de um servidor potente?</AccordionTrigger>
              <AccordionContent>
                Não. Nosso sistema é otimizado para rodar em computadores padrão de mercado. Um computador comum com Windows já serve como servidor para pequenas redes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="bg-background border px-4 rounded-lg">
              <AccordionTrigger>Vocês fazem backup?</AccordionTrigger>
              <AccordionContent>
                Sim, configuramos rotinas automáticas de backup para garantir que seus dados estejam sempre seguros, mesmo em caso de falha no seu computador.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Receba novidades do varejo
          </h2>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input type="email" placeholder="Seu e-mail profissional" className="h-12 bg-background" required />
            <Button type="submit" size="lg" className="h-12 px-8">Inscrever</Button>
          </form>
        </div>
      </section>

      {/* Trabalhe Conosco */}
      <section id="trabalhe-conosco" className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-muted to-background rounded-2xl p-8 md:p-12 border border-border relative overflow-hidden">
            <div className="mb-6 md:mb-0 md:mr-8 max-w-2xl relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">Carreiras na Upciga</h2>
              <p className="text-muted-foreground">Busca uma oportunidade em tecnologia? Envie seu currículo para nosso banco de talentos.</p>
            </div>
            <Dialog open={isCVDialogOpen} onOpenChange={setIsCVDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="shrink-0 relative z-10">
                  Enviar Currículo <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Envie seu Currículo</DialogTitle>
                  <DialogDescription>PDF ou DOCX. Max 5MB.</DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCVSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2"><Label>Nome</Label><Input required /></div>
                  <div className="space-y-2"><Label>Email</Label><Input type="email" required /></div>
                  <div className="space-y-2">
                    <Label>Arquivo</Label>
                    <Input type="file" required accept=".pdf,.doc,.docx" />
                  </div>
                  <Button type="submit" className="w-full">Enviar</Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Fale Conosco</h2>
              <p className="opacity-90 mb-6">Pronto para transformar sua gestão?</p>
              <Button variant="secondary" size="lg" asChild className="w-full sm:w-auto font-bold">
                <a href="https://wa.me/5583998441515" target="_blank" rel="noopener noreferrer">
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-lg">Contato</h3>
              <p>upciga@gmail.com</p>
              <p>(83) 99900-7432</p>
              <p>João Pessoa/PB</p>
            </div>
            <div className="h-48 rounded-lg overflow-hidden bg-white/10">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.0792078696775!2d-34.8696884241639!3d-7.116773572007677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace81c95604125%3A0xc3924f78326e5728!2sAv.%20Juarez%20T%C3%A1vora%2C%20Jo%C3%A3o%20Pessoa%20-%20PB!5e0!3m2!1spt-BR!2sbr!4v1709228392819!5m2!1spt-BR!2sbr" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy"
                 title="Mapa Upciga"
               ></iframe>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-60">
            © {new Date().getFullYear()} Upciga Sistemas.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;