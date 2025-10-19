import { Helmet } from "react-helmet";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { PricingCards } from "@/components/PricingCards";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Mitolyn",
    "description": "Metabolic optimization supplement and cellular energy through mitochondrial function",
    "brand": {
      "@type": "Brand",
      "name": "Mitolyn"
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "49",
      "highPrice": "79",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "12000"
    }
  };

  return (
    <>
      <Helmet>
        <title>Mitolyn - Unlock Your Metabolic Power | Natural Supplement</title>
        <meta name="description" content="Mitolyn optimizes mitochondrial function to accelerate metabolism, boost energy, and promote natural weight loss. 90-day guarantee. Free shipping." />
        <meta name="keywords" content="mitolyn, metabolic supplement, cellular energy, weight loss, mitochondria, metabolism" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mitolyn - Natural Metabolic Power" />
        <meta property="og:description" content="Scientific formula for metabolic optimization. More energy, accelerated metabolism, and real results." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/mitolyn-og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mitolyn - Unlock Your Metabolic Power" />
        <meta name="twitter:description" content="Natural supplement for metabolic optimization and lasting energy" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Hero />
        <Benefits />
        <PricingCards />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;
