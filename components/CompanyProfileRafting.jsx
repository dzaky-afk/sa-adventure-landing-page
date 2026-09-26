'use client';

import { useState } from 'react';

export default function CompanyProfileRafting() {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const raftingPackages = [
    {
      id: 'family-7km',
      name: 'Paket Rafting Keluarga & Pemula',
      category: 'rafting',
      distance: '7 KM (± 1.5 - 2 Jam)',
      grade: 'Grade II - III (Aman & Santai)',
      price: '185.000',
      minPeople: 'Min. 6 Peserta',
      badge: 'Family & Beginner',
      isPopular: false,
      description:
        'Pilihan tepat untuk rombongan keluarga, anak-anak, dan pemula yang ingin menikmati segarnya alam sungai Cisadane dengan jeram ramah dan pemandangan asri.',
      inclusions: [
        'Perlengkapan rafting standar SNI & Internasional (Helm, Life Jacket, Dayung)',
        'Pemandu sungai (River Guide) profesional & tim rescue siaga',
        'Kelapa muda segar di saung rest area tengah sungai',
        'Transportasi lokal (shuttle penjemputan dari finish kembali ke basecamp)',
        'Fasilitas basecamp: Saung gazebo santai, kamar bilas & toilet bersih',
        'Asuransi keselamatan resmi untuk seluruh peserta',
      ],
      waText:
        'Halo Admin SA Adventure, saya ingin reservasi Paket Rafting Keluarga 7 KM (Rp 185rb/org). Mohon info jadwal yang tersedia.',
    },
    {
      id: 'adventure-11km',
      name: 'Paket Rafting Adventure Dam 3M',
      category: 'rafting',
      distance: '11 KM (± 2 - 2.5 Jam)',
      grade: 'Grade III+ (Dam 3 Meter Ikonik)',
      price: '225.000',
      minPeople: 'Min. 6 Peserta',
      badge: 'Paling Populer',
      isPopular: true,
      description:
        'Paket paling favorit! Menaklukkan formasi jeram terlengkap Sungai Cisadane dengan sensasi menegangkan meluncur di Dam setinggi 3 meter yang memicu adrenalin.',
      inclusions: [
        'Semua fasilitas standar rafting (Helm, Life Jacket, Dayung, Rescue)',
        'Sensasi terjun di Dam 3 Meter ikonik yang memacu adrenalin',
        'Makan siang prasmanan khas Sunda lengkap di Resto Alam Papalidan',
        'Kelapa muda segar & snack istirahat di tepian sungai',
        'Dokumentasi foto aksi jeram terbaik untuk seluruh rombongan',
        'Transportasi lokal shuttle + asuransi keselamatan resmi',
        'Fasilitas basecamp lengkap (kamar bilas, saung, musholla, parkir luas)',
      ],
      waText:
        'Halo Admin SA Adventure, saya ingin reservasi Paket Rafting Adventure 11 KM Dam 3 Meter (Rp 225rb/org). Mohon info jadwal dan penawaran terbaik.',
    },
    {
      id: 'gathering-11km',
      name: 'Paket One Day Gathering + Rafting',
      category: 'gathering',
      distance: '11 KM + Outbound Team Building',
      grade: 'Full Day Corporate Outing',
      price: '345.000',
      minPeople: 'Min. 20 Peserta',
      badge: 'Best For Corporate',
      isPopular: false,
      description:
        'Solusi all-in-one untuk outing kantor, instansi, atau komunitas besar. Menggabungkan games kebersamaan untuk mempererat sinergi tim, dilanjutkan arung jeram 11 KM.',
      inclusions: [
        'Arung jeram Rafting Cisadane 11 KM Dam 3 Meter lengkap',
        'Program Outbound Fun Games / Team Building terstruktur',
        'Master of Ceremonies (MC) & instruktur games berpengalaman',
        'Area lapangan hijau eksklusif & pendopo pertemuan gathering',
        'Sound system outdoor profesional + banner spanduk kegiatan',
        'Makan siang prasmanan lezat + 2x coffee break (snack & kopi)',
        'Dokumentasi foto & video keseruan rombongan',
        'Asuransi keselamatan + koordinasi rundown menyeluruh',
      ],
      waText:
        'Halo Admin SA Adventure, saya ingin konsultasi Paket One Day Gathering + Rafting 11 KM (Rp 345rb/org) untuk rombongan kantor.',
    },
  ];

  const bundlingPackages = [
    {
      title: 'Rafting + Paintball Wargame',
      tag: 'Adrenaline & Tactic',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
        </svg>
      ),
      description:
        'Kombinasi seru simulasi pertempuran strategi di arena alam perbukitan pinus dengan 50 peluru per peserta, bersambung dengan arung jeram Cisadane 11 KM.',
      highlights: [
        'Rafting Cisadane 11 KM + Dam 3 Meter',
        'Senjata semi-otomatis + 50 peluru',
        'Seragam militer, goggle pelindung wajah, body vest',
        'Makan siang prasmanan + kelapa muda segar',
        'Asuransi & pemandu bersertifikasi',
      ],
      waMsg: 'Halo Admin SA Adventure, saya tertarik paket bundling Rafting + Paintball. Mohon info detail harga rombongan.',
    },
    {
      title: 'Rafting + Offroad 4x4 Adventure',
      tag: 'Mud & Extreme Nature',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M5 18H3c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v1" />
          <path d="M14 9l4 4h4c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1h-2" />
          <circle cx="7" cy="18" r="3" />
          <circle cx="17" cy="18" r="3" />
        </svg>
      ),
      description:
        'Jelajahi perbukitan kebun teh dan lintasan lumpur ekstrem menggunakan armada land rover 4x4 gagah, lalu taklukkan jeram deras sungai Cisadane.',
      highlights: [
        'Rute offroad ekstrem melintasi hutan & lumpur',
        'Armada 4x4 tangguh & driver berpengalaman',
        'Rafting Cisadane 11 KM Dam 3 Meter',
        'Kelapa muda segar di rest area + makan siang',
        'Dokumentasi foto aksi offroad & rafting',
      ],
      waMsg: 'Halo Admin SA Adventure, saya tertarik paket bundling Rafting + Offroad 4x4. Mohon penawaran harganya.',
    },
    {
      title: 'Rafting + Outbound Fun Games',
      tag: 'Team Synergy & Bonding',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      description:
        'Skenario permainan ice breaking, communication games, dan sinergi kelompok di lapangan hijau asri sebelum basah-basahan bersama di aliran sungai.',
      highlights: [
        'Outbound games terstruktur untuk keakraban tim',
        'Instruktur & fasilitator games profesional',
        'Rafting Cisadane 11 KM + tim rescue',
        'Makan siang prasmanan Sunda + coffee break',
        'Area pendopo kumpul & sound system',
      ],
      waMsg: 'Halo Admin SA Adventure, saya tertarik paket bundling Rafting + Outbound Fun Games untuk tim kantor.',
    },
  ];

  const facilities = [
    {
      title: 'Perlengkapan Rafting SNI',
      desc: 'Rompi pelampung berdaya apung tinggi, helm pelindung kepala kokoh, dan dayung ergonomis terstandar resmi.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: 'Pemandu Berlisensi BNSP',
      desc: 'River guide profesional berpengalaman 10+ tahun dengan pemahaman mendalam karakteristik debit air Cisadane.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="8" r="5" />
          <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
      ),
    },
    {
      title: 'Tim Rescue Darat & Air',
      desc: 'Personel rescue siaga di titik-titik jeram rawan dan perahu penyelamat untuk memastikan keamanan 100%.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      ),
    },
    {
      title: 'Transportasi Shuttle Lokal',
      desc: 'Armada penjemputan siap mengantar rombongan kembali dari titik finish pengarungan menuju basecamp utama.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      title: 'Kelapa Muda & Snack Alami',
      desc: 'Penyegaran istimewa kelapa muda utuh langsung dinikmati di saung rest area tepi sungai yang sejuk.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18" />
        </svg>
      ),
    },
    {
      title: 'Kamar Mandi & Bilas Bersih',
      desc: 'Puluhan bilik kamar mandi bersih dengan pasokan air alami melimpah untuk kenyamanan bilas seluruh peserta.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <line x1="12" y1="4" x2="12" y2="20" />
        </svg>
      ),
    },
    {
      title: 'Prasmanan Khas Sunda',
      desc: 'Hidangan makan siang lezat racikan resto alam Papalidan: ayam bakar/goreng, sayur asem, sambal dadak, tahu tempe.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
    },
    {
      title: 'Asuransi Resmi Jiwa & Medis',
      desc: 'Perlindungan asuransi keselamatan resmi menaungi setiap peserta sejak awal persiapan hingga akhir acara.',
      icon: (
        <svg className="w-6 h-6 text-neutral-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: 'Apakah arung jeram aman bagi pemula dan orang yang tidak bisa berenang?',
      a: 'Sangat aman! Setiap peserta wajib memakai rompi pelampung (life jacket) daya apung tinggi berstandar internasional dan helm keselamatan. Setiap perahu dikemudikan pemandu bersertifikasi BNSP dan dikawal tim rescue di titik jeram. Bahkan anak-anak usia mulai 5 tahun dapat ikut rute keluarga dengan aman.',
    },
    {
      q: 'Berapa jarak dan durasi pengarungan rafting di Cisadane?',
      a: 'Kami menyediakan rute Family 7 KM (durasi ±1.5 - 2 jam) yang ramah pemula dan anak-anak, serta rute Adventure 11 KM (durasi ±2 - 2.5 jam) yang menantang dengan sensasi Dam 3 meter.',
    },
    {
      q: 'Apa yang perlu dibawa oleh peserta saat rafting?',
      a: 'Cukup bawa pakaian ganti kering, perlengkapan mandi pribadi, kantong plastik untuk baju basah, dan gunakan alas kaki yang tidak mudah lepas (seperti sandal gunung atau sepatu air/sneakers lama).',
    },
    {
      q: 'Bagaimana akses menuju Basecamp SA Adventure Caringin Bogor?',
      a: 'Lokasi kami sangat strategis dan BEBAS MACET PUNCAK! Cukup melalui Jalan Tol Jagorawi lanjut ke Tol Bocimi (Bogor - Ciawi - Sukabumi), ambil Exit Tol Caringin. Hanya sekitar 5-10 menit dari gerbang tol langsung tiba di basecamp.',
    },
    {
      q: 'Apakah bisa memesan paket khusus gathering kantor dengan jumlah peserta besar?',
      a: 'Bisa sekali! Kami berpengalaman menangani rombongan corporate hingga ratusan peserta lengkap dengan paket One Day Gathering, fasilitator outbound, sound system, konsumsi prasmanan, dan dokumentasi.',
    },
  ];

  return (
    <>
      {/* ================= SECTION 1: PILIHAN PAKET & HARGA RAFTING ================= */}
      <section id="paket" className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-neutral-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3 block font-sans">
              Pilihan Paket Resmi
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 tracking-tight leading-tight mb-4">
              Paket &amp; Harga Rafting Cisadane Bogor
            </h2>
            <p className="text-neutral-600 font-light font-sans text-sm sm:text-base leading-relaxed">
              Pengalaman arung jeram terbaik dengan standar keselamatan terakreditasi resmi, tim rescue siaga, kelapa muda segar, dan jamuan prasmanan Sunda.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {raftingPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 font-sans ${
                  pkg.isPopular
                    ? 'bg-neutral-950 text-white shadow-2xl scale-102 lg:-translate-y-2 border-2 border-neutral-800'
                    : 'bg-white text-neutral-900 border border-neutral-200 shadow-sm hover:shadow-lg'
                } p-7 sm:p-9`}
              >
                {pkg.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-[11px] font-extrabold uppercase tracking-widest py-1.5 px-5 rounded-full shadow-md">
                    {pkg.badge}
                  </div>
                )}

                <div>
                  {/* Top Badge & Title */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
                        pkg.isPopular
                          ? 'bg-white/10 text-emerald-400 border border-white/15'
                          : 'bg-neutral-100 text-neutral-600'
                      }`}
                    >
                      {pkg.distance}
                    </span>
                    <span className="text-xs font-semibold opacity-70">{pkg.minPeople}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-2">{pkg.name}</h3>
                  <p
                    className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${
                      pkg.isPopular ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  {/* Price Block */}
                  <div className="mb-8 pb-6 border-b border-neutral-200/20">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs font-semibold uppercase opacity-75">Rp</span>
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight">{pkg.price}</span>
                      <span className="text-xs font-normal opacity-75">/ orang</span>
                    </div>
                    <span className="text-[11px] block mt-1 opacity-60">Tingkat jeram: {pkg.grade}</span>
                  </div>

                  {/* Facilities Inclusions */}
                  <div className="space-y-3 mb-8">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider block ${
                        pkg.isPopular ? 'text-emerald-400' : 'text-neutral-500'
                      }`}
                    >
                      Fasilitas Sudah Termasuk:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-[13px] leading-relaxed">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <svg
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              pkg.isPopular ? 'text-emerald-400' : 'text-emerald-600'
                            }`}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span className={pkg.isPopular ? 'text-neutral-200' : 'text-neutral-700'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-col gap-2.5">
                  <a
                    href={`https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(pkg.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 no-underline shadow-sm flex items-center justify-center gap-2 ${
                      pkg.isPopular
                        ? 'bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    <span>Booking Paket Ini</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href="https://saadventure.web.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-xl text-[11px] font-semibold text-center transition-all no-underline ${
                      pkg.isPopular
                        ? 'text-neutral-300 hover:text-white border border-white/20 hover:border-white/40'
                        : 'text-neutral-700 hover:text-neutral-900 border border-neutral-300 hover:border-neutral-500'
                    }`}
                  >
                    Cek Ketersediaan di Web Reservasi ↗
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: PAKET BUNDLING PETUALANGAN ================= */}
      <section id="bundling" className="py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/70 border-t border-neutral-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto font-sans">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3 block">
              Paling Seru &amp; Berkesan
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 tracking-tight leading-tight mb-4">
              Paket Bundling Rafting &amp; Aktivitas Favorit
            </h2>
            <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
              Gabungkan keseruan arung jeram dengan paintball, offroad 4x4, atau team building outbound untuk pengalaman gathering perusahaan dan komunitas yang tak terlupakan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bundlingPackages.map((b, idx) => (
              <div
                key={idx}
                className="bg-white border border-neutral-200/90 rounded-3xl p-7 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6">
                    {b.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50/80 px-2.5 py-1 rounded-md mb-2 inline-block">
                    {b.tag}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 mb-3">{b.title}</h3>
                  <p className="text-neutral-600 font-light text-xs sm:text-sm leading-relaxed mb-6">{b.description}</p>

                  <div className="space-y-2 mb-8">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block">
                      Highlight Fasilitas:
                    </span>
                    {b.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-neutral-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={`https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(b.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold uppercase tracking-wider text-xs py-3 px-4 rounded-xl text-center no-underline transition shadow-2xs"
                >
                  Tanya Penawaran Bundling
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FASILITAS ALL-INCLUSIVE ================= */}
      <section id="fasilitas" className="py-20 sm:py-28 px-4 sm:px-6 bg-white border-t border-neutral-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto font-sans">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3 block">
              Standar Layanan Resmi
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 tracking-tight leading-tight mb-4">
              Fasilitas Lengkap Yang Anda Dapatkan
            </h2>
            <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
              Kenyamanan dan keselamatan Anda adalah prioritas mutlak kami. Setiap paket telah mencakup seluruh kebutuhan operasional tanpa biaya tersembunyi.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 hover:bg-white hover:border-neutral-300 hover:shadow-md transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-4 shadow-2xs">
                  {f.icon}
                </div>
                <h4 className="font-bold text-sm sm:text-base text-neutral-900 mb-2">{f.title}</h4>
                <p className="text-xs text-neutral-600 font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: FAQ PERTANYAAN UMUM ================= */}
      <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-neutral-50/60 border-t border-neutral-200/80 scroll-mt-20">
        <div className="max-w-4xl mx-auto font-sans">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-3 block">
              Panduan Praktis
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif text-neutral-900 tracking-tight leading-tight mb-4">
              Pertanyaan Yang Sering Diajukan (FAQ)
            </h2>
            <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
              Hal-hal penting seputar persiapan, standar keamanan, dan kemudahan akses ke basecamp SA Adventure.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-neutral-200/90 rounded-2xl overflow-hidden transition-all duration-200 shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-neutral-900 hover:text-black cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-neutral-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-neutral-900' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-neutral-600 font-light leading-relaxed border-t border-neutral-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
