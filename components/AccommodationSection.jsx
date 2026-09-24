'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

export default function AccommodationSection() {
  const [activeVilla, setActiveVilla] = useState('mawar');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const villas = {
    mawar: {
      id: 'mawar',
      name: 'Villa Mawar Puncak',
      shortName: 'Villa Mawar',
      tagline: 'Pilihan Utama Rombongan & Gathering Besar',
      capacity: 'Kapasitas 30 - 70+ Orang',
      paxBadge: '30 - 70+ Pax',
      location: 'Kawasan Sejuk Puncak - Cisarua / Megamendung, Bogor',
      description:
        'Villa megah dengan halaman rumput sangat luas di kawasan sejuk Puncak Bogor. Dilengkapi kolam renang pribadi jernih, rooftop dengan panorama 360° pegunungan, area karaoke, ruang kumpul keluarga/kantor yang lapang, serta gazebo santai untuk acara keakraban.',
      highlights: ['Kolam Renang Pribadi', 'Rooftop View 360°', 'Hall Karaoke', 'Parkir Bus Medium'],
      quickSpecs: [
        { label: 'Kapasitas', value: '30 - 70+ Pax', desc: 'Banyak bed rombongan' },
        { label: 'Kolam Renang', value: 'Private Pool', desc: 'Dek santai & air jernih' },
        { label: 'Area Kumpul', value: 'Living Room Luas', desc: 'Briefing & keakraban' },
        { label: 'Fasilitas Unggulan', value: 'Rooftop & Karaoke', desc: 'View pegunungan 360°' },
      ],
      features: [
        'Private Swimming Pool Jernih dengan Dek Bersantai',
        'Rooftop 360° Panorama View Pegunungan Puncak yang Megah',
        'Area Hiburan: Sound System Karaoke & Ruang Kumpul Sangat Luas',
        'Kamar Tidur Bersih (Penataan banyak bed untuk rombongan)',
        'Halaman Rumput Luas untuk Fun Games, Outbound, atau BBQ Party',
        'Dapur Lengkap & Peralatan Masak Rombongan Siap Pakai',
        'Fasilitas Water Heater (Air Hangat) di Kamar Mandi',
        'Area Parkir Lapang (Muat Kendaraan Pribadi & Bus Medium)',
      ],
      photos: [
        {
          src: '/images/villas/mawar/mawar1.jpg',
          title: 'Private Swimming Pool & Gedung Villa',
          desc: 'Kolam renang luas dengan air jernih dan dek bersantai',
        },
        {
          src: '/images/villas/mawar/mawar_rooftop.jpg',
          title: 'Rooftop 360° View Pegunungan',
          desc: 'Pemandangan panorama perbukitan sejuk khas Puncak Cisarua',
        },
        {
          src: '/images/villas/mawar/mawar2.jpg',
          title: 'Area Santai & Dek Tepi Kolam',
          desc: 'Tempat berkumpul asri untuk santap siang atau bersantai sore',
        },
        {
          src: '/images/villas/mawar/mawar4.jpg',
          title: 'Living Room & Ruang Kumpul Lapang',
          desc: 'Kapasitas luas untuk briefing, keakraban, dan kumpul keluarga',
        },
        {
          src: '/images/villas/mawar/mawar_karaoke.jpg',
          title: 'Fasilitas Karaoke & Entertainment',
          desc: 'Sound system karaoke untuk memeriahkan malam kebersamaan',
        },
        {
          src: '/images/villas/mawar/mawar5.jpg',
          title: 'Kamar Tidur Bersih & Nyaman',
          desc: 'Penataan bed rapi berkapasitas besar untuk rombongan',
        },
        {
          src: '/images/villas/mawar/mawar6.jpg',
          title: 'Balkon Atas Panorama Hijau',
          desc: 'Spot santai pagi hari dengan udara segar tanpa polusi',
        },
        {
          src: '/images/villas/mawar/mawar7.jpg',
          title: 'Halaman Rumput Outbound Luas',
          desc: 'Area ideal untuk fun games, ice breaking, atau tenda pesta BBQ',
        },
        {
          src: '/images/villas/mawar/mawar_kamar_mandi.jpg',
          title: 'Kamar Mandi dengan Water Heater',
          desc: 'Kebersihan terjaga dengan fasilitas air hangat',
        },
      ],
      waMessage:
        'Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20ketersediaan%20Villa%20Mawar%20Puncak%20(Kapasitas%2030-70%20Pax)%20untuk%20acara%20gathering.',
    },
    zanara: {
      id: 'zanara',
      name: 'Villa Zanara',
      shortName: 'Villa Zanara',
      tagline: 'Eksklusif, Asri, & Privasi Sangat Terjaga',
      capacity: 'Kapasitas 20 - 45 Orang',
      paxBadge: '20 - 45 Pax',
      location: 'Kawasan Sejuk Bogor, Jawa Barat',
      description:
        'Villa bernuansa asri, estetik, dan elegan dengan taman tropis rindang serta kolam renang pribadi yang tenang. Sangat cocok untuk gathering divisi, liburan keluarga besar, atau acara reuni intim yang mengutamakan privasi tinggi dan kenyamanan istirahat.',
      highlights: ['Private Pool Tropis', 'Suasana Tenang & Privat', 'Living Room Estetik', 'Area Outdoor BBQ'],
      quickSpecs: [
        { label: 'Kapasitas', value: '20 - 45 Pax', desc: 'Reuni & gathering intim' },
        { label: 'Kolam Renang', value: 'Private Pool Tropis', desc: 'Dikelilingi taman asri' },
        { label: 'Area Kumpul', value: 'Living Room Estetik', desc: 'Desain hangat & sofa nyaman' },
        { label: 'Fasilitas Unggulan', value: 'Outdoor Barbeque', desc: 'Area santap malam asri' },
      ],
      features: [
        'Private Swimming Pool dengan Nuansa Halaman Tropis Nan Asri',
        'Suasana Hening, Asri & Privasi Sangat Terjaga Bebas Bising',
        'Living Room & Ruang Santai Desain Hangat Estetik Bernuansa Kayu',
        'Kamar Tidur Nyaman dengan Sirkulasi Udara Segar Alami',
        'Balkon Santai Menghadap View Pepohonan Hijau Rindang',
        'Dapur Bersih Lengkap Perlengkapan Memasak & Kulkas',
        'Area Outdoor Terbuka untuk Santap Bersama & Barbeque Party',
        'Akses Mudah, Aman, dan Parkir Kendaraan Pribadi Nyaman',
      ],
      photos: [
        {
          src: '/images/villas/zanara/zanara1.jpg',
          title: 'Private Swimming Pool Nuansa Tropis',
          desc: 'Kolam renang eksklusif dikelilingi taman asri nan privat',
        },
        {
          src: '/images/villas/zanara/zanara3.jpg',
          title: 'Living Room Hangat & Estetik',
          desc: 'Desain sofa nyaman dan pencahayaan hangat untuk obrolan santai',
        },
        {
          src: '/images/villas/zanara/zanara_4.jpg',
          title: 'Kamar Tidur Nyaman & Bersih',
          desc: 'Sirkulasi udara sejuk alami pegunungan untuk tidur pulas',
        },
        {
          src: '/images/villas/zanara/zanara2.jpg',
          title: 'Balkon & Pemandangan Hijau',
          desc: 'Sudut bersantai menghadap pepohonan rindang',
        },
        {
          src: '/images/villas/zanara/zanara_5.jpg',
          title: 'Teras Tepi Kolam Renang',
          desc: 'Area duduk terbuka untuk kopi pagi atau teh sore',
        },
        {
          src: '/images/villas/zanara/zanara_1.jpg',
          title: 'Fasad Bangunan Villa & Area Parkir',
          desc: 'Akses masuk nyaman dengan gerbang privasi',
        },
        {
          src: '/images/villas/zanara/zanara_2.jpg',
          title: 'Dapur Bersih & Perlengkapan Masak',
          desc: 'Fasilitas memasak lengkap siap pakai untuk rombongan',
        },
        {
          src: '/images/villas/zanara/zanara_3.jpg',
          title: 'Area Outdoor Barbeque',
          desc: 'Halaman asri untuk santap malam bersama dan bakar-bakar',
        },
      ],
      waMessage:
        'Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20ketersediaan%20Villa%20Zanara%20(Kapasitas%2020-45%20Pax)%20untuk%20acara%20keluarga/gathering.',
    },
  };

  const currentVilla = villas[activeVilla];
  const totalSlides = currentVilla.photos.length;

  const handleSelectVilla = (villaKey) => {
    setActiveVilla(villaKey);
    setCurrentSlide(0);
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, nextSlide, prevSlide]);

  // Auto-play slideshow every 5 seconds (paused on hover or lightbox)
  useEffect(() => {
    if (!isAutoPlay || isLightboxOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, isLightboxOpen, totalSlides]);

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
    if (Math.abs(diff) > 30) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const activePhoto = currentVilla.photos[currentSlide] || currentVilla.photos[0];

  return (
    <section id="akomodasi" className="py-14 sm:py-24 px-4 sm:px-6 bg-white relative scroll-mt-20">
      <div id="villa" className="scroll-mt-20" />
      <div id="pemilihan-villa" className="scroll-mt-20" />
      <div id="accommodation" className="scroll-mt-20" />
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200 rounded-full mb-3 sm:mb-4 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-600 uppercase font-sans">
              Rest &amp; Recharge &bull; Galeri Villa Rombongan
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-2 sm:mb-3">
            Pilihan Villa Eksklusif
          </h2>
          <p className="text-neutral-600 font-sans text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Lengkapi keseruan arung jeram Cisadane dengan menginap di villa privat berfasilitas kolam renang pribadi, ruang kumpul lapang, dan udara sejuk pegunungan Bogor.
          </p>

          {/* Architectural Villa Selector Cards / Tabs */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-6 sm:mt-8 max-w-2xl mx-auto font-sans">
            {Object.keys(villas).map((key) => {
              const v = villas[key];
              const isSelected = activeVilla === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleSelectVilla(key)}
                  className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                    isSelected
                      ? 'bg-neutral-950 text-white border-neutral-950 shadow-md ring-1 ring-neutral-950'
                      : 'bg-neutral-50 text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="font-serif text-sm sm:text-lg font-bold tracking-tight truncate">
                      {v.name}
                    </span>
                    <span
                      className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full font-sans shrink-0 ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-neutral-200 text-neutral-800'
                      }`}
                    >
                      {v.paxBadge}
                    </span>
                  </div>
                  <span
                    className={`text-[10px] sm:text-xs font-sans line-clamp-1 ${
                      isSelected ? 'text-neutral-300' : 'text-neutral-500'
                    }`}
                  >
                    {key === 'mawar' ? 'Rooftop 360° & Halaman Outbound' : 'Asri Tropis & Privasi Penuh'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Villa Detail Showcase */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-12 mt-6">
          {/* Right Column: Narrative & Specifications */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3 py-1 bg-neutral-900 text-white rounded-md font-sans">
                {currentVilla.capacity}
              </span>
              <span className="text-xs text-neutral-500 font-sans">
                &bull; {currentVilla.location}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-brand-dark mb-1 leading-tight">
              {currentVilla.name}
            </h3>
            <p className="text-xs font-semibold tracking-wider text-neutral-500 uppercase mb-4 font-sans">
              {currentVilla.tagline}
            </p>

            <p className="text-neutral-600 mb-5 leading-relaxed font-sans text-xs sm:text-sm md:text-base">
              {currentVilla.description}
            </p>

            {/* Quick Specs 4-Box Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-5 font-sans">
              {currentVilla.quickSpecs.map((spec, sIdx) => (
                <div key={sIdx} className="p-3 bg-neutral-50 border border-neutral-200/80 rounded-xl">
                  <span className="text-[9px] uppercase tracking-wider text-neutral-400 font-bold block mb-0.5">
                    {spec.label}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-neutral-900 block truncate">
                    {spec.value}
                  </span>
                  <span className="text-[10px] text-neutral-500 block truncate">
                    {spec.desc}
                  </span>
                </div>
              ))}
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {currentVilla.features.map((feature, idx) => (
                <div key={idx} className="flex items-start text-neutral-700 text-xs sm:text-xs font-sans leading-relaxed">
                  <span className="w-4 h-4 rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center shrink-0 mr-2 mt-0.5">
                    <svg className="w-2.5 h-2.5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-2.5 items-stretch sm:items-center">
              <a
                href={`https://api.whatsapp.com/send?phone=6281291068287&text=${currentVilla.waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-950 text-white px-6 py-3.5 rounded-xl uppercase tracking-wider text-xs font-bold hover:bg-neutral-800 transition-colors font-sans no-underline inline-flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <svg className="w-4 h-4 shrink-0 fill-current" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Cek Jadwal &amp; Booking Villa</span>
              </a>

              <button
                type="button"
                onClick={() => setIsLightboxOpen(true)}
                className="border border-neutral-300 text-neutral-800 px-5 py-3.5 rounded-xl uppercase tracking-wider text-xs font-bold hover:bg-neutral-100 transition-colors font-sans inline-flex items-center justify-center gap-2 cursor-pointer text-center bg-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h6v6" />
                  <path d="M9 21H3v-6" />
                  <path d="M21 3l-7 7" />
                  <path d="M3 21l7-7" />
                </svg>
                <span>Perbesar Foto (HD)</span>
              </button>
            </div>
          </div>

          {/* Left Column: Interactive Photo Slider / Carousel */}
          <div
            className="w-full lg:w-1/2 flex flex-col gap-3"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {/* Main Slide Frame */}
            <div
              className="relative aspect-[16/11] bg-neutral-900 rounded-2xl overflow-hidden shadow-lg select-none group border border-neutral-200"
              style={{ touchAction: 'pan-y' }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                draggable={false}
                onClick={() => setIsLightboxOpen(true)}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-700 ease-out group-hover:scale-105 select-none"
              />

              {/* Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 pointer-events-none" />

              {/* Top Bar Badges */}
              <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between pointer-events-none z-10">
                <span className="bg-white/95 backdrop-blur-md text-neutral-900 px-3 py-1 text-[11px] font-sans tracking-wider uppercase font-bold shadow-sm rounded-lg">
                  {currentVilla.name}
                </span>

                <span className="bg-black/75 backdrop-blur-md text-white px-2.5 py-1 text-[11px] font-sans tracking-widest uppercase font-semibold border border-white/20 rounded-full shadow-sm">
                  {currentSlide + 1} / {totalSlides}
                </span>
              </div>

              {/* Highlight Chips on Image */}
              <div className="absolute top-13 left-3.5 hidden sm:flex flex-wrap gap-1.5 pointer-events-none z-10">
                {currentVilla.highlights.map((h, hIdx) => (
                  <span
                    key={hIdx}
                    className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-sans px-2 py-0.5 rounded-md border border-white/10"
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Mobile Swipe Hint */}
              <div className="absolute bottom-16 right-3.5 bg-black/70 backdrop-blur-sm text-white px-2.5 py-1 text-[9px] font-sans tracking-wider uppercase font-medium border border-white/20 rounded-full sm:hidden pointer-events-none z-10">
                Geser Foto &larr; &rarr;
              </div>

              {/* Slide Navigation Buttons */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prevSlide();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all duration-200 border border-white/25 hover:scale-105 shadow-lg cursor-pointer z-10"
                aria-label="Foto Sebelumnya"
              >
                &#10094;
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all duration-200 border border-white/25 hover:scale-105 shadow-lg cursor-pointer z-10"
                aria-label="Foto Berikutnya"
              >
                &#10095;
              </button>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white flex flex-col justify-end pointer-events-none">
                <h4 className="font-serif text-base sm:text-xl text-white drop-shadow-md mb-0.5">
                  {activePhoto.title}
                </h4>
                <p className="text-[11px] sm:text-xs text-neutral-300 font-sans font-light drop-shadow">
                  {activePhoto.desc}
                </p>
              </div>
            </div>

            {/* Thumbnail Carousel Strip */}
            <div className="flex gap-2 overflow-x-auto pb-1.5 pt-0.5 scrollbar-thin">
              {currentVilla.photos.map((photo, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden transition-all duration-200 border-2 cursor-pointer ${
                      isActive
                        ? 'border-neutral-950 scale-100 ring-2 ring-neutral-950 shadow-md opacity-100'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <span className="absolute bottom-0 inset-x-0 h-1 bg-neutral-950" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Quick helper note */}
            <div className="flex items-center justify-between text-[11px] text-neutral-400 font-sans px-1">
              <span>Klik foto thumbnail atau panah untuk galeri lengkap</span>
              <span className="hidden sm:inline">Klik foto utama untuk layar penuh HD</span>
            </div>
          </div>
        </div>

        {/* Side-by-side Interactive Comparison Cards */}
        <div className="mt-14 pt-10 border-t border-neutral-200">
          <div className="text-center mb-6">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block font-sans mb-1">
              Bandingkan Sesuai Kebutuhan Acara Anda
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-neutral-900">
              Perbandingan Villa Mawar vs Villa Zanara
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {/* Card Villa Mawar */}
            <div
              onClick={() => {
                handleSelectVilla('mawar');
                const el = document.getElementById('akomodasi');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeVilla === 'mawar'
                  ? 'border-neutral-950 bg-neutral-50 shadow-md ring-2 ring-neutral-950'
                  : 'border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block font-sans">
                      Rombongan Besar &bull; Puncak Bogor
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-dark">
                      Villa Mawar Puncak
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-950 text-white px-2.5 py-1 rounded-md font-sans">
                    30 - 70+ Pax
                  </span>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm font-sans mb-4 leading-relaxed">
                  Pilihan utama gathering perusahaan &amp; keluarga besar. Dilengkapi private pool, rooftop 360° panorama Puncak, ruang karaoke, serta halaman outbound yang sangat luas.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Kolam Renang Pribadi
                  </span>
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Rooftop 360°
                  </span>
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Hall Karaoke
                  </span>
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Parkir Bus Medium
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider font-sans">
                <span className={activeVilla === 'mawar' ? 'text-neutral-950' : 'text-neutral-500'}>
                  {activeVilla === 'mawar' ? '● Sedang Ditampilkan' : 'Pilih Villa Mawar'}
                </span>
                <span className="text-neutral-900 group-hover:translate-x-1 transition-transform">
                  Lihat Galeri 9 Foto &rarr;
                </span>
              </div>
            </div>

            {/* Card Villa Zanara */}
            <div
              onClick={() => {
                handleSelectVilla('zanara');
                const el = document.getElementById('akomodasi');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                activeVilla === 'zanara'
                  ? 'border-neutral-950 bg-neutral-50 shadow-md ring-2 ring-neutral-950'
                  : 'border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block font-sans">
                      Asri &amp; Privat &bull; Kawasan Bogor
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-brand-dark">
                      Villa Zanara
                    </h4>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-neutral-950 text-white px-2.5 py-1 rounded-md font-sans">
                    20 - 45 Pax
                  </span>
                </div>

                <p className="text-neutral-600 text-xs sm:text-sm font-sans mb-4 leading-relaxed">
                  Suasana hening nan privat dengan arsitektur asri bernuansa tropis. Sangat cocok untuk reuni intim, gathering divisi, atau liburan keluarga yang mengutamakan ketenangan.
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Private Pool Tropis
                  </span>
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Privasi Sangat Terjaga
                  </span>
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Area Outdoor Barbeque
                  </span>
                  <span className="text-[10px] font-medium bg-neutral-200/80 text-neutral-800 px-2.5 py-0.5 rounded-full font-sans">
                    Living Room Estetik
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-200/80 flex items-center justify-between text-xs font-bold uppercase tracking-wider font-sans">
                <span className={activeVilla === 'zanara' ? 'text-neutral-950' : 'text-neutral-500'}>
                  {activeVilla === 'zanara' ? '● Sedang Ditampilkan' : 'Pilih Villa Zanara'}
                </span>
                <span className="text-neutral-900 group-hover:translate-x-1 transition-transform">
                  Lihat Galeri 8 Foto &rarr;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-6 cursor-pointer backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-4 right-4 bg-black/70 hover:bg-white hover:text-black text-white rounded-full w-10 h-10 flex items-center justify-center border border-white/20 text-lg transition-colors z-20 cursor-pointer"
              aria-label="Tutup"
            >
              ✕
            </button>

            {/* Slide Navigation in Lightbox */}
            <button
              type="button"
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all text-xl z-20 shadow-lg cursor-pointer"
              aria-label="Sebelumnya"
            >
              &#10094;
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all text-xl z-20 shadow-lg cursor-pointer"
              aria-label="Berikutnya"
            >
              &#10095;
            </button>

            {/* Main Lightbox Image */}
            <div className="max-h-[72vh] flex items-center justify-center bg-black p-2 select-none">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Lightbox Footer Info */}
            <div className="p-4 sm:p-5 bg-neutral-900 border-t border-neutral-800 text-left flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-sans block mb-0.5">
                  {currentVilla.name} &bull; Foto {currentSlide + 1} dari {totalSlides}
                </span>
                <h4 className="font-serif text-base sm:text-lg text-white m-0">
                  {activePhoto.title}
                </h4>
                <p className="text-xs text-neutral-400 font-sans mt-0.5">
                  {activePhoto.desc}
                </p>
              </div>

              <a
                href={`https://api.whatsapp.com/send?phone=6281291068287&text=${currentVilla.waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl hover:bg-neutral-200 transition-colors shrink-0 font-sans no-underline inline-flex items-center gap-2"
              >
                <span>Booking Villa Ini</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
