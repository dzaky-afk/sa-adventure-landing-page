export default function Locations() {
  return (
    <section className="contact-section" id="lokasi">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <div className="badge-pill">
            <span>Lokasi Basecamp &amp; Reservasi</span>
          </div>
          <h2 className="section-title">Basecamp Utama Caringin Bogor</h2>
          <p className="section-desc">
            Pusat seluruh operasional arung jeram Cisadane, company gathering, outbound, dan camping SA Adventure berlokasi strategis di Caringin, Kabupaten Bogor.
          </p>
        </div>

        {/* 2 Columns: Basecamp Detail & Interactive Map */}
        <div className="locations-grid" style={{ marginBottom: '44px' }}>
          {/* Location Details: Caringin Bogor */}
          <div className="location-card">
            <div className="location-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Basecamp Resmi Rafting Cisadane</span>
            </div>
            <h3 className="location-title">SA Adventure Basecamp Caringin</h3>
            <p className="location-address" style={{ marginBottom: '18px' }}>
              Jl. Raya Sukabumi No.01 km. 17, RT.02, RW 3 Cimande Hilir, Kec. Caringin, Kabupaten
              Bogor, Jawa Barat 16730
            </p>

            {/* Fasilitas Basecamp Highlights */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--river-blue-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Saung Kumpul / Pendopo Luas &amp; Tempat Istirahat</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--river-blue-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Kamar Mandi &amp; Bilas Bersih Air Alami</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--river-blue-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Area Parkir Luas (Bus Besar Pariwisata &amp; Mobil)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-body)' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--river-blue-primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Musholla &amp; Titik Akses Langsung Aliran Cisadane</span>
              </div>
            </div>

            <div className="location-actions">
              <a
                href="https://maps.google.com/?q=Jl.+Raya+Sukabumi+No.01+km.+17+Cimande+Hilir+Caringin+Bogor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.88rem', padding: '10px 18px' }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                <span>Buka Petunjuk Google Maps</span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure%20Bogor,%20saya%20ingin%20konsultasi%20paket%20dan%20info%20rute%20menuju%20Basecamp%20Caringin."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ fontSize: '0.88rem', padding: '10px 18px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Chat Admin Caringin</span>
              </a>
            </div>
          </div>

          {/* Interactive Map & Route Guidance */}
          <div className="location-card">
            <div className="location-badge">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
              <span>Akses Cepat &amp; Mudah</span>
            </div>
            <h3 className="location-title">Peta Lokasi &amp; Akses Rute</h3>

            {/* Embedded Google Map */}
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(2, 132, 199, 0.2)', marginBottom: '16px', height: '185px', background: '#e0f2fe' }}>
              <iframe
                title="Peta Basecamp SA Adventure Caringin Bogor"
                src="https://maps.google.com/maps?q=Jl.+Raya+Sukabumi+No.01+km.+17+Cimande+Hilir+Caringin+Bogor&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <p className="location-address" style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              <strong>Akses Tol Cepat:</strong> Hanya 10-15 menit dari Gerbang Tol Caringin / Tol Bocimi (Bogor - Ciawi - Sukabumi). Akses jalan mulus dan nyaman dilewati kendaraan pribadi maupun iring-iringan bus besar pariwisata.
            </p>

            <div className="location-actions">
              <a
                href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20bisa%20kirimkan%20share%20live%20location%20Basecamp%20Caringin%20Bogor?"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ fontSize: '0.88rem', padding: '10px 18px', width: '100%', justifyContent: 'center' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Minta Share Live Location WA</span>
              </a>
            </div>
          </div>
        </div>

        {/* Quick Consultation Hub */}
        <div className="contact-channels-bar">
          <div className="channel-item">
            <div className="channel-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <span className="channel-label">Hotline &amp; WhatsApp Utama</span>
              <a
                href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20ingin%20konsultasi%20layanan%20rafting%20dan%20event%20Caringin%20Bogor."
                target="_blank"
                rel="noopener noreferrer"
                className="channel-value"
              >
                +62 812-9106-8287 (Utama)
              </a>
            </div>
          </div>

          <div className="channel-item">
            <div className="channel-icon" style={{ background: 'rgba(16, 185, 129, 0.12)', color: '#059669', border: '1px solid rgba(16, 185, 129, 0.25)' }}>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <div>
              <span className="channel-label">WhatsApp Cadangan (CS 2)</span>
              <a
                href="https://api.whatsapp.com/send?phone=62895808755565&text=Halo%20Admin%20SA%20Adventure,%20saya%20ingin%20konsultasi%20layanan%20rafting%20dan%20event%20Caringin%20Bogor."
                target="_blank"
                rel="noopener noreferrer"
                className="channel-value"
              >
                +62 895-8087-55565 (Cadangan)
              </a>
            </div>
          </div>

          <div className="channel-item">
            <div className="channel-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <span className="channel-label">Email Penawaran Resmi</span>
              <a href="mailto:sa.adventure76@gmail.com" className="channel-value">
                sa.adventure76@gmail.com
              </a>
            </div>
          </div>

          <div className="channel-item">
            <div className="channel-icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div>
              <span className="channel-label">Instagram Resmi</span>
              <a
                href="https://www.instagram.com/sa.adventure.ok/"
                target="_blank"
                rel="noopener noreferrer"
                className="channel-value"
              >
                @sa.adventure.ok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
