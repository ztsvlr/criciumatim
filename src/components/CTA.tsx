import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-primary relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container relative z-10">
        <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-glow overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
            <div className="space-y-6 text-white">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Converse com um Consultor
              </h2>
              <p className="text-lg text-blue-100 leading-relaxed">
                Nos mande uma mensagem no WhatsApp e conheça a melhor solução de 
                telecomunicação para a sua empresa. Atendimento personalizado e imediato.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-primary hover:bg-white/90 shadow-elegant hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <a
                    href="https://api.whatsapp.com/send?phone=5548996967676"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Iniciar Conversa
                  </a>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline-white"
                  asChild
                  className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <a href="tel:+5548996967676">
                    <Phone className="mr-2 h-5 w-5" />
                    (48) 99696-7676
                  </a>
                </Button>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                  <MessageCircle className="h-32 w-32 text-white animate-float" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
