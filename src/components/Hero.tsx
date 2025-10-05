import { Phone, TrendingUp, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container relative z-10 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Conecte sua{" "}
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                Empresa
              </span>{" "}
              ao Futuro
            </h1>
            
            <p className="text-xl text-blue-100 max-w-2xl leading-relaxed">
              Soluções de telecomunicação inteligentes para impulsionar o crescimento do seu negócio. 
              Atendimento personalizado em Criciúma e região.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1 text-lg px-8 py-6"
              >
                <a
                  href="https://api.whatsapp.com/send?phone=5548996967676"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Fale Conosco
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline-white"
                asChild
                className="text-lg px-8 py-6 transition-all duration-300 hover:-translate-y-1"
              >
                <a href="#servicos">
                  Ver Serviços
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-2 gap-4 animate-scale-in">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-blue-100">Empresas Atendidas</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow group">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-sm text-blue-100">Anos de Experiência</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 hover:shadow-glow group col-span-2">
              <div className="flex items-center justify-center text-center space-x-4">
                <div className="p-3 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-blue-100">Satisfação dos Clientes</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
}
