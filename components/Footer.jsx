export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <img
                src="/images/logo_sa_adventure.png"
                alt="Logo Resmi SA Adventure Travel & Tour"
                className="brand-logo-img"
                style={{ height: '42px' }}
              />
              <div className="brand-text">
                <span className="brand-title" style={{ fontSize: '1.1rem' }}>
                  SA ADVENTURE
                </span>
                <span className="brand-subtitle" style={{ fontSize: '0.62rem' }}>
                  Travel &amp; Tour • Rafting Bogor
                </span>
              </div>
            </div>
            <p>
              Create Moments. Build Memories. Have Fun! Mitra terpercaya untuk kegiatan arung jeram
              Cisadane Bogor, company gathering, outing, dan team building berkelas.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Navigasi</h4>
            <ul className="footer-links">
              <li>
                <a href="#info">Info &amp; Layanan</a>
              </li>
              <li>
                <a href="#harga">Harga &amp; Paket</a>
              </li>
              <li>
                <a href="#dokumentasi">Dokumentasi</a>
              </li>
              <li>
                <a href="#lokasi">Lokasi &amp; Kontak</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Aktivitas</h4>
            <ul className="footer-links">
              <li>
                <a href="#paket">Rafting Cisadane</a>
              </li>
              <li>
                <a href="#paket">Corporate Outing</a>
              </li>
              <li>
                <a href="#paket">Team Building</a>
              </li>
              <li>
                <a href="#paket">Riverside Camp</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Kontak Resmi</h4>
            <ul className="footer-links">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20dan%20gathering."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Utama: 0812-9106-8287
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=62895808755565&text=Halo%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20dan%20gathering."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Cadangan: 0895-8087-55565
                </a>
              </li>
              <li>Email: sa.adventure76@gmail.com</li>
              <li>
                <a
                  href="https://www.instagram.com/sa.adventure.ok/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram: @sa.adventure.ok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>&copy; 2026 SA Adventure. Seluruh hak cipta dilindungi undang-undang.</div>
          <div>Caringin, Kabupaten Bogor, Jawa Barat, Indonesia.</div>
        </div>
      </div>
    </footer>
  );
}
