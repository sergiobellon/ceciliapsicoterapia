import { Link } from 'react-router-dom';
import regulacionImg from '@/assets/paisaje-atardecer.webp';
import relacionesImg from '@/assets/relaciones.jpg';
import traumaImg from '@/assets/trauma.jpg';
import dueloImg from '@/assets/duelo.jpg';
import comidaImg from '@/assets/relacion-comida.jpg';
import autoconocimientoImg from '@/assets/autoconocimiento.jpg';

const areas = [
  { id: 'regulacion-emocional', label: 'Regulación emocional', img: regulacionImg },
  { id: 'dificultades-relacionales', label: 'Dificultades relacionales', img: relacionesImg },
  { id: 'trauma', label: 'Trauma', img: traumaImg },
  { id: 'duelo', label: 'Duelo y pérdidas', img: dueloImg },
  { id: 'trastornos-alimentarios', label: 'Trastornos Alimentarios', img: comidaImg },
  { id: 'desarrollo-personal', label: 'Desarrollo Personal', img: autoconocimientoImg },
];

const AreasGrid = () => (
  <section className="py-16 lg:py-24">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2 fade-in">
        Psicóloga y Psicoterapeuta
      </p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-12 fade-in">
        Áreas de acompañamiento
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-10">
        {areas.map((area) => (
          <Link
            key={area.id}
            to={`/servicios#${area.id}`}
            className="group fade-in flex flex-col items-center"
          >
            <div className="w-40 h-52 sm:w-48 sm:h-64 lg:w-56 lg:h-72 rounded-3xl overflow-hidden mb-4">
              <img
                src={area.img}
                alt={area.label}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="font-body text-xl sm:text-2xl lg:text-3xl text-foreground group-hover:text-primary transition-colors">
              {area.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default AreasGrid;
