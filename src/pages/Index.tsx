import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FranjaSection from '@/components/home/FranjaSection';
import AreasGrid from '@/components/home/AreasGrid';
import ProcesoSection from '@/components/home/ProcesoSection';
import { useFadeIn } from '@/hooks/useFadeIn';
import Seo from '@/components/Seo';

const Index = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref}>
      <Seo
        title="Psicóloga en Rubí y online | Cecilia de Gracia Gallego"
        description="Psicoterapia integrativa relacional para jóvenes y adultos en Rubí y online. Un espacio seguro donde lo que te ocurre es escuchado, comprendido y transformado."
        path="/"
      />
      <Header />
      <main>
        <HeroSection />
        <FranjaSection
          title="Un espacio para comprender lo que te ocurre y empezar a transformarlo"
          text="Desde la Psicoterapia Integrativa Relacional, el proceso se sostiene en el vínculo terapéutico, facilitando la comprensión, regulación e integración de la experiencia emocional."
          ctaLabel="Pide cita"
          ctaTo="/contacto"
        />
        <AreasGrid />
        <ProcesoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
