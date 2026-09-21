export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg">
        <img
          src="/images/hero_rafting.jpg"
          alt="Rafting Cisadane Caringin Bogor bersama SA Adventure"
          fetchPriority="high"
        />
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-badge">
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
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <span>Jasa Rafting Cisadane Bogor &amp; Event Organizer</span>
        </div>

        <h1 className="hero-title">
          Eksplorasi Arung Jeram Terbaik di Bogor dengan Pelayanan Kelas Eksekutif.
        </h1>

        <p className="hero-desc">
          SA Adventure hadir mewujudkan momen kebersamaan yang berkesan melalui arung jeram Sungai
          Cisadane, company gathering, outing, dan team building dengan standar keamanan tinggi dan
          pendekatan profesional.
        </p>

        <div className="hero-cta-group">
          <a href="#harga" className="btn btn-primary">
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
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
              <line x1="7" y1="7" x2="7.01" y2="7" />
            </svg>
            <span>Lihat Harga &amp; Paket</span>
          </a>
          <a href="#info" className="btn btn-outline">
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
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>Info &amp; Layanan</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Standar Keselamatan Teruji</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">11+ KM</span>
            <span className="stat-label">Rute Arung Jeram Cisadane</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Caringin</span>
            <span className="stat-label">Basecamp Rafting Cisadane Bogor</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Fleksibel</span>
            <span className="stat-label">Disesuaikan Anggaran Anda</span>
          </div>
        </div>
      </div>
    </section>
  );
}
