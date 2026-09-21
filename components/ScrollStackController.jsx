'use client';

import { useEffect, useState } from 'react';

export default function ScrollStackController() {
  const [activeStack, setActiveStack] = useState(0);

  const stackItems = [
    { id: 'hero', label: '01 • Hero' },
    { id: 'info', label: '02 • Info' },
    { id: 'harga', label: '03 • Harga' },
    { id: 'dokumentasi', label: '04 • Galeri' },
    { id: 'lokasi', label: '05 • Lokasi' },
  ];

  useEffect(() => {
    let ticking = false;

    const cards = [
      document.getElementById('hero'),
      document.getElementById('info'),
      document.getElementById('harga'),
      document.getElementById('dokumentasi'),
      document.getElementById('lokasi'),
    ].filter(Boolean);

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;

          // Detect active card for floating indicator
          let currentActive = 0;
          cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            if (rect.top <= windowHeight * 0.4) {
              currentActive = index;
            }
          });
          setActiveStack(currentActive);

          // Apply dynamic 3D depth and scale to stacked cards
          cards.forEach((card, index) => {
            if (index === 0) return; // Skip hero

            const rect = card.getBoundingClientRect();
            const nextCard = cards[index + 1];

            if (nextCard) {
              const nextRect = nextCard.getBoundingClientRect();
              const nextTop = nextRect.top;

              // When the next card starts overlapping this card
              if (nextTop < windowHeight && nextTop > 0) {
                const overlapProgress = Math.max(0, Math.min(1, (windowHeight - nextTop) / windowHeight));
                const scale = 1 - overlapProgress * 0.04;
                const brightness = 1 - overlapProgress * 0.08;
                card.style.transform = `scale(${scale})`;
                card.style.filter = `brightness(${brightness})`;
              } else if (nextTop <= 0) {
                card.style.transform = `scale(0.96)`;
                card.style.filter = `brightness(0.92)`;
              } else {
                card.style.transform = `scale(1)`;
                card.style.filter = `brightness(1)`;
              }
            } else {
              card.style.transform = `scale(1)`;
              card.style.filter = `brightness(1)`;
            }
          });

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="stack-navigator" aria-label="Navigasi Tumpukan Kartu">
      <div className="stack-nav-track">
        {stackItems.map((item, idx) => (
          <button
            key={item.id}
            className={`stack-nav-dot ${activeStack === idx ? 'active' : ''}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Scroll ke ${item.label}`}
          >
            <span className="stack-nav-tooltip">{item.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
