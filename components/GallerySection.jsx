'use client';

import { useState } from 'react';

const PHOTOS = [
  {
    src: '/images/gallery/whitewater-rafting-rapids.png',
    title: 'Jeram Deras Cisadane',
    subtitle: 'Arung Jeram & Adrenalin Murni',
    tag: 'Rafting',
  },
  {
    src: '/images/gallery/family-gathering-water-splash.jpg',
    title: 'Water Splash Gathering',
    subtitle: 'Kebersamaan & Tawa Lepas',
    tag: 'Family & Office',
  },
  {
    src: '/images/gallery/4.png',
    title: 'Team Bonding & Outbound',
    subtitle: 'Paintball Games & Kekompakan',
    tag: 'Outbound',
  },
  {
    src: '/images/gallery/color-powder-celebration.jpg',
    title: 'Color Celebration',
    subtitle: 'Puncak Kemeriahan Acara',
    tag: 'Fun Games',
  },
];

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2 block font-sans">
            Dokumentasi Kegiatan
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif tracking-tight">
            Momen Nyata Bersama SA Adventure
          </h2>
          <p className="font-light text-xs sm:text-sm text-neutral-400 font-sans max-w-lg mx-auto leading-relaxed mt-2.5">
            Setiap tawa, deburan air, dan kebersamaan diabadikan dalam dokumentasi profesional untuk rombongan Anda.
          </p>
        </div>

        {/* Curated 4-Photo Showcase (4 Columns on Desktop, 2x2 on Mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {PHOTOS.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 cursor-pointer shadow-sm hover:border-neutral-600 transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4 transition-opacity">
                <span className="text-[9px] uppercase font-bold tracking-widest text-neutral-300 font-sans block mb-1">
                  {photo.tag}
                </span>
                <h3 className="font-serif text-sm sm:text-base text-white font-bold leading-tight mb-0.5">
                  {photo.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 font-light font-sans line-clamp-1 m-0">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Instagram Link */}
        <div className="text-center mt-8 sm:mt-10 font-sans">
          <a
            href="https://www.instagram.com/sa.adventure.ok/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-neutral-400 hover:text-white uppercase tracking-wider font-semibold transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Lihat Galeri Lengkap di Instagram @sa.adventure.ok &rarr;</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer"
              aria-label="Tutup foto"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-[16/10] max-h-[75vh] w-full overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-5 font-sans flex justify-between items-center bg-neutral-950">
              <div>
                <h4 className="font-serif text-lg text-white font-bold mb-0.5">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-neutral-400 font-light m-0">
                  {selectedPhoto.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="text-xs uppercase tracking-wider text-neutral-400 hover:text-white font-bold cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
