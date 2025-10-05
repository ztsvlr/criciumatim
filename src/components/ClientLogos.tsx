import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

// Import all images from partners directory
const partnerImages = import.meta.glob('/partners/*.*', { eager: true, as: 'url' });

// Convert to array and create duplicates for infinite scroll
const clientLogos = Object.values(partnerImages);
const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

export function ClientLogos() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isDragging) return;

    let animationFrame: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.35; // Speed of auto-scroll
      if (scrollContainer) {
        scrollContainer.scrollLeft = scrollPosition;

        // Reset scroll position for infinite loop
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="py-16 bg-gradient-subtle border-y border-border/50">
      <div className="container">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h3 className="text-3xl md:text-4xl font-bold text-foreground">
            Parceiros de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Confiança
            </span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas que já transformaram sua comunicação conosco
          </p>
        </div>

        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`overflow-x-hidden ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          } select-none`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex gap-8 py-4" style={{ width: "max-content" }}>
            {duplicatedLogos.map((logoUrl, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-48 h-32 flex items-center justify-center bg-card hover:bg-accent/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-hover border-border/50 group p-4"
              >
                <img
                  src={logoUrl}
                  alt={`Cliente ${index + 1}`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  draggable="false"
                />
              </Card>
            ))}
          </div>
        </div>

        <style>{`
          div[style*="scrollbar-width"]::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
}
