import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

/**
 * ContactForm Component - Con Formspree
 * Design: Professional contact form with validation
 * - 6 fields: Name, Phone, Email, Property Type, Location, Message
 * - Client-side validation
 * - Envío a Formspree para recibir correos
 * - Success/error states
 * - Elegant styling consistent with brand
 * 
 * Integración con Formspree:
 * 1. Visita https://formspree.io
 * 2. Crea una cuenta gratuita
 * 3. Crea un nuevo formulario y obtén el ID
 * 4. Reemplaza "YOUR_FORMSPREE_ID" con tu ID real
 */

interface FormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  location: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const propertyTypeOptions = [
  'Terreno urbano o periurbano',
  'Casa con potencial de remodelación',
  'Propiedad heredada o detenida',
  'Activo subutilizado',
  'Galpón o terreno industrial',
  'Predio con opción de subdivisión',
];

// IMPORTANTE: Reemplaza esto con tu ID de Formspree
// Obtén tu ID en https://formspree.io
const FORMSPREE_ID = "xdabykpw";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    location: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'El teléfono es requerido';
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Teléfono inválido';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.propertyType) {
      newErrors.propertyType = 'Selecciona un tipo de propiedad';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'La ubicación es requerida';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Verificar que Formspree esté configurado
    if (FORMSPREE_ID === "YOUR_FORMSPREE_ID") {
      setErrorMessage('El formulario no está configurado. Por favor, contacta al administrador.');
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    try {
      // Enviar a Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          propertyType: formData.propertyType,
          location: formData.location,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          propertyType: '',
          location: '',
          message: '',
        });
        setIsLoading(false);

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Error al enviar el formulario. Por favor intenta de nuevo.');
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex justify-center mb-4">
              <div className="divider-accent" />
            </div>
            <h2 className="heading-lg mb-4">
              Evalúa el potencial de tu propiedad
            </h2>
            <p className="text-body text-lg">
              Completa el formulario y nuestro equipo se contactará contigo en las próximas 24 horas.
            </p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-green-900">¡Solicitud enviada!</h3>
                <p className="text-sm text-green-800">
                  Gracias por tu interés. Nos contactaremos pronto para evaluar tu propiedad.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-red-900">Error</h3>
                <p className="text-sm text-red-800">{errorMessage}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm p-6 md:p-8">
            {/* Name Field */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                Nombre completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none ${
                  errors.name
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-border bg-white focus:border-accent'
                }`}
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.name}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-semibold text-primary mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+56 9 9076 1628"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none ${
                  errors.phone
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-border bg-white focus:border-accent'
                }`}
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.phone}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none ${
                  errors.email
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-border bg-white focus:border-accent'
                }`}
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.email}
                </p>
              )}
            </div>

            {/* Property Type Field */}
            <div className="mb-6">
              <label htmlFor="propertyType" className="block text-sm font-semibold text-primary mb-2">
                Tipo de propiedad *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none ${
                  errors.propertyType
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-border bg-white focus:border-accent'
                }`}
              >
                <option value="">Selecciona un tipo...</option>
                {propertyTypeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.propertyType && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.propertyType}
                </p>
              )}
            </div>

            {/* Location Field */}
            <div className="mb-6">
              <label htmlFor="location" className="block text-sm font-semibold text-primary mb-2">
                Ubicación *
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Ciudad, región o zona"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none ${
                  errors.location
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-border bg-white focus:border-accent'
                }`}
              />
              {errors.location && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.location}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                Cuéntanos sobre tu propiedad *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe el estado actual, desafíos y objetivos para tu propiedad..."
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 focus:outline-none resize-none ${
                  errors.message
                    ? 'border-red-500 bg-red-50 focus:border-red-600'
                    : 'border-border bg-white focus:border-accent'
                }`}
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" /> {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  Solicitar Evaluación
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-1">Teléfono</h3>
              <p className="text-body">+56 9 9076 1628</p>
            </div>
            <div className="text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-1">Email</h3>
              <p className="text-body">contacto@capitalraiz.cl</p>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-primary mb-1">Ubicación</h3>
              <p className="text-body">Santiago, Chile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
