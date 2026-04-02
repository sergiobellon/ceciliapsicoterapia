import { Link } from 'react-router-dom';

const steps = [
  {
    title: 'Lo que te trae aquí',
    text: 'Partimos de lo que estás viviendo en este momento, de aquello que de alguna manera se está moviendo en ti y te ha llevado a buscar ayuda.',
  },
  {
    title: 'Entender lo que ocurre',
    text: 'Exploramos lo que te ocurre y vamos entendiendo cómo se ha construido ese malestar y cómo influye en tus emociones, creencias y relaciones.',
  },
  {
    title: 'Encontrar equilibrio',
    text: 'El proceso terapéutico se orienta a favorecer la regulación emocional, la estabilidad interna y una forma de estar contigo en mayor sintonía y equilibrio.',
  },
];

const ProcesoSection = () => (
  <section className="py-16 lg:py-24 bg-muted/30">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-4 fade-in">
        Cómo es el proceso terapéutico
      </h2>
      <p className="font-body text-lg text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed fade-in">
        La Psicoterapia Integrativa Relacional entiende el malestar como algo que se construye en la historia y en los vínculos, y que puede ser comprendido y transformado en un espacio terapéutico seguro.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {steps.map((step) => (
          <div
            key={step.title}
            className="bg-primary/10 rounded-2xl p-6 text-left fade-in"
          >
            <h3 className="font-display text-lg font-semibold text-primary mb-3">{step.title}</h3>
            <p className="font-body text-base text-foreground/80 leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>

      <Link
        to="/contacto"
        className="inline-block bg-primary text-primary-foreground font-body text-base px-8 py-3 rounded-full hover:opacity-90 transition-opacity fade-in"
      >
        Pide Cita
      </Link>
    </div>
  </section>
);

export default ProcesoSection;
