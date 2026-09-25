'use client';

import { useState } from 'react';

const VILLAS = [
  {
    id: 'mawar',
    name: 'Villa Mawar Puncak',
    location: 'Cisarua / Megamendung, Puncak Bogor',
    capacity: '30 - 70+ Orang',
    tagline: 'Pilihan Utama Rombongan & Gathering Kantor',
    description:
      'Villa megah berhalaman rumput luas dengan kolam renang privat, rooftop 360° panorama pegunungan, area karaoke & billiard, sangat ideal untuk acara gathering perusahaan dan reuni keluarga besar.',
    specs: [
      { label: 'Kapasitas', value: '30 - 70+ Pax' },
      { label: 'Kolam Renang', value: 'Private Pool' },
      { label: 'Rooftop', value: '360° Mountain View' },
      { label: 'Hiburan', value: 'Karaoke & Billiard' },
    ],
    photos: [
      { src: '/images/villas/mawar/mawar1.jpg', label: 'Kolam Renang' },
      { src: '/images/villas/mawar/mawar_rooftop.jpg', label: 'Rooftop 360°' },
      { src: '/images/villas/mawar/mawar3.jpg', label: 'Billiard & Ruang Santai' },
      { src: '/images/villas/mawar/mawar5.jpg', label: 'Kamar Tidur' },
    ],
    driveUrl: 'https://drive.google.com/drive/folders/15FkmcLjE1cSGg7CcA0p9fRahctu1SYmk',
    waUrl:
      'https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20ketersediaan%20Villa%20Mawar%20Puncak%20(Kapasitas%2030-70%20Pax)%20untuk%20acara%20gathering.',
  },
  {
    id: 'zanara',
    name: 'Villa Zanara',
    location: 'Kawasan Sejuk Bogor, Jawa Barat',
    capacity: '20 - 45 Orang',
    tagline: 'Modern Minimalis, Asri, & Privasi Sangat Terjaga',
    description:
      'Villa bernuansa resort modern tropis dengan kolam renang privat yang tenang, living room estetik hangat, dan area outdoor BBQ untuk kebersamaan intim keluarga maupun divisi kantor.',
    specs: [
      { label: 'Kapasitas', value: '20 - 45 Pax' },
      { label: 'Kolam Renang', value: 'Private Pool Tropis' },
      { label: 'Suasana', value: 'Tenang & Eksklusif' },
      { label: 'Fasilitas', value: 'Outdoor BBQ & Living Room' },
    ],
    photos: [
      { src: '/images/villas/zanara/zanara_2.jpg', label: 'Kolam Renang' },
      { src: '/images/villas/zanara/zanara3.jpg', label: 'Living Room' },
      { src: '/images/villas/zanara/zanara_4.jpg', label: 'Kamar Tidur' },
      { src: '/images/villas/zanara/zanara_5.jpg', label: 'Fasad Modern' },
    ],
    driveUrl: 'https://drive.google.com/drive/folders/17hE1yAJTYvRZ4zGazBxfm_QB4Fw0jKZq',
    waUrl:
      'https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20ketersediaan%20Villa%20Zanara%20(Kapasitas%2020-45%20Pax)%20untuk%20acara%20gathering.',
  },
];

export default function AccommodationSection() {
  const [activePhoto, setActivePhoto] = useState({
    mawar: 0,
    zanara: 0,
  });

  return (
    <section id="akomodasi" className="py-16 sm:py-20 px-4 sm:px-6 bg-neutral-50/70 border-t border-b border-neutral-200/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2 block font-sans">
            Akomodasi &amp; Staycation
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
            Pilihan Villa Eksklusif Puncak
          </h2>
          <p className="mt-3 text-neutral-600 font-light font-sans text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Lengkapi keseruan arung jeram Cisadane dengan istirahat berkualitas di villa pilihan kami dengan private pool dan suasana sejuk pegunungan.
          </p>
        </div>

        {/* Compact 2-Villa Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {VILLAS.map((villa) => {
            const currentPhotoIdx = activePhoto[villa.id];
            const currentImg = villa.photos[currentPhotoIdx] || villa.photos[0];

            return (
              <div
                key={villa.id}
                className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Showcase */}
                <div className="relative">
                  <div className="aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-100 relative">
                    <img
                      src={currentImg.src}
                      alt={`${villa.name} - ${currentImg.label}`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-xs text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md font-sans">
                      {villa.capacity}
                    </div>
                  </div>

                  {/* Thumbnail Row */}
                  <div className="p-2.5 bg-neutral-900/90 flex gap-2 overflow-x-auto">
                    {villa.photos.map((photo, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() =>
                          setActivePhoto((prev) => ({ ...prev, [villa.id]: idx }))
                        }
                        className={`flex-shrink-0 relative rounded-md overflow-hidden h-11 w-16 sm:h-12 sm:w-20 border-2 transition-all cursor-pointer ${
                          idx === currentPhotoIdx
                            ? 'border-white scale-102 ring-1 ring-white/50'
                            : 'border-transparent opacity-60 hover:opacity-100'
                        }`}
                        title={photo.label}
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
                    <div className="flex items-center gap-1.5 text-neutral-500 text-[11px] font-medium font-sans mb-1.5">
                      <svg className="w-3.5 h-3.5 shrink-0 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{villa.location}</span>
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-neutral-900 font-bold mb-2">
                      {villa.name}
                    </h3>

                    <p className="text-neutral-600 font-light text-xs sm:text-sm leading-relaxed font-sans mb-5">
                      {villa.description}
                    </p>

                    {/* Quick Specs 4-Chip Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {villa.specs.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className="bg-neutral-50 border border-neutral-200/80 rounded-lg p-2.5 font-sans"
                        >
                          <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-semibold">
                            {spec.label}
                          </span>
                          <span className="text-[11px] sm:text-xs font-bold text-neutral-900 block truncate">
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-neutral-100 font-sans">
                    <a
                      href={villa.driveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 border border-neutral-300 hover:border-neutral-900 text-neutral-800 hover:text-black py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors no-underline text-center"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Album Drive</span>
                    </a>

                    <a
                      href={villa.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white py-2.5 px-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors no-underline text-center shadow-xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span>Tanya Jadwal</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
