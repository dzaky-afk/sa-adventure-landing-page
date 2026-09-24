'use client';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Pilih Paket & Tentukan Tanggal',
      desc: 'Pilih jarak pengarungan rafting (7 KM untuk santai keluarga atau 11 KM untuk sensasi petualangan penuh). Anda juga bisa menambahkan aktivitas outbound, paintball, penginapan villa, atau catering prasmanan sesuai kebutuhan rombongan.',
      tag: 'Langkah Pertama',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
    },
    {
      step: '02',
      title: 'Reservasi Mudah & Konsultasi Cepat',
      desc: 'Klik tombol Booking Online di website ini atau hubungi Customer Support kami via WhatsApp. Kami membantu mengunci jadwal favorit Anda, menghitung estimasi biaya akurat, hingga menyiapkan proposal resmi jika dibutuhkan kantor.',
      tag: 'Konfirmasi Instan',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
    {
      step: '03',
      title: 'Dapatkan E-Voucher & Panduan Berangkat',
      desc: 'Setelah jadwal terkonfirmasi, Anda akan menerima E-Voucher resmi, rute peta GPS menuju Basecamp Caringin Bogor, rundown kegiatan terstruktur, serta panduan pakaian dan barang bawaan agar persiapan Anda 100% matang.',
      tag: 'Persiapan Tenang',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      step: '04',
      title: 'Tiba di Basecamp & Nikmati Petualangan!',
      desc: 'Tiba di lokasi, nikmati welcome drink segar, kenakan perlengkapan safety bersertifikat, ikuti briefing santai dari river guide berlisensi FAJI, dan langsung arungi jeram Sungai Cisadane dengan penuh tawa dan keseruan!',
      tag: 'Hari H Seru',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polygon points="10 8 16 12 10 16 10 8" />
        </svg>
      ),
    },
  ];

  return (
    <section className="how-it-works-section editorial-section" id="cara-kerja">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-badge-pill">
            <span>PANDUAN LANGKAH MUDAH</span>
          </div>
          <h2 className="section-title editorial-heading">
            CARA KERJA: 4 LANGKAH PRAKTIS MENUJU SUNGAI
          </h2>
          <p className="section-desc">
            Dari perencanaan awal hingga pengarungan sungai, kami merancang setiap tahapan agar cepat, transparan, dan bebas ribet untuk Anda dan rombongan.
          </p>
        </div>

        {/* 4 Steps Timeline / Grid */}
        <div className="steps-grid">
          {steps.map((st, idx) => (
            <div className="step-card editorial-step-card" key={idx}>
              <div className="step-card-top">
                <span className="step-number-badge editorial-step-badge">{st.step}</span>
                <span className="step-tag editorial-tag">{st.tag}</span>
              </div>
              <div className="step-icon-wrap editorial-step-icon">{st.icon}</div>
              <h3 className="step-title editorial-subheading">{st.title}</h3>
              <p className="step-desc">{st.desc}</p>

              {idx < steps.length - 1 && (
                <div className="step-arrow-indicator editorial-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Callout Banner */}
        <div className="steps-bottom-banner editorial-sbb-banner">
          <div className="sbb-left">
            <span className="sbb-pill editorial-caps-tag">PROSES CEPAT &amp; TRANSPARAN</span>
            <h4 className="sbb-title">Butuh Jadwal Mendadak untuk Akhir Pekan Ini?</h4>
            <p className="sbb-desc">Tim reservasi kami siap melayani reservasi last-minute dan memastikan slot perahu Anda tersedia.</p>
          </div>
          <div className="sbb-right">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-booking-modal'));
                }
              }}
              className="btn btn-editorial-primary"
            >
              <span>Booking Slot Sekarang</span>
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20mau%20tanya%20ketersediaan%20slot%20rafting%20weekend%20ini."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-editorial-wa"
            >
              <span>Tanya Slot via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
