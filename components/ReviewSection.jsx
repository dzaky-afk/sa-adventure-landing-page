'use client';

import Script from 'next/script';

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/place/Papalidan+Outdoor+Resto/@-6.7029647,106.8263511,17z/data=!4m8!3m7!1s0x2e69c97505cbbd4d:0x3efd818443a97b1e!8m2!3d-6.7030124!4d106.8263064';

const GOOGLE_WRITE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=ChIJTb3LBXXJaS4RHnupQ4SB_T4';

export default function ReviewSection() {
  return (
    <section id="ulasan" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-b border-neutral-200/80 scroll-mt-20">
      {/* Elfsight Platform Script */}
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2 block font-sans">
            Testimoni &amp; Ulasan Nyata Google Maps
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
            Ulasan Pelanggan Papalidan &amp; SA Adventure
          </h2>
          <p className="mt-3 text-neutral-600 font-light font-sans text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Ulasan asli langsung tersinkronisasi otomatis dari pengunjung Google Maps yang telah merasakan petualangan arung jeram Cisadane dan kenyamanan resto alam Papalidan.
          </p>

          {/* Aggregate Rating Banner with Google Maps Link */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-neutral-50 border border-neutral-200/90 rounded-2xl py-3 px-5 sm:px-7 font-sans">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">4.9</span>
              <span className="text-neutral-400 text-xs">/ 5.0</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-xs text-neutral-600 font-medium border-t sm:border-t-0 sm:border-l border-neutral-200 pt-1 sm:pt-0 sm:pl-4">
              <span>1.300+ Ulasan Terverifikasi di Google Maps</span>
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

        {/* Elfsight Live Auto-Sync Google Reviews Widget */}
        <div className="min-h-[280px]">
          <div
            className="elfsight-app-907e5829-6fa5-433e-8de5-0a8d1ce410ac"
            data-elfsight-app-lazy
          />
        </div>

        {/* Footer Actions: Tulis Ulasan & Lihat Semua di Google Maps */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 font-sans text-xs">
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-semibold py-3 px-6 rounded-full transition-all shadow-sm hover:shadow-md cursor-pointer uppercase tracking-wider text-[11px]"
          >
            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Tulis Ulasan di Google Maps</span>
          </a>

          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 border border-neutral-300 text-neutral-800 font-semibold py-3 px-6 rounded-full transition-all cursor-pointer text-[11px] uppercase tracking-wider"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
              <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.36 24 12 24z"/>
              <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
              <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.36 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
            </svg>
            <span>Buka Google Maps Papalidan</span>
            <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

