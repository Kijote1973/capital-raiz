import { MessageCircle } from 'lucide-react';

/**
 * WhatsAppButton Component
 * Design: Floating WhatsApp button in bottom-right corner
 * - Fixed position with smooth animations
 * - Opens WhatsApp chat with pre-filled message
 * - Responsive and accessible
 * - Subtle hover effects
 */

export default function WhatsAppButton() {
  const phoneNumber = '+56900000000'; // Capital Raíz phone number
  const message = 'Hola, me gustaría evaluar el potencial de mi propiedad.';

  const handleWhatsAppClick = () => {
    // WhatsApp Web URL format: https://wa.me/{phone}?text={message}
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-40 p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      
      {/* Animated pulse effect */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-pulse opacity-75" style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
    </button>
  );
}
