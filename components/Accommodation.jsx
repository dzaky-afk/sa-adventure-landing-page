'use client';

import { useState } from 'react';

const villasData = [
  {
    id: 'mawar',
    name: 'Villa Mawar Puncak',
    badge: 'PILIHAN 1 • ROMBONGAN BESAR',
    category: 'Family & Corporate Gathering',
    capacity: '20 - 50+ Orang',
    location: 'Kawasan Puncak, Jawa Barat',
    description:
      'Villa berkapasitas besar dengan kolam renang pribadi, rooftop luas berlatar pemandangan pegunungan Puncak, dan fasilitas karaoke lengkap. Sangat ideal untuk gathering keluarga besar, komunitas, maupun outing kantor.',
    specs: [
      { label: 'Kapasitas', value: '20 - 50+ Orang', icon: 'users' },
      { label: 'Kolam Renang', value: 'Private Pool', icon: 'water' },
      { label: 'Hiburan', value: 'Karaoke Room', icon: 'mic' },
      { label: 'Pemandangan', value: 'Rooftop Mountain View', icon: 'mountain' },
    ],
    features: [
      'Private Swimming Pool khusus rombongan',
      'Rooftop lapang dengan panorama pegunungan Puncak',
      'Ruang Karaoke & Sound System keluarga',
      'Ruang tamu & ruang kumpul keluarga ekstra luas',
      'Kamar tidur bersih, sejuk & nyaman (multi-bed)',
      'Dapur lengkap dengan kulkas, kompor & alat masak',
      'Area BBQ luar ruangan untuk malam kebersamaan',
      'Area parkir leluasa untuk beberapa mobil & minibus',
    ],
    photos: [
      { src: '/images/villas/mawar/mawar1.jpg', title: 'Private Swimming Pool & Suasana Malam' },
      { src: '/images/villas/mawar/mawar2.jpg', title: 'Kolam Renang Privat & Fasad Villa' },
      { src: '/images/villas/mawar/mawar5.jpg', title: 'Halaman Hijau & Area Gathering Outdoor' },
      { src: '/images/villas/mawar/mawar6.jpg', title: 'Fasad Villa & Taman Lampu Hias' },
      { src: '/images/villas/mawar/mawar3.jpg', title: 'Area Billiard & Rekreasi Indoor' },
      { src: '/images/villas/mawar/mawar4.jpg', title: 'Area Bar & Kolam Renang Malam' },
      { src: '/images/villas/mawar/mawar7.jpg', title: 'Fasad Depan & Area Parkir Luas' },
      { src: '/images/villas/mawar/mawar_11.jpg', title: 'Ruang Tamu & Kumpul Keluarga Luas' },
    ],
    waMessage:
      'Halo Admin SA Adventure, saya tertarik untuk booking / tanya info ketersediaan dan harga paket akomodasi Villa Mawar Puncak. Mohon informasi lengkapnya, terima kasih.',
    driveLink: 'https://drive.google.com/drive/folders/15FkmcLjE1cSGg7CcA0p9fRahctu1SYmk',
  },
  {
    id: 'zanara',
    name: 'Villa Zanara',
    badge: 'PILIHAN 2 • MODERN & EKSKLUSIF',
    category: 'Aesthetic & Private Staycation',
    capacity: '10 - 25 Orang',
    location: 'Kawasan Puncak - Bogor, Jawa Barat',
    description:
      'Villa berkonsep modern minimalis dengan kolam renang privat bernuansa resort mewah. Suasana tenang, privat, dan estetik di setiap sudut — pilihan sempurna untuk staycation intim bersama keluarga maupun sahabat tercinta.',
    specs: [
      { label: 'Kapasitas', value: '10 - 25 Orang', icon: 'users' },
      { label: 'Kolam Renang', value: 'Private Pool & Deck', icon: 'water' },
      { label: 'Konsep', value: 'Modern Aesthetic', icon: 'sparkles' },
      { label: 'Privasi', value: 'Exclusive & Peaceful', icon: 'shield' },
    ],
    features: [
      'Private Swimming Pool dengan deck santai estetik',
      'Desain arsitektur modern minimalis kontemporer',
      'Living Room terbuka yang hangat & instagramable',
      'Kamar tidur berkelas dengan kasur premium & AC',
      'Smart TV, Free High-Speed WiFi & Audio',
      'Modern Kitchenette lengkap dengan peralatan masak',
      'Suasana sejuk, tenang & sangat menjaga privasi',
      'Balkon santai menghadap pemandangan hijau asri',
    ],
    photos: [
      { src: '/images/villas/zanara/zanara_2.jpg', title: 'Kolam Renang Privat & Pool Deck Modern' },
      { src: '/images/villas/zanara/zanara_5.jpg', title: 'Fasad Modern Villa Zanara' },
      { src: '/images/villas/zanara/zanara3.jpg', title: 'Living Room & Ruang Santai Premium' },
      { src: '/images/villas/zanara/zanara_3.jpg', title: 'Ruang Kumpul & Suasana Estetik' },
      { src: '/images/villas/zanara/zanara_4.jpg', title: 'Interior Modern & Nyaman' },
    ],
    waMessage:
      'Halo Admin SA Adventure, saya tertarik untuk booking / tanya info ketersediaan dan harga paket akomodasi Villa Zanara. Mohon informasi lengkapnya, terima kasih.',
    driveLink: 'https://drive.google.com/drive/folders/17hE1yAJTYvRZ4zGazBxfm_QB4Fw0jKZq',
  },
];

