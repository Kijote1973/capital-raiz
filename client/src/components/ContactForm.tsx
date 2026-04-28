import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

/**
 * ContactForm Component
 * Design: Professional contact form with validation
 * - 6 fields: Name, Phone, Email, Property Type, Location, Message
 * - Client-side validation
 * - Success/error states
 * - Elegant styling consistent with brand
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

    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
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
    }, 1000);
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
                placeholder="+56 9 0000 0000"
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
                <option value="">Selecciona un tipo de propiedad</option>
                {propertyTypeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
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
                placeholder="Ciudad, región o dirección"
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
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu propiedad y tus objetivos..."
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
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Enviando...' : 'Solicitar evaluación'}
            </button>

            {/* Required Fields Note */}
            <p className="text-xs text-foreground/60 mt-4 text-center">
              Los campos marcados con * son obligatorios
            </p>
          </form>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-foreground/60">Email</p>
              <p className="font-semibold text-primary">contacto@capitalraiz.cl</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-foreground/60">Teléfono</p>
              <p className="font-semibold text-primary">+56 9 0000 0000</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <p className="text-sm text-foreground/60">Ubicación</p>
              <p className="font-semibold text-primary">Santiago, Chile</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
