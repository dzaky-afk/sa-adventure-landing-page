'use client';

import { useState } from 'react';

const VILLAS = [
  {
    id: 'mawar',
    name: 'Villa Mawar Puncak',
    location: 'Kawasan Puncak - Cisarua / Megamendung, Bogor',
    driveUrl: 'https://drive.google.com/drive/folders/15FkmcLjE1cSGg7CcA0p9fRahctu1SYmk',
    badge: 'Pilihan Utama Rombongan & Gathering',
    badgeColor: 'linear-gradient(135deg, #0284c7, #0369a1)',
    capacity: 'Kapasitas 30 - 70+ Orang',
    description:
      'Villa megah dengan halaman rumput sangat luas di kawasan sejuk Puncak Bogor. Dilengkapi kolam renang pribadi jernih, rooftop dengan panorama 360° pegunungan, area karaoke, ruang kumpul keluarga/kantor yang lapang, serta gazebo santai untuk acara keakraban.',
    features: [
      'Kolam Renang Privat (Private Pool) Bersih',
      'Rooftop 360° Panorama View Pegunungan Puncak',
      'Area Hiburan: Karaoke & Billiard Seru',
      'Ruang Kumpul & Ruang Tamu Sangat Luas',
      'Kamar Tidur Bersih (Banyak Bed untuk Rombongan)',
      'Halaman Rumput Luas untuk Fun Games / BBQ Party',
      'Dapur Lengkap & Peralatan Masak Rombongan',
      'Parkir Luas Muat Kendaraan Pribadi & Bus Medium',
    ],
    photos: [
      {
        src: '/images/villas/mawar/mawar1.jpg',
        title: 'Tampak Depan Villa Mawar Puncak',
        caption: 'Bangunan megah berarsitektur modern dikelilingi perbukitan hijau asri.',
      },
      {
        src: '/images/villas/mawar/mawar2.jpg',
        title: 'Kolam Renang Privat & Halaman Rumput',
        caption: 'Private pool jernih dengan dek santai dan area rumput hijau yang luas.',
      },
      {
        src: '/images/villas/mawar/mawar_rooftop.jpg',
        title: 'Rooftop View Panorama Pegunungan',
        caption: 'Spot favorit menikmati sunrise, kabut pagi, dan pemandangan bukit Puncak.',
      },
      {
        src: '/images/villas/mawar/mawar3.jpg',
        title: 'Taman & Gazebo Santai',
        caption: 'Area santai outdoor berhawa sejuk untuk bercengkerama bersama keluarga.',
      },
      {
        src: '/images/villas/mawar/mawar4.jpg',
        title: 'Ruang Kumpul & Ruang Tamu Utama',
        caption: 'Ruang utama lapang dengan sofa empuk, cocok untuk briefing dan keakraban.',
      },
      {
        src: '/images/villas/mawar/mawar_karaoke.jpg',
        title: 'Fasilitas Karaoke & Hiburan',
        caption: 'Sound system dan sarana karaoke untuk memeriahkan malam gathering.',
      },
      {
        src: '/images/villas/mawar/mawar5.jpg',
        title: 'Kamar Tidur Utama Nyaman',
        caption: 'Kamar tidur bersih, rapi, dan sejuk dengan kasur berkualitas.',
      },
      {
        src: '/images/villas/mawar/mawar6.jpg',
        title: 'Kamar Tidur Rombongan',
        caption: 'Penataan kasur ideal untuk menampung rombongan peserta gathering.',
      },
      {
        src: '/images/villas/mawar/mawar7.jpg',
        title: 'Balkon & Teras Lantai Atas',
        caption: 'Balkon menghadap langsung ke hamparan bukit dan taman villa.',
      },
      {
        src: '/images/villas/mawar/mawar_kamar_mandi.jpg',
        title: 'Kamar Mandi Bersih & Water Heater',
        caption: 'Fasilitas sanitasi terawat lengkap dengan air hangat.',
      },
    ],
  },
  {
    id: 'zanara',
    name: 'Villa Zanara',
    location: 'Kawasan Sejuk Bogor, Jawa Barat',
    driveUrl: 'https://drive.google.com/drive/folders/17hE1yAJTYvRZ4zGazBxfm_QB4Fw0jKZq',
    badge: 'Eksklusif, Asri & Tenang',
    badgeColor: 'linear-gradient(135deg, #059669, #047857)',
    capacity: 'Kapasitas 20 - 45 Orang',
    description:
      'Villa bernuansa asri, estetik, dan elegan dengan taman tropis rindang serta kolam renang pribadi yang tenang. Sangat cocok untuk gathering divisi, liburan keluarga besar, atau acara reuni intim yang mengutamakan privasi tinggi dan kenyamanan istirahat.',
    features: [
      'Private Swimming Pool dengan Sentuhan Taman Tropis',
      'Suasana Hening, Asri & Privasi Sangat Terjaga',
      'Ruang Santai & Living Room Desain Hangat Estetik',
      'Kamar Tidur Nyaman dengan Sirkulasi Udara Segar',
      'Balkon Santai Menghadap View Alam Rindang',
      'Dapur Bersih Lengkap Perlengkapan Memasak',
      'Area Outdoor untuk Santap Bersama & Barbeque',
      'Akses Mudah & Lingkungan Asri Bebas Bising',
    ],
    photos: [
      {
        src: '/images/villas/zanara/zanara1.jpg',
        title: 'Tampak Depan Villa Zanara',
        caption: 'Desain villa estetik dan asri dengan taman hijau yang tertata indah.',
      },
      {
        src: '/images/villas/zanara/zanara2.jpg',
        title: 'Private Pool & Nuansa Tropis',
        caption: 'Kolam renang pribadi dikelilingi pepohonan rimbun dan suasana tenang.',
      },
      {
        src: '/images/villas/zanara/zanara3.jpg',
        title: 'Interior & Ruang Santai Hangat',
        caption: 'Interior bersih dan estetik, siap menyambut momen kebersamaan Anda.',
      },
      {
        src: '/images/villas/zanara/zanara_4.jpg',
        title: 'Kamar Tidur Nyaman Villa Zanara',
        caption: 'Suasana kamar tidur tenang, nyaman, dan sejuk untuk istirahat optimal.',
      },
      {
        src: '/images/villas/zanara/zanara_5.jpg',
        title: 'Area Bersantai & Teras Kolam',
        caption: 'Spot santai tepi kolam untuk kumpul sore dan bercengkerama bersama rekan.',
      },
    ],
  },
];

