'use client';

import { useState } from 'react';

export default function GallerySection() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [showAllMobile, setShowAllMobile] = useState(false);

  // Photos from screenshot (localhost:3001)
  const mosaicPhotos = {
    tallLeft: {
      src: '/images/gallery/1.png',
      title: 'Safety Briefing & Persiapan Basecamp',
      subtitle: 'Perlengkapan Helm & Life Jacket Standar Resmi',
    },
    topRight: {
      src: '/images/gallery/3.png',
      title: 'Sensasi Tawa & Jeram Cisadane',
      subtitle: 'Adrenalin dan Keseruan Murni Arung Jeram',
    },
    bottomRight1: {
      src: '/images/gallery/4.png',
      title: 'Team Bonding & Paintball Games',
      subtitle: 'Kekompakan Rombongan Perusahaan & Komunitas',
    },
    bottomRight2: {
      src: '/images/gallery/7.png',
      title: 'Selebrasi Dayung di Aliran Tenang',
      subtitle: 'Foto Bersama di Tengah Aliran Sungai Asri',
    },
  };

  // Additional authentic photos uploaded by user
  const uploadedPhotos = [
    {
      src: '/images/gallery/whitewater-rafting-rapids.png',
      title: 'Taklukkan Jeram Deras',
      tag: 'White Water Rafting',
      subtitle: 'Aksi menembus jeram berbatu grade III Sungai Cisadane',
    },
    {
      src: '/images/gallery/family-gathering-water-splash.jpg',
      title: 'Family Gathering Water Splash',
      tag: 'Family Gathering',
      subtitle: 'Momen keceriaan basah-basahan rombongan keluarga di sungai',
    },
    {
      src: '/images/gallery/anniversary-jegati-gathering.png',
      title: 'Company Anniversary Gathering',
      tag: 'Corporate Outing',
      subtitle: 'Perayaan ulang tahun instansi dan gathering di alam terbuka',
    },
    {
      src: '/images/gallery/color-powder-celebration.jpg',
      title: 'Color Powder Celebration',
      tag: 'Outbound & Fun Games',
      subtitle: 'Puncak kemeriahan outbound dengan selebrasi tepung warna',
    },
  ];

  // Combined flat list of all 8 photos for compact mobile view
  const allPhotos = [
    mosaicPhotos.tallLeft,
    mosaicPhotos.topRight,
    mosaicPhotos.bottomRight1,
    mosaicPhotos.bottomRight2,
    ...uploadedPhotos,
  ];

  const mobileDisplayPhotos = showAllMobile ? allPhotos : allPhotos.slice(0, 4);

  const waContactUrl =
    'https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20boleh%20minta%20portfolio%20foto%20dan%20video%20dokumentasi%20lengkap%20gathering?';

  return (
    <section id="galeri" className="py-12 sm:py-20 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-2 sm:mb-3 block font-sans">
            Authentic Moments
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif mb-2 sm:mb-3">Adventure Gallery</h2>
          <p className="font-light tracking-widest uppercase text-[10px] sm:text-xs text-gray-400 font-sans max-w-xl mx-auto leading-relaxed">
            Dokumentasi nyata keseruan arung jeram, gathering, dan outbound SA Adventure
          </p>
        </div>

        {/* 1. MOBILE COMPACT GRID (Phones Only: md:hidden) - Super compact & thumb-friendly! */}
        <div className="md:hidden">
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
            {mobileDisplayPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhoto(photo)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 group cursor-pointer border border-neutral-800 shadow-xs"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 active:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-2.5">
                  <h4 className="text-[11px] font-sans font-semibold text-white leading-tight line-clamp-1">
                    {photo.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle Button on Mobile: Show More / Show Less */}
          <div className="flex justify-center mt-3">
            <button
              type="button"
              onClick={() => setShowAllMobile(!showAllMobile)}
              className="text-[11px] font-sans font-semibold uppercase tracking-wider text-gray-300 hover:text-white py-1.5 px-4 rounded-full border border-gray-700 bg-neutral-900/80 cursor-pointer"
            >
              {showAllMobile ? 'Tampilkan Lebih Sedikit ▲' : `Lihat ${allPhotos.length - 4} Foto Lainnya (${allPhotos.length} Total) ▼`}
            </button>
          </div>
        </div>

        {/* 2. DESKTOP EDITORIAL MOSAIC (hidden on mobile, visible md+) */}
        <div className="hidden md:block">
          {/* Primary Mosaic Showcase */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Left Column: Tall Portrait Photo (Spans full height) */}
            <div
              onClick={() => setSelectedPhoto(mosaicPhotos.tallLeft)}
              className="gallery-item overflow-hidden relative cursor-pointer bg-neutral-900 group min-h-[460px] lg:min-h-[560px]"
            >
              <img
                src={mosaicPhotos.tallLeft.src}
                alt={mosaicPhotos.tallLeft.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="font-sans text-[10px] tracking-widest uppercase text-gray-300 mb-1">
                  Basecamp Preparation
                </span>
                <h3 className="font-serif text-xl text-white">{mosaicPhotos.tallLeft.title}</h3>
                <p className="text-xs text-gray-300 font-sans mt-1">{mosaicPhotos.tallLeft.subtitle}</p>
              </div>
            </div>

            {/* Right Column: 1 Top Photo + 2 Bottom Photos Side by Side */}
            <div className="flex flex-col gap-4">
              {/* Top Photo */}
              <div
                onClick={() => setSelectedPhoto(mosaicPhotos.topRight)}
                className="gallery-item overflow-hidden relative cursor-pointer bg-neutral-900 group h-[270px]"
              >
                <img
                  src={mosaicPhotos.topRight.src}
                  alt={mosaicPhotos.topRight.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="font-sans text-[10px] tracking-widest uppercase text-gray-300 mb-1">
                    Cisadane Rapids
                  </span>
                  <h3 className="font-serif text-xl text-white">{mosaicPhotos.topRight.title}</h3>
                  <p className="text-xs text-gray-300 font-sans mt-1">{mosaicPhotos.topRight.subtitle}</p>
                </div>
              </div>

              {/* Bottom 2 Photos Side by Side */}
              <div className="grid grid-cols-2 gap-4 h-[276px]">
                {/* Bottom Left Photo: Team Bonding Banner */}
                <div
                  onClick={() => setSelectedPhoto(mosaicPhotos.bottomRight1)}
                  className="gallery-item overflow-hidden relative cursor-pointer bg-neutral-900 group h-full"
                >
                  <img
                    src={mosaicPhotos.bottomRight1.src}
                    alt={mosaicPhotos.bottomRight1.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="font-sans text-[9px] tracking-widest uppercase text-gray-300 mb-1">
                      Team Bonding
                    </span>
                    <h4 className="font-serif text-sm text-white">{mosaicPhotos.bottomRight1.title}</h4>
                  </div>
                </div>

                {/* Bottom Right Photo: Crew Waving Paddles */}
                <div
                  onClick={() => setSelectedPhoto(mosaicPhotos.bottomRight2)}
                  className="gallery-item overflow-hidden relative cursor-pointer bg-neutral-900 group h-full"
                >
                  <img
                    src={mosaicPhotos.bottomRight2.src}
                    alt={mosaicPhotos.bottomRight2.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <span className="font-sans text-[9px] tracking-widest uppercase text-gray-300 mb-1">
                      River Crew
                    </span>
                    <h4 className="font-serif text-sm text-white">{mosaicPhotos.bottomRight2.title}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Grid: Additional Gathering Photos */}
          <div className="grid grid-cols-4 gap-4 mt-4">
            {uploadedPhotos.map((photo, index) => (
              <div
                key={index}
                onClick={() => setSelectedPhoto(photo)}
                className="gallery-item overflow-hidden relative cursor-pointer bg-neutral-900 group aspect-square"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="font-sans text-[9px] tracking-widest uppercase text-gray-300 mb-1">
                    {photo.tag}
                  </span>
                  <h4 className="font-serif text-sm text-white leading-tight">{photo.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center mt-8 sm:mt-12">
          <a
            href={waContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white px-6 sm:px-8 py-3 uppercase tracking-widest text-[11px] sm:text-xs font-bold hover:bg-white hover:text-brand-dark transition-colors duration-300 font-sans text-white no-underline"
          >
            Minta Dokumentasi Lengkap via WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal on Image Click */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 bg-black/70 text-white rounded-full w-8 h-8 flex items-center justify-center border border-white/20 text-base hover:bg-white hover:text-black transition-colors z-10 cursor-pointer"
              aria-label="Tutup foto"
            >
              ✕
            </button>
            <div className="max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
            </div>
            <div className="p-4 sm:p-5 bg-neutral-900 text-left">
              <h3 className="font-serif text-base sm:text-lg text-white mb-0.5">{selectedPhoto.title}</h3>
              {selectedPhoto.subtitle && (
                <p className="text-xs text-gray-400 font-sans m-0">{selectedPhoto.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
