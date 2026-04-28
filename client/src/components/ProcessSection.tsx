import { Phone, Search, Lightbulb, Cog, TrendingUp } from 'lucide-react';

/**
 * ProcessSection Component
 * Design: 5-step timeline showing the Capital Raíz process
 * - Vertical timeline on mobile, horizontal on desktop
 * - Icons for each step
 * - Clear progression and professional styling
 */

const steps = [
  {
    id: 1,
    number: '1',
    title: 'Nos contactas',
    description: 'Inicia el proceso con una consulta inicial sin compromiso.',
    icon: Phone,
  },
  {
    id: 2,
    number: '2',
    title: 'Evaluamos el activo',
    description: 'Análisis integral de la propiedad, mercado y oportunidades.',
    icon: Search,
  },
  {
    id: 3,
    number: '3',
    title: 'Diseñamos una estrategia',
    description: 'Propuesta personalizada con opciones de rentabilidad.',
    icon: Lightbulb,
  },
  {
    id: 4,
    number: '4',
    title: 'Gestionamos la operación',
    description: 'Ejecutamos todos los aspectos legales, técnicos y administrativos.',
    icon: Cog,
  },
  {
    id: 5,
    number: '5',
    title: 'Rentabilizamos el resultado',
    description: 'Maximizamos retornos y generamos valor para tu patrimonio.',
    icon: TrendingUp,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="divider-accent" />
          </div>
          <h2 className="heading-lg mb-4">
            Un proceso claro, profesional y transparente
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Seguimos un enfoque estructurado que garantiza transparencia en cada etapa de la gestión de tu propiedad.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-accent/30" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.id} className="flex flex-col items-center md:items-center">
                  {/* Step Circle */}
                  <div className="mb-6 md:mb-8 relative">
                    <div className="w-16 h-16 md:w-14 md:h-14 rounded-full bg-accent text-white flex items-center justify-center font-bold text-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {step.number}
                    </div>
                    {/* Mobile connector line */}
                    {index < steps.length - 1 && (
                      <div className="md:hidden absolute top-16 left-1/2 w-0.5 h-12 bg-accent/30 -translate-x-1/2" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="text-center">
                    <div className="mb-3 flex justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="heading-sm mb-2 text-primary">
                      {step.title}
                    </h3>
                    <p className="text-body text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-body mb-6">
            ¿Listo para comenzar? Contacta con nuestro equipo hoy.
          </p>
          <button
            onClick={() => {
              const contactForm = document.getElementById('contact');
              contactForm?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Solicitar evaluación
          </button>
        </div>
      </div>
    </section>
  );
}
