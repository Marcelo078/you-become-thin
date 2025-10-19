import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    age: 42,
    location: "São Paulo, SP",
    rating: 5,
    text: "Perdi 8kg em 6 semanas sem dietas malucas. Minha energia voltou e não sinto mais aquela fadiga da tarde. Mitolyn realmente mudou minha vida!",
    result: "-8kg em 6 semanas",
  },
  {
    name: "Carlos Mendes",
    age: 55,
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Estava cético no início, mas os resultados falam por si. Meu médico ficou impressionado com a melhora nos meus exames metabólicos. Recomendo!",
    result: "Metabolismo normalizado",
  },
  {
    name: "Ana Paula",
    age: 38,
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Finalmente encontrei algo que funciona de verdade. Não é mágica, mas com Mitolyn sinto que meu corpo está trabalhando a meu favor novamente.",
    result: "-12kg em 3 meses",
  },
  {
    name: "Roberto Costa",
    age: 47,
    location: "Curitiba, PR",
    rating: 5,
    text: "A clareza mental que ganhei foi inesperada. Além de perder peso, estou mais focado no trabalho e durmo melhor. Vale cada centavo!",
    result: "Energia +150%",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-tertiary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Resultados Reais de Pessoas Reais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milhares de pessoas já transformaram suas vidas com Mitolyn. 
            Veja o que elas têm a dizer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <p className="text-foreground mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}, {testimonial.age} anos
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-success">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            ⭐ Avaliação média: <strong className="text-foreground">4.8/5</strong> baseada em mais de 12.000 avaliações verificadas
          </p>
        </div>
      </div>
    </section>
  );
};
