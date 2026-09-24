'use client';

import { useState, useRef } from 'react';

export default function Packages() {
  const [activeSlide, setActiveSlide] = useState(1); // default to popular package (11 KM)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const packages = [
    {
      id: 'family-7km',
      category: 'Wisata Ramah Keluarga & Pemula',
      badge: 'Family & Beginner',
      title: 'Paket Rafting Keluarga',
      distance: 'Jarak Tempuh: 7 KM (± 1.5 - 2 Jam)',
      price: '185.000',
      period: '/ orang',
      featured: false,
      specs: [
        { label: 'Jarak', value: '7 KM' },
        { label: 'Durasi', value: '± 1.5 - 2 Jam' },
        { label: 'Tingkat Jeram', value: 'Grade II - III' },
        { label: 'Min. Peserta', value: '4 Orang' },
      ],
      features: [
        'Perlengkapan standar FAJI: Life jacket, helm rafting, dan dayung',
        'Pemandu sungai (River Guide) berlisensi & tim rescue siaga',
        'Kelapa muda segar di rest area tengah perjalanan sungai',
        'Fasilitas basecamp: Saung santai, kamar bilas & toilet bersih',
        'Transportasi lokal (shuttle penjemputan dari finish ke basecamp)',
        'Asuransi keselamatan seluruh peserta',
      ],
      btnText: 'Booking Paket 7 KM',
      modalPkgId: 'family',
      waMessage:
        'Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20ketersediaan%20Paket%20Rafting%20Keluarga%207%20KM%20(Rp%20185rb/org).',
    },
    {
      id: 'adventure-11km',
      category: 'Paling Populer & Favorit Peserta',
      badge: 'Paling Populer',
      title: 'Paket Rafting Adventure',
      distance: 'Jarak Tempuh: 11 KM (± 2 - 2.5 Jam)',
      price: '225.000',
      period: '/ orang',
      featured: true,
      specs: [
        { label: 'Jarak', value: '11 KM' },
        { label: 'Durasi', value: '± 2 - 2.5 Jam' },
        { label: 'Tingkat Jeram', value: 'Grade III+ (Dam 2M)' },
        { label: 'Min. Peserta', value: '4 Orang' },
      ],
      features: [
        'Sensasi jeram terlengkap Cisadane & sensasi Dam 2 Meter ikonik',
        'Perlengkapan rafting premium standar FAJI + Rescue Team',
        'Makan siang prasmanan khas Sunda & kelapa muda di rest area',
        'Dokumentasi aksi jeram terbaik untuk seluruh rombongan',
        'Shuttle lokal kembali ke basecamp + asuransi kegiatan',
        'Saung santai, shower air bersih, dan fasilitas basecamp',
      ],
      btnText: 'Booking Paket 11 KM',
      modalPkgId: 'adventure',
      waMessage:
        'Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20ketersediaan%20Paket%20Rafting%20Adventure%2011%20KM%20(Rp%20225rb/org).',
    },
    {
      id: 'gathering-11km',
      category: 'Paket Lengkap Perusahaan & Komunitas',
      badge: 'Corporate Gathering',
      title: 'One Day Gathering + Rafting',
      distance: 'Jarak Tempuh: 11 KM + Outbound Fun Games',
      price: '345.000',
      period: '/ orang',
      featured: false,
      specs: [
        { label: 'Program', value: '11 KM + Outbound' },
        { label: 'Durasi', value: 'Full Day Event' },
        { label: 'Fasilitas', value: 'Sound & Pendopo' },
        { label: 'Min. Peserta', value: '20 Orang' },
      ],
      features: [
        'Rafting Cisadane 11 KM + Team Building Outbound Games',
        'Fasilitator games & master of ceremonies (MC) interaktif',
        'Makan siang prasmanan lengkap + 2x coffee break santai',
        'Sound system outdoor, banner kegiatan, dan dokumentasi foto',
        'Area lapang hijau eksklusif & pendopo pertemuan gathering',
        'Asuransi peserta dan koordinasi rundown menyeluruh',
      ],
      btnText: 'Konsultasi Gathering',
      modalPkgId: 'gathering',
      waMessage:
        'Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20penawaran%20Paket%20One%20Day%20Corporate%20Gathering%20(Rp%20345rb/org)%20untuk%20perusahaan.',
    },
  ];

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 25) {
      if (diff > 0) {
        setActiveSlide((prev) => (prev + 1) % packages.length);
      } else {
        setActiveSlide((prev) => (prev - 1 + packages.length) % packages.length);
      }
    }
  };

  const openBookingModal = (pkgId) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('open-booking-modal', { detail: { packageId: pkgId } })
      );
    }
  };

  const currentPkg = packages[activeSlide];

  return (
    <section id="paket" className="py-14 sm:py-24 px-4 sm:px-6 bg-brand-gray relative scroll-mt-20">
      <div id="paket-rafting" className="scroll-mt-20" />
      <div id="services" className="scroll-mt-20" />
      <div id="packages" className="scroll-mt-20" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Refined Luxury Editorial Styling */}
        <div className="text-center mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 rounded-full mb-3 sm:mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-600 uppercase font-sans">
              Katalog Resmi &bull; Tarif Transparan
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-2 sm:mb-3">
            Pilihan Paket Arung Jeram
          </h2>
          <p className="text-neutral-600 font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Standar keselamatan FAJI internasional, pemandu sungai berlisensi, fasilitas basecamp higienis, dan tanpa biaya tersembunyi.
          </p>
        </div>

        {/* 1. MOBILE SLIDER VIEW (Layar HP: Elegan, Terfokus, Menghemat Scroll) */}
        <div className="lg:hidden">
          {/* Segmented Top Selector Tabs */}
          <div className="flex bg-neutral-200/80 p-1 rounded-xl border border-neutral-300/80 mb-5 font-sans">
            {packages.map((pkg, idx) => {
              const isActive = activeSlide === idx;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  className={`flex-1 py-2.5 px-1 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all text-center truncate ${
                    isActive
                      ? 'bg-neutral-950 text-white shadow-sm'
                      : 'text-neutral-700 hover:text-neutral-950'
                  }`}
                >
                  {idx === 0 && '7 KM'}
                  {idx === 1 && '11 KM (Populer)'}
                  {idx === 2 && 'Gathering'}
                </button>
              );
            })}
          </div>

          {/* Swipeable Package Card */}
          <div
            className="relative select-none"
            style={{ touchAction: 'pan-y' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`relative bg-white rounded-2xl p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-md ${
                currentPkg.featured ? 'border-2 border-neutral-950' : 'border border-neutral-200'
              }`}
            >
              {/* Category & Badge */}
              <div className="flex justify-between items-center mb-3">
                <span className="text-[10px] font-bold tracking-wider uppercase text-neutral-500 font-sans">
                  {currentPkg.category}
                </span>
                <span
                  className={`text-[9px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full font-sans ${
                    currentPkg.featured
                      ? 'bg-neutral-950 text-white'
                      : 'bg-neutral-100 text-neutral-800 border border-neutral-300'
                  }`}
                >
                  {currentPkg.badge}
                </span>
              </div>

              {/* Title & Distance */}
              <h3 className="font-serif text-xl sm:text-2xl text-brand-dark mb-1 leading-tight">
                {currentPkg.title}
              </h3>
              <p className="text-[11px] font-medium text-neutral-500 mb-4 font-sans">
                {currentPkg.distance}
              </p>

              {/* Price Banner */}
              <div className="flex items-baseline gap-1 pb-4 mb-4 border-b border-neutral-100">
                <span className="text-xs font-bold text-neutral-500 font-sans">Rp</span>
                <span className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark tracking-tight">
                  {currentPkg.price}
                </span>
                <span className="text-[11px] text-neutral-400 font-sans ml-1">{currentPkg.period}</span>
              </div>

              {/* Quick Specs Matrix */}
              <div className="grid grid-cols-2 gap-2 mb-4 p-2.5 bg-neutral-50 rounded-xl border border-neutral-100 font-sans">
                {currentPkg.specs.map((spec, sIdx) => (
                  <div key={sIdx} className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">
                      {spec.label}
                    </span>
                    <span className="text-[11px] font-bold text-neutral-800 truncate">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Feature Checklist (Monochrome) */}
              <ul className="space-y-2.5 mb-6 p-0 list-none">
                {currentPkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-xs text-neutral-700 font-sans leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Dual Action Buttons */}
              <div className="flex flex-col gap-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=6281291068287&text=${currentPkg.waMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all inline-flex items-center justify-center gap-2 no-underline shadow-xs active:scale-98 ${
                    currentPkg.featured
                      ? 'bg-neutral-950 text-white hover:bg-neutral-800'
                      : 'bg-neutral-900 text-white hover:bg-black'
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>{currentPkg.btnText}</span>
                </a>

                <button
                  type="button"
                  onClick={() => openBookingModal(currentPkg.modalPkgId)}
                  className="w-full py-2.5 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider font-sans border border-neutral-300 text-neutral-800 hover:bg-neutral-100 active:scale-98 transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer bg-white"
                >
                  <span>Form Reservasi &amp; Hitung Biaya</span>
                </button>
              </div>
            </div>

            {/* Prev / Next Controls */}
            <div className="flex justify-between items-center mt-3 px-1 text-xs font-sans text-neutral-500">
              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev - 1 + packages.length) % packages.length)}
                className="py-1 px-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 font-semibold text-[11px] hover:bg-neutral-50 cursor-pointer shadow-2xs"
              >
                &larr; Sebelumnya
              </button>

              <div className="flex gap-1.5 items-center">
                {packages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeSlide === i ? 'bg-neutral-950 w-5' : 'bg-neutral-300 w-2'
                    }`}
                    aria-label={`Ke paket ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setActiveSlide((prev) => (prev + 1) % packages.length)}
                className="py-1 px-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 font-semibold text-[11px] hover:bg-neutral-50 cursor-pointer shadow-2xs"
              >
                Berikutnya &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* 2. DESKTOP GRID VIEW (3 Kolom Berdampingan Elegan) */}
        <div className="hidden lg:grid grid-cols-3 gap-6 lg:gap-8 items-stretch pt-3">
          {packages.map((pkg) => {
            const isFeatured = pkg.featured;
            return (
              <div
                key={pkg.id}
                className={`relative bg-white rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'border-2 border-neutral-950 shadow-xl lg:-translate-y-2'
                    : 'border border-neutral-200 shadow-xs hover:border-neutral-400 hover:shadow-md'
                }`}
              >
                {/* Popular Pill for Middle Card */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-neutral-950 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1 rounded-full font-sans shadow-sm flex items-center gap-1.5">
                    <span>★</span>
                    <span>{pkg.badge}</span>
                  </div>
                )}

                {/* Card Top: Category, Title, Distance, Price */}
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-neutral-400 block mb-2 font-sans">
                    {pkg.category}
                  </span>

                  <h3 className="font-serif text-2xl md:text-3xl text-brand-dark mb-2 leading-tight">
                    {pkg.title}
                  </h3>

                  <p className="text-xs font-medium text-neutral-500 mb-5 font-sans">
                    {pkg.distance}
                  </p>

                  <div className="flex items-baseline gap-1 pb-5 mb-5 border-b border-neutral-100">
                    <span className="text-sm font-bold text-neutral-400 font-sans">Rp</span>
                    <span className="text-4xl md:text-5xl font-serif font-bold text-brand-dark tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="text-xs text-neutral-400 font-sans ml-1">{pkg.period}</span>
                  </div>

                  {/* Specs Matrix Row */}
                  <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-neutral-50 rounded-xl border border-neutral-100 font-sans">
                    {pkg.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex flex-col">
                        <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-semibold">
                          {spec.label}
                        </span>
                        <span className="text-xs font-bold text-neutral-800 truncate">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Checklist (Monochrome) */}
                  <ul className="space-y-3 mb-8 p-0 list-none">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs md:text-sm text-neutral-700 font-sans leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                          <svg className="w-2.5 h-2.5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Bottom CTA Buttons */}
                <div className="pt-4 flex flex-col gap-2.5 border-t border-neutral-100">
                  <a
                    href={`https://api.whatsapp.com/send?phone=6281291068287&text=${pkg.waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold uppercase tracking-wider font-sans transition-all duration-300 inline-flex items-center justify-center gap-2 no-underline shadow-xs ${
                      isFeatured
                        ? 'bg-neutral-950 text-white hover:bg-neutral-800'
                        : 'bg-neutral-900 text-white hover:bg-black'
                    }`}
                  >
                    <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    <span>{pkg.btnText}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => openBookingModal(pkg.modalPkgId)}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider font-sans border border-neutral-300 text-neutral-700 hover:border-black hover:text-black hover:bg-neutral-50 transition-all cursor-pointer bg-white"
                  >
                    <span>Form Reservasi &amp; Hitung Biaya</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
