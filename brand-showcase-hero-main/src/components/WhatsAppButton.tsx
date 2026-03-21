import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // WhatsApp "wa.me" expects the phone number in international format without "+".
  const phone = "919324719780";
  const text = encodeURIComponent("Hi, I want to get a quote for Atelier door/wardrobe systems.");
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-[60] right-5 bottom-5 w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:opacity-95 transition-opacity"
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;

