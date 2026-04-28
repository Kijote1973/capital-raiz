import { TrendingUp, Lightbulb, Briefcase, Target } from 'lucide-react';

/**
 * ValueSection Component
 * Design: 4 elegant cards showcasing core value propositions
 * - Clean grid layout with hover effects
 * - Icons and descriptions for each service
 * - Subtle shadows and transitions
 */

const valuePropositions = [
  {
    id: 1,
    title: 'Evaluación estratégica',
    description: 'Análisis profundo del potencial inmobiliario, mercado y oportunidades de rentabilidad.',
    icon: TrendingUp,
  },
  {
    id: 2,
    title: 'Modelo de negocio',
    description: 'Estructuramos estrategias personalizadas: venta, renta, desarrollo o gestión integral.',
    icon: Lightbulb,
  },
  {
    id: 3,
    title: 'Gestión integral',
    description: 'Nos encargamos de aspectos legales, técnicos y administrativos de tu propiedad.',
    icon: Briefcase,
  },
  {
    id: 4,
    title: 'Maximización de rentabilidad',
    description: 'Optimizamos cada aspecto para obtener los mejores resultados financieros.',
    icon: Target,
  },
];

export default function ValueSection() {
  return (
    <section id="value" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="divider-accent" />
          </div>
          <h2 className="heading-lg mb-4">
            Convertimos potencial inmobiliario en valor real
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Un enfoque integral que combina análisis, estrategia y ejecución para maximizar el valor de tu propiedad.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {valuePropositions.map((prop) => {
            const IconComponent = prop.icon;
            return (
              <div
                key={prop.id}
                className="card-elegant group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-sm mb-2 text-primary">
                      {prop.title}
                    </h3>
                    <p className="text-body text-sm">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
