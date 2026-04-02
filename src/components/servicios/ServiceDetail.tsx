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
      {/* Text */}
      <div className="flex-1 fade-in">
        <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-secondary mb-6">
          {title}
        </h2>
        <p className="font-body text-base lg:text-lg text-foreground/80 leading-relaxed mb-6 whitespace-pre-line">
          {text}
        </p>
        <p className="font-body text-base lg:text-lg text-primary font-medium italic mb-8 leading-relaxed">
          {highlight}
        </p>
        <Link
          to="/contacto"
          className="inline-block bg-primary text-primary-foreground font-body text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Pide Cita
        </Link>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center fade-in">
        <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] arch-clip overflow-hidden">
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
