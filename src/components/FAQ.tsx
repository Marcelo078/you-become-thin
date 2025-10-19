import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does Mitolyn work exactly?",
    answer: "Mitolyn acts directly on mitochondria, the cellular structures responsible for energy production. Its natural ingredients help optimize mitochondrial function, accelerating metabolism and increasing calorie burn. This results in more energy, better vitality, and natural weight loss.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Most users report feeling more energetic within the first 1-2 weeks. Visible weight loss results typically appear after 3-4 weeks of consistent use. For optimal results, we recommend continuous use for at least 90 days.",
  },
  {
    question: "Does Mitolyn have side effects?",
    answer: "Mitolyn is formulated with 100% natural ingredients and contains no artificial stimulants. Most people experience no side effects. However, if you have any medical conditions or are taking medications, we recommend consulting your doctor before starting any supplement.",
  },
  {
    question: "How should I take Mitolyn?",
    answer: "We recommend taking 2 capsules per day, preferably in the morning with a glass of water. For best results, combine with balanced nutrition and regular physical activity. Each bottle contains 60 capsules, sufficient for 30 days.",
  },
  {
    question: "Does the 90-day guarantee really work?",
    answer: "Yes! We're so confident in the results that we offer a full 90-day satisfaction guarantee. If for any reason you're not satisfied, simply contact us and we'll provide a complete refund, no questions asked.",
  },
  {
    question: "Is Mitolyn suitable for all ages?",
    answer: "Mitolyn is formulated for adults over 18 years old. It's especially effective for people over 35, when mitochondrial function naturally begins to decline. We do not recommend it for pregnant women, nursing mothers, or anyone under 18.",
  },
  {
    question: "Do I need to follow a restrictive diet?",
    answer: "You don't need to follow extreme diets. Mitolyn works by optimizing your metabolism, but balanced nutrition enhances the results. Many users report weight loss even while maintaining a normal, healthy diet.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping is free nationwide and typically takes 5 to 10 business days. After payment confirmation, you'll receive a tracking code to follow your order.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about Mitolyn. 
            Didn't find your question? Contact us.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
