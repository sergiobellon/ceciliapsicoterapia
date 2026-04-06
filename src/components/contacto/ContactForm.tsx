import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [form, setForm] = useState({ nombre: '', telefono: '', email: '', mensaje: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nombre || !form.email) {
      toast({ title: 'Por favor, rellena al menos el nombre y el correo.', variant: 'destructive' });
      return;
    }
    toast({ title: '¡Mensaje enviado!', description: 'Me pondré en contacto contigo lo antes posible.' });
    setForm({ nombre: '', telefono: '', email: '', mensaje: '' });
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl fade-in">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block font-body text-lg text-primary mb-2">Nombre y apellidos</label>
            <input
              type="text"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              className="w-full bg-input border-none rounded-full px-6 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block font-body text-lg text-primary mb-2">Teléfono</label>
            <input
              type="tel"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              className="w-full bg-input border-none rounded-full px-6 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block font-body text-lg text-primary mb-2">Correo electrónico</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-input border-none rounded-full px-6 py-3 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <label className="block font-body text-lg text-primary mb-2">Cuéntame brevemente qué te ha traído hasta aquí</label>
            <textarea
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
              rows={4}
              className="w-full bg-input border-none rounded-3xl px-6 py-4 font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-primary text-primary-foreground font-body text-lg px-10 py-4 rounded-full hover:opacity-90 transition-opacity"
          >
            Enviar
          </button>
        </form>

        <p className="font-body text-xl lg:text-2xl text-primary font-medium text-center mt-10 italic leading-relaxed">
          Me pondré en contacto contigo lo antes posible para ofrecerte un primer espacio de encuentro.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
