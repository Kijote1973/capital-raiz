import { Building2, Home, FileText, AlertCircle, Factory, Scissors } from 'lucide-react';

/**
 * PropertyTypes Component
 * Design: 6 property type cards with icons
 * - Grid layout responsive to mobile and desktop
 * - Clear descriptions for each property type
 * - Consistent styling with ValueSection
 */

const propertyTypes = [
  {
    id: 1,
    title: 'Terrenos urbanos o periurbanos',
    description: 'Con potencial de desarrollo inmobiliario y revalorización.',
    icon: Building2,
  },
  {
    id: 2,
    title: 'Casas con potencial de remodelación',
    description: 'Propiedades que pueden aumentar su valor con mejoras estratégicas.',
    icon: Home,
  },
  {
    id: 3,
    title: 'Propiedades heredadas o detenidas',
    description: 'Activos familiares que necesitan gestión y activación.',
    icon: FileText,
  },
  {
    id: 4,
    title: 'Activos subutilizados',
    description: 'Propiedades que no generan rentabilidad óptima actualmente.',
    icon: AlertCircle,
  },
  {
    id: 5,
    title: 'Galpones o terrenos industriales',
    description: 'Espacios comerciales con oportunidades de reposicionamiento.',
    icon: Factory,
  },
  {
    id: 6,
    title: 'Predios con opción de subdivisión',
    description: 'Terrenos que pueden fraccionarse para múltiples proyectos.',
    icon: Scissors,
  },
];

export default function PropertyTypes() {
  return (
    <section id="properties" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="divider-accent" />
          </div>
          <h2 className="heading-lg mb-4">
            Buscamos propiedades con potencial
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Trabajamos con diversos tipos de activos inmobiliarios que tienen oportunidades de crecimiento y rentabilidad.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((property) => {
            const IconComponent = property.icon;
            return (
              <div
                key={property.id}
                className="card-elegant bg-white group hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="heading-sm mb-2 text-primary">
                      {property.title}
                    </h3>
                    <p className="text-body text-sm">
                      {property.description}
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
