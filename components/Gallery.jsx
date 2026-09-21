'use client';

import { useState } from 'react';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const photos = [
    {
      src: '/images/gallery/3.png',
      alt: 'Keseruan arung jeram di jeram batu Cisadane',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Sensasi Jeram Batu Cisadane',
    },
    {
      src: '/images/gallery/29598.jpg',
      alt: 'Momen menegangkan meluncur di dam air Cisadane',
      category: 'rafting',
      tag: 'Arung Jeram',

      category: 'wahana',
      tag: 'Wahana Ketinggian',
      title: 'Flying Fox & High Ropes',
    },
    {
      src: '/images/gallery/1.png',
      alt: 'Keceriaan tim peserta sebelum pengarungan rafting',
      category: 'rafting',
      tag: 'Arung Jeram',
      title: 'Kesiapan Tim & Safety Gear',
    },
    {
      src: '/images/gallery/2.png',
      alt: 'Perayaan anniversary dan corporate gathering perusahaan',
      category: 'gathering',
      tag: 'Corporate Gathering',
      title: 'Corporate Anniversary Gathering',
    },
  ];

  const filteredPhotos =
    filter === 'all' ? photos : photos.filter((p) => p.category === filter);

  return (
    <section className="gallery-section" id="dokumentasi">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '36px' }}>
          <div className="badge-pill">
            <span>Momen Otentik SA Adventure</span>
          </div>
          <h2 className="section-title">Dokumentasi Nyata Arung Jeram &amp; Gathering</h2>
          <p className="section-desc">
            Abadikan momen tak terlupakan bersama rekan kerja, komunitas, dan keluarga tercinta di alam terbuka Bogor.
          </p>

          <div className="gallery-filters" style={{ marginTop: '24px' }}>
            <button
              className={`gallery-tab-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Semua Momen
            </button>
            <button
              className={`gallery-tab-btn ${filter === 'rafting' ? 'active' : ''}`}
              onClick={() => setFilter('rafting')}
            >
              Arung Jeram
            </button>
            <button
              className={`gallery-tab-btn ${filter === 'gathering' ? 'active' : ''}`}
              onClick={() => setFilter('gathering')}
            >
              Gathering &amp; Outbound
            </button>
            <button
              className={`gallery-tab-btn ${filter === 'wahana' ? 'active' : ''}`}
              onClick={() => setFilter('wahana')}
            >
              Paintball &amp; Wahana
            </button>
          </div>
        </div>

        <div className="gallery-grid" style={{ marginBottom: '40px' }}>
          {filteredPhotos.map((photo, i) => (
            <div className="gallery-card" key={i} data-category={photo.category}>
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-tag">{photo.tag}</span>
                <h3 className="gallery-title">{photo.title}</h3>
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
    </section>
  );
}
