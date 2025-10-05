import { Phone, Wifi, Radio, Shield, Globe, BarChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Phone,
    title: "TIM Liberty Empresa",
    description: "Fale à vontade com qualquer TIM no Brasil. Planos flexíveis com minutos ilimitados.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Wifi,
    title: "Liberty Web Empresa",
    description: "Pacotes de dados ideais para navegar no smartphone, tablet ou notebook da sua empresa.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Radio,
    title: "Liberty Rádios",
    description: "Comunicação instantânea para sua equipe com tecnologia Push-to-Talk.",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    icon: Shield,
    title: "TIM Protect",
    description: "Proteção completa para os dispositivos móveis da sua empresa contra ameaças digitais.",
    color: "from-blue-600 to-cyan-600",
  },
  {
    icon: Globe,
    title: "Gestor Web",
    description: "Controle total sobre as linhas da sua empresa em uma plataforma online intuitiva.",
    color: "from-violet-500 to-violet-600",
  },
  {
    icon: BarChart,
    title: "TIM Radar 2.0",
    description: "Monitoramento e gestão inteligente de frotas com tecnologia GPS avançada.",
    color: "from-blue-500 to-purple-600",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Soluções Completas para{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              sua Empresa
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos as melhores soluções de telecomunicação do mercado, adaptadas às necessidades do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-hover transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-elegant`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
              
              {/* Hover Accent Line */}
              <div className={`h-1 w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${service.color}`}></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
