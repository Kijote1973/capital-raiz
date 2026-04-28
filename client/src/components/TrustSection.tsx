import { CheckCircle2, Shield, Users, Briefcase, Lock, FileCheck } from 'lucide-react';

/**
 * TrustSection Component
 * Design: Trust and differentiation section
 * - Highlighted trust message
 * - 6 key differentiators with icons
 * - Professional, institutional styling
 */

const differentiators = [
  {
    id: 1,
    title: 'Transparencia contractual',
    description: 'Acuerdos claros y justos, sin sorpresas ocultas.',
    icon: FileCheck,
  },
  {
    id: 2,
    title: 'Análisis financiero',
    description: 'Evaluaciones rigurosas basadas en datos y mercado.',
    icon: CheckCircle2,
  },
  {
    id: 3,
    title: 'Red de inversionistas',
    description: 'Acceso a capital y oportunidades de negocio.',
    icon: Users,
  },
  {
    id: 4,
    title: 'Gestión legal y técnica',
    description: 'Profesionales especializados en cada aspecto.',
    icon: Briefcase,
  },
  {
    id: 5,
    title: 'Enfoque patrimonial',
    description: 'Protegemos y maximizamos tu patrimonio familiar.',
    icon: Shield,
  },
  {
    id: 6,
    title: 'Confidencialidad',
    description: 'Máxima discreción en todas nuestras operaciones.',
    icon: Lock,
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary text-white">
      <div className="container">
        {/* Trust Message */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-accent rounded-full" />
          </div>
          <blockquote className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
            "Sabemos que una propiedad no es solo un activo: muchas veces representa años de esfuerzo, historia familiar y patrimonio. Por eso trabajamos con seriedad, análisis y reglas claras."
          </blockquote>
          <p className="text-white/80 text-lg">
            — El equipo de Capital Raíz
          </p>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 my-12 md:my-16" />

        {/* Differentiators */}
        <div className="mt-12 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16">
            Por qué confiar en Capital Raíz
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {differentiators.map((diff) => {
              const IconComponent = diff.icon;
              return (
                <div
                  key={diff.id}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors duration-300 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-accent/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">
                        {diff.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
