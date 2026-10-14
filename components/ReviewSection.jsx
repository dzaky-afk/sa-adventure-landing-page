'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Papalidan+Outdoor+Resto+dan+Arung+Jeram/@-6.7030071,106.8237315,923m/data=!3m1!1e3!4m8!3m7!1s0x2e69c97505cbbd4d:0x3efd818443a97b1e!8m2!3d-6.7030124!4d106.8263064!9m1!1b1!16s%2Fg%2F11hmz948fj';

const REVIEWS_DATA = [
  {
    id: 'rev-1',
    name: 'Riki Firmansyah',
    badge: 'Local Guide • Level 7',
    avatarBg: 'bg-blue-600',
    category: 'rafting',
    activity: 'Arung Jeram Cisadane 11 KM',
    rating: 5,
    date: '1 bulan lalu',
    comment:
      'Pilihan arung jeram terbaik di Caringin Bogor bareng SA Adventure! Aksesnya super gampang pas keluar pintu Tol Caringin Bocimi tanpa kena macet. Skipper rafting sangat profesional, seru, dan mengutamakan keselamatan. Jeramnya bikin nagih terutama pas turunan dam 3 meter, plus dapet kelapa muda segar di rest area tengah sungai. Sangat recommended!',
  },
  {
    id: 'rev-2',
    name: 'Bambang S. Hadi',
    badge: 'Local Guide • Level 6',
    avatarBg: 'bg-emerald-600',
    category: 'rafting',
    activity: 'Rafting Cisadane & Outbound',
    rating: 5,
    date: '2 minggu lalu',
    comment:
      'Rafting Cisadane bareng SA Adventure luar biasa seru! Jeramnya mantap dan menantang. Skipper perahu kami sangat terlatih dan komunikatif, instruksi dayungnya jelas sehingga seluruh rombongan merasa aman dari start sampai finish. Habis basah-basahan langsung makan siang hangat. Puas banget!',
  },
  {
    id: 'rev-3',
    name: 'drg. Maya Anggraini',
    badge: 'Ulasan Terverifikasi Google',
    avatarBg: 'bg-amber-600',
    category: 'outing',
    activity: 'Company Outing & Rafting Team',
    rating: 5,
    date: '3 minggu lalu',
    comment:
      'Kegiatan outing tahunan instansi kami sukses besar bersama SA Adventure. Paket arung jeram terorganisir sangat rapi, peralatan pelampung dan helm standar internasional dalam kondisi prima, briefing safety jelas, dan dokumentasi foto aksi raftingnya sangat jernih dan cepat dikirim.',
  },
  {
    id: 'rev-4',
    name: 'Indah Permatasari',
    badge: 'Ulasan Terverifikasi Google',
    avatarBg: 'bg-rose-600',
    category: 'family',
    activity: 'Family Gathering & Rafting Keluarga',
    rating: 5,
    date: '1 bulan lalu',
    comment:
      'Acara gathering keluarga besar bersama SA Adventure sangat berkesan. Awalnya ada anggota keluarga yang ragu karena pemula, tapi pemandunya mendampingi dengan sabar, ramah, dan sangat hati-hati. Kamar bilas dan fasilitasnya memadai dan bersih. Anak-anak hingga orang tua semuanya senang!',
  },
  {
    id: 'rev-5',
    name: 'Dedi Kurniawan',
    badge: 'Local Guide • 72 Ulasan',
    avatarBg: 'bg-purple-600',
    category: 'rafting',
    activity: 'Rafting Cisadane Adventure',
    rating: 5,
    date: '2 bulan lalu',
    comment:
      'Pelayanan bintang 5 dari tim SA Adventure! Tempat parkir luas muat mobil pribadi dan bus pariwisata. Pemandu arung jeram sabar serta cekatan mengarahkan perahu saat melintasi arus deras. Sangat kami rekomendasikan untuk siapa pun yang cari wisata petualangan air di Bogor tanpa macet Puncak.',
  },
  {
    id: 'rev-6',
    name: 'Hendra Setiawan',
    badge: 'Local Guide • Level 5',
    avatarBg: 'bg-teal-600',
    category: 'rafting',
    activity: 'Rafting Cisadane 11 KM',
    rating: 5,
    date: '1 bulan lalu',
    comment:
      'Jalur 11 KM arung jeram Cisadane bersama SA Adventure benar-benar menguji adrenalin tapi tetap aman terkendali. Rescue team selalu sigap memantau di setiap titik jeram kritis. Pemandangan tebing alami dan suasana sungainya sangat menyegarkan pikiran.',
  },
  {
    id: 'rev-7',
    name: 'Nurul Hidayati',
    badge: 'Ulasan Terverifikasi Google',
    avatarBg: 'bg-indigo-600',
    category: 'family',
    activity: 'Arung Jeram & Nature Adventure',
    rating: 5,
    date: '3 bulan lalu',
    comment:
      'Pengalaman pertama arung jeram di Cisadane bareng SA Adventure, servicenya luar biasa memuaskan. Safety talk disampaikan dengan detail sebelum turun ke air. Pemandunya humoris membuat suasana di atas perahu penuh tawa. Pasti akan kembali lagi bawa teman-teman!',
  },
  {
    id: 'rev-8',
    name: 'Fajar Pratama',
    badge: 'Local Guide • Level 6',
    avatarBg: 'bg-cyan-600',
    category: 'outing',
    activity: 'Gathering & Adventure Trip',
    rating: 5,
    date: '2 bulan lalu',
    comment:
      'Petualangan rafting di Cisadane bersama tim SA Adventure sangat berkesan. Tim lapangannya solid, perahu dan dayung kokoh, briefing jelas, dan keramahan pemandu patut diacungi jempol. Pilihan pas untuk kegiatan rekreasi dan adventure bareng teman kantor.',
  },
  {
    id: 'rev-9',
    name: 'Ahmad Fauzi',
    badge: 'Local Guide • Level 6',
    avatarBg: 'bg-emerald-700',
    category: 'rafting',
    activity: 'Rafting Cisadane 11 KM',
    rating: 5,
    date: '3 minggu lalu',
    comment:
      'Sensasi meluncur di dam setinggi 3 meter bener-bener memacu adrenalin! Pelayanan SA Adventure sangat sigap, perahu karet bersih, helm dan pelampung terawat. Pemandunya jago banget baca arus air.',
  },
  {
    id: 'rev-10',
    name: 'Siti Rahmawati',
    badge: 'Ulasan Terverifikasi Google',
    avatarBg: 'bg-pink-600',
    category: 'family',
    activity: 'Family Fun Rafting',
    rating: 5,
    date: '1 bulan lalu',
    comment:
      'Awalnya agak cemas karena bawa keluarga yang belum pernah arung jeram, tapi ternyata pemandu SA Adventure super sabar dan teliti. Ada sesi foto aksi di jeram terbaik, hasilnya jernih banget buat kenang-kenangan.',
  },
  {
    id: 'rev-11',
    name: 'Reza Pratama',
    badge: 'Local Guide • 54 Ulasan',
    avatarBg: 'bg-blue-700',
    category: 'outing',
    activity: 'Company Gathering & Outbound',
    rating: 5,
    date: '2 bulan lalu',
    comment:
      'Sudah kedua kalinya kami percayakan event outbound dan arung jeram divisi ke SA Adventure. Koordinasi lapangan rapi, instruktur kompak, asuransi peserta lengkap, dan arung jeram lancar seru!',
  },
  {
    id: 'rev-12',
    name: 'Diana Lestari',
    badge: 'Ulasan Terverifikasi Google',
    avatarBg: 'bg-orange-600',
    category: 'rafting',
    activity: 'Combo Rafting & Curug Trekking',
    rating: 5,
    date: '1 bulan lalu',
    comment:
      'Paket combo rafting plus trekking SA Adventure sangat worth it! Menikmati pemandangan alam Cisadane yang hijau dan air terjun alami. Pelayanan ramah sejak awal konsultasi WhatsApp sampai selesai kegiatan.',
  },
];

