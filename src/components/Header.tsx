import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-0">
        <div className="flex items-center gap-4 sm:gap-8">
          <a href="/" className="flex items-center space-x-2 group">
            {/* Logo — só aparece em telas médias pra cima */}
            <img
              src="/images/tim-business-partner.png"
              alt="TIM Business Partner"
              className="hidden sm:block h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            {/* Textos — sempre visíveis */}
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg text-foreground leading-tight">
                Sergio Dias
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground leading-tight">
                Consultor TIM Empresas
              </span>
            </div>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#home"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
          >
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#servicos"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
          >
            Serviços
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#clientes"
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
          >
            Clientes
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button
            asChild
            className="bg-gradient-primary hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5"
          >
            <a
              href="https://api.whatsapp.com/send?phone=5548996967676"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
