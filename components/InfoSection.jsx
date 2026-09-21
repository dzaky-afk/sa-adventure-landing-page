'use client';

export default function InfoSection() {
  const highlights = [
    {
      title: 'River Guide Berlisensi Resmi',
      desc: 'Seluruh instruktur dan pemandu pengarungan tersertifikasi standar FAJI dengan pengalaman bertahun-tahun di Sungai Cisadane Caringin Bogor.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Peralatan Tier-1 Standar Internasional',
      desc: 'Perahu karet tebal, helm pelindung high-impact, dayung ergonomis, dan life jacket bersertifikasi daya apung tinggi untuk keselamatan maksimal.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: 'Konsep Acara Segar & Tidak Monoton',
      desc: 'Bagi kami, event seru tidak harus kaku. Kami mengemas company gathering, outing, dan team building dengan games interaktif berbobot dan penuh tawa.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: 'Pelayanan Ramah & Sepenuh Hati',
      desc: 'Mulai dari konsultasi rencana kegiatan, penyusunan rundown fleksibel, jamuan kuliner prasmanan, hingga tim dokumentasi yang siap mengabadikan setiap senyum Anda.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="info-section" id="info">
      <div className="container">
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '44px' }}>
          <div className="badge-pill">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '6px' }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>PROFIL &amp; FILOSOFI SA ADVENTURE</span>
          </div>
          <h2 className="section-title">
            Menciptakan Momen Berkesan dengan Standar Keamanan Tertinggi
          </h2>
          <p className="section-desc">
            SA Adventure adalah Event Organizer &amp; penyedia jasa White Water Rafting di Caringin Bogor yang mengedepankan pengalaman kebersamaan nyata, keamanan tanpa kompromi, dan pelayanan bersahabat.
          </p>
        </div>

        {/* Unified Panoramic Photo Banner with Quote Overlaid Directly */}
        {/* Unified Panoramic Photo Banner with Quote Overlaid at Bottom */}
        <div
          className="philosophy-hero-banner"
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            minHeight: '520px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            padding: '36px 28px 44px',
            boxShadow: '0 24px 60px -12px rgba(2, 132, 199, 0.22)',
            border: '1px solid rgba(2, 132, 199, 0.18)',
            marginBottom: '40px',
          }}
        >
          {/* Full-bleed Photo Background - Positioned to show faces clearly */}
          <img
            src="/images/gallery/8.png"
            alt="Keceriaan Fun Outbound Games & Gathering SA Adventure Caringin Bogor"
            loading="lazy"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 16%',
              filter: 'brightness(0.98)',
              transform: 'scale(1.02)',
            }}
          />

          {/* Smart Cinematic Gradient: Top 50% is Crystal Clear so the photo is 100% visible */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.08) 35%, rgba(10, 37, 64, 0.72) 65%, rgba(15, 23, 42, 0.94) 100%)',
            }}
          />

          {/* Overlaid Words & Quote (Tersusun Rapi di Bagian Bawah agar Foto Terlihat Luas) */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              textAlign: 'center',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            {/* Top Philosophy Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '5px 16px',
                borderRadius: '999px',
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: '#ffffff',
                fontSize: '0.78rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                marginBottom: '14px',
                backdropFilter: 'blur(8px)',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
              <span>Filosofi &amp; Komitmen Kami</span>
            </div>

            {/* The Main Quote - Compact & Elegant */}
            <p
              style={{
                fontFamily: 'inherit',
                fontStyle: 'italic',
                fontSize: 'clamp(1.15rem, 2.2vw, 1.55rem)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.5,
                margin: '0 0 18px 0',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.7)',
              }}
            >
              &ldquo;Acara sukses itu bukan cuma peserta datang dan pulang. Tapi pulang dengan senyum, cerita, dan kenangan yang tidak terlupakan&rdquo;
            </p>

            {/* Author / Motto Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 20px',
                borderRadius: '999px',
                background: 'rgba(2, 132, 199, 0.35)',
                border: '1px solid rgba(56, 189, 248, 0.45)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span
                style={{
                  fontSize: '0.8rem',
                  color: '#e0f2fe',
                  fontWeight: 700,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                SA ADVENTURE • CREATE MOMENTS • BUILD MEMORIES • HAVE FUN
              </span>
            </div>
          </div>
        </div>

        {/* Story Narrative & CTA Buttons Below Banner */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto 52px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              color: 'var(--text-body)',
              fontSize: '1.05rem',
              lineHeight: '1.85',
              marginBottom: '16px',
            }}
          >
            Bagi kami, setiap kegiatan di alam terbuka bukan sekadar agenda yang selesai dalam sehari. Kami berkomitmen menciptakan suasana di mana seluruh peserta dapat tertawa lepas, melepas penat rutinitas, dan saling mempererat ikatan kebersamaan secara tulus.
          </p>
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '0.98rem',
              lineHeight: '1.8',
              marginBottom: '28px',
            }}
          >
            Kami memadukan keindahan aliran Sungai Cisadane Caringin Bogor dengan tata kelola kegiatan yang matang dan aman. Baik untuk rombongan keluarga kecil maupun gathering perusahaan ratusan peserta, tim kami siap mengawal setiap detail acara hingga sukses sempurna.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <a href="#harga" className="btn btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                <line x1="7" y1="7" x2="7.01" y2="7" />
              </svg>
              <span>Lihat Pilihan Paket</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20SA%20Adventure,%20saya%20ingin%20konsultasi%20kegiatan%20rafting%20dan%20gathering%20di%20Caringin%20Bogor."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Tanya Admin WA</span>
            </a>
          </div>
        </div>

        {/* 4 Keunggulan Cards */}
        <div className="why-grid">
          {highlights.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon-box">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
