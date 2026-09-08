import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactBanner from '@/components/contacto/ContactBanner';
import ContactForm from '@/components/contacto/ContactForm';
import { useFadeIn } from '@/hooks/useFadeIn';
import Seo from '@/components/Seo';

const Contacto = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref}>
      <Seo
        title="Pide cita | Cecilia de Gracia Gallego, psicóloga"
        description="Escríbeme para una primera consulta. Terapia presencial en Rubí y sesiones online. Teléfono, correo y formulario de contacto."
        path="/contacto"
      />
      <Header />
      <main className="pt-20">
        <ContactBanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
