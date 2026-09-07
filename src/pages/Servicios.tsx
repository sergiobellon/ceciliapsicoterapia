import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ServiceDetail from '@/components/servicios/ServiceDetail';
import { useFadeIn } from '@/hooks/useFadeIn';

import regulacionAsset from '@/assets/paisaje-atardecer.webp.asset.json';
import relacionesImg from '@/assets/relaciones.jpg';
import traumaImg from '@/assets/trauma.jpg';
import dueloImg from '@/assets/duelo.jpg';
import comidaImg from '@/assets/relacion-comida.jpg';
import autoconocimientoImg from '@/assets/autoconocimiento.jpg';

const services = [
  {
    id: 'regulacion-emocional',
    title: 'Regulación emocional',
    text: 'A veces las emociones se vuelven intensas, confusas o difíciles de sostener, generando ansiedad, estados depresivos, dificultad en el control de impulsos, bloqueo o sensación de inestabilidad. Estas formas de gestionar lo que sientes están relacionadas con tu historia y con la manera en que has aprendido a relacionarte contigo y con los demás. En terapia, trabajamos para comprender el sentido de lo que te ocurre y desarrollar formas más ajustadas de regulación emocional.',
    highlight: 'Cuando entendemos el mensaje que trae la emoción, cambia también la manera de relacionarnos con ella.',
    image: regulacionAsset.url,
  },
  {
    id: 'dificultades-relacionales',
    title: 'Dificultades relacionales',
    text: 'Las relaciones pueden convertirse en una fuente de malestar cuando aparecen conflictos repetidos, dificultad para poner límites o sensación de desconexión. Muchas de estas dinámicas están vinculadas a patrones que se han ido construyendo a lo largo del tiempo y que tienden a repetirse en el presente. En terapia, exploramos cómo se activan estos patrones para construir formas de relación más conscientes, en sintonía contigo y, por tanto, más satisfactorias.',
    highlight: 'Comprender lo que se activa en el vínculo permite abrir nuevas maneras de relacionarte.',
    image: relacionesImg,
  },
  {
    id: 'trauma',
    title: 'Trauma',
    text: 'Algunas experiencias dejan una huella que sigue presente en la forma de sentir, reaccionar o relacionarse. Lo vivido puede quedar registrado a nivel emocional y corporal, influyendo en cómo interpretas lo que ocurre y en cómo te vinculas. En terapia, trabajamos para integrar estas experiencias de forma progresiva, favoreciendo una mayor sensación de estabilidad y regulación.',
    highlight: 'Cuando lo vivido puede ser comprendido e integrado, deja de tener el mismo impacto en el presente.',
    image: traumaImg,
  },
  {
    id: 'duelo',
    title: 'Duelo y pérdidas',
    text: 'Las pérdidas pueden generar un impacto emocional profundo que a veces resulta difícil de sostener o elaborar. El duelo es un proceso natural, pero puede complicarse cuando no hay espacio suficiente para sentir o integrar lo ocurrido.\nEn terapia, trabajamos para acompañarte en este proceso respetando tu ritmo, facilitando dar lugar a las emociones y elaborar la experiencia.',
    highlight: 'Cuando el duelo puede ser vivido y comprendido, se transforma en una experiencia que puede integrarse en tu historia.',
    image: dueloImg,
  },
  {
    id: 'trastornos-alimentarios',
    title: 'Trastornos Alimentarios',
    text: 'La relación con la comida, el cuerpo y la imagen corporal puede convertirse en una forma de gestionar el malestar emocional, el control o la autoimagen. Más allá de la conducta, se aborda la función que cumple en la regulación emocional y en la relación contigo.\nEn terapia, el trabajo consiste en comprender el sentido de estos patrones, reconstruir la relación con el cuerpo y la alimentación, y desarrollar formas más equilibradas de sostener lo que sientes.',
    highlight: 'A medida que cambia la relación contigo, también puede transformarse la relación con la comida y el cuerpo.',
    image: comidaImg,
  },
  {
    id: 'desarrollo-personal',
    title: 'Desarrollo Personal',
    text: 'A veces aparece inseguridad, autoexigencia o dificultad para reconocer el propio valor. La forma en que te percibes a ti misma, a los demás y al mundo suele construirse a lo largo de la historia personal, dando lugar a creencias y patrones que pueden generar malestar o limitar tu bienestar.\nEn terapia, exploramos estas ideas y la manera en que influyen en tu experiencia para favorecer una mayor comprensión de ti y construir una relación más coherente y ajustada contigo.',
    highlight: 'Cuando cambia la forma en que te comprendes, también cambia la manera en que te relacionas contigo y con los demás.',
    image: autoconocimientoImg,
  },
];

const Servicios = () => {
  const ref = useFadeIn();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div ref={ref}>
      <Header />
      <main className="pt-20">
        <div className="text-center py-12 lg:py-16 fade-in">
          <p className="font-body text-sm uppercase tracking-widest text-muted-foreground mb-2">
            Psicóloga y Psicoterapeuta
          </p>
          <h1 className="font-display text-3xl sm:text-4xl text-foreground mb-6">
            Áreas de acompañamiento
          </h1>
          <p className="font-body text-lg lg:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
            Acompaño a jóvenes y adultos en diferentes momentos de dificultad, ofreciendo un espacio terapéutico desde el que comprender lo que ocurre y favorecer cambios que permitan recuperar equilibrio y bienestar.
          </p>
        </div>

        {services.map((s, i) => (
          <ServiceDetail
            key={s.id}
            {...s}
            reverse={i % 2 === 1}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
