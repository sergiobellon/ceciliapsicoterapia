import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import doctoraliaLogo from '@/assets/doctoralia-logo.png.asset.json';

const opiniones = [
  {
    text: 'Llevo más de un año en terapia con ella y mi experiencia ha sido muy positiva. Desde el primer momento me he sentido escuchada, comprendida y en un espacio seguro donde poder expresarme.',
    author: 'A.',
  },
  {
    text: 'Es muy importante para mí el espacio que ella crea en sesión, un espacio donde me siento segura y comprendida. Me ha ayudado mucho en diferentes momentos y siempre me da herramientas.',
    author: 'M.P.',
  },
  {
    text: 'Llevo más de un año en terapia con Ceci y no puedo estar más agradecido de haber iniciado este camino con ella. Desde el primer día me he sentido comprendido, acompañado y seguro.',
    author: 'J.H.',
  },
  {
    text: 'Acudí a consulta con Cecilia en un momento complicado y me sentí muy acompañada desde el principio. Me ayudó a entender y gestionar mis miedos con herramientas prácticas que he podido aplicar.',
    author: 'L.S.',
  },
  {
    text: 'Llevo varias sesiones y estoy súper cómoda, por su manera de escuchar y su capacidad para guiarme sin juzgarme han hecho que me sienta cómoda desde el primer día.',
    author: 'Y.',
  },
  {
    text: 'Estoy encantada de haber encontrado a Cecilia para tratar de vivir más tranquila y a gusto conmigo misma. Siempre me trata desde la empatía y dando espacio a hablar mis problemas.',
    author: 'E.E.',
  },
];

const PAGES = 2;

const TestimoniosSection = () => {
  const [page, setPage] = useState(0);

  const prev = () => setPage((p) => (p - 1 + PAGES) % PAGES);
  const next = () => setPage((p) => (p + 1) % PAGES);

  const visibles = opiniones.slice(page * 3, page * 3 + 3);

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-10 lg:mb-14 text-center fade-in">
          Experiencias del proceso terapéutico
        </h2>

        <div className="flex items-center gap-3 lg:gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Ver opiniones anteriores"
            className="shrink-0 h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 flex-1">
            {visibles.map((o) => (
              <figure
                key={o.author + o.text.slice(0, 12)}
                className="bg-primary rounded-3xl p-1"
              >
                <div className="bg-background rounded-[1.375rem] p-6 h-full flex flex-col">
                  <img
                    src={doctoraliaSymbol}
                    alt="Doctoralia"
                    className="h-7 w-auto mb-4 object-contain"
                  />
                  <div className="flex gap-1 text-primary mb-4" aria-label="5 de 5 estrellas">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-current" />
                    ))}
                  </div>
                  <blockquote className="font-body text-base lg:text-lg text-foreground/85 leading-relaxed flex-1">
                    “{o.text}”
                  </blockquote>
                  <figcaption className="font-body text-base text-primary mt-4">— {o.author}</figcaption>
                </div>
              </figure>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Ver más opiniones"
            className="shrink-0 h-11 w-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        <p className="font-body text-lg lg:text-xl text-center mt-10">
          <a
            href="https://www.doctoralia.es/z/ZD21KD"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Puedes encontrar más opiniones en mi perfil de Doctoralia
          </a>
        </p>
      </div>
    </section>
  );
};

export default TestimoniosSection;