const CATERING_PACKAGES = [
  {
    name: 'Prasmanan Khas Sunda',
    tag: 'Menu Tradisional Favorit',
    price: 'Mulai Rp 45.000 / porsi',
    desc: 'Sajian prasmanan autentik Sunda kaya rasa dengan bahan segar lokal.',
    items: [
      'Nasi Liwet Wangi / Nasi Putih Pulen',
      'Ayam Goreng Lengkuas / Ayam Bakar Madu',
      'Ikan Gurame / Nila Goreng Kering Renyah',
      'Tahu & Tempe Goreng Bumbu Kuning',
      'Sayur Asem Segar Khas Parahyangan',
      'Lalapan Segar Komplit & Sambal Terasi Dadak',
      'Kerupuk Udang & Buah Segar Pencuci Mulut',
      'Air Mineral & Es Teh Manis',
    ],
  },
  {
    name: 'Kambing Guling Spesial',
    tag: 'Primadona Acara Malam',
    price: 'Mulai Rp 2.200.000 / ekor',
    desc: 'Kambing muda empuk dipanggang live di lokasi dengan bumbu rempah istimewa.',
    items: [
      '1 Ekor Kambing Muda Utuh (35-50 Porsi)',
      'Bumbu Olesan Rempah Meresap Sempurna',
      'Daging Empuk Tidak Bau Prengus',
      'Sambal Kecap Pedas Manis dengan Bawang & Tomat',
      'Lontong Pulen Daun Pisang',
      'Acar Mentimun Segar',
      'Live Grill di Tempat oleh Chef Berpengalaman',
    ],
  },
  {
    name: 'Barbeque (BBQ) Night',
    tag: 'Suasana Hangat Malam Villa',
    price: 'Mulai Rp 75.000 / orang',
    desc: 'Paket BBQ seru untuk memeriahkan malam kebersamaan di tepi kolam atau taman villa.',
    items: [
      'Sosis Sapi & Ayam Jumbo Panggang',
      'Daging Sapi & Ayam Marinasi Saus BBQ / Lada Hitam',
      'Jagung Manis Bakar Oles Mentega Gurih',
      'Kentang Goreng / Wedges Gurih',
      'Aneka Saus Cocolan Spesial',
      'Peralatan BBQ & Arang Siap Pakai',
    ],
  },
  {
    name: 'Coffee Break & Snack Box',
    tag: 'Pelengkap Meeting & Santai',
    price: 'Mulai Rp 25.000 / orang',
    desc: 'Jeda istirahat nikmat saat sesi sharing, meeting santai, atau setelah aktivitas basah.',
    items: [
      'Kopi Hangat Khas Bogor & Aneka Pilihan Teh',
      '2 Pilihan Kue Tradisional / Modern (Manis & Asin)',
      'Kacang Rebus / Ubi / Pisang Rebus Hangat',
      'Air Mineral Botol / Gelas',
    ],
  },
];

