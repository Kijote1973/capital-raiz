import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * FAQ Component
 * Design: Interactive FAQ section with expandable answers
 * - Smooth accordion animations
 * - Professional Q&A styling
 * - Mobile-responsive layout
 * - Organized by categories
 */

interface FAQItem {
  id: number;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    category: 'Proceso',
    question: '¿Cuál es el primer paso para evaluar mi propiedad?',
    answer:
      'El primer paso es contactarnos a través del formulario o WhatsApp. Nuestro equipo realizará una consulta inicial sin compromiso para entender tu propiedad, ubicación y objetivos. Después, programaremos una evaluación presencial o virtual según tu preferencia.',
  },
  {
    id: 2,
    category: 'Proceso',
    question: '¿Cuánto tiempo tarda el proceso completo?',
    answer:
      'El timeframe depende del tipo de propiedad y estrategia. En promedio, nuestros casos toman entre 12 a 24 meses desde la evaluación inicial hasta la rentabilización. Algunos proyectos simples pueden completarse en 6-8 meses, mientras que desarrollos complejos pueden tomar más tiempo.',
  },
  {
    id: 3,
    category: 'Proceso',
    question: '¿Qué incluye la evaluación estratégica?',
    answer:
      'La evaluación estratégica incluye: análisis del mercado inmobiliario local, valuación de la propiedad, identificación de oportunidades de desarrollo, análisis de rentabilidad potencial, evaluación legal y técnica, y propuesta de modelo de negocio personalizado con proyecciones financieras.',
  },
  {
    id: 4,
    category: 'Rentabilidad',
    question: '¿Cuál es el ROI promedio que puedo esperar?',
    answer:
      'Nuestro ROI promedio es de +118% en proyectos completados. Sin embargo, esto varía según el tipo de propiedad y estrategia. Terrenos urbanos suelen tener ROI entre 150-200%, casas remodeladas 30-50%, y galpones reconvertidos 150-250%. Cada caso es único y proporcionamos proyecciones específicas.',
  },
  {
    id: 5,
    category: 'Rentabilidad',
    question: '¿Cómo se calcula la rentabilidad de una propiedad?',
    answer:
      'Calculamos rentabilidad considerando: valor inicial de la propiedad, inversión en mejoras/remodelación, costos operacionales, ingresos por renta o venta, impuestos y comisiones. El ROI se expresa como porcentaje del retorno sobre la inversión total realizada. Proporcionamos reportes detallados con todos los cálculos.',
  },
  {
    id: 6,
    category: 'Rentabilidad',
    question: '¿Cuáles son los costos asociados al proceso?',
    answer:
      'Los costos varían según la estrategia. Incluyen: evaluación inicial (sin costo), análisis técnico y legal, permisos municipales, remodelación o mejoras (si aplica), y comisión de gestión. Detallamos todos los costos en la propuesta inicial. No hay costos ocultos.',
  },
  {
    id: 7,
    category: 'Propiedades',
    question: '¿Qué tipos de propiedades evalúan?',
    answer:
      'Evaluamos terrenos urbanos y periurbanos, casas con potencial de remodelación, propiedades heredadas, activos subutilizados, galpones industriales y predios con opción de subdivisión. Buscamos propiedades con potencial de crecimiento en valor o generación de ingresos por renta.',
  },
  {
    id: 8,
    category: 'Propiedades',
    question: '¿Cuál es el valor mínimo de propiedad que evalúan?',
    answer:
      'No hay un mínimo establecido, pero trabajamos preferentemente con propiedades cuyo valor inicial es superior a $80M. Esto nos permite estructurar estrategias rentables con márgenes adecuados. Contáctanos para consultar sobre propiedades de menor valor.',
  },
  {
    id: 9,
    category: 'Gestión',
    question: '¿Ustedes se encargan de toda la gestión?',
    answer:
      'Sí, nos encargamos de la gestión integral: análisis, permisos, remodelación (coordinación), gestión legal, búsqueda de inquilinos o compradores, negociación y cierre. Eres propietario en todo momento y recibes reportes regulares del avance.',
  },
  {
    id: 10,
    category: 'Gestión',
    question: '¿Cómo es el modelo de comisión?',
    answer:
      'Nuestro modelo es flexible y se adapta a cada proyecto. Típicamente cobramos una comisión sobre el valor generado (entre 15-25% del ROI) o una tarifa de gestión fija. Discutimos y acordamos el modelo en la propuesta inicial. Siempre buscamos alineación de intereses.',
  },
];

const categories = ['Todos', 'Proceso', 'Rentabilidad', 'Propiedades', 'Gestión'];

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredFAQs =
    selectedCategory === 'Todos'
      ? faqItems
      : faqItems.filter((item) => item.category === selectedCategory);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center mb-4">
            <div className="divider-accent" />
          </div>
          <h2 className="heading-lg mb-4">Preguntas Frecuentes</h2>
          <p className="text-body text-lg max-w-2xl mx-auto">
            Resuelve tus dudas sobre el proceso de inversión, rentabilidad y gestión de propiedades.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setExpandedId(null);
              }}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-lg'
                  : 'bg-white text-primary hover:bg-white/80 border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleExpanded(faq.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-secondary/50 transition-colors duration-200 text-left"
              >
                <div className="flex-1">
                  <h3 className="heading-sm text-primary leading-tight">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-accent font-semibold mt-1">
                    {faq.category}
                  </p>
                </div>
                <div
                  className={`flex-shrink-0 p-2 rounded-lg bg-accent/10 transition-transform duration-300 ${
                    expandedId === faq.id ? 'rotate-180' : ''
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </div>
              </button>

              {/* Answer Content */}
              {expandedId === faq.id && (
                <div className="px-6 py-4 bg-secondary/50 border-t border-border animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-body text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-body mb-6">
            ¿No encontraste la respuesta que buscas?
          </p>
          <button
            onClick={() => {
              const contactForm = document.getElementById('contact');
              contactForm?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="btn-primary"
          >
            Contacta con nuestro equipo
          </button>
        </div>
      </div>
    </section>
  );
}