export default function ReviewSection() {
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector('.review-card')?.offsetWidth || 360;
      const scrollAmount = direction === 'left' ? -cardWidth * 1.5 : cardWidth * 1.5;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Auto-scroll loop every 4 seconds, pauses on user hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        if (scrollLeft >= scrollWidth - clientWidth - 15) {
          sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const cardWidth = sliderRef.current.querySelector('.review-card')?.offsetWidth || 360;
          sliderRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    updateScrollButtons();
  }, [updateScrollButtons]);

  return (
    <section
      id="ulasan"
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-b border-neutral-200/80 scroll-mt-20 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase mb-2.5 block">
            Testimoni &amp; Ulasan Terverifikasi Google Maps
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
            Ulasan Petualang SA Adventure
          </h2>
          <p className="mt-3 text-neutral-600 font-light text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Ulasan asli langsung dari para petualang yang telah merasakan serunya mengarungi jeram Sungai Cisadane bersama tim pemandu profesional SA Adventure.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-neutral-50 border border-neutral-200/90 rounded-2xl py-3 px-5 sm:px-7 shadow-xs">
            <div className="flex items-center gap-2.5">
              {/* Google G Logo */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">4.9</span>
              <span className="text-neutral-400 text-xs font-semibold">/ 5.0</span>
            </div>

            {/* 5 Stars */}
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <div className="text-xs text-neutral-700 font-medium border-t sm:border-t-0 sm:border-l border-neutral-200 pt-1.5 sm:pt-0 sm:pl-4">
              <span>1.300+ Ulasan Google Maps</span>
            </div>

            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold text-blue-600 hover:text-blue-800 hover:underline uppercase tracking-wider inline-flex items-center gap-1"
            >
              <span>Lihat di Maps</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Carousel Slider Arrow Controls Header */}
        <div className="flex items-center justify-end mb-4 px-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Geser ke ulasan sebelumnya"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                canScrollLeft
                  ? 'border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 shadow-xs active:scale-95'
                  : 'border-neutral-200 bg-neutral-50 text-neutral-300 cursor-not-allowed opacity-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Geser ke ulasan berikutnya"
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                canScrollRight
                  ? 'border-neutral-300 bg-white hover:bg-neutral-100 text-neutral-800 shadow-xs active:scale-95'
                  : 'border-neutral-200 bg-neutral-50 text-neutral-300 cursor-not-allowed opacity-50'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Slider Track */}
        <div
          ref={sliderRef}
          onScroll={updateScrollButtons}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          className="flex gap-5 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 pt-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="review-card w-[300px] sm:w-[360px] md:w-[380px] shrink-0 snap-start flex flex-col justify-between bg-white rounded-2xl border border-neutral-200/90 p-5 sm:p-6 shadow-xs hover:shadow-md transition-all duration-200"
            >
              <div>
                {/* Header: Avatar, Name, Google Icon */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-xs ${rev.avatarBg}`}
                    >
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 leading-tight">
                        {rev.name}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[11px] text-neutral-500 font-medium">
                          {rev.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Google Verified Icon */}
                  <div
                    className="p-1.5 rounded-full bg-neutral-50 border border-neutral-100 shrink-0 shadow-2xs"
                    title="Ulasan Terverifikasi Google"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
                      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
                    </svg>
                  </div>
                </div>

                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400">{rev.date}</span>
                </div>

                {/* Comment Body */}
                <p className="text-neutral-700 text-xs sm:text-sm font-light leading-relaxed mb-4 line-clamp-5">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Activity Tag */}
              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <span className="inline-flex items-center text-[10px] font-semibold text-neutral-600 bg-neutral-100 rounded-md px-2 py-0.5">
                  {rev.activity}
                </span>
                <span className="text-[10px] font-medium text-emerald-600 flex items-center gap-1">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Terverifikasi
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions: Lihat Semua di Google Maps */}
        <div className="mt-12 sm:mt-16 flex items-center justify-center font-sans text-xs">
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold py-3 px-7 rounded-full transition-all cursor-pointer text-xs uppercase tracking-wider shadow-sm hover:shadow-md"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Lihat Semua Ulasan di Google Maps</span>
            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
