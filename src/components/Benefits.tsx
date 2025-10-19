import { Flame, Battery, Brain, Heart, Sparkles, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Flame,
    title: "Accelerated Metabolism",
    description: "Activates mitochondria to naturally increase calorie burn, even at rest.",
  },
  {
    icon: Battery,
    title: "Lasting Energy",
    description: "Optimized ATP production provides sustained energy throughout the day, without peaks or crashes.",
  },
  {
    icon: Brain,
    title: "Mental Clarity",
    description: "Improves cognitive function and concentration through brain energy optimization.",
  },
  {
    icon: Heart,
    title: "Cellular Health",
    description: "Protects and regenerates mitochondria, combating premature cellular aging.",
  },
  {
    icon: Sparkles,
    title: "Powerful Antioxidant",
    description: "Natural ingredients that fight free radicals and reduce chronic inflammation.",
  },
  {
    icon: TrendingUp,
    title: "Consistent Results",
    description: "Formula based on scientific studies with proven results in real users.",
  },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Does Mitolyn Work?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Unlike common supplements, Mitolyn acts directly on mitochondria — 
            the "powerhouses" of your cells. When they function better, 
            you feel better.
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
            The Power of Mitochondria
          </h3>
          <p className="text-base md:text-lg text-tertiary-foreground/80 mb-6 leading-relaxed">
            Scientists have discovered that healthy mitochondria are the key to an efficient metabolism, 
            abundant energy, and longevity. With age, stress, and poor diet, 
            their function declines. <strong>Mitolyn naturally reverses this process.</strong>
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="bg-background/50 px-4 py-2 rounded-full">
              ✓ Based on 30+ clinical studies
            </div>
            <div className="bg-background/50 px-4 py-2 rounded-full">
              ✓ Patented natural ingredients
            </div>
            <div className="bg-background/50 px-4 py-2 rounded-full">
              ✓ No side effects
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
