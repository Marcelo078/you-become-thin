import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import productImage from "@/assets/mitolyn-buy.webp";

const pricingOptions = [
  {
    bottles: 1,
    title: "Starter Package",
    originalPrice: 99,
    price: 79,
    perBottle: 79,
    savings: "20",
    popular: false,
  },
  {
    bottles: 3,
    title: "Most Popular",
    originalPrice: 297,
    price: 177,
    perBottle: 59,
    savings: "120",
    popular: true,
  },
  {
    bottles: 6,
    title: "Best Value",
    originalPrice: 594,
    price: 294,
    perBottle: 49,
    savings: "300",
    popular: false,
  },
];

export const PricingCards = () => {
  const handleBuyClick = () => {
    window.open('https://d68f8biqy-p5-y57wi-dbh9y4i.hop.clickbank.net', '_blank');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-tertiary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The more you invest in your health, the more you save. 
            All packages include free shipping and a 90-day guarantee.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingOptions.map((option) => (
            <Card 
              key={option.bottles}
              className={`relative flex flex-col ${
                option.popular 
                  ? 'border-primary border-2 shadow-xl scale-105 z-10' 
                  : 'border-border'
              }`}
            >
              {option.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground"
                >
                  {option.title}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <img 
                    src={productImage} 
                    alt={`${option.bottles} bottle(s) of Mitolyn`}
                    className="w-full h-full object-contain"
                  />
                  {option.bottles > 1 && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                      {option.bottles}
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground line-through">
                    Was: ${option.originalPrice}
                  </p>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-4xl font-bold text-primary">
                      ${option.price}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-success">
                    ${option.perBottle} per bottle
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Save ${option.savings}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">Free Shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">90-Day Guarantee</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                    <span className="text-sm">100% Satisfaction</span>
                  </li>
                  {option.bottles >= 3 && (
                    <>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                        <span className="text-sm font-semibold text-primary">2 Free E-books</span>
                      </li>
                    </>
                  )}
                  {option.bottles >= 6 && (
                    <li className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-primary">Priority Support</span>
                    </li>
                  )}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  variant={option.popular ? "cta" : "default"}
                  size="lg"
                  className="w-full"
                  onClick={handleBuyClick}
                >
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <div className="flex items-center justify-center gap-8 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="currentColor" className="text-muted-foreground/20"/>
                <path d="M9.5 16.5l-3-3 1.41-1.41L9.5 13.67l5.59-5.59L16.5 9.5z" fill="currentColor" className="text-success"/>
              </svg>
              <span className="text-muted-foreground">Secure SSL Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="currentColor" className="text-primary/20"/>
                <path d="M12 7L6 10v3c0 3.33 2.3 6.44 5.5 7.2 3.2-.76 5.5-3.87 5.5-7.2v-3l-5-3z" fill="currentColor" className="text-primary"/>
              </svg>
              <span className="text-muted-foreground">100% Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
