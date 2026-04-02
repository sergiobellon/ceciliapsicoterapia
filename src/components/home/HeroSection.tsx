import { Link } from 'react-router-dom';
import heroImg from '@/assets/hero-cecilia.jpg';

const HeroSection = () => (
  <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
    <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Text */}
      <div className="flex-1 fade-in">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight text-foreground mb-6">
          Un espacio terapéutico seguro donde, a través del vínculo, el malestar puede aliviarse y transformarse.
        </h1>
        <p className="font-body text-lg lg:text-xl text-foreground/80 mb-8 leading-relaxed">
          Acompaño a jóvenes y adultos en su malestar emocional, favoreciendo procesos de regulación, equilibrio y estabilidad emocional.
        </p>
        <Link
          to="/servicios"
          className="inline-block bg-primary text-primary-foreground font-body text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          Áreas de acompañamiento
        </Link>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center fade-in">
        <div className="w-72 sm:w-80 lg:w-96 arch-clip overflow-hidden">
          <img
            src={heroImg}
            alt="Cecilia de Gracia Gallego, psicóloga"
            width={800}
            height={1024}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
