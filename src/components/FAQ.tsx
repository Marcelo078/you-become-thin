import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como o Mitolyn funciona exatamente?",
    answer: "Mitolyn atua diretamente nas mitocôndrias, as estruturas celulares responsáveis pela produção de energia. Seus ingredientes naturais ajudam a otimizar a função mitocondrial, acelerando o metabolismo e aumentando a queima de calorias. Isso resulta em mais energia, melhor disposição e perda de peso natural.",
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "A maioria dos usuários relata sentir mais energia nas primeiras 1-2 semanas. Resultados visíveis de perda de peso geralmente aparecem após 3-4 semanas de uso consistente. Para resultados ótimos, recomendamos o uso contínuo por pelo menos 90 dias.",
  },
  {
    question: "Mitolyn tem efeitos colaterais?",
    answer: "Mitolyn é formulado com ingredientes 100% naturais e não contém estimulantes artificiais. A maioria das pessoas não experimenta efeitos colaterais. Porém, se você tem alguma condição médica ou está tomando medicamentos, recomendamos consultar seu médico antes de iniciar qualquer suplemento.",
  },
  {
    question: "Como devo tomar o Mitolyn?",
    answer: "Recomendamos tomar 2 cápsulas por dia, preferencialmente pela manhã com um copo de água. Para melhores resultados, combine com uma alimentação equilibrada e atividade física regular. Cada frasco contém 60 cápsulas, suficiente para 30 dias.",
  },
  {
    question: "A garantia de 90 dias funciona mesmo?",
    answer: "Sim! Estamos tão confiantes nos resultados que oferecemos uma garantia de satisfação total de 90 dias. Se por qualquer motivo você não estiver satisfeito, basta entrar em contato e faremos o reembolso completo, sem perguntas.",
  },
  {
    question: "Mitolyn é adequado para todas as idades?",
    answer: "Mitolyn é formulado para adultos acima de 18 anos. É especialmente eficaz para pessoas acima de 35 anos, quando a função mitocondrial naturalmente começa a declinar. Não recomendamos para gestantes, lactantes ou menores de 18 anos.",
  },
  {
    question: "Preciso fazer dieta restritiva?",
    answer: "Não é necessário fazer dietas extremas. Mitolyn trabalha otimizando seu metabolismo, mas uma alimentação balanceada potencializa os resultados. Muitos usuários relatam perda de peso mesmo mantendo uma dieta normal e saudável.",
  },
  {
    question: "Quanto tempo dura o frete?",
    answer: "O frete é grátis para todo o Brasil e geralmente leva de 5 a 10 dias úteis. Após a confirmação do pagamento, você receberá um código de rastreamento para acompanhar sua encomenda.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre Mitolyn. 
            Não encontrou sua dúvida? Entre em contato conosco.
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
