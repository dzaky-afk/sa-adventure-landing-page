'use client';

export default function Footer() {
  return (
    <footer id="about" className="bg-black text-white pt-14 sm:pt-20 pb-14 px-4 sm:px-6 border-t border-neutral-900 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
        {/* Col 1: Contact Info */}
        <div>
          <h4 className="font-serif text-2xl mb-6 tracking-wide text-white">
            Contact Us
          </h4>
          <p className="font-light text-sm text-gray-400 mb-2 leading-relaxed font-sans">
            Basecamp Cisadane: Jl. Raya Bogor - Sukabumi No. 1, Caringin, Bogor, Jawa Barat 16730
          </p>
          <p className="font-light text-sm text-gray-400 mb-4 leading-relaxed font-sans">
            Kantor Depok: Jl. Radar AURI RT.03/RW.10 Mekarsari, Cimanggis, Depok
          </p>

          <div className="space-y-3 mt-6">
            <div className="flex items-start gap-2.5 text-sm text-gray-400 font-light font-sans">
              <svg className="w-4 h-4 text-white shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <div>
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-medium">Admin 1 (Reservasi Utama):</span>
                <a
                  href="https://wa.me/6281291068287?text=Halo%20Admin%201%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors font-medium text-gray-200"
                >
                  +62 812 9106 8287
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-sm text-gray-400 font-light font-sans">
              <svg className="w-4 h-4 text-white shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <div>
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-medium">Admin 2 (Customer Service):</span>
                <a
                  href="https://wa.me/62895808755565?text=Halo%20Admin%202%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors font-medium text-gray-200"
                >
                  +62 895 8087 55565
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-gray-400 font-light font-sans pt-1">
              <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <a
                href="mailto:sa.adventure76@gmail.com"
                className="hover:text-white transition-colors"
              >
                sa.adventure76@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-gray-400 font-light font-sans">
              <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <a
                href="https://www.instagram.com/sa.adventure.ok/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                @sa.adventure.ok
              </a>
            </div>
          </div>
        </div>

        {/* Col 2: Center Logo & Quick Links */}
        <div className="md:text-center flex flex-col items-center justify-start">
          <img
            src="/images/logo_sa_adventure.png"
            alt="Logo SA Adventure"
            loading="lazy"
            width="180"
            height="80"
            className="h-16 md:h-20 w-auto object-contain mx-auto mb-4 hover:scale-105 transition-transform duration-300 drop-shadow-lg"
          />

          <h3 className="font-serif text-xl tracking-[0.2em] uppercase mb-4 text-white">
            SA ADVENTURE
          </h3>
          <p className="text-xs text-gray-500 max-w-xs mb-6 font-light leading-relaxed font-sans">
            Professional Whitewater Rafting, Outbound Team Building, &amp; Nature Retreat in Bogor.
          </p>

          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest uppercase text-gray-500 font-sans">
              <a href="#hero" className="hover:text-white transition-colors">HOME</a>
              <a href="#about" className="hover:text-white transition-colors">ABOUT US</a>
              <a href="#paket" className="hover:text-white transition-colors">SERVICES</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold tracking-widest uppercase text-gray-500 font-sans mt-1">
              <a href="#akomodasi" className="hover:text-white transition-colors">ACCOMMODATION</a>
              <a href="#galeri" className="hover:text-white transition-colors">GALLERY</a>
            </div>
          </div>
        </div>

        {/* Col 3: Fast Reservation / WhatsApp Inquiry */}
        <div className="md:text-right flex flex-col md:items-end">
          <h4 className="font-serif text-2xl mb-4 tracking-wide text-white">
            Fast Booking
          </h4>
          <p className="font-light text-sm text-gray-400 mb-6 max-w-sm font-sans leading-relaxed">
            Tanyakan tanggal tersedia, diskon rombongan, atau minta proposal resmi langsung via WhatsApp Admin kami.
          </p>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/6281291068287?text=Halo%20Admin%201%20SA%20Adventure,%20saya%20tertarik%20untuk%20booking%20paket%20Rafting%20Cisadane.%20Mohon%20info%20jadwal%20dan%20penawaran%20terbaiknya."
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-white px-6 py-3 uppercase tracking-widest text-xs font-bold text-white hover:bg-white hover:text-black transition-colors duration-300 font-sans no-underline text-center"
            >
              CHAT ADMIN 1 (0812-9106-8287)
            </a>
            <a
              href="https://wa.me/62895808755565?text=Halo%20Admin%202%20SA%20Adventure,%20saya%20tertarik%20untuk%20booking%20paket%20Rafting%20Cisadane.%20Mohon%20info%20jadwal%20dan%20penawaran%20terbaiknya."
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-gray-600 px-6 py-3 uppercase tracking-widest text-xs font-bold text-gray-300 hover:border-white hover:text-white transition-colors duration-300 font-sans no-underline text-center"
            >
              CHAT ADMIN 2 (0895-8087-55565)
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto text-center border-t border-neutral-900 pt-8">
        <p className="text-xs text-gray-600 tracking-widest uppercase font-sans m-0">
          &copy; 2026 CISADANE RIVER RAFTING &bull; SA ADVENTURE. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
