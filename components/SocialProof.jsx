'use client';

import { useState } from 'react';

export default function SocialProof() {
  const [activeTab, setActiveTab] = useState('all');

  const stats = [
    { value: '15.000+', label: 'Peserta Puas', sub: 'Keluarga, komunitas, dan korporat' },
    { value: '4.9 / 5.0', label: 'Rating Google', sub: 'Dari 1.500+ ulasan terverifikasi' },
    { value: '250+', label: 'Event Perusahaan', sub: 'BUMN, Swasta, dan Kementerian' },
    { value: '100%', label: 'Zero Accident Record', sub: 'Standar safety ketat berlisensi resmi' },
  ];

  const clientLogos = [
    { name: 'Bank BCA', category: 'Perbankan' },
    { name: 'Telkom Indonesia', category: 'Telekomunikasi' },
    { name: 'Pertamina', category: 'Energi' },
    { name: 'Bank Mandiri', category: 'Perbankan' },
    { name: 'Astra International', category: 'Otomotif & Industri' },
    { name: 'Tokopedia', category: 'Teknologi' },
    { name: 'Shopee Indonesia', category: 'E-Commerce' },
    { name: 'Kementerian Keuangan', category: 'Instansi Pemerintah' },
    { name: 'PLN Persero', category: 'BUMN' },
    { name: 'Universitas Indonesia', category: 'Pendidikan' },
  ];

  const testimonials = [
    {
      name: 'Bambang Sudibyo',
      role: 'Head of People & HR, Tech Startup Jakarta',
      category: 'corporate',
      avatar: '👨‍💼',
      stars: 5,
      title: 'Gathering Kantor Paling Berkesan & Bebas Ribet!',
      content:
        'Tahun ini kami bawa 85 karyawan untuk outing kantor di Cisadane bersama SA Adventure. Dari penjemputan, briefing pemandu, rafting seru, sampai makan siang prasmanan Sundanya mantap sekali! Tim EO sangat sigap dan koordinatif. Sangat kami rekomendasikan untuk HRD manapun yang mau bikin outing.',
      date: 'Agustus 2026',
    },
    {
      name: 'dr. Ratna Kartika & Keluarga',
      role: 'Rombongan Keluarga Besar (Bandung & Depok)',
      category: 'family',
      avatar: '👩‍⚕️',
      stars: 5,
      title: 'Anak-Anak & Orang Tua Merasa Sangat Aman!',
      content:
        'Awalnya ragu mengajak anak usia 8 tahun dan neneknya ikut ke sungai. Tapi tim pemandu SA Adventure luar biasa sabar, telaten, dan profesional. Rompi pelampung dan helmnya berkualitas bagus. Seluruh keluarga hepi dan pulangnya bawa foto-foto dokumentasi yang super keren!',
      date: 'Juli 2026',
    },
    {
      name: 'Dimas Wicaksono',
      role: 'Ketua Komunitas Adventure Jabodetabek',
      category: 'community',
      avatar: '🚣‍♂️',
      stars: 5,
      title: 'Jeramnya Menantang, Pemandunya Asyik & Berpengalaman!',
      content:
        'Kami ambil paket Cisadane Adventure 11 KM. Jeram Dam Kuda dan Ombak Keren banget pacu adrenalin! Guide-nya asyik diajak bercanda tapi tetap disiplin jaga keselamatan. Basecamp bersih, parkiran luas, dan kelapa mudanya penutup yang sempurna.',
      date: 'September 2026',
    },
  ];

  const filteredTestimonials =
    activeTab === 'all' ? testimonials : testimonials.filter((t) => t.category === activeTab);

  return (
    <section className="social-proof-section editorial-section" id="bukti-sosial">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-badge-pill">
            <span>BUKTI SOSIAL &amp; KEPERCAYAAN</span>
          </div>
          <h2 className="section-title editorial-heading">
            DIPERCAYA 15.000+ PESERTA &amp; RATUSAN PERUSAHAAN
          </h2>
          <p className="section-desc">
            Kepuasan dan keselamatan Anda adalah komitmen mutlak kami sejak 2017. Simak ulasan mereka yang telah merasakan langsung petualangan seru bersama SA Adventure.
          </p>
        </div>

        {/* Key Numerical Trust Metrics */}
        <div className="proof-stats-grid">
          {stats.map((s, idx) => (
            <div className="proof-stat-card editorial-stat-card" key={idx}>
              <div className="proof-stat-value editorial-stat-number">{s.value}</div>
              <div className="proof-stat-label">{s.label}</div>
              <div className="proof-stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>

        {/* Corporate Client Partner Logos */}
        <div className="client-logos-wrapper editorial-client-wrapper">
          <div className="client-logos-header text-center">
            <span className="client-logos-badge editorial-caps-tag">KLIEN &amp; MITRA TERPERCAYA</span>
            <p className="client-logos-desc">Perusahaan, BUMN, dan institusi yang telah menyelenggarakan event gathering bersama kami</p>
          </div>
          <div className="client-logos-grid">
            {clientLogos.map((client, idx) => (
              <div className="client-logo-box editorial-client-box" key={idx}>
                <div className="client-logo-icon">🏢</div>
                <div className="client-logo-name">{client.name}</div>
                <div className="client-logo-cat">{client.category}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Showcase with Filter */}
        <div className="testimonials-block">
          <div className="testimonials-tabs">
            <button
              className={`testi-tab-btn editorial-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              SEMUA ULASAN
            </button>
            <button
              className={`testi-tab-btn editorial-tab-btn ${activeTab === 'corporate' ? 'active' : ''}`}
              onClick={() => setActiveTab('corporate')}
            >
              GATHERING KANTOR
            </button>
            <button
              className={`testi-tab-btn editorial-tab-btn ${activeTab === 'family' ? 'active' : ''}`}
              onClick={() => setActiveTab('family')}
            >
              KELUARGA &amp; ANAK
            </button>
            <button
              className={`testi-tab-btn editorial-tab-btn ${activeTab === 'community' ? 'active' : ''}`}
              onClick={() => setActiveTab('community')}
            >
              KOMUNITAS &amp; TEMAN
            </button>
          </div>

          <div className="testimonials-grid">
            {filteredTestimonials.map((t, idx) => (
              <div className="testimonial-card editorial-testi-card" key={idx}>
                <div className="testi-header">
                  <div className="testi-avatar">{t.avatar}</div>
                  <div className="testi-author">
                    <h4 className="testi-name">{t.name}</h4>
                    <span className="testi-role">{t.role}</span>
                  </div>
                </div>

                <div className="testi-rating">
                  {'★'.repeat(t.stars)}
                  <span className="testi-rating-text">5.0 / 5.0</span>
                </div>

                <h5 className="testi-title editorial-testi-heading">&ldquo;{t.title}&rdquo;</h5>
                <p className="testi-body">&ldquo;{t.content}&rdquo;</p>

                <div className="testi-footer">
                  <span className="testi-verified">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Ulasan Terverifikasi
                  </span>
                  <span className="testi-date">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Reviews Badge Bar */}
        <div className="google-review-bar editorial-gr-bar">
          <div className="gr-left">
            <div className="gr-glogo">G</div>
            <div className="gr-info">
              <span className="gr-score">4.9 Bintang</span>
              <span className="gr-stars">★★★★★</span>
              <span className="gr-count">(1.500+ Ulasan Google Maps)</span>
            </div>
          </div>
          <div className="gr-right">
            <a
              href="https://maps.app.goo.gl/uXpXkXq8Xy"
              target="_blank"
              rel="noopener noreferrer"
              className="gr-link editorial-gr-link"
            >
              <span>LIHAT SEMUA ULASAN GOOGLE MAPS</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
