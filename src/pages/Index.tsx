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
    "description": "Suplemento para otimização metabólica e energia celular através da função mitocondrial",
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
        <title>Mitolyn - Desbloqueie Seu Poder Metabólico | Suplemento Natural</title>
        <meta name="description" content="Mitolyn otimiza a função mitocondrial para acelerar metabolismo, aumentar energia e promover perda de peso natural. Garantia de 90 dias. Frete grátis." />
        <meta name="keywords" content="mitolyn, suplemento metabólico, energia celular, perda de peso, mitocôndrias, metabolismo" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Mitolyn - Poder Metabólico Natural" />
        <meta property="og:description" content="Fórmula científica para otimização metabólica. Mais energia, metabolismo acelerado e resultados reais." />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/mitolyn-og-image.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mitolyn - Desbloqueie Seu Poder Metabólico" />
        <meta name="twitter:description" content="Suplemento natural para otimização metabólica e energia duradoura" />
        
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
