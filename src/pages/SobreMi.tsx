import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';
import heroImg from '@/assets/cecilia-contacto.webp';
import Seo from '@/components/Seo';

const formacion = [
  'Licenciatura en Psicología – Universidad de Granada',
  'Máster en Psicología Clínica y de la Salud – Universidad de Granada',
  'Postgrado en Psicoterapia Integrativa – Dendros Psicología',
  'Formación continuada en Psicoterapia Integrativa Relacional con Elena Martín (IIPA, R. Erskine)',
  'Supervisión clínica con Elena Martín de Hervás (Supervisora certificada IIPA)',
  'Formación en EMDR (Nivel I) – Anabel González',
  'Formación en abordaje del trauma – Instituto Amaya',
  'Experto en Trastornos de la Conducta Alimentaria – Escuela NorteSalud',
  'Tratamiento psicológico del duelo en psicoterapia – Centre Grat',
];

const SobreMi = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref}>
      <Seo
        title="Sobre mí | Cecilia de Gracia Gallego, psicóloga colegiada nº21816"
        description="Conoce mi forma de acompañar y mi formación en psicoterapia integrativa relacional, trauma, EMDR, duelo y conducta alimentaria."
        path="/sobre-mi"
      />
      <Header />
      <main>
        {/* Banner */}
        <section className="bg-primary pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="container mx-auto px-4 lg:px-8 fade-in">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground font-semibold mb-2">
              Cecilia de Gracia Gallego
            </h1>
            <p className="font-body text-lg lg:text-xl text-primary-foreground/90">
              Psicóloga y Psicoterapeuta (colegiada nº21816)
            </p>
          </div>
        </section>

        {/* Bio — 2 columns */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 space-y-6 font-body text-lg lg:text-xl text-foreground/85 leading-relaxed">
              <p className="fade-in">
                <strong>Psicóloga especializada en regulación emocional, dificultades relacionales, trauma, duelo y trastornos de la conducta alimentaria.</strong>
              </p>
              <p className="fade-in">
                <strong>Acompaño a jóvenes y adultos</strong> ofreciendo un espacio donde poder comprender lo que ocurre, darle sentido y generar cambios sostenibles.
              </p>
              <p className="fade-in">
                <strong>Cuento con más de diez años de experiencia</strong> en el ámbito socioeducativo y clínico, trabajando con personas en distintas etapas vitales y contextos.
              </p>
              <p className="fade-in">
                Entiendo el malestar psicológico como una forma de adaptación que se construye en la historia relacional de cada persona. Las emociones intensas, los síntomas o los patrones que hoy generan sufrimiento suelen haber sido, en algún momento, intentos de regulación frente a experiencias difíciles.
              </p>
              <p className="fade-in">
                <strong>En terapia, trabajamos para comprender ese sentido, ampliar recursos internos e integrar la experiencia emocional.</strong>
              </p>
              <p className="fade-in">
                <strong>Trabajo desde una mirada integrativa relacional,</strong> adaptando el proceso al ritmo y las necesidades de cada persona. El vínculo terapéutico es el eje central del proceso: un espacio seguro, estable y respetuoso desde el que poder explorar, comprender y transformar.
              </p>
              <p className="fade-in">
                <strong>Ofrezco terapia presencial en Rubí y también online.</strong>
              </p>
              <p className="fade-in font-medium italic text-primary text-center">
                Si sientes que necesitas atender lo que te ocurre, la terapia puede ofrecerte un espacio seguro donde comprender, expresar y dar sentido a lo que estás atravesando.
              </p>
            </div>

            <div className="flex-1 flex justify-center fade-in">
              <div className="w-72 sm:w-80 lg:w-96 rounded-3xl overflow-hidden sticky top-28">
                <img
                  src={heroImg}
                  alt="Cecilia de Gracia Gallego, psicóloga"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Formación */}
        <section id="formacion" className="bg-primary py-16 lg:py-24 scroll-mt-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <h2 className="font-display text-3xl sm:text-4xl text-primary-foreground font-semibold mb-2 fade-in">
              Mi Formación
            </h2>
            <p className="font-body text-lg text-primary-foreground/80 mb-10 fade-in">
              Cecilia de Gracia Gallego · Psicóloga y Psicoterapeuta (colegiada nº21816)
            </p>

            <ul className="space-y-3 text-primary-foreground font-body text-lg lg:text-xl leading-relaxed fade-in">
              {formacion.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="font-body text-lg text-primary-foreground/80 italic mt-10 leading-relaxed fade-in">
              La formación que comparto aquí recoge una selección de las especializaciones que han ido dando forma a mi práctica clínica, junto con otras en diferentes áreas de intervención. Mi trayectoria continúa ampliándose a través de una actualización constante que me permite seguir profundizando y enriqueciendo mi práctica profesional.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SobreMi;
