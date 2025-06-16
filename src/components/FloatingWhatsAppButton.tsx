import React from "react";

const FloatingWhatsAppButton: React.FC = () => (
  <a
    href="https://wa.me/972527345641"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-2 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
  >
    <img
      src="/icons/whatsapp-svgrepo-com.svg"
      alt="WhatsApp"
      className="w-6 h-6"
    />
    <span className="hidden md:inline font-bold">שלחו לנו WhatsApp</span>
  </a>
);

export default FloatingWhatsAppButton;
