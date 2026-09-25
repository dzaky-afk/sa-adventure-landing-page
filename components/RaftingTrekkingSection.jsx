'use client';

import { useState } from 'react';

export default function RaftingTrekkingSection() {
  const [activeTrekkingImg, setActiveTrekkingImg] = useState(0);
  const [activeRaftingImg, setActiveRaftingImg] = useState(0);

  const raftingPhotos = [
    { src: '/images/gallery/whitewater-rafting-rapids.png', label: 'Jeram Deras' },
    { src: '/images/hero-gathering-water-splash.jpg', label: 'Water Splash' },
    { src: '/images/gallery/3.png', label: 'Dam 3 Meter' },
  ];

  const trekkingPhotos = [
    { src: '/images/trekking-curug-bogor.jpg', label: 'Curug Alami' },
  ];

  const reservationUrl = 'https://saadventure.web.id/';
  const waBaseUrl = 'https://api.whatsapp.com/send?phone=6281291068287';

  return (
    <section id="petualangan" className="py-16 sm:py-24 px-4 sm:px-6 bg-neutral-50/70 border-t border-b border-neutral-200/80">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2 block font-sans">
            Our Core Adventures
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
            Paket Petualangan Rafting &amp; Trekking
          </h2>
          <p className="mt-3 text-neutral-600 font-light font-sans text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Dua pengalaman petualangan alam terbuka terbaik di Bogor bersama tim pemandu profesional berlisensi resmi dan standar keselamatan teruji.
          </p>
        </div>

        {/* 2 Main Pillar Cards (Rafting & Trekking Side by Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 mb-12">
          
          {/* ================= CARD 1: PAKET RAFTING CISADANE ================= */}
          <div
            id="rafting"
            className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between scroll-mt-24"
          >
            {/* Visual Media Showcase */}
            <div className="relative">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100 relative">
                <img
                  src={raftingPhotos[activeRaftingImg].src}
                  alt="Paket Arung Jeram Cisadane Bogor"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md font-sans">
                  Rute 11 KM &bull; Grade III
                </div>
              </div>

              {/* Thumbnail Switcher */}
              <div className="p-2.5 bg-neutral-900/90 flex gap-2">
                {raftingPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveRaftingImg(idx)}
                    className={`flex-shrink-0 relative rounded-md overflow-hidden h-11 w-16 sm:h-12 sm:w-20 border-2 transition-all cursor-pointer ${
                      idx === activeRaftingImg
                        ? 'border-white scale-102 ring-1 ring-white/50'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block font-sans mb-1">
                  Arung Jeram Sungai Cisadane
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 font-bold mb-2">
                  White Water Rafting Adventure
                </h3>
                <p className="text-neutral-600 font-light text-xs sm:text-sm leading-relaxed font-sans mb-5">
                  Taklukkan aliran alami Sungai Cisadane Caringin sepanjang 11 KM dengan formasi jeram berbatu Grade III dan sensasi terjun di Dam 3 meter yang memacu adrenalin, aman untuk pemula hingga rombongan keluarga.
                </p>

                {/* 4 Quick Spec Chips */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Jarak &amp; Durasi</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">11 KM (&plusmn; 2 Jam)</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Tingkat Kesulitan</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">Grade III (Aman &amp; Seru)</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Keamanan</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">Guide &amp; Rescue Berlisensi</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Rest Area Bonus</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">Kelapa Muda Segar</span>
                  </div>
                </div>

                {/* Included Facilities List */}
                <div className="mb-6 font-sans">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 block mb-2">
                    Fasilitas Termasuk:
                  </span>
                  <ul className="text-xs text-neutral-600 font-light space-y-1.5 list-none p-0 m-0">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Perahu karet, dayung, helm &amp; pelampung standar resmi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Pemandu tiap perahu + tim penyelamat sungai (Rescue)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Asuransi kegiatan resmi untuk seluruh peserta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Kamar bilas, saung istirahat basecamp &amp; transportasi lokal</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-neutral-100 font-sans">
                <a
                  href={reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors no-underline text-center shadow-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="16" y1="14" x2="16" y2="18" />
                  </svg>
                  <span>Hitung Biaya Rafting</span>
                </a>
                <a
                  href={`${waBaseUrl}&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20jadwal%20dan%20detail%20Paket%20Rafting%20Cisadane.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 hover:text-black py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors no-underline text-center"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: PAKET NATURE & CURUG TREKKING ================= */}
          <div
            id="trekking"
            className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between scroll-mt-24"
          >
            {/* Visual Media Showcase */}
            <div className="relative">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100 relative">
                <img
                  src={trekkingPhotos[activeTrekkingImg].src}
                  alt="Paket Nature Trekking Curug & Hutan Pinus Bogor"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md font-sans">
                  Eksplorasi Alam &bull; Curug Tersembunyi
                </div>
              </div>

              {/* Thumbnail Switcher */}
              <div className="p-2.5 bg-neutral-900/90 flex gap-2">
                {trekkingPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTrekkingImg(idx)}
                    className={`flex-shrink-0 relative rounded-md overflow-hidden h-11 w-16 sm:h-12 sm:w-20 border-2 transition-all cursor-pointer ${
                      idx === activeTrekkingImg
                        ? 'border-white scale-102 ring-1 ring-white/50'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.label}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-7 flex flex-col flex-grow justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-400 block font-sans mb-1">
                  Eksplorasi Alam Sentul &amp; Bogor
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 font-bold mb-2">
                  Nature &amp; Waterfall Trekking
                </h3>
                <p className="text-neutral-600 font-light text-xs sm:text-sm leading-relaxed font-sans mb-5">
                  Menyusuri jalur setapak alami perbukitan hijau, hamparan persawahan terasering, rimbunnya hutan pinus berhawa sejuk, dan berakhir di curug (air terjun) alami yang jernih dan menyegarkan tubuh serta pikiran.
                </p>

                {/* 4 Quick Spec Chips */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Pilihan Jalur</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">Easy / Medium / Adventure</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Destinasi Utama</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">Curug &amp; Hutan Pinus</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Pemandu</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">Local Guide Berpengalaman</span>
                  </div>
                  <div className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">Refreshment</span>
                    <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block">Air Mineral &amp; Buah Segar</span>
                  </div>
                </div>

                {/* Included Facilities List */}
                <div className="mb-6 font-sans">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-900 block mb-2">
                    Fasilitas Termasuk:
                  </span>
                  <ul className="text-xs text-neutral-600 font-light space-y-1.5 list-none p-0 m-0">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Pemandu lokal profesional (penunjuk rute &amp; sejarah lokal)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Trekking pole (tongkat jalan) &amp; perlengkapan standar P3K</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Tiket retribusi masuk kawasan wisata alam &amp; curug</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 shrink-0" />
                      <span>Dokumentasi foto perjalanan rombongan di spot terbaik</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-neutral-100 font-sans">
                <a
                  href={reservationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors no-underline text-center shadow-xs"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="16" y1="14" x2="16" y2="18" />
                  </svg>
                  <span>Hitung Biaya Trekking</span>
                </a>
                <a
                  href={`${waBaseUrl}&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20jadwal%20dan%20pilihan%20rute%20Paket%20Trekking%20Curug%20Bogor.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 hover:text-black py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors no-underline text-center"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= HIGHLIGHT COMBO BANNER (1-DAY RAFTING + TREKKING) ================= */}
        <div className="bg-neutral-950 text-white rounded-2xl p-6 sm:p-8 md:p-10 border border-neutral-800 relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-400 block font-sans mb-1.5">
              Paket Paling Favorit &bull; 1-Day Adventure
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-3 leading-tight">
              Combo Rafting + Trekking Curug
            </h3>
            <p className="text-neutral-300 font-light text-xs sm:text-sm md:text-base leading-relaxed font-sans mb-6">
              Rundown satu hari penuh pengalaman petualangan lengkap: Mulai pagi dengan trekking menyusuri sejuknya hutan pinus dan segarnya curug Bogor, santap siang prasmanan khas Sunda di basecamp, lalu lanjut sore menaklukkan derasnya arung jeram Sungai Cisadane.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3 font-sans">
              <a
                href={reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-lg transition-all no-underline"
              >
                <span>Simulasi Paket Combo</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href={`${waBaseUrl}&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20konsultasi%20Paket%20Combo%20Rafting%20+%20Trekking%201%20Hari%20untuk%20rombongan.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-neutral-600 hover:border-white text-white font-bold text-xs uppercase tracking-widest py-3 px-6 rounded-lg transition-all no-underline"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Konsultasi Rundown via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Decorative Subtle Background Effect */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/[0.04] to-transparent pointer-events-none hidden md:block" />
        </div>
      </div>
    </section>
  );
}
