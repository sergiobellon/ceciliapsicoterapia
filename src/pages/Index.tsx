import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import FranjaSection from '@/components/home/FranjaSection';
import AreasGrid from '@/components/home/AreasGrid';
import ProcesoSection from '@/components/home/ProcesoSection';
import { useFadeIn } from '@/hooks/useFadeIn';

const Index = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref}>
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
