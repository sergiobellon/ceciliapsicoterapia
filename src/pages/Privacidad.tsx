import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useFadeIn } from '@/hooks/useFadeIn';
import Seo from '@/components/Seo';

const Privacidad = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref}>
      <Seo
        title="Política de privacidad | Cecilia de Gracia Gallego"
        description="Información sobre el tratamiento de datos personales facilitados a través de este sitio web."
        path="/privacidad"
      />
      <Header />
      <main className="pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl space-y-8 font-body text-lg text-foreground/85 leading-relaxed">
          <h1 className="font-display text-3xl sm:text-4xl text-foreground fade-in">
            Política de privacidad
          </h1>

          <section className="space-y-3 fade-in">
            <h2 className="font-display text-2xl text-primary">Responsable del tratamiento</h2>
            <p>
              Cecilia de Gracia Gallego, psicóloga colegiada nº21816, es la responsable del
              tratamiento de los datos personales que nos facilites a través de este sitio web.
              Puedes contactar en el correo electrónico ceciliagraciagallego@gmail.com.
            </p>
          </section>

          <section className="space-y-3 fade-in">
            <h2 className="font-display text-2xl text-primary">Finalidad del tratamiento</h2>
            <p>
              Los datos facilitados a través del formulario de contacto (nombre, teléfono, correo
              electrónico y mensaje) se utilizan exclusivamente para responder a tu solicitud,
              ofrecerte un primer espacio de encuentro y gestionar la relación terapéutica en caso
              de que se inicie.
            </p>
          </section>

          <section className="space-y-3 fade-in">
            <h2 className="font-display text-2xl text-primary">Base jurídica</h2>
            <p>
              El tratamiento de tus datos se basa en tu consentimiento, otorgado al marcar la
              casilla de aceptación de esta política de privacidad, y, en su caso, en la ejecución
              de la relación terapéutica.
            </p>
          </section>

          <section className="space-y-3 fade-in">
            <h2 className="font-display text-2xl text-primary">Conservación y destinatarios</h2>
            <p>
              Los datos se conservarán el tiempo necesario para atender tu solicitud y, en caso de
              iniciarse una relación terapéutica, durante el período exigido por la normativa
              sanitaria. No se cederán datos a terceros salvo obligación legal. La información
              relativa a la salud se trata con especial confidencialidad, conforme al secreto
              profesional.
            </p>
          </section>

          <section className="space-y-3 fade-in">
            <h2 className="font-display text-2xl text-primary">Tus derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición,
              limitación del tratamiento y portabilidad escribiendo a
              ceciliagraciagallego@gmail.com. También tienes derecho a retirar el consentimiento en
              cualquier momento y a reclamar ante la Agencia Española de Protección de Datos
              (www.aepd.es).
            </p>
          </section>

          <p className="text-base text-muted-foreground fade-in">
            Esta política se actualizó por última vez en septiembre de 2026.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidad;
