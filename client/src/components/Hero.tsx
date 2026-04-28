/**
 * Hero Component
 * Design: Bold, institutional hero section with clear value proposition
 * - Elegant background with subtle gradient
 * - Strong headline and supporting text
 * - Two CTAs: primary (evaluate property) and secondary (learn process)
 * - Mobile-first responsive design
 */

interface HeroProps {
  onEvaluateClick?: () => void;
  onProcessClick?: () => void;
}

export default function Hero({ onEvaluateClick, onProcessClick }: HeroProps) {
  const handleEvaluateClick = () => {
    onEvaluateClick?.();
    const contactForm = document.getElementById('contact');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProcessClick = () => {
    onProcessClick?.();
    const processSection = document.getElementById('process');
    processSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-white to-secondary opacity-60" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Accent divider */}
          <div className="flex justify-center mb-6">
            <div className="divider-accent" />
          </div>

          {/* Main headline */}
          <h1 className="heading-xl mb-6 leading-tight">
            Haz que tu propiedad trabaje para ti
          </h1>

          {/* Subtitle */}
          <p className="text-body text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Evaluamos, estructuramos y gestionamos oportunidades inmobiliarias para transformar terrenos y propiedades subutilizadas en activos rentables.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleEvaluateClick}
              className="btn-primary w-full sm:w-auto"
            >
              Evaluar mi propiedad
            </button>
            <button
              onClick={handleProcessClick}
              className="btn-outline w-full sm:w-auto"
            >
              Conocer el proceso
            </button>
          </div>

          {/* Trust indicator */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-foreground/60 mb-4">
              Confiado por propietarios y inversores en toda la región
            </p>
            <div className="flex justify-center gap-8 flex-wrap">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-foreground/60">Propiedades evaluadas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">$2B+</div>
                <div className="text-xs text-foreground/60">En transacciones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-xs text-foreground/60">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
