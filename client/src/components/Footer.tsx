import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

/**
 * Footer Component
 * Design: Professional footer with contact info and navigation
 * - Company info and slogan
 * - Contact details
 * - Internal navigation links
 * - Back to top button
 */

interface FooterProps {
  onNavigate?: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNavClick = (id: string) => {
    onNavigate?.(id);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { label: 'Qué hacemos', id: 'value' },
    { label: 'Propiedades', id: 'properties' },
    { label: 'Proceso', id: 'process' },
    { label: 'Contacto', id: 'contact' },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Capital <span className="text-accent">Raíz</span>
            </h3>
            <p className="text-accent text-sm font-medium mb-4">
              Convertimos tu propiedad en inversión
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Transformamos propiedades subutilizadas en activos rentables a través de evaluación estratégica, gestión integral y análisis financiero riguroso.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-white/70 hover:text-accent transition-colors text-sm text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>Evaluación estratégica</li>
              <li>Modelo de negocio</li>
              <li>Gestión integral</li>
              <li>Maximización de rentabilidad</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:contacto@capitalraiz.cl"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contacto@capitalraiz.cl
              </a>
              <a
                href="tel:+56900000000"
                className="flex items-center gap-2 text-white/70 hover:text-accent transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                +56 9 0000 0000
              </a>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="w-4 h-4" />
                Santiago, Chile
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © 2024 Capital Raíz. Todos los derechos reservados.
          </p>

          {/* Back to Top Button */}
          <button
            onClick={handleBackToTop}
            className="flex items-center gap-2 px-4 py-2 bg-accent/10 hover:bg-accent/20 rounded-lg transition-colors text-accent text-sm font-medium"
          >
            Volver al inicio
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
