const logos = [
  { name: "Supermercados União", type: "Varejo" },
  { name: "Farmácias Vida", type: "Farma" },
  { name: "AutoPeças Brasil", type: "Peças" },
  { name: "ConstruNorte", type: "Construção" },
  { name: "Moda & Estilo", type: "Vestuário" },
  { name: "PetCenter", type: "Pet" },
  { name: "Distribuidora Águia", type: "Atacado" },
  { name: "Óticas Visão", type: "Ótica" },
];

const LogoTicker = () => {
  return (
    <div className="w-full bg-background border-b border-border/50 py-8 overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Confiado por mais de 1000 empresas em todo o Brasil
        </p>
      </div>
      
      <div className="flex w-full overflow-hidden relative mask-linear-gradient">
        {/* Camada de gradiente para suavizar as bordas (efeito fade) */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

        <div className="flex animate-infinite-scroll gap-16 min-w-full px-8">
          {/* Renderiza a lista duas vezes para criar o loop perfeito */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center gap-2 min-w-[150px] opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default"
            >
              <div className="h-8 w-8 rounded bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                {logo.name.charAt(0)}
              </div>
              <span className="font-semibold text-lg whitespace-nowrap text-foreground/80">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoTicker;