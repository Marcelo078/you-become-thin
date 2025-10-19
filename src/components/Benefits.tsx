import { Flame, Battery, Brain, Heart, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Metabolismo Acelerado",
    description: "Ativa as mitocôndrias para aumentar a queima de calorias naturalmente, mesmo em repouso.",
  },
  {
    icon: Battery,
    title: "Energia Duradoura",
    description: "Produção otimizada de ATP proporciona energia sustentada durante todo o dia, sem picos ou quedas.",
  },
  {
    icon: Brain,
    title: "Clareza Mental",
    description: "Melhora a função cognitiva e a concentração através da otimização energética cerebral.",
  },
  {
    icon: Heart,
    title: "Saúde Celular",
    description: "Protege e regenera as mitocôndrias, combatendo o envelhecimento celular prematuro.",
  },
  {
    icon: Sparkles,
    title: "Antioxidante Potente",
    description: "Ingredientes naturais que combatem radicais livres e reduzem inflamação crônica.",
  },
  {
    icon: TrendingUp,
    title: "Resultados Consistentes",
    description: "Fórmula baseada em estudos científicos com resultados comprovados em usuários reais.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por Que Mitolyn Funciona?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Diferente de suplementos comuns, Mitolyn atua diretamente nas mitocôndrias — 
            as "usinas de energia" das suas células. Quando elas funcionam melhor, 
            você se sente melhor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-card-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-tertiary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-tertiary-foreground">
            O Poder das Mitocôndrias
          </h3>
          <p className="text-base md:text-lg text-tertiary-foreground/80 mb-6 leading-relaxed">
            Cientistas descobriram que mitocôndrias saudáveis são a chave para um metabolismo 
            eficiente, energia abundante e longevidade. Com a idade, estresse e má alimentação, 
            sua função declina. <strong>Mitolyn reverte esse processo naturalmente.</strong>
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="bg-background/50 px-4 py-2 rounded-full">
              ✓ Baseado em 30+ estudos clínicos
            </div>
            <div className="bg-background/50 px-4 py-2 rounded-full">
              ✓ Ingredientes naturais patenteados
            </div>
            <div className="bg-background/50 px-4 py-2 rounded-full">
              ✓ Sem efeitos colaterais
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
