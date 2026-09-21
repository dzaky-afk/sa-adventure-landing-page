'use client';

import { useRef, useState } from 'react';

export default function Packages() {
  const contactPhone = '6281291068287';
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const packages = [
    {
      category: 'Paket Pemula & Keluarga',
      name: 'Rafting Cisadane Family',
      distance: '7 KM (±1.5 Jam)',
      amount: '185.000',
      btnText: 'Konsultasi Paket Family',
      featured: false,
      features: [
        'Pengarungan Sungai Cisadane jarak 7 KM (±1.5 Jam)',
        'Peralatan keselamatan lengkap (helm, pelampung, dayung)',
        'Pemandu perahu profesional & tim rescue air',
        'Kelapa muda segar di titik finish & snack tradisional',
        'Fasilitas basecamp (kamar bilas, saung istirahat, parkir)',
        'Asuransi keselamatan selama pengarungan',
      ],
      bookName: 'Paket Rafting Cisadane Family 7KM (Rp 185.000/orang)',
    },
    {
      category: 'Paket Petualangan Penuh',
      name: 'Rafting Cisadane Adventure',
      distance: '11 KM (±2 Jam)',
      amount: '225.000',
      btnText: 'Konsultasi Paket Adventure',
      featured: true,
      ribbon: 'Paling Banyak Dipilih',
      features: [
        'Pengarungan Sungai Cisadane jarak 11 KM (±2 Jam pengarungan)',
        'Sensasi jeram menantang kelas II - III & body rafting spot',
        'Peralatan rafting bersertifikat & rescue team penuh',
        'Makan siang prasmanan khas Sunda & kelapa muda',
        'Transportasi lokal dari finish point ke basecamp',
        'Asuransi keselamatan & fasilitas basecamp lengkap',
      ],
      bookName: 'Paket Rafting Cisadane Adventure 11KM (Rp 225.000/orang)',
    },
    {
      category: 'Paket Perusahaan & Komunitas',
      name: 'One Day Corporate Gathering',
      distance: '11 KM + Outbound',
      amount: '345.000',
      btnText: 'Konsultasi Paket Gathering',
      featured: false,
      features: [
        'Rafting Cisadane 11 KM + Team Building Outbound Games',
        'Fasilitator games & master of ceremonies interaktif',
        'Makan siang prasmanan lengkap + 2x coffee break',
        'Sound system outdoor, banner kegiatan, dan dokumentasi foto',
        'Area lapang hijau eksklusif & pendopo pertemuan',
        'Asuransi peserta dan koordinasi acara menyeluruh',
      ],
      bookName: 'Paket One Day Corporate Gathering (Rp 345.000/orang)',
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const cardWidth = 295 + 16;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIdx(Math.min(Math.max(index, 0), packages.length - 1));
  };

  const scrollToPackage = (index) => {
    if (!scrollRef.current) return;
    const cardWidth = 295 + 16;
    scrollRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth',
    });
    setActiveIdx(index);
  };

  const getWaLink = (pkgName) => {
    const msg = `Halo SA Adventure, saya ingin konsultasi dan reservasi ${pkgName}. Mohon info tanggal yang tersedia, fasilitas lengkap, dan prosedur pemesanannya. Terima kasih.`;
    return `https://api.whatsapp.com/send?phone=${contactPhone}&text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="packages-section" id="harga">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <div className="badge-pill">
            <span>Harga Transparan Tanpa Biaya Tersembunyi</span>
          </div>
          <h2 className="section-title">Pilihan Paket Rafting &amp; Gathering Bogor</h2>
          <p className="section-desc">
            Seluruh paket sudah termasuk perlengkapan keselamatan standar internasional, instruktur berlisensi, fasilitas basecamp, dan asuransi.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="packages-mobile-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <span>Geser untuk melihat 3 paket rafting</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>

        <div className="packages-grid" ref={scrollRef} onScroll={handleScroll}>
          {packages.map((pkg, idx) => (
            <div key={idx} className={`package-card ${pkg.featured ? 'featured' : ''}`}>
              {pkg.ribbon && <div className="package-ribbon">{pkg.ribbon}</div>}
              <div className="package-header">
                <span className="package-category">{pkg.category}</span>
                <h3 className="package-name">{pkg.name}</h3>
                <div style={{ fontSize: '0.82rem', color: 'var(--river-blue-primary)', fontWeight: 600, marginBottom: '10px' }}>
                  Jarak Tempuh: {pkg.distance}
                </div>
                <div className="package-price-wrap">
                  <span className="package-currency">Rp</span>
                  <span className="package-amount">{pkg.amount}</span>
                  <span className="package-unit">/ orang</span>
                </div>
              </div>

              <ul className="package-features">
                {pkg.features.map((feat, fIdx) => (
                  <li key={fIdx}>
                    <svg
                      className="feature-check"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <a
                href={getWaLink(pkg.bookName)}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>{pkg.btnText}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Dots */}
        <div className="packages-mobile-dots">
          {packages.map((_, i) => (
            <button
              key={i}
              className={`packages-dot ${activeIdx === i ? 'active' : ''}`}
              onClick={() => scrollToPackage(i)}
              aria-label={`Lihat paket ${i + 1}`}
            />
          ))}
        </div>

        {/* Banner Penawaran Khusus Rombongan */}
        <div
          className="group-offer-banner"
          style={{
            background: 'radial-gradient(800px circle at 50% 50%, #0369a1 0%, #075985 50%, #0a2540 100%)',
            borderRadius: '24px',
            padding: '40px 32px',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
            boxShadow: '0 20px 40px -10px rgba(7, 89, 133, 0.4)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            marginTop: '50px',
          }}
        >
          <div style={{ maxWidth: '640px' }}>
            <span style={{ fontSize: '0.8rem', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--river-cyan-light)', fontWeight: 700 }}>
              Penawaran Khusus Perusahaan &amp; Komunitas
            </span>
            <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, margin: '8px 0 12px', color: '#ffffff' }}>
              Rencana Kegiatan Rombongan &gt; 30 Orang?
            </h3>
            <p style={{ color: '#e0f2fe', fontSize: '0.98rem', lineHeight: '1.6', margin: 0 }}>
              Dapatkan proposal penawaran khusus, fleksibilitas rundown acara, opsi custom konsumsi prasmanan kambing guling, dokumentasi drone, dan diskon rombongan menarik.
            </p>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20ingin%20konsultasi%20penawaran%20harga%20khusus%20untuk%20rombongan%20gathering/rafting."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '14px 28px', fontSize: '1rem' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Konsultasi Penawaran Rombongan</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
