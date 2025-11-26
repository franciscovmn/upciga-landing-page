import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5583999007432"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 animate-pulse-slow group"
      aria-label="Falar no WhatsApp"
    >
      <div className="absolute -inset-2 rounded-full bg-green-500/20 opacity-0 group-hover:opacity-100 animate-ping" />
      <MessageCircle className="w-8 h-8 text-white fill-current" />
      
      {/* Tooltip Mobile/Desktop */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs font-bold px-3 py-1.5 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        Fale Conosco
      </span>
    </a>
  );
};

export default WhatsAppButton;