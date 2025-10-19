import { Shield, Lock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Mitolyn</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fórmula científica para otimização metabólica e energia celular. 
              Transforme sua saúde de dentro para fora.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Garantias</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Garantia de 90 dias</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Pagamento 100% seguro</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>Suporte dedicado</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Informações</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="text-center text-sm text-muted-foreground space-y-2">
            <p>
              © {new Date().getFullYear()} Mitolyn. Todos os direitos reservados.
            </p>
            <p className="text-xs">
              Aviso: Os resultados podem variar de pessoa para pessoa. 
              Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. 
              Consulte seu médico antes de iniciar qualquer suplementação.
            </p>
            <p className="text-xs">
              * Estas declarações não foram avaliadas pela ANVISA. 
              Este produto é um suplemento alimentar e não deve substituir uma dieta equilibrada.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
