import { useState } from 'react';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * Design: Elegant, institutional navigation with mobile hamburger menu
 * - Logo: "Capital Raíz" text-based
 * - Navigation: Qué hacemos, Propiedades, Proceso, Contacto
 * - CTA: "Evaluar propiedad" button
 * - Mobile: Hamburger menu with smooth transitions
 */

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Qué hacemos', id: 'value' },
    { label: 'Propiedades', id: 'properties' },
    { label: 'Proceso', id: 'process' },
    { label: 'Contacto', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate?.(id);
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTA = () => {
    const contactForm = document.getElementById('contact');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">
              Capital <span className="text-accent">Raíz</span>
            </h1>
            <p className="text-xs text-accent font-medium">
              Convertimos tu propiedad en inversión
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-foreground hover:text-accent transition-colors font-medium text-sm"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <button
            onClick={handleCTA}
            className="hidden md:block btn-secondary text-sm"
          >
            Evaluar propiedad
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary" />
            ) : (
              <Menu className="w-6 h-6 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-left px-4 py-2 text-foreground hover:bg-secondary rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleCTA}
                className="btn-secondary w-full mt-2"
              >
                Evaluar propiedad
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
