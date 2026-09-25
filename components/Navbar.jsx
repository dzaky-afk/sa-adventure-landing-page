'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('#hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '#hero', label: 'Beranda' },
    { href: '#filosofi', label: 'Filosofi' },
    { href: '#akomodasi', label: 'Akomodasi' },
    { href: '#galeri', label: 'Galeri' },
    { href: '#ulasan', label: 'Ulasan' },
    { href: 'https://saadventure.vercel.app', label: 'Web Reservasi', isExternal: true },
    { href: '#about', label: 'Kontak Kami' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when menu is open & listen for Escape key
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsMenuOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  const handleLinkClick = (e, href, isExternal) => {
    if (isExternal) {
      setIsMenuOpen(false);
      return;
    }
    if (e && e.preventDefault) e.preventDefault();
    setActiveLink(href);
    setIsMenuOpen(false);

    const targetId = href.replace('#', '');
    let el = document.getElementById(targetId);
    if (!el) {
      if (
        targetId === 'paket' ||
        targetId === 'paket-rafting' ||
        targetId === 'services' ||
        targetId === 'packages'
      ) {
        el =
          document.getElementById('paket') ||
          document.getElementById('services') ||
          document.getElementById('paket-rafting') ||
          document.getElementById('packages');
      } else if (
        targetId === 'akomodasi' ||
        targetId === 'villa' ||
        targetId === 'pemilihan-villa' ||
        targetId === 'accommodation'
      ) {
        el =
          document.getElementById('villa') ||
          document.getElementById('akomodasi') ||
          document.getElementById('pemilihan-villa') ||
          document.getElementById('accommodation');
      } else if (targetId === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-neutral-200/80 py-3'
            : 'bg-white border-b border-neutral-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo Brand SA Adventure */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="cursor-pointer flex items-center group text-inherit no-underline shrink-0"
            aria-label="Kembali ke Beranda"
          >
            <img
              src="/images/logo_sa_adventure.png"
              alt="Logo SA Adventure"
              width="160"
              height="44"
              className="h-9 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop/Laptop Navigation Links (Tampil di Laptop, Tersembunyi di HP) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <ul className="flex items-center gap-1 lg:gap-2 m-0 p-0 list-none font-sans">
              {navLinks.map((link) => {
                const isActive = activeLink === link.href;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target={link.isExternal ? '_blank' : undefined}
                      rel={link.isExternal ? 'noopener noreferrer' : undefined}
                      onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                      className={`text-[11px] lg:text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-all duration-200 no-underline px-3 lg:px-3.5 py-1.5 rounded-full inline-flex items-center gap-1 ${
                        isActive && !link.isExternal
                          ? 'bg-neutral-950 text-white font-bold shadow-2xs'
                          : link.isExternal
                          ? 'text-neutral-900 bg-neutral-100 hover:bg-neutral-200 font-bold'
                          : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100 font-medium'
                      }`}
                    >
                      <span>{link.label}</span>
                      {link.isExternal && (
                        <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action: Tombol Web Reservasi + WA di Laptop & Tombol Garis 3 HANYA di HP */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Tombol Web Reservasi di Laptop */}
            <a
              href="https://saadventure.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-1.5 border border-neutral-300 hover:border-neutral-900 bg-white hover:bg-neutral-50 text-neutral-800 hover:text-neutral-950 px-3.5 py-2 rounded-xl uppercase tracking-wider text-[11px] font-bold transition-all duration-200 font-sans no-underline shadow-2xs"
            >
              <span>Web Reservasi</span>
              <svg className="w-3 h-3 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            {/* Tombol Reservasi WA di Laptop */}
            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20tanya%20info%20paket%20Rafting%20Cisadane."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 border border-neutral-900 bg-neutral-950 hover:bg-neutral-800 text-white px-4 py-2 rounded-xl uppercase tracking-wider text-[11px] font-bold transition-all duration-200 font-sans no-underline shadow-2xs active:scale-98"
            >
              <svg className="w-3.5 h-3.5 fill-white" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Reservasi WA</span>
            </a>

            {/* Tombol Garis 3 (Hamburger Menu) - HANYA MUNCUL DI HP (md:hidden) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden w-11 h-11 text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-all active:scale-95 cursor-pointer flex flex-col items-center justify-center gap-1.5 border border-neutral-300 shadow-2xs touch-manipulation"
              aria-label="Buka Menu Navigasi"
              title="Menu"
            >
              <span className="w-5 h-0.5 bg-neutral-950 rounded-full transition-transform" />
              <span className="w-5 h-0.5 bg-neutral-950 rounded-full transition-transform" />
              <span className="w-5 h-0.5 bg-neutral-950 rounded-full transition-transform" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide-in Full Drawer Menu (Hanya untuk pengguna HP saat tombol garis 3 diklik) */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[99999] md:hidden">
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Slide-over panel */}
          <div className="fixed top-0 right-0 w-84 max-w-[88vw] h-full bg-white text-neutral-900 p-6 shadow-2xl flex flex-col justify-between border-l border-neutral-200 z-10 overflow-y-auto">
            <div>
              {/* Header inside drawer */}
              <div className="flex justify-between items-center border-b border-neutral-100 pb-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <img
                    src="/images/logo_sa_adventure.png"
                    alt="Logo SA Adventure"
                    className="h-8 w-auto object-contain"
                  />
                  <div>
                    <span className="font-serif font-bold text-sm text-neutral-950 block leading-tight">
                      SA ADVENTURE
                    </span>
                    <span className="text-[10px] text-neutral-500 font-medium font-sans">
                      Rafting Cisadane Bogor
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center cursor-pointer transition-colors"
                  aria-label="Tutup Menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest mb-3 px-1 font-sans">
                Menu Navigasi
              </div>

              <ul className="flex flex-col space-y-1.5 m-0 p-0 list-none font-sans">
                {navLinks.map((link) => {
                  const isActive = activeLink === link.href;
                  return (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target={link.isExternal ? '_blank' : undefined}
                        rel={link.isExternal ? 'noopener noreferrer' : undefined}
                        onClick={(e) => handleLinkClick(e, link.href, link.isExternal)}
                        className={`block py-3 px-3.5 rounded-xl text-sm font-semibold uppercase tracking-wider transition-all no-underline cursor-pointer flex items-center justify-between ${
                          isActive && !link.isExternal
                            ? 'bg-neutral-950 text-white font-bold shadow-xs'
                            : link.isExternal
                            ? 'text-neutral-900 bg-emerald-50/80 border border-emerald-200/80 font-bold'
                            : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <span>{link.label}</span>
                        {link.isExternal ? (
                          <svg className="w-4 h-4 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        ) : (
                          isActive && <span className="w-2 h-2 rounded-full bg-white" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Action & Contact inside Drawer */}
            <div className="pt-4 border-t border-neutral-100 space-y-2.5 font-sans">
              <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest block px-1">
                Layanan &amp; Reservasi
              </span>

              {/* Direct Web Reservasi Button */}
              <a
                href="https://saadventure.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-white hover:bg-neutral-50 text-neutral-900 border border-neutral-300 font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-2xs no-underline transition active:scale-98"
              >
                <span>Buka Web Reservasi</span>
                <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%201%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-neutral-950 hover:bg-neutral-800 text-white font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-xs no-underline transition active:scale-98"
              >
                <svg className="w-4 h-4 shrink-0 fill-white" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Admin 1: 0812-9106-8287</span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=62895808755565&text=Halo%20Admin%202%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20Cisadane"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 font-semibold uppercase tracking-wider text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 no-underline transition active:scale-98"
              >
                <svg className="w-4 h-4 shrink-0 fill-current text-neutral-700" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Admin 2: 0895-8087-55565</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
