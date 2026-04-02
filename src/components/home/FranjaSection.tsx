import { Link } from 'react-router-dom';

interface FranjaSectionProps {
  title: string;
  text: string;
  ctaLabel?: string;
  ctaTo?: string;
  variant?: 'green' | 'terracotta';
}

const FranjaSection = ({ title, text, ctaLabel, ctaTo, variant = 'green' }: FranjaSectionProps) => {
  const bgClass = variant === 'green' ? 'bg-primary' : 'bg-secondary';
  const textClass = 'text-primary-foreground';

  return (
    <section className={`${bgClass} py-16 lg:py-20`}>
      <div className="container mx-auto px-4 lg:px-8 text-center fade-in">
        <h2 className={`font-display text-2xl sm:text-3xl lg:text-4xl ${textClass} mb-6`}>
          {title}
        </h2>
        <p className={`font-body text-lg lg:text-xl ${textClass}/90 max-w-3xl mx-auto mb-8 leading-relaxed`}>
          {text}
        </p>
        {ctaLabel && ctaTo && (
          <Link
            to={ctaTo}
            className="inline-block bg-primary-foreground text-primary font-body text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            {ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
};

export default FranjaSection;
