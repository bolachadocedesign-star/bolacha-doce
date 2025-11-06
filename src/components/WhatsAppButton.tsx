'use client';

import Image from 'next/image';

export function WhatsAppButton() {
  const handleWhatsApp = () => {
    const phoneNumber = "5531971750654";
    const message = "Olá! Gostaria de saber mais sobre os convites personalizados.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsApp}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 rounded-full p-0 shadow-lg transition-all hover:scale-110 active:scale-95 border-0 bg-transparent"
      aria-label="Fale conosco no WhatsApp"
    >
      <Image
        src="/icon/Icone_whatsapp_bolacha_doce.png"
        alt="Fale conosco no WhatsApp"
        width={64}
        height={64}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full"
      />
    </button>
  );
}

