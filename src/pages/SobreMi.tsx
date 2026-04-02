import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';

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
      <Header />
      <main>
        {/* Banner */}
        <section className="bg-secondary pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="container mx-auto px-4 lg:px-8 fade-in">
            <h2 className="font-display text-2xl text-secondary-foreground mb-1">Sobre mí</h2>
            <h1 className="font-display text-3xl sm:text-4xl text-secondary-foreground font-semibold mb-2">
              Cecilia de Gracia Gallego
            </h1>
            <p className="font-body text-lg text-secondary-foreground/90">
              Psicóloga y Psicoterapeuta (colegiada nº21816)
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-6 font-body text-base lg:text-lg text-foreground/85 leading-relaxed">
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
              <strong>Ofrezco terapia presencial en Rubí y también online,</strong> facilitando el acceso al proceso terapéutico según las necesidades de cada persona.
            </p>
            <p className="fade-in font-medium italic text-primary">
              Si sientes que este puede ser un espacio para ti, quizá este sea un buen momento para empezar a mirarlo de otra manera.
            </p>

            <div className="pt-4 fade-in">
              <a
                href="#formacion"
                className="inline-block bg-primary text-primary-foreground font-body text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                Mi formación
              </a>
            </div>
          </div>
        </section>

        {/* Formación */}
        <section id="formacion" className="bg-primary py-16 lg:py-24 scroll-mt-24">
          <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
            <p className="font-body text-sm text-primary-foreground/70 mb-1 fade-in">Sobre mí</p>
            <h2 className="font-display text-2xl sm:text-3xl text-primary-foreground font-semibold mb-2 fade-in">
              Cecilia de Gracia Gallego
            </h2>
            <p className="font-body text-base text-primary-foreground/80 mb-10 fade-in">
              Psicóloga y Psicoterapeuta (colegiada nº21816)
            </p>

            <ul className="space-y-3 text-primary-foreground font-body text-base lg:text-lg leading-relaxed fade-in">
              {formacion.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="font-body text-base text-primary-foreground/80 italic mt-10 leading-relaxed fade-in">
              Mi formación se complementa con distintos cursos en áreas como regulación emocional, terapia sistémica, análisis transaccional y psicopatología, que aportan profundidad y coherencia a mi práctica clínica.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SobreMi;