export default function AccommodationSlider() {
  const [activeVillaId, setActiveVillaId] = useState('mawar');
  const [photoIndex, setPhotoIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const whatsappNumber = '6281291068287';

  const currentVilla = VILLAS.find((v) => v.id === activeVillaId) || VILLAS[0];

  const handleSelectVilla = (id) => {
    setActiveVillaId(id);
    setPhotoIndex(0);
  };

  const handlePrev = () => {
    setPhotoIndex((prev) => (prev === 0 ? currentVilla.photos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setPhotoIndex((prev) => (prev === currentVilla.photos.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  const currentPhoto = currentVilla.photos[photoIndex] || currentVilla.photos[0];

  const waVillaUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    `Halo SA Adventure, saya ingin reservasi & tanya ketersediaan jadwal untuk ${currentVilla.name} (${currentVilla.capacity}). Mohon info harga paket dan fasilitasnya.`
  )}`;

  const waCateringUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    'Halo SA Adventure, saya ingin pesan paket katering (Prasmanan Sunda / Kambing Guling / BBQ) untuk acara di villa / gathering. Mohon info pricelist dan menunya.'
  )}`;

  return (
    <section
      id="akomodasi"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f0f9ff 100%)',
        padding: '95px 0',
        scrollMarginTop: '95px',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 18px',
              borderRadius: '999px',
              background: 'rgba(2, 132, 199, 0.08)',
              border: '1px solid rgba(2, 132, 199, 0.2)',
              color: '#0284c7',
              fontSize: '0.85rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '16px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Pilihan Akomodasi Eksklusif
          </div>

          <h2 style={{ fontSize: 'clamp(1.85rem, 3.5vw, 2.6rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.25, marginBottom: '16px' }}>
            Akomodasi Nyaman &amp; Fasilitas Lengkap
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>
            Kami menyediakan 2 pilihan villa favorit berkapasitas besar di kawasan sejuk Bogor:
            <strong> Villa Mawar Puncak</strong> dan <strong>Villa Zanara</strong>. Keduanya dilengkapi private pool, halaman luas, dan sarana rekreasi lengkap untuk kenyamanan rombongan Anda.
          </p>
        </div>

        {/* 2 CHOICE TAB SELECTOR */}
        <div className="villa-tabs-wrapper">
          <div className="villa-tabs-inner">
            {VILLAS.map((villa) => {
              const isSelected = activeVillaId === villa.id;
              return (
                <button
                  key={villa.id}
                  onClick={() => handleSelectVilla(villa.id)}
                  className={`villa-tab-btn ${isSelected ? 'active' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    <span>{villa.name}</span>
                  </div>
                  <span className="villa-tab-badge">
                    {villa.id === 'mawar' ? '30-70+ Pax' : '20-45 Pax'}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MAIN VILLA SHOWCASE CARD */}
        <div className="villa-showcase-card">
          {/* Top Villa Header Banner */}
          <div className="villa-header-banner">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>
                  {currentVilla.name}
                </h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '999px',
                    color: '#ffffff',
                    background: currentVilla.badgeColor,
                  }}
                >
                  {currentVilla.badge}
                </span>
              </div>
              <div className="villa-header-meta">
                <span className="villa-meta-pill">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{currentVilla.location}</span>
                </span>
                <span
                  className="villa-meta-pill"
                  style={{
                    background: 'rgba(5, 150, 105, 0.1)',
                    color: '#059669',
                    borderColor: 'rgba(5, 150, 105, 0.2)',
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                  <span>Kapasitas: {currentVilla.capacity}</span>
                </span>
              </div>
            </div>

            <a
              href={waVillaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.92rem',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Booking {currentVilla.name}</span>
            </a>
          </div>

          <div className="villa-showcase-grid">
            {/* PHOTO SLIDER COLUMN */}
            <div>
              {/* Main Image Container with Touch Swipe */}
              <div
                className="villa-photo-box"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="villa-photo-img"
                />

                {/* Photo Counter Pill */}
                <div className="villa-photo-counter">
                  {photoIndex + 1} / {currentVilla.photos.length} Foto
                </div>

                {/* Left Navigation Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Foto Sebelumnya"
                  className="villa-photo-nav-btn prev"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                {/* Right Navigation Button */}
                <button
                  onClick={handleNext}
                  aria-label="Foto Berikutnya"
                  className="villa-photo-nav-btn next"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>

              {/* Mobile Swipe Hint */}
              <div className="villa-swipe-hint">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                <span>Geser foto / Swipe kiri-kanan</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>

              {/* Caption & Title Card (below photo - spacious & unobstructed!) */}
              <div className="villa-photo-caption-card">
                <p className="villa-photo-caption-title">{currentPhoto.title}</p>
                <p className="villa-photo-caption-desc">{currentPhoto.caption}</p>
              </div>

              {/* Thumbnails Strip */}
              <div className="villa-thumbs-row no-scrollbar">
                {currentVilla.photos.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPhotoIndex(idx)}
                    className={`villa-thumb-btn ${idx === photoIndex ? 'active' : ''}`}
                    title={p.title}
                  >
                    <img src={p.src} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            </div>

            {/* VILLA DETAILS & FEATURES COLUMN */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                  Tentang {currentVilla.name}
                </h4>
                <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.96rem', marginBottom: '22px' }}>
                  {currentVilla.description}
                </p>

                <h5 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Fasilitas &amp; Keunggulan Villa
                </h5>

                <div className="villa-features-grid">
                  {currentVilla.features.map((feat, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        background: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        fontSize: '0.88rem',
                        color: '#334155',
                        fontWeight: 600,
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0284c7" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="villa-actions-bar">
                <a
                  href={waVillaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '13px 26px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Tanya Tanggal &amp; Booking Sekarang</span>
                </a>

                <a
                  href="#katering"
                  className="btn btn-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 22px',
                    borderRadius: '999px',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                    <line x1="6" y1="1" x2="6" y2="4" />
                    <line x1="10" y1="1" x2="10" y2="4" />
                    <line x1="14" y1="1" x2="14" y2="4" />
                  </svg>
                  <span>Lihat Paket Katering</span>
                </a>

                {currentVilla.driveUrl && (
                  <a
                    href={currentVilla.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 22px',
                      borderRadius: '999px',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      borderColor: '#0284c7',
                      color: '#0284c7',
                      background: '#f0f9ff',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    <span>Lihat Album Lengkap (Drive)</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CATERING SECTION */}
        <div id="katering" style={{ paddingTop: '20px' }}>
          <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 18px',
                borderRadius: '999px',
                background: 'rgba(234, 88, 12, 0.1)',
                border: '1px solid rgba(234, 88, 12, 0.25)',
                color: '#ea580c',
                fontSize: '0.85rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '14px',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                <line x1="6" y1="1" x2="6" y2="4" />
                <line x1="10" y1="1" x2="10" y2="4" />
                <line x1="14" y1="1" x2="14" y2="4" />
              </svg>
              Layanan Jamuan Kuliner &amp; Katering
            </div>

            <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.25, marginBottom: '14px' }}>
              Katering Lezat, Higienis &amp; Prasmanan Sunda
            </h3>

            <p style={{ fontSize: '1.02rem', color: '#64748b', lineHeight: 1.68, margin: 0 }}>
              Lengkapi kenyamanan acara outing, gathering, dan menginap di villa dengan sajian istimewa racikan juru masak lokal berpengalaman. Disediakan prasmanan siap santap, live grill kambing guling, hingga barbeque malam.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px', marginBottom: '40px' }}>
            {CATERING_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  borderRadius: '20px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      padding: '4px 12px',
                      borderRadius: '999px',
                      background: 'rgba(2, 132, 199, 0.1)',
                      color: '#0284c7',
                      marginBottom: '12px',
                    }}
                  >
                    {pkg.tag}
                  </div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#0f172a', margin: '0 0 6px' }}>
                    {pkg.name}
                  </h4>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: '#ea580c', marginBottom: '12px' }}>
                    {pkg.price}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.55, marginBottom: '18px' }}>
                    {pkg.desc}
                  </p>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '16px', marginBottom: '20px' }}>
                    <p style={{ fontSize: '0.8rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                      Menu Termasuk:
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {pkg.items.map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.86rem', color: '#475569' }}>
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '3px' }}>
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={waCateringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '11px 18px',
                    borderRadius: '999px',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    textAlign: 'center',
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                  <span>Pesan Menu Ini via WhatsApp</span>
                </a>
              </div>
            ))}
          </div>

          {/* Bottom Info Banner */}
          <div
            style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              borderRadius: '20px',
              padding: '28px 36px',
              color: '#ffffff',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px',
              boxShadow: '0 12px 35px rgba(2, 132, 199, 0.25)',
            }}
          >
            <div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 900, margin: '0 0 6px', color: '#ffffff' }}>
                Ingin Paket Bundling Rafting + Villa + Katering Lengkap?
              </h4>
              <p style={{ margin: 0, fontSize: '0.94rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.5 }}>
                Dapatkan penawaran harga hemat all-in one package untuk acara gathering kantor, reuni, atau komunitas Anda.
              </p>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20SA%20Adventure,%20saya%20tertarik%20paket%20lengkap%20Bundling%20Rafting%20+%20Villa%20+%20Katering.%20Mohon%20info%20kombinasi%20paket%20dan%20harganya."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#ffffff',
                color: '#0369a1',
                padding: '13px 26px',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.94rem',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                whiteSpace: 'nowrap',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              <span>Konsultasi Paket Bundling</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
