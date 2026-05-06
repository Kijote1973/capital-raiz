import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ValueSection from "./components/ValueSection";
import PropertyTypes from "./components/PropertyTypes";
import ProcessSection from "./components/ProcessSection";
import TrustSection from "./components/TrustSection";
import ContactForm from "./components/ContactForm";
import SuccessGallery from "./components/SuccessGallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ChatBot from "./components/ChatBot";

/**
 * Capital Raíz Landing Page
 * 
 * Design Philosophy:
 * - Elegant, institutional aesthetic for real estate investment
 * - Color palette: Dark blue (#0B1F3A), soft gold (#C9A24A), white, light beige (#F7F4EE)
 * - Mobile-first responsive design
 * - Smooth scroll navigation
 * - Professional typography and subtle animations
 */

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <div className="min-h-screen flex flex-col bg-white">
            {/* Header */}
            <Header onNavigate={handleNavigate} />

            {/* Main Content */}
            <main className="flex-1">
              {/* Hero Section */}
              <Hero
                onEvaluateClick={() => handleNavigate('contact')}
                onProcessClick={() => handleNavigate('process')}
              />

              {/* Value Proposition Section */}
              <ValueSection />

              {/* Property Types Section */}
              <PropertyTypes />

              {/* Process Section */}
              <ProcessSection />

              {/* Trust Section */}
              <TrustSection />

              {/* Success Gallery Section */}
              <SuccessGallery />

              {/* FAQ Section */}
              <FAQ />

              {/* Contact Form Section */}
              <ContactForm />
            </main>

            {/* Footer */}
            <Footer onNavigate={handleNavigate} />

            {/* WhatsApp Button */}
            <WhatsAppButton />

            {/* ChatBot */}
            <ChatBot />
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
