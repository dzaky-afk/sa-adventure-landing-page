'use client';

import { useState } from 'react';

export default function RaftingCisadaneProfile() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedBundling, setSelectedBundling] = useState(0);

  const facilities = [
    {
      title: 'Pemandu Berpengalaman',
      desc: 'Skipper sungai profesional dan ramah dengan jam terbang tinggi di Cisadane.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </svg>
      ),
    },
    {
      title: 'Rescue Team Siaga',
      desc: 'Tim penyelamat di setiap titik jeram kritis dan dam 3 meter.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        </svg>
      ),
    },
    {
      title: 'Peralatan Standar SNI',
      desc: 'Helm pelindung kepala, perahu karet tebal, dan dayung kokoh bersertifikasi.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      ),
    },
    {
      title: 'Asuransi Keselamatan',
      desc: 'Perlindungan jaminan asuransi resmi untuk seluruh peserta tanpa terkecuali.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <path d="M9 15l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: 'Transportasi Shuttle',
      desc: 'Armada angkutan lokal siap mengantar Anda dari titik finish kembali ke basecamp.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <rect x="2" y="6" width="20" height="12" rx="3" />
          <circle cx="7" cy="18" r="2" />
          <circle cx="17" cy="18" r="2" />
          <path d="M2 12h20" />
          <path d="M7 6v6" />
          <path d="M15 6v6" />
        </svg>
      ),
    },
    {
      title: 'Kamar Bilas & Toilet',
      desc: 'Kamar mandi bersih dengan pasokan air pegunungan yang segar dan higienis.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M4 4h7a4 4 0 0 1 4 4v12" />
          <path d="M12 16a3 3 0 0 1 6 0" />
          <path d="M15 19v2" />
          <path d="M12 21v.01" />
          <path d="M18 21v.01" />
        </svg>
      ),
    },
    {
      title: 'Saung Transit Luas',
      desc: 'Gazebo bambu lesehan asri tepi sungai untuk istirahat dan berkumpul rombongan.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M3 21h18" />
          <path d="M5 21V10l7-6 7 6v11" />
          <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
        </svg>
      ),
    },
    {
      title: 'Kelapa Muda Murni',
      desc: 'Suguhan 1 butir kelapa muda utuh segar di rest area alami tengah sungai.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 9 9" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      title: 'Snack & Coffee Break',
      desc: 'Kue basah tradisional, teh hangat, dan kopi khas Bogor yang nikmat.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      title: 'Makan Siang Sunda',
      desc: 'Sajian prasmanan nasi liwet, ayam goreng, sambal lalap, tahu tempe, & sayur asem.',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
          <path d="M18 2v20" />
          <path d="M18 2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3" />
          <path d="M6 2v20" />
          <path d="M3 2v6a3 3 0 0 0 6 0V2" />
        </svg>
      ),
    },
  ];

  const bundlingItems = [
    {
      id: 'trekking-curug',
      name: 'Paket Rafting + Trekking Curug',
      price: 'Rp 295.000',
      tag: 'Best Outdoor Combo ★',
      image: '/images/trekking-group-curug.jpg?v=2',
      desc: 'Petualangan 1 hari penuh menyusuri rimbunnya hutan pinus dan segarnya curug alami Bogor di pagi hari, makan siang prasmanan Sunda, disusul sensasi jeram arung jeram Cisadane.',
      inclusions: [
        'Rafting Cisadane Rute 7 KM',
        'Trekking Curug & Hutan Pinus (Pemandu Berpengalaman)',
        'Trekking Pole & Perlengkapan Standar P3K',
        'Tiket Retribusi Kawasan Curug & Wisata Alam',
        '1x Jamuan Makan Siang Prasmanan Khas Sunda Papalidan',
        '1x Buah Kelapa Muda Utuh Segar & Snack Tradisional',
        'Saung Transit Basecamp & Ruang Bilas Bersih Air Alami',
        'Asuransi Keselamatan Resmi',
      ],
      waText: 'Halo Admin SA Adventure, saya tertarik dengan Paket Rafting + Trekking Curug 1 Hari (Rp 295.000/orang). Mohon info jadwal dan ketersediaannya.',
    },
    {
      id: 'paintball',
      name: 'Paket Rafting + Paintball Wargame',
      price: 'Rp 358.500',
      tag: 'Paling Populer',
      image: '/images/gallery/whitewater-rafting-rapids.jpg',
      desc: 'Kombinasi arung jeram Cisadane seru dipadukan simulasi tempur strategi hutan pinus dengan 30 peluru per peserta, rompi proteksi, dan google mask.',
      inclusions: [
        'Rafting Cisadane Jalur 7 KM',
        'Paintball Battle Game (30 Peluru + Senjata Semi-Otomatis)',
        'Instruktur & Fasilitator Wargame',
        'Perlengkapan Safety & Goggle Masker',
        'Transportasi Lokal Shuttle PP',
        'Kelapa Muda Segar & Snack Rest Area',
        '1x Makan Siang Prasmanan Sunda',
        'Asuransi Keselamatan Resmi',
      ],
      waText: 'Halo Admin SA Adventure, saya tertarik dengan Paket Bundling Rafting + Paintball (Rp 358.500/orang). Bisa minta info ketersediaan tanggalnya?',
    },
    {
      id: 'offroad',
      name: 'Paket Rafting + Offroad 4x4 Ekstrem',
      price: 'Rp 495.000',
      tag: 'Adrenalin Tinggi',
      image: '/images/hero_rafting.jpg',
      desc: 'Melibas trek lumpur perbukitan dengan armada 4x4 tangguh, disusul petualangan basah menaklukkan jeram deras sungai Cisadane.',
      inclusions: [
        'Rafting Cisadane Rute Menantang 11 KM',
        'Offroad Land Cruiser 4x4 Adventure (Track Hutan & Lumpur)',
        'Driver Offroad Profesional & BBM',
        'Perlengkapan Rafting Standar Internasional',
        '1x Makan Siang Prasmanan Tepi Sungai',
        'Kelapa Muda Segar & Snack Rebusan',
        'Kamar Mandi Bilas & Saung Transit',
        'Asuransi Jiwa Seluruh Peserta',
      ],
      waText: 'Halo Admin SA Adventure, saya ingin tanya info Paket Bundling Rafting + Offroad 4x4 (Rp 495.000/orang). Mohon kirimkan detail rundownnya.',
    },
    {
      id: 'teambuilding',
      name: 'Paket Rafting + Outbound Fun Games',
      price: 'Rp 345.000',
      tag: 'Favorit Perusahaan',
      image: '/images/teambuilding.jpg',
      desc: 'Program rekreasi & penguatan kekompakan tim kerja kantor dengan ice breaking energik, games sinergi, dilanjutkan uji nyali arung jeram.',
      inclusions: [
        'Rafting Cisadane Arung Jeram 11 KM Dam 3M',
        'Outbound Fun Games & Team Building 2 Jam',
        'Master Game & Fasilitator Berpengalaman',
        'Sound System Outdoor & Lapangan Rumput Luas',
        'Spanduk / Banner Selamat Datang Rombongan',
        '1x Makan Siang Prasmanan Sunda + 2x Coffee Break',
        'Kelapa Muda Segar & Dokumentasi Kegiatan',
        'Asuransi Perlindungan Resmi',
      ],
      waText: 'Halo Admin SA Adventure, kantor kami berencana mengadakan gathering Paket Rafting + Outbound Fun Games (Rp 345.000/orang). Mohon info proposal dan invoice.',
    },
  ];

  const faqs = [
    {
      q: 'Apakah aman untuk pemula atau yang tidak bisa berenang?',
      a: 'Sangat aman! Seluruh peserta wajib mengenakan rompi pelampung (life jacket) berdaya apung tinggi yang mampu menahan bobot tubuh di atas air secara otomatis. Setiap perahu didampingi oleh pemandu (skipper) berpengalaman serta dipantau oleh tim rescue di setiap jeram.',
    },
    {
      q: 'Berapa jarak dan durasi pengarungan Rafting Cisadane?',
      a: 'Kami menyediakan 2 rute pilihan: Paket 7 KM (durasi ±1,5 hingga 2 jam) yang cocok untuk anak-anak dan pemula, serta Paket 11 KM (durasi ±2 hingga 2,5 jam) yang melalui jeram Grade III menantang dan sensasi terjun di Dam air setinggi 3 meter.',
    },
    {
      q: 'Pakaian dan perlengkapan apa saja yang harus dibawa?',
      a: 'Disarankan memakai pakaian olahraga yang nyaman dan cepat kering (kaos dry-fit, celana pendek/training santai), sandal bertali atau sepatu air. Jangan lupa membawa pakaian ganti, kantong plastik untuk baju basah, dan perlengkapan mandi pribadi.',
    },
    {
      q: 'Berapa batas usia anak-anak dan lansia untuk ikut rafting?',
      a: 'Batas usia minimal adalah 5 tahun untuk rute Family (7 KM) dan usia 8 tahun ke atas untuk rute Adventure (11 KM). Untuk lansia, maksimal usia 65 tahun selama kondisi fisik sehat dan tidak memiliki riwayat penyakit berat.',
    },
    {
      q: 'Bagaimana akses menuju lokasi basecamp?',
      a: 'Lokasi basecamp sangat mudah dijangkau kendaraan pribadi maupun bus rombongan, dengan area parkir luas yang aman dan nyaman tepat di tepi sungai Cisadane.',
    },
    {
      q: 'Bagaimana cara booking dan sistem pembayarannya?',
      a: 'Pemesanan sangat fleksibel. Anda cukup menghubungi admin WhatsApp kami untuk konfirmasi tanggal dan jumlah peserta, melakukan DP (Down Payment) sebesar 30%, dan pelunasan dapat dilakukan langsung di basecamp saat hari H pelaksanaan.',
    },
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      
      {/* ============================================================== */}
      {/* 1. SECTION FASILITAS LENGKAP (Clean High-End Professional Design) */}
      {/* ============================================================== */}
      <section id="fasilitas" className="py-16 sm:py-24 bg-neutral-950 text-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase block mb-2 font-mono">
              ALL-INCLUSIVE ADVENTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Fasilitas Lengkap Rafting Cisadane Bersama SA Adventure
            </h2>
            <p className="mt-3.5 text-neutral-400 text-sm sm:text-base leading-relaxed font-light">
              Tanpa biaya tersembunyi. Dari persiapan hingga kepulangan, seluruh kenyamanan dan keselamatan Anda kami fasilitasi secara komprehensif.
            </p>
          </div>

          {/* 10 Professional Facility Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-5">
            {facilities.map((fas, idx) => (
              <div
                key={idx}
                className="group bg-neutral-900/90 border border-neutral-800/90 hover:border-neutral-600 hover:bg-neutral-800/80 rounded-2xl p-3.5 sm:p-5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-white mb-2.5 sm:mb-3.5 group-hover:scale-105 group-hover:bg-white group-hover:text-neutral-950 transition-all duration-300">
                    {fas.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-xs sm:text-[15px] text-white tracking-tight mb-1 sm:mb-1.5 group-hover:text-white leading-snug">
                    {fas.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-400 font-light leading-relaxed font-sans line-clamp-3 sm:line-clamp-none">
                    {fas.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 text-center max-w-3xl mx-auto">
            <h4 className="font-serif text-lg sm:text-xl font-bold text-white mb-2">
              Ingin Penyesuaian Fasilitas Rombongan Kantor / Komunitas?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 font-light mb-5">
              Tersedia tambahan live musik akustik, panggung semi-outdoor, spanduk dokumentasi, kambing guling utuh, hingga bus pariwisata jemputan Jabodetabek.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20rombongan%20kustom%20Rafting%20Cisadane."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-full hover:bg-neutral-200 transition"
            >
              <span>Konsultasi Paket Kustom</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION PAKET BUNDLING (Makin Hemat & Seru) */}
      {/* ============================================================== */}
      <section id="bundling" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Tab Selection */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2 font-mono">
                PAKET BUNDLING PETUALANGAN
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-950 tracking-tight leading-tight">
                Coba Paket Bundling Biar Liburan &amp; Gathering Anda Makin Seru
              </h2>
              <p className="mt-3 text-neutral-600 text-sm sm:text-base font-light leading-relaxed">
                Dapatkan 2 kegiatan seru dalam 1 paket dengan harga hemat. Jadwal kegiatan lebih padat, terorganisir rapi, dan memberikan memori tak terlupakan.
              </p>
            </div>

            {/* Bundling Select Buttons */}
            <div className="space-y-2.5">
              {bundlingItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedBundling(index)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    selectedBundling === index
                      ? 'border-neutral-950 bg-neutral-950 text-white shadow-md'
                      : 'border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-800'
                  }`}
                >
                  <div className="min-w-0">
                    <span className="font-bold text-xs sm:text-sm block truncate">{item.name}</span>
                    <span className={`text-[11px] block mt-0.5 ${selectedBundling === index ? 'text-neutral-300' : 'text-neutral-500'}`}>
                      Harga Mulai dari {item.price} / orang
                    </span>
                  </div>
                  <span
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-xs ${
                      selectedBundling === index
                        ? 'border-white bg-white text-neutral-950 font-bold'
                        : 'border-neutral-300 text-transparent'
                    }`}
                  >
                    ✓
                  </span>
                </button>
              ))}
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20tertarik%20dengan%20Paket%20Bundling%20Rafting.%20Bisa%20minta%20info%20pilihan%20paket%20dan%20harganya?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-xl shadow-md transition"
            >
              <span>Konsultasi Paket Bundling</span>
              <span>→</span>
            </a>
          </div>

          {/* Right Column: Featured Bundling Display Card */}
          <div className="lg:col-span-7">
            {(() => {
              const cur = bundlingItems[selectedBundling];
              return (
                <div className="bg-neutral-50 rounded-3xl border border-neutral-200 p-6 sm:p-8 overflow-hidden shadow-sm">
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6">
                    <img
                      src={cur.image}
                      alt={cur.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-neutral-950 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {cur.tag}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950 mb-2">
                    {cur.name}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xs text-neutral-500">Harga:</span>
                    <span className="font-serif text-2xl font-bold text-neutral-950">{cur.price}</span>
                    <span className="text-xs text-neutral-500">/ orang</span>
                  </div>
                  <p className="text-neutral-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                    {cur.desc}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-900 block mb-2">
                      Fasilitas Termasuk dalam Bundling:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                      {cur.inclusions.map((inc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-neutral-950 font-bold">✓</span>
                          <span className="font-light">{inc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(cur.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block bg-neutral-950 hover:bg-neutral-800 text-white font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition shadow-md"
                  >
                    Booking {cur.name} Sekarang
                  </a>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. SECTION FAQ (Pertanyaan yang Sering Diajukan) */}
      {/* ============================================================== */}
      <section id="faq" className="py-16 sm:py-24 bg-neutral-50 border-t border-neutral-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2 font-mono">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-neutral-950 tracking-tight leading-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-3 text-neutral-600 text-xs sm:text-sm font-light">
              Pelajari informasi seputar persiapan, keamanan, dan rute rafting sungai Cisadane sebelum Anda berangkat.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden transition"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-neutral-900 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span className={`w-6 h-6 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-neutral-900 text-white border-neutral-900' : 'text-neutral-500'}`}>
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
}
