import { Link } from 'react-router-dom';

interface FranjaSectionProps {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaTo?: string;
}

const FranjaSection = ({ title, text, ctaLabel, ctaTo }: FranjaSectionProps) => (
  <section className="bg-primary py-16 lg:py-20">
    <div className="container mx-auto px-4 lg:px-8 text-center fade-in">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-primary-foreground mb-6">
        {title}
      </h2>
      <p className="font-body text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 leading-relaxed">
        {text}
      </p>
      {ctaLabel && ctaTo && (
        <Link
          to={ctaTo}
          className="inline-block bg-primary-foreground text-primary font-body text-lg px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  </section>
);

export default FranjaSection;
