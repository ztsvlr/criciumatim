import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Services } from "@/components/Services";
import { ClientLogos } from "@/components/ClientLogos";
import { Clients } from "@/components/Clients";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CTA />
        <Services />
        <ClientLogos />
        <Clients />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
