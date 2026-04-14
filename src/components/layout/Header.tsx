import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logotipo.png';

const navLinks = [
  { label: 'Inicio', to: '/' },
  { label: 'Sobre mí', to: '/sobre-mi' },
  { label: 'Servicios', to: '/servicios' },
  { label: 'Pide Cita', to: '/contacto' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Cecilia de Gracia" className="h-[3.25rem] w-auto" />
          <div className="hidden sm:block leading-tight">
            <p className="font-display text-base font-semibold text-foreground">Cecilia de Gracia Gallego</p>
            <p className="text-sm text-muted-foreground">Psicóloga | Psicoterapia Integrativa Relacional</p>
            <p className="text-sm text-muted-foreground">Colegiada nº21816</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-xl transition-colors hover:text-primary ${
                location.pathname === link.to ? 'text-primary font-semibold' : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-t border-border px-4 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-3 font-body text-lg border-b border-border/50 ${
                location.pathname === link.to ? 'text-primary font-semibold' : 'text-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
