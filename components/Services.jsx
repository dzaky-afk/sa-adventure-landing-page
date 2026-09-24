'use client';

import { useRef, useState } from 'react';

export default function Services() {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const services = [
    {
      title: 'White Water Rafting',
      desc: 'Arung jeram seru di Sungai Cisadane Caringin Bogor dengan jeram menantang, standar keamanan teruji, dan pemandu berpengalaman.',
      tags: ['Rute 7 & 11 KM', 'Rescue Standby', 'Asuransi Resmi'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20M2 18h20M2 6h20" />
        </svg>
      ),
    },
    {
      title: 'Akomodasi (Villa & Glamping)',
      desc: 'Pilihan villa privat kapasitas 20–100+ orang dan riverside glamping berfasilitas lengkap (kolam renang, saung & wifi) di Bogor.',
      tags: ['Kapasitas 20–100+', 'Riverside Glamping', 'Private Pool'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      title: 'Katering & Jamuan Kuliner',
      desc: 'Sajian prasmanan tradisional Sunda nikmat, live cooking kambing guling empuk, BBQ night, dan coffee break rebusan khas.',
      tags: ['Prasmanan Sunda', 'Kambing Guling & BBQ', 'Coffee Break'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      title: 'Gathering & Outbound',
      desc: 'Penyelenggaraan company gathering, family outing, team building fun games, dan paintball taktis yang mempererat kebersamaan.',
      tags: ['End-to-End EO', 'Team Building', 'Paintball Seru'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ];

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIdx = 0;
    let minDistance = Infinity;

    const children = Array.from(container.children);
    children.forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(childCenter - containerCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = index;
      }
    });

    setActiveIdx(closestIdx);
  };

  const scrollToCard = (index) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const children = Array.from(container.children);
    if (children[index]) {
      children[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIdx(index);
    }
  };

  return (
    <section className="services-section" id="layanan">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '28px' }}>
          <div className="badge-pill">
            <span>Layanan Utama</span>
          </div>
          <h2 className="section-title">Solusi Kegiatan &amp; Liburan Lengkap</h2>
          <p className="section-desc">
            One-stop service arung jeram Cisadane, villa rombongan, gathering perusahaan, dan jamuan kuliner di Caringin Bogor.
          </p>
        </div>

        <div className="services-grid" ref={scrollRef} onScroll={handleScroll}>
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-top">
                <div className="service-icon-box">{service.icon}</div>
                <span className="service-index-badge">0{index + 1}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span className="service-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel Dots */}
        <div className="services-mobile-dots">
          {services.map((_, i) => (
            <button
              key={i}
              className={`services-dot ${activeIdx === i ? 'active' : ''}`}
              onClick={() => scrollToCard(i)}
              aria-label={`Lihat layanan ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
