import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, TrendingUp } from "lucide-react";

const ROICalculator = () => {
  const [employees, setEmployees] = useState([5]);
  const [hoursLost, setHoursLost] = useState([10]);
  
  // Cálculo hipotético: Custo médio hora R$ 20,00
  const hourlyRate = 20;
  const monthlySavings = employees[0] * hoursLost[0] * hourlyRate;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Calculator className="w-4 h-4" />
              <span>Simulador de Economia</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quanto custa a <span className="text-destructive">desorganização?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Muitas empresas perdem dinheiro com processos manuais, erros de estoque e tempo gasto corrigindo falhas fiscais. Veja quanto você poderia economizar automatizando sua gestão com a Upciga.
            </p>
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 text-sm text-muted-foreground">
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 Economia baseada em redução de retrabalho
               </div>
               <div className="flex items-center gap-4 text-sm text-muted-foreground">
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 Prevenção de multas fiscais (não calculado aqui)
               </div>
            </div>
          </div>

          <Card className="border-2 border-primary/10 shadow-2xl bg-background relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <CardHeader>
              <CardTitle className="text-2xl">Calcule seu Potencial</CardTitle>
              <CardDescription>Ajuste os valores abaixo para sua realidade</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 relative z-10">
              
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Funcionários Administrativos</span>
                  <span className="text-primary font-bold">{employees[0]} pessoas</span>
                </div>
                <Slider 
                  value={employees} 
                  onValueChange={setEmployees} 
                  max={50} 
                  step={1} 
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="font-medium">Horas perdidas/semana com processos manuais</span>
                  <span className="text-primary font-bold">{hoursLost[0]} horas</span>
                </div>
                <Slider 
                  value={hoursLost} 
                  onValueChange={setHoursLost} 
                  max={40} 
                  step={1} 
                  className="py-4"
                />
                <p className="text-xs text-muted-foreground italic">
                  *Ex: Emitir notas manualmente, conferir estoque, corrigir planilhas.
                </p>
              </div>

              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 rounded-xl bg-muted/50">
                    <p className="text-sm text-muted-foreground mb-1">Economia Mensal</p>
                    <p className="text-2xl font-bold text-foreground">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(monthlySavings)}
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
                    <p className="text-sm text-green-700 dark:text-green-400 mb-1 font-medium">Economia Anual</p>
                    <p className="text-2xl font-bold text-green-700 dark:text-green-400 flex items-center justify-center gap-2">
                      {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(yearlySavings)}
                      <TrendingUp className="w-5 h-5" />
                    </p>
                  </div>
                </div>
              </div>
              
              <Button className="w-full h-12 text-lg font-semibold shadow-lg">
                Quero parar de perder dinheiro
              </Button>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;