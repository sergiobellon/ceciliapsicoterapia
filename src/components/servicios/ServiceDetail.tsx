import { Link } from 'react-router-dom';

interface ServiceDetailProps {
  id: string;
  title: string;
  text: string;
  highlight: string;
  image: string;
  reverse?: boolean;
}

const ServiceDetail = ({ id, title, text, highlight, image, reverse }: ServiceDetailProps) => (
  <section id={id} className="py-16 lg:py-20 scroll-mt-24">
    <div
      className={`container mx-auto px-4 lg:px-8 flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } items-center gap-12 lg:gap-16`}
    >
      <div className="flex-1 fade-in">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl text-primary mb-6">
          {title}
        </h2>
        <p className="font-body text-lg lg:text-xl text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
          {text}
        </p>
        <p className="font-body text-lg lg:text-xl text-primary font-medium italic leading-relaxed">
          {highlight}
        </p>
      </div>

      {/* Hidden on mobile to avoid pushing CTA too far down */}
      <div className="hidden lg:flex flex-1 justify-center fade-in">
        <div className="w-72 h-80 sm:w-80 sm:h-96 lg:w-80 lg:h-[28rem] rounded-3xl overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ServiceDetail;
