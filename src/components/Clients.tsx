import { Building2, TrendingUp, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Clients() {
  return (
    <section id="clientes" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Nossos{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Empresas que confiaram nas nossas soluções de telecomunicação e transformaram sua comunicação
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="p-8 text-center group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-subtle">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-muted-foreground font-medium">Empresas Parceiras</p>
          </Card>

          <Card className="p-8 text-center group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-subtle">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              98%
            </div>
            <p className="text-muted-foreground font-medium">Taxa de Satisfação</p>
          </Card>

          <Card className="p-8 text-center group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 bg-gradient-subtle">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
                <Award className="h-10 w-10 text-white" />
              </div>
            </div>
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              5+
            </div>
            <p className="text-muted-foreground font-medium">Anos no Mercado</p>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Por que escolher a SD Consultoria?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Atendimento Personalizado:</span> Soluções customizadas para cada necessidade
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Expertise Local:</span> Conhecimento profundo do mercado de Criciúma e região
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Suporte Contínuo:</span> Acompanhamento em todas as etapas do processo
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-primary/10 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-muted-foreground">
                    <span className="font-semibold text-foreground">Melhores Condições:</span> Planos e preços competitivos do mercado
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-primary rounded-2xl p-8 text-white">
                <blockquote className="text-lg leading-relaxed mb-4">
                  "A SD Consultoria transformou nossa comunicação empresarial. 
                  Atendimento excepcional e soluções que realmente fazem a diferença para o nosso negócio."
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold">
                    JM
                  </div>
                  <div>
                    <p className="font-semibold">João Mendes</p>
                    <p className="text-sm text-blue-100">CEO, Empresa Local</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
