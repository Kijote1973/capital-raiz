import { useState } from 'react';
import { TrendingUp, Home, MapPin, DollarSign } from 'lucide-react';

/**
 * SuccessGallery Component
 * Design: Before/After gallery showcasing successful property transformations
 * - Interactive before/after slider
 * - Detailed case information with ROI metrics
 * - Professional presentation of results
 * - Mobile-responsive grid layout
 */

interface SuccessCase {
  id: number;
  title: string;
  location: string;
  propertyType: string;
  beforePrice: string;
  afterPrice: string;
  roi: string;
  timeframe: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  highlights: string[];
}

const successCases: SuccessCase[] = [
  {
    id: 1,
    title: 'Terreno Urbano Transformado',
    location: 'Ñuñoa, Santiago',
    propertyType: 'Terreno urbano',
    beforePrice: '$150M',
    afterPrice: '$420M',
    roi: '180%',
    timeframe: '18 meses',
    description: 'Terreno subutilizado convertido en proyecto residencial de alto valor.',
    beforeImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    highlights: [
      'Subdivisión estratégica',
      'Zonificación optimizada',
      'Proyecto residencial aprobado',
    ],
  },
  {
    id: 2,
    title: 'Casa Remodelada para Renta',
    location: 'Providencia, Santiago',
    propertyType: 'Casa residencial',
    beforePrice: '$280M',
    afterPrice: '$380M',
    roi: '35%',
    timeframe: '12 meses',
    description: 'Casa antigua remodelada y convertida en propiedad de alquiler premium.',
    beforeImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    highlights: [
      'Remodelación integral',
      'Renta mensual: $2.8M',
      'ROI anual: 8.8%',
    ],
  },
  {
    id: 3,
    title: 'Galpón Industrial Reconvertido',
    location: 'Maipú, Santiago',
    propertyType: 'Galpón industrial',
    beforePrice: '$95M',
    afterPrice: '$280M',
    roi: '195%',
    timeframe: '24 meses',
    description: 'Galpón industrial transformado en espacio comercial moderno.',
    beforeImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    highlights: [
      'Certificación ambiental',
      'Inquilinos ancla confirmados',
      'Ingresos mensuales: $4.2M',
    ],
  },
  {
    id: 4,
    title: 'Propiedad Heredada Activada',
    location: 'Las Condes, Santiago',
    propertyType: 'Propiedad heredada',
    beforePrice: '$320M',
    afterPrice: '$520M',
    roi: '62.5%',
    timeframe: '14 meses',
    description: 'Propiedad familiar sin uso convertida en activo generador de ingresos.',
    beforeImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
    highlights: [
      'Gestión legal simplificada',
      'Renta mensual: $3.5M',
      'Patrimonio familiar protegido',
    ],
  },
];

export default function SuccessGallery() {
  const [selectedCase, setSelectedCase] = useState<SuccessCase>(successCases[0]);
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <section id="success" className="py-16 md:py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="divider-accent" />
          </div>
          <h2 className="heading-lg mb-4">
            Proyectos Realizados: Transformaciones Reales
          </h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Descubre cómo hemos convertido propiedades subutilizadas en activos rentables con resultados concretos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Before/After Slider */}
          <div className="lg:col-span-2">
            <div
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-square md:aspect-video rounded-lg overflow-hidden shadow-lg cursor-col-resize group"
            >
              {/* After Image */}
              <img
                src={selectedCase.afterImage}
                alt="Después"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden transition-all duration-100"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={selectedCase.beforeImage}
                  alt="Antes"
                  className="w-full h-full object-cover"
                  style={{ width: `${100 / (sliderPosition / 100)}%` }}
                />
              </div>

              {/* Slider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-accent transition-all duration-100"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white rounded-full p-3 shadow-lg">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19l7-7-7-7"
                    />
                  </svg>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                Antes
              </div>
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                Después
              </div>
            </div>

            {/* Case Details */}
            <div className="mt-8 bg-secondary rounded-lg p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div>
                  <p className="text-xs text-foreground/60 mb-1">Valor Inicial</p>
                  <p className="text-lg md:text-xl font-bold text-primary">
                    {selectedCase.beforePrice}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-foreground/60 mb-1">Valor Final</p>
                  <p className="text-lg md:text-xl font-bold text-primary">
                    {selectedCase.afterPrice}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-foreground/60 mb-1">ROI</p>
                  <p className="text-lg md:text-xl font-bold text-accent">
                    +{selectedCase.roi}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-foreground/60 mb-1">Timeframe</p>
                  <p className="text-lg md:text-xl font-bold text-primary">
                    {selectedCase.timeframe}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="heading-sm mb-2">{selectedCase.title}</h3>
                <p className="text-body text-sm mb-4">{selectedCase.description}</p>

                <div className="flex flex-wrap gap-2">
                  {selectedCase.highlights.map((highlight, index) => (
                    <span
                      key={index}
                      className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Case Selection */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              <h3 className="heading-sm mb-4">Otros Casos</h3>
              {successCases.map((caseItem) => (
                <button
                  key={caseItem.id}
                  onClick={() => {
                    setSelectedCase(caseItem);
                    setSliderPosition(50);
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                    selectedCase.id === caseItem.id
                      ? 'bg-accent text-white shadow-lg'
                      : 'bg-secondary hover:bg-secondary/80 text-primary'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {selectedCase.id === caseItem.id ? (
                        <TrendingUp className="w-5 h-5" />
                      ) : (
                        <Home className="w-5 h-5 opacity-60" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm leading-tight">
                        {caseItem.title}
                      </p>
                      <p className={`text-xs mt-1 ${selectedCase.id === caseItem.id ? 'text-white/80' : 'text-foreground/60'}`}>
                        <MapPin className="w-3 h-3 inline mr-1" />
                        {caseItem.location}
                      </p>
                      <p className={`text-xs font-bold mt-2 ${selectedCase.id === caseItem.id ? 'text-white' : 'text-accent'}`}>
                        <DollarSign className="w-3 h-3 inline mr-1" />
                        ROI: +{caseItem.roi}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Stats Box */}
            <div className="mt-6 bg-primary text-white rounded-lg p-4">
              <p className="text-xs text-white/80 mb-2">Promedio de Resultados</p>
              <div className="space-y-2">
                <div>
                  <p className="text-2xl font-bold">+118%</p>
                  <p className="text-xs text-white/80">ROI Promedio</p>
                </div>
                <div className="pt-2 border-t border-white/20">
                  <p className="text-xl font-bold">16 meses</p>
                  <p className="text-xs text-white/80">Timeframe Promedio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
