export default function About() {
  return (
    <section className="about-section" id="tentang">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="about-image-main">
              <img
                src="/images/gallery/8.png"
                alt="Kebersamaan, senyum, dan tawa peserta gathering SA Adventure Bogor"
                loading="lazy"
              />
            </div>
            <div className="about-quote-card">
              <div className="quote-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="quote-text">
                &ldquo;Acara sukses itu bukan cuma peserta datang dan pulang. Tapi pulang dengan
                senyum, cerita, dan kenangan yang tidak terlupakan!&rdquo;
              </p>
              <p className="quote-author">SA Adventure Philosophy</p>
            </div>
          </div>

          <div className="about-content-block">
            <span className="section-tagline">Tentang SA Adventure</span>
            <h2 className="section-title">Create Moments. Build Memories. Have Fun!</h2>
            <p className="about-lead">
              Selamat datang di SA Adventure &mdash; tempat di mana acara biasa berubah menjadi
              pengalaman yang luar biasa!
            </p>
            <p className="about-text">
              SA Adventure adalah Event Organizer yang hadir untuk membantu Anda menciptakan berbagai
              kegiatan yang seru, berkesan, profesional, dan pastinya menghadirkan kepuasan maksimal
              bagi seluruh peserta.
            </p>
            <p className="about-text">
              Kami percaya, sebuah acara bukan hanya tentang tempat, rundown, dan dekorasi. Lebih dari
              itu, acara adalah tentang pengalaman nyata, kebersamaan yang hangat, tawa, koneksi antar
              individu, dan cerita bermakna yang akan dibawa pulang.
            </p>
            <p className="about-text">
              Dengan tim yang kreatif, profesional, komunikatif, dan tidak kaku, kami menggabungkan
              konsep menarik, aktivitas interaktif, pelayanan maksimal, serta eksekusi terencana dari
              awal hingga acara selesai.
            </p>

            <div className="about-features">
              <div className="feature-mini">
                <div className="feature-mini-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className="feature-mini-title">Pemandu Bersertifikat</h4>
                  <p className="feature-mini-desc">
                    Instruktur river guide terlatih dengan lisensi resmi.
                  </p>
                </div>
              </div>

              <div className="feature-mini">
                <div className="feature-mini-icon">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="feature-mini-title">Peralatan Standar Internasional</h4>
                  <p className="feature-mini-desc">
                    Perahu karet, helm, dayung, dan pelampung tier-1.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
