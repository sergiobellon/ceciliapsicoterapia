import { Phone, Mail } from 'lucide-react';

const ContactBanner = () => (
  <section className="bg-primary py-16 lg:py-20 text-center">
    <div className="container mx-auto px-4 fade-in">
      <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6 uppercase tracking-wide">
        Pide Cita
      </h1>
      <p className="font-body text-lg lg:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
        Este puede ser un buen momento para empezar a mirar lo que te ocurre de una manera diferente.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground font-body text-lg">
        <a href="tel:+34682025418" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Phone size={20} />
          <span>+34 682 025 418</span>
        </a>
        <a href="mailto:ceciliadegracia@copc.cat" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Mail size={20} />
          <span>ceciliadegracia@copc.cat</span>
        </a>
      </div>
    </div>
  </section>
);

export default ContactBanner;
