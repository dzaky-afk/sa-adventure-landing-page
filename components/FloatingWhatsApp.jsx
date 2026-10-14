'use client';

import { useState, useEffect } from 'react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const waUrl =
    'https://api.whatsapp.com/send?phone=6281291068287&text=' +
    encodeURIComponent('Halo SA Adventure, saya ingin reservasi/tanya info paket Rafting & Trekking.');

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down more than 350px
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
      }`}
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Admin SA Adventure"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 no-underline"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-60 pointer-events-none" />

        {/* WhatsApp Icon */}
        <svg className="w-5 h-5 sm:w-6 sm:h-6 fill-white shrink-0" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.084-.304-.097-.694-.23-1.206-.452-2.126-.921-3.51-3.08-3.616-3.221-.106-.142-.862-1.146-.862-2.186 0-1.039.544-1.551.737-1.764.193-.212.422-.265.563-.265.141 0 .281.002.404.007.129.006.302-.049.472.361.176.423.6 1.464.653 1.57.053.106.088.23.018.371-.07.141-.106.229-.211.353-.106.124-.222.277-.317.371-.106.106-.217.221-.093.434.123.212.549.905 1.177 1.464.81.719 1.492.942 1.704 1.048.212.106.335.088.459-.053.123-.141.528-.618.669-.83.141-.212.282-.177.476-.106.194.07 1.233.582 1.444.688.211.106.352.159.405.247.053.088.053.512-.091.917z" />
        </svg>

        {/* Text visible on desktop */}
        <span className="hidden sm:inline-block font-sans text-xs font-bold tracking-wide">
          Chat Admin
        </span>
      </a>
    </div>
  );
}
