'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY && !isMenuOpen) {
          setIsHidden(true);
        } else {
          setIsHidden(false);
        }
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;

      // ScrollSpy
      const sections = document.querySelectorAll('section[id]');
      let currentId = '';
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 130;
        const sectionHeight = section.offsetHeight;
        if (currentScrollY >= sectionTop && currentScrollY < sectionTop + sectionHeight) {
          currentId = section.getAttribute('id');
        }
      });
      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#info', label: 'Info', id: 'info' },
    { href: '#harga', label: 'Harga & Paket', id: 'harga' },
    { href: '#akomodasi', label: 'Akomodasi', id: 'akomodasi' },
    { href: '#dokumentasi', label: 'Dokumentasi', id: 'dokumentasi' },
    { href: '#lokasi', label: 'Lokasi & Kontak', id: 'lokasi' },
  ];

  const waContactUrl =
    'https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20SA%20Adventure,%20saya%20ingin%20konsultasi%20layanan%20rafting%20dan%20event%20organizer.';

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''} ${isHidden && !isMenuOpen ? 'nav-hidden' : ''}`}
      id="siteHeader"
    >
      <div className="container nav-container">
        <a href="#hero" className="brand-logo" aria-label="SA Adventure Home" onClick={closeMenu}>
          <img
            src="/images/logo_sa_adventure.png"
            alt="Logo Resmi SA Adventure Travel & Tour"
            className="brand-logo-img"
          />
          <div className="brand-text">
            <span className="brand-title">SA ADVENTURE</span>
            <span className="brand-subtitle">Travel &amp; Tour • Rafting Bogor</span>
          </div>
        </a>

        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="navMenu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-nav-cta">
              <a
                href={waContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={closeMenu}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a
            href={waContactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-btn-sm"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Hubungi Kami</span>
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-label="Buka Menu Navigasi"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line className="nav-line-top" x1="3" y1="6" x2="21" y2="6"></line>
              <line className="nav-line-center" x1="3" y1="12" x2="21" y2="12"></line>
              <line className="nav-line-bottom" x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
