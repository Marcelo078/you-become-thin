import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import productImage from "@/assets/mitolyn-bottle.png";

export const Hero = () => {
  const handleCTAClick = () => {
    window.open('https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-tertiary to-background">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4" />
              <span>Poder Metabólico Revolucionário</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Desbloqueie Seu{" "}
              <span className="text-primary">Poder Metabólico</span>{" "}
              com Mitolyn
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Fórmula cientificamente desenvolvida para otimizar a função mitocondrial, 
              acelerar o metabolismo e restaurar sua energia natural.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                variant="cta" 
                size="xl"
                onClick={handleCTAClick}
                className="group"
              >
                Ver Preços Especiais
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="xl"
                onClick={() => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba Mais
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-8 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center font-bold">✓</div>
                <span className="text-foreground">100% Natural</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center font-bold">✓</div>
                <span className="text-foreground">Garantia 90 Dias</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center font-bold">✓</div>
                <span className="text-foreground">Frete Grátis</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
              <img 
                src={productImage} 
                alt="Frasco de Mitolyn - Suplemento para Otimização Metabólica" 
                className="relative z-10 w-full max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