export default function Accommodation() {
  const [activePhotoIdx, setActivePhotoIdx] = useState({
    mawar: 0,
    zanara: 0,
  });

  const handleSelectPhoto = (villaId, index) => {
    setActivePhotoIdx((prev) => ({
      ...prev,
      [villaId]: index,
    }));
  };

  const handlePrevPhoto = (villaId, total) => {
    setActivePhotoIdx((prev) => ({
      ...prev,
      [villaId]: (prev[villaId] - 1 + total) % total,
    }));
  };

  const handleNextPhoto = (villaId, total) => {
    setActivePhotoIdx((prev) => ({
      ...prev,
      [villaId]: (prev[villaId] + 1) % total,
    }));
  };

  return (
    <section id="akomodasi" className="accommodation-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <span>AKOMODASI &amp; PENGINAPAN</span>
          </div>
          <h2 className="section-title">
            Pilihan Villa Eksklusif untuk Gathering &amp; Staycation
          </h2>
          <p className="section-subtitle">
            Lengkapi keseruan arung jeram dan outbound Anda di Caringin Bogor dengan menginap di villa pilihan terbaik mitra SA Adventure. Kami hadirkan <strong>2 pilihan akomodasi istimewa</strong> dengan fasilitas lengkap, privasi terjaga, dan suasana sejuk asri.
          </p>
        </div>

        {/* Accommodation Cards Grid */}
        <div className="villas-grid">
          {villasData.map((villa) => {
            const currentIdx = activePhotoIdx[villa.id];
            const currentPhoto = villa.photos[currentIdx] || villa.photos[0];

            return (
              <div key={villa.id} className="villa-card" id={`villa-${villa.id}`}>
                {/* Visual Media Showcase */}
                <div className="villa-media-showcase">
                  <div className="villa-main-image-wrapper">
                    <img
                      src={currentPhoto.src}
                      alt={`${villa.name} - ${currentPhoto.title}`}
                      className="villa-main-image"
                      loading="lazy"
                    />
                    <div className="villa-badge-overlay">{villa.badge}</div>
                    <div className="villa-image-caption">
                      <span>{currentPhoto.title}</span>
                      <span className="villa-counter">
                        {currentIdx + 1} / {villa.photos.length}
                      </span>
                    </div>

                    {/* Prev/Next arrows on main image */}
                    {villa.photos.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="villa-nav-btn prev"
                          onClick={() => handlePrevPhoto(villa.id, villa.photos.length)}
                          aria-label="Foto sebelumnya"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="villa-nav-btn next"
                          onClick={() => handleNextPhoto(villa.id, villa.photos.length)}
                          aria-label="Foto berikutnya"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnails Row */}
                  <div className="villa-thumbs-row">
                    {villa.photos.map((photo, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        className={`villa-thumb-btn ${pIdx === currentIdx ? 'active' : ''}`}
                        onClick={() => handleSelectPhoto(villa.id, pIdx)}
                        title={photo.title}
                        aria-label={`Lihat foto ${pIdx + 1}: ${photo.title}`}
                      >
                        <img src={photo.src} alt="" className="villa-thumb-img" loading="lazy" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Villa Content Details */}
                <div className="villa-details">
                  <div className="villa-header-row">
                    <div>
                      <span className="villa-category">{villa.category}</span>
                      <h3 className="villa-title">{villa.name}</h3>
                    </div>
                    <div className="villa-location-tag">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{villa.location}</span>
                    </div>
                  </div>

                  <p className="villa-desc">{villa.description}</p>

                  {/* Quick Specs Cards */}
                  <div className="villa-specs-grid">
                    {villa.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="villa-spec-item">
                        <div className="villa-spec-label">{spec.label}</div>
                        <div className="villa-spec-val">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights / Features List */}
                  <div className="villa-features-wrapper">
                    <h4 className="villa-features-title">Fasilitas Utama:</h4>
                    <ul className="villa-features-list">
                      {villa.features.map((feat, fIdx) => (
                        <li key={fIdx} className="villa-feature-li">
                          <svg className="check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="villa-action-box">
                    <a
                      href={`https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(
                        villa.waMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary villa-booking-btn"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                      </svg>
                      <span>Pilih &amp; Reservasi {villa.name.replace('Villa ', '')}</span>
                    </a>

                    <a
                      href={villa.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary villa-drive-btn"
                      title="Lihat folder foto &amp; video lengkap di Google Drive"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Lihat Album Lengkap (Drive)</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Gathering / Package Combo Note */}
        <div className="accommodation-combo-card">
          <div className="combo-card-content">
            <div className="combo-icon-circle">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <div className="combo-text">
              <h3 className="combo-title">Ingin Paket Bundling Rafting + Penginapan Villa?</h3>
              <p className="combo-desc">
                Dapatkan penawaran harga spesial paket hemat kombinasi: <strong>Rafting Cisadane Caringin Bogor + Outbound + Menginap 2D1N di Villa Pilihan</strong> lengkap dengan konsumsi prasmanan, coffee break, dokumentasi, dan fasilitator profesional.
              </p>
            </div>
            <div className="combo-action">
              <a
                href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20dengan%20Paket%20Bundling%20Rafting%20Cisadane%20Bogor%20plus%20Penginapan%20Villa.%20Mohon%20info%20paket%20dan%20penawaran%20harganya."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                <span>Konsultasi Paket Bundling</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
