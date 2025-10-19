import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    age: 42,
    location: "Austin, TX",
    rating: 5,
    text: "Lost 17 lbs in 6 weeks without crazy diets. My energy is back and I no longer feel that afternoon fatigue. Mitolyn really changed my life!",
    result: "-17 lbs in 6 weeks",
  },
  {
    name: "Michael Johnson",
    age: 55,
    location: "Miami, FL",
    rating: 5,
    text: "I was skeptical at first, but the results speak for themselves. My doctor was impressed with the improvement in my metabolic tests. Highly recommend!",
    result: "Normalized metabolism",
  },
  {
    name: "Jennifer Garcia",
    age: 38,
    location: "Phoenix, AZ",
    rating: 5,
    text: "Finally found something that actually works. It's not magic, but with Mitolyn I feel like my body is working with me again.",
    result: "-26 lbs in 3 months",
  },
  {
    name: "David Thompson",
    age: 47,
    location: "Seattle, WA",
    rating: 5,
    text: "The mental clarity I gained was unexpected. Besides losing weight, I'm more focused at work and sleep better. Worth every penny!",
    result: "Energy +150%",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-tertiary to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real Results from Real People
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thousands of people have already transformed their lives with Mitolyn. 
            See what they have to say.
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
                      {testimonial.name}, {testimonial.age} years
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
            ⭐ Average rating: <strong className="text-foreground">4.8/5</strong> based on over 12,000 verified reviews
          </p>
        </div>
      </div>
    </section>
  );
};
