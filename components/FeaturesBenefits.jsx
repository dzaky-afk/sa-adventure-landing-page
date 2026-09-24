'use client';

export default function FeaturesBenefits() {
  const offerings = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12h20" />
          <path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8" />
          <path d="M12 4v8" />
          <path d="M8 8l4-4 4 4" />
        </svg>
      ),
      title: 'Arung Jeram Cisadane (7 - 11 KM)',
      desc: 'Sensasi menyusuri jeram alami grade II - III yang memacu adrenalin namun tetap aman untuk pemula, anak-anak, dan keluarga.',
      tag: 'Aktivitas Utama',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: 'Outbound & Fun Team Building',
      desc: 'Simulasi permainan interaktif di lapangan terbuka hijau yang dirancang khusus untuk mempererat kekompakan dan sinergi tim kerja.',
      tag: 'Paling Populer Kantor',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      ),
      title: 'Paintball Wargame & Flying Fox',
      desc: 'Uji strategi dan ketangkasan dalam skenario pertempuran hutan pinus, serta uji nyali meluncur di atas lintasan sungai Cisadane.',
      tag: 'Adrenalin Booster',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: 'Villa Eksklusif & Riverside Camp',
      desc: 'Pilihan penginapan nyaman berkapasitas 20 hingga 100+ orang, atau sensasi bermalam di tenda glamping tepi sungai yang sejuk.',
      tag: 'Menginap Nyaman',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: 'Catering Prasmanan Sunda & BBQ',
      desc: 'Jamuan makan siang khas pedesaan Sunda lengkap, kelapa muda segar selepas basah-basahan, hingga pesta kambing guling dan barbeque malam hari.',
      tag: 'Kuliner Lezat',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
          <circle cx="12" cy="13" r="4" />
        </svg>
      ),
      title: 'Dokumentasi Foto & Drone HD',
      desc: 'Tim fotografer outdoor profesional siap mengabadikan setiap ekspresi seru, cipratan air, dan momen kebersamaan Anda dalam format resolusi tinggi.',
      tag: 'Gratis Rombongan',
    },
  ];

  const problemSolutions = [
    {
      problem: 'Khawatir Tidak Aman untuk Pemula & Anak-Anak?',
      solution: 'Standar Keselamatan FAJI & Perlengkapan Standar Internasional',
      desc: 'Setiap perahu dikawal pemandu bersertifikasi resmi Federasi Arung Jeram Indonesia (FAJI) dengan rescue team siaga, helm standar keselamatan, rompi pelampung daya apung tinggi, dan perlindungan asuransi penuh.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      problem: 'Pusing Mengurus Logistik & Rundown Acara Kantor?',
      solution: 'Solusi All-in-One Event Organizer Tanpa Ribet',
      desc: 'Anda cukup tentukan tanggal dan jumlah peserta. Tim SA Adventure menangani semuanya secara profesional: transportasi bus/elf, villa penginapan, susunan rundown, hidangan catering prasmanan, hingga MC acara.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      ),
    },
    {
      problem: 'Takut Terjebak Macet Berjam-jam di Jalur Puncak?',
      solution: 'Lokasi Prima Bebas Ganjil-Genap (15 Menit dari Tol Bocimi)',
      desc: 'Basecamp kami terletak di Caringin Bogor, dapat diakses mulus lewat Tol Bocimi Exit Caringin hanya 15 menit tanpa perlu melewati titik macet Gadog maupun aturan ganjil-genap Puncak.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      problem: 'Cemas Biaya Membengkak & Ada Biaya Tersembunyi?',
      solution: 'Harga Transparan & Fleksibel Sesuai Anggaran Budget',
      desc: 'Penawaran proposal kami 100% transparan, tanpa biaya tersembunyi. Kami menyediakan invoice resmi dan siap menyesuaikan paket kegiatan sesuai plafon anggaran instansi Anda.',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="features-benefits-section editorial-section" id="fitur-manfaat">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="editorial-badge-pill">
            <span>FITUR &amp; MANFAAT LENGKAP</span>
          </div>
          <h2 className="section-title editorial-heading">
            APA YANG KAMI TAWARKAN &amp; BAGAIMANA KAMI MEMBANTU ANDA
          </h2>
          <p className="section-desc">
            Nikmati kemudahan merencanakan petualangan arung jeram dan liburan rombongan tanpa rasa cemas, didukung fasilitas lengkap dan pelayanan profesional berstandar tinggi.
          </p>
        </div>

        {/* Part 1: What We Offer (Layanan & Aktivitas) */}
        <div className="offerings-grid">
          {offerings.map((item, idx) => (
            <div className="offering-card editorial-card" key={idx}>
              <div className="offering-top">
                <div className="offering-icon editorial-icon">{item.icon}</div>
                <span className="offering-tag editorial-tag">{item.tag}</span>
              </div>
              <h3 className="offering-title editorial-subheading">{item.title}</h3>
              <p className="offering-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Part 2: How It Solves Your Problems (Keunggulan & Solusi) */}
        <div className="problem-solution-wrap editorial-ps-wrap">
          <div className="ps-header text-center">
            <span className="ps-subtitle">MENGAPA MEMILIH SA ADVENTURE?</span>
            <h3 className="ps-title editorial-subheading-lg">Solusi Nyata untuk Liburan &amp; Gathering Bebas Stres</h3>
            <p className="ps-desc">
              Kami memahami kekhawatiran Anda saat menjadi panitia acara atau mengajak keluarga berpetualang. Inilah cara kami memastikan acara Anda berjalan lancar:
            </p>
          </div>

          <div className="ps-grid">
            {problemSolutions.map((ps, idx) => (
              <div className="ps-card editorial-ps-card" key={idx}>
                <div className="ps-badge-question">
                  <span className="ps-q-label">MASALAH</span>
                  <h4>{ps.problem}</h4>
                </div>
                <div className="ps-divider"></div>
                <div className="ps-answer">
                  <div className="ps-answer-head">
                    <div className="ps-icon editorial-check-icon">{ps.icon}</div>
                    <h5>{ps.solution}</h5>
                  </div>
                  <p>{ps.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inline Micro-CTA in Classic Editorial Style */}
        <div className="features-inline-cta editorial-inline-cta">
          <div className="inline-cta-content">
            <h4>Punya Kebutuhan Khusus atau Ingin Kustomisasi Acara?</h4>
            <p>Konsultasikan kebutuhan jumlah peserta, akomodasi, dan budget rombongan Anda langsung bersama tim kami.</p>
          </div>
          <div className="inline-cta-actions">
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open-booking-modal'));
                }
              }}
              className="btn btn-editorial-white"
            >
              <span>Booking Paket Sekarang</span>
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rafting%20dan%20outbound."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-editorial-wa-clean"
            >
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
