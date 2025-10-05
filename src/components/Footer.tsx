import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-primary text-primary-foreground font-bold text-xl px-4 py-2 rounded-lg">
                SD
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">Sergio Dias</span>
                <span className="text-xs text-muted-foreground">Consultor TIM Empresas</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Soluções de telecomunicação empresarial em Criciúma e região. 
              Atendimento personalizado e comprometido com o sucesso do seu negócio.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#clientes"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Clientes
                </a>
              </li>
              <li>
                <a
                  href="https://meutim.tim.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Meu TIM
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <a
                  href="tel:+5548996967676"
                  className="hover:text-primary transition-colors"
                >
                  (48) 99696-7676
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Criciúma e região - SC</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} SD Consultoria Empresarial. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Parceiro TIM Empresas</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
