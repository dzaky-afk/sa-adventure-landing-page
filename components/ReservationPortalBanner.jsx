'use client';

export default function ReservationPortalBanner() {
  const reservationUrl = 'https://saadventure.vercel.app';
  const waContactUrl =
    'https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20untuk%20konsultasi%20dan%20reservasi%20kegiatan%20rafting/gathering.';

  return (
    <section id="reservasi-online" className="py-14 sm:py-20 px-4 sm:px-6 bg-neutral-900 text-white relative overflow-hidden border-t border-neutral-800">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="bg-neutral-950/80 border border-neutral-800 rounded-2xl p-6 sm:p-10 md:p-12 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">

              {/* Title */}
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-wide mb-4">
                Booking Lebih Cepat &amp; Hitung Estimasi Biaya Online
              </h2>

              {/* Description */}
              <p className="font-sans text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 font-light">
                Gunakan aplikasi web pemesanan resmi SA Adventure untuk mengecek ketersediaan slot tanggal, memilih paket rafting &amp; gathering secara custom, serta mendapatkan kalkulasi biaya instan dan transparan tanpa perlu menunggu antrean admin.
              </p>

              {/* 3 Key Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 font-sans mb-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Cek Jadwal Real-Time</h4>
                    <p className="text-[11px] text-gray-400 font-light leading-snug">Pilih tanggal &amp; sesi jam pengarungan</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <rect x="4" y="2" width="16" height="20" rx="2" />
                      <line x1="8" y1="6" x2="16" y2="6" />
                      <line x1="16" y1="14" x2="16" y2="18" />
                      <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Kalkulator Budget</h4>
                    <p className="text-[11px] text-gray-400 font-light leading-snug">Hitung otomatis per pax &amp; rombongan</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10">
                  <div className="w-5 h-5 rounded-md bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white mb-0.5">Paket Fleksibel</h4>
                    <p className="text-[11px] text-gray-400 font-light leading-snug">Gabung rafting, villa &amp; jamuan kuliner</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:w-80 shrink-0 font-sans flex flex-col gap-3.5 bg-neutral-900/90 border border-neutral-700/80 rounded-xl p-5 sm:p-6 text-center">
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-400 block">
                Akses Langsung Web Reservasi
              </span>

              <a
                href={reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white hover:bg-neutral-200 text-black font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 no-underline group"
              >
                <span>Buka Web Reservasi</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href={waContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border border-neutral-700 hover:border-neutral-500 text-gray-300 hover:text-white font-medium text-xs py-2.5 px-4 rounded-md transition-colors flex items-center justify-center gap-2 no-underline"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Tanya Admin via WhatsApp</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
