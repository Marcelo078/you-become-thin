import { Shield, Lock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Mitolyn</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scientific formula for metabolic optimization and cellular energy. 
              Transform your health from the inside out.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Guarantees</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>90-day guarantee</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>100% secure payment</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>Dedicated support</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Information</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#benefits" className="hover:text-primary transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Pricing
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
              © {new Date().getFullYear()} Mitolyn. All rights reserved.
            </p>
            <p className="text-xs">
              Disclaimer: Results may vary from person to person. 
              This product is not intended to diagnose, treat, cure, or prevent any disease. 
              Consult your doctor before starting any supplementation.
            </p>
            <p className="text-xs">
              * These statements have not been evaluated by the FDA. 
              This product is a dietary supplement and should not replace a balanced diet.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
