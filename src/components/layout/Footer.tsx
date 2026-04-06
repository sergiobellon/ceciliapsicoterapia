import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram } from 'lucide-react';
import logo from '@/assets/logotipo.png';

const Footer = () => (
  <footer className="bg-background border-t border-border py-10">
    <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Cecilia de Gracia" className="h-10 w-auto" />
        <div className="leading-tight">
          <p className="font-display text-base font-semibold text-foreground">Cecilia de Gracia Gallego</p>
          <p className="text-sm text-muted-foreground">Psicóloga | Psicoterapia Integrativa Relacional</p>
          <p className="text-sm text-muted-foreground">Colegiada nº21816</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 text-foreground font-body text-base">
        <a href="tel:+34682025418" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Phone size={16} />
          <span>+34 682 025 418</span>
        </a>
        <a href="mailto:ceciliadegracia@copc.cat" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Mail size={16} />
          <span>ceciliadegracia@copc.cat</span>
        </a>
        <a href="https://www.instagram.com/cecilia_psicoterapia" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
          <Instagram size={16} />
          <span>@cecilia_psicoterapia</span>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
