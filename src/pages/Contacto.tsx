import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ContactBanner from '@/components/contacto/ContactBanner';
import ContactForm from '@/components/contacto/ContactForm';
import { useFadeIn } from '@/hooks/useFadeIn';

const Contacto = () => {
  const ref = useFadeIn();

  return (
    <div ref={ref}>
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
