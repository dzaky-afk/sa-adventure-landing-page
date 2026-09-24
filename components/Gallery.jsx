'use client';

import { useState } from 'react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const photos = [
    // RAFTING
    {
      src: '/images/gallery/3.png',
      alt: 'Keseruan arung jeram di jeram batu Cisadane',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Sensasi Jeram Batu Cisadane',
    },
    {
      src: '/images/gallery/1.png',
      alt: 'Keceriaan tim peserta sebelum pengarungan rafting',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Kesiapan Tim & Safety Briefing',
    },
    {
      src: '/images/gallery/4.png',
      alt: 'Aksi kompak mendayung menembus jeram deras',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Kekompakan Dayung di Jeram Menantang',
    },
    {
      src: '/images/gallery/5.png',
      alt: 'Sensasi meluncur di dam air sungai Cisadane',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Meluncur Seru di Dam Air Caringin',
    },
    {
      src: '/images/gallery/6.png',
      alt: 'Pemandangan asri tebing dan hutan sepanjang sungai',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Panorama Alam Aliran Cisadane',
    },
    {
      src: '/images/gallery/7.png',
      alt: 'Body rafting santai di titik air tenang',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Body Rafting & Berenang Santai',
    },

    // GATHERING & OUTBOUND
    {
      src: '/images/gallery/2.png',
      alt: 'Perayaan corporate gathering dan team building',
      category: 'gathering',
      tag: 'Corporate Gathering',
      title: 'Corporate Anniversary & Gathering',
    },
    {
      src: '/images/gallery/8.png',
      alt: 'Fun games dan team building di lapangan hijau',
      category: 'gathering',
      tag: 'Team Building',
      title: 'Fun Games Kebersamaan Kantor',
    },
    {
      src: '/images/gallery/DSCN0068.JPG',
      alt: 'Keceriaan rombongan gathering di area basecamp',
      category: 'gathering',
      tag: 'Family Outing',
      title: 'Foto Bersama Keluarga Besar & Rombongan',
    },
    {
      src: '/images/gallery/DSCN0097.JPG',
      alt: 'Ice breaking dan aktivitas energik bersama fasilitator',
      category: 'gathering',
      tag: 'Outbound Training',
      title: 'Sesi Ice Breaking Interaktif & Seru',
    },
    {
      src: '/images/gallery/DSCN0271.JPG',
      alt: 'Momen akrab dan kebersamaan tim di pendopo',
      category: 'gathering',
      tag: 'Kebersamaan',
      title: 'Sesi Sharing & Ramah Tamah di Basecamp',
    },

    // WAHANA & PAINTBALL
    {
      src: '/images/gallery/29598.jpg',
      alt: 'Aktivitas seru wahana tantangan ketinggian',
      category: 'wahana',
      tag: 'Wahana Ketinggian',
      title: 'Flying Fox Melintasi Sungai Cisadane',
    },
    {
      src: '/images/gallery/29882.jpg',
      alt: 'Simulasi tempur taktis paintball di alam terbuka',
      category: 'wahana',
      tag: 'Paintball Games',
      title: 'Simulasi Tempur Taktis Paintball',
    },
    {
      src: '/images/gallery/30036.jpg',
      alt: 'Perlengkapan lengkap goggle masker dan seragam loreng',
      category: 'wahana',
      tag: 'Safety Gear',
      title: 'Briefing Taktik & Perlengkapan Paintball',
    },
    {
      src: '/images/gallery/DSCN0248.JPG',
      alt: 'Aktivitas high rope & flying fox bersama instruktur',
      category: 'wahana',
      tag: 'Flying Fox',
      title: 'Uji Adrenalin di Ketinggian Bersama Safety Tim',
    },
  ];

  const categories = [
    { id: 'all', label: 'Semua Momen', mobileLabel: 'Semua' },
    { id: 'rafting', label: 'Arung Jeram', mobileLabel: 'Arung Jeram' },
    { id: 'gathering', label: 'Gathering & Outbound', mobileLabel: 'Gathering' },
    { id: 'wahana', label: 'Paintball & Wahana', mobileLabel: 'Wahana' },
  ];

  const filteredPhotos =
    filter === 'all' ? photos : photos.filter((p) => p.category === filter);

  return (
    <section className="gallery-section" id="dokumentasi">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '32px' }}>
          <div className="badge-pill">
            <span>Momen Otentik SA Adventure</span>
          </div>
          <h2 className="section-title">Dokumentasi Nyata Arung Jeram &amp; Gathering</h2>
          <p className="section-desc">
            Abadikan momen tak terlupakan bersama rekan kerja, komunitas, dan keluarga tercinta di alam terbuka Bogor. Klik foto untuk melihat lebih jelas.
          </p>

          <div className="gallery-filters">
            {categories.map((cat) => {
              const count = cat.id === 'all' ? photos.length : photos.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`gallery-tab-btn ${filter === cat.id ? 'active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  <span className="gallery-tab-label-desktop">{cat.label} ({count})</span>
                  <span className="gallery-tab-label-mobile">{cat.mobileLabel} ({count})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="gallery-grid" style={{ marginBottom: '36px' }}>
          {filteredPhotos.map((photo, i) => (
            <div
              className="gallery-card"
              key={i}
              data-category={photo.category}
              onClick={() => setSelectedPhoto(photo)}
              style={{ cursor: 'pointer' }}
              title="Klik untuk memperbesar foto"
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-tag">{photo.tag}</span>
                <h3 className="gallery-title">{photo.title}</h3>
                <span style={{ fontSize: '0.75rem', color: '#38bdf8', marginTop: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Lihat Foto
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA to WA for full photo portfolio or event booking */}
        <div style={{ textAlign: 'center' }}>
          <a
            href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20bisa%20kirimkan%20portofolio%20foto/video%20dokumentasi%20lengkap%20kegiatan%20rafting%20dan%20gathering%20terbaru?"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>Minta Portofolio Dokumentasi Lengkap via WhatsApp</span>
          </a>
        </div>
      </div>

      {/* LIGHTBOX MODAL PREVIEW */}
      {selectedPhoto && (
        <div
          className="gallery-lightbox-overlay"
          onClick={() => setSelectedPhoto(null)}
          role="dialog"
          aria-label="Tampilan Foto Dokumentasi"
        >
          <div
            className="gallery-lightbox-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-lightbox-close"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Tutup foto"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="gallery-lightbox-img-wrapper">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="gallery-lightbox-img"
              />
            </div>
            <div className="gallery-lightbox-meta">
              <span className="gallery-tag" style={{ display: 'inline-block', marginBottom: '6px' }}>{selectedPhoto.tag}</span>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px' }}>
                {selectedPhoto.title}
              </h3>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#64748b' }}>
                {selectedPhoto.alt}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
