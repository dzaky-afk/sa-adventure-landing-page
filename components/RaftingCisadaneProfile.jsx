'use client';

import { useState } from 'react';

export default function RaftingCisadaneProfile() {
  const [activeFasilModal, setActiveFasilModal] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [selectedBundling, setSelectedBundling] = useState(0);

  const packages = [
    {
      id: 'silver',
      name: 'Paket Silver (7 KM)',
      subtitle: 'Keluarga & Pemula',
      tag: 'Basic',
      strikePrice: 'Rp 250.000',
      price: 'Rp 175.000',
      desc: 'Per orang • Diskon 30% Weekend & 35% Weekday (Min 10 Pax)',
      image: '/images/gallery/whitewater-rafting-rapids.jpg',
      badgeColor: 'bg-neutral-800 text-white',
      featured: false,
      waText: 'Halo Admin SA Adventure, saya ingin booking Paket Silver Rafting Cisadane 7 KM (Rp 175.000/orang). Mohon info jadwal dan ketersediaannya.',
      inclusions: [
        'Arung Jeram Sungai Cisadane 7 KM',
        'Pemandu Berlisensi Resmi BNSP',
        'Tim Rescue & Safety Guard Terlatih',
        'Perlengkapan Standar SNI (Helm, Pelampung, Dayung)',
        'Asuransi Keselamatan Resmi',
        'Transportasi Shuttle Lokal Titik Finish ke Start',
        'Saung Transit / Gazebo Luas Tepi Sungai',
        'Kamar Mandi & Ruang Bilas Bersih Air Alami',
        '1x Buah Kelapa Muda Utuh Segar',
        '1x Snack Tradisional & Coffee Break',
      ],
    },
    {
      id: 'gold',
      name: 'Paket Gold (11 KM)',
      subtitle: 'Adventure Dam 3 Meter',
      tag: 'Best Seller ★',
      strikePrice: 'Rp 270.000',
      price: 'Rp 189.000',
      desc: 'Per orang • Paket terfavorit rute panjang menembus jeram & air terjun dam',
      image: '/images/hero-gathering-water-splash.jpg',
      badgeColor: 'bg-amber-500 text-black',
      featured: true,
      waText: 'Halo Admin SA Adventure, saya ingin booking Paket Gold Rafting Cisadane 11 KM Dam 3M (Rp 189.000/orang). Mohon info penawaran dan jadwal.',
      inclusions: [
        'Arung Jeram Sungai Cisadane 11 KM (Sensasi Dam 3M)',
        'Pemandu Berlisensi Resmi BNSP',
        'Tim Rescue & Safety Guard Terlatih',
        'Perlengkapan Standar SNI (Helm, Pelampung, Dayung)',
        'Asuransi Keselamatan Resmi',
        'Transportasi Shuttle Lokal Titik Finish ke Start',
        'Saung Transit / Gazebo Luas Tepi Sungai',
        'Kamar Mandi & Ruang Bilas Bersih Air Alami',
        '1x Buah Kelapa Muda Utuh Segar',
        '1x Snack Tradisional & Coffee Break',
        'Dokumentasi Foto & Video Aksi Seru (Eksklusif)',
      ],
    },
    {
      id: 'diamond',
      name: 'Paket Diamond (11 KM)',
      subtitle: 'Full All-Inclusive + Makan',
      tag: 'Complete Gathering',
      strikePrice: 'Rp 299.000',
      price: 'Rp 209.000',
      desc: 'Per orang • Lengkap dengan jamuan prasmanan Sunda & merchandise',
      image: '/images/katering-prasmanan-sunda.jpg',
      badgeColor: 'bg-emerald-600 text-white',
      featured: false,
      waText: 'Halo Admin SA Adventure, saya ingin booking Paket Diamond Rafting Cisadane 11 KM Lengkap Makan Siang Prasmanan (Rp 209.000/orang). Mohon info lengkapnya.',
      inclusions: [
        'Arung Jeram Sungai Cisadane 11 KM (Sensasi Dam 3M)',
        'Pemandu Berlisensi Resmi BNSP',
        'Tim Rescue & Safety Guard Terlatih',
        'Perlengkapan Standar SNI (Helm, Pelampung, Dayung)',
        'Asuransi Keselamatan Resmi',
        'Transportasi Shuttle Lokal Titik Finish ke Start',
        'Saung Transit / Gazebo Luas Tepi Sungai',
        'Kamar Mandi & Ruang Bilas Bersih Air Alami',
        '1x Buah Kelapa Muda Utuh Segar',
        '1x Snack Tradisional & Coffee Break',
        'Dokumentasi Foto & Video HD',
        '1x Jamuan Makan Siang Prasmanan Khas Sunda Papalidan',
        'Merchandise Resmi SA Adventure',
      ],
    },
  ];

  const bundlingItems = [
    {
      id: 'paintball',
      name: 'Paket Rafting + Paintball Wargame',
      price: 'Rp 358.500',
      tag: 'Paling Populer',
      image: '/images/gallery/whitewater-rafting-rapids.jpg',
      desc: 'Kombinasi arung jeram Cisadane seru dipadukan simulasi tempur strategi hutan pinus dengan 50 peluru per peserta, rompi proteksi, dan google mask.',
      inclusions: [
        'Rafting Cisadane Jalur 7 KM / 11 KM',
        'Paintball Battle Game (50 Peluru + Senjata Semi-Otomatis)',
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
      desc: 'Melibas trek lumpur perbukitan kaki Gunung Salak dengan armada 4x4 tangguh, disusul petualangan basah menaklukkan jeram deras sungai Cisadane.',
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

  const facilities = [
    { title: 'Pemandu Berlisensi', desc: 'Skipper sungai berlisensi resmi BNSP & FAJI dengan jam terbang 10+ tahun.', icon: '🛡️' },
    { title: 'Rescue Team Siaga', desc: 'Tim penyelamat di setiap titik jeram kritis dan dam 3 meter.', icon: '🛟' },
    { title: 'Peralatan Standar SNI', desc: 'Helm pelindung kepala, perahu karet tebal, dan dayung kokoh.', icon: '🛶' },
    { title: 'Asuransi Keselamatan', desc: 'Perlindungan jaminan asuransi resmi untuk seluruh peserta tanpa terkecuali.', icon: '📋' },
    { title: 'Transportasi Shuttle', desc: 'Armada angkutan lokal siap mengantar Anda dari titik finish kembali ke basecamp.', icon: '🚐' },
    { title: 'Kamar Bilas & Toilet', desc: 'Kamar mandi bersih dengan pasokan air pegunungan yang segar dan higienis.', icon: '🚿' },
    { title: 'Saung Transit Luas', desc: 'Gazebo bambu lesehan asri tepi sungai untuk istirahat dan berkumpul rombongan.', icon: '🏡' },
    { title: 'Kelapa Muda Murni', desc: 'Suguhan 1 butir kelapa muda utuh segar di rest area alami tengah sungai.', icon: '🥥' },
    { title: 'Snack & Coffee Break', desc: 'Kue basah tradisional, teh hangat, dan kopi khas Bogor yang nikmat.', icon: '☕' },
    { title: 'Makan Siang Sunda', desc: 'Sajian prasmanan nasi liwet, ayam goreng, sambal lalap, tahu tempe, & sayur asem.', icon: '🍛' },
  ];

  const faqs = [
    {
      q: 'Apakah aman untuk pemula atau yang tidak bisa berenang?',
      a: 'Sangat aman! Seluruh peserta wajib mengenakan rompi pelampung (life jacket) berdaya apung tinggi yang mampu menahan bobot tubuh di atas air secara otomatis. Setiap perahu didampingi oleh pemandu (skipper) bersertifikat resmi BNSP serta dipantau oleh tim rescue di setiap jeram.',
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
      a: 'Batas usia minimal adalah 5 tahun untuk rute Family (7 KM) dan usia 8 tahun ke atas untuk rute Adventure (11 KM). Untuk lansia, maksimal usia 65 tahun selama kondisi fisik sehat dan tidak memiliki riwayat penyakit jantung berat.',
    },
    {
      q: 'Apakah lokasi basecamp bebas dari macet sistem ganjil-genap Puncak?',
      a: 'Ya, 100% BEBAS MACET PUNCAK! Basecamp kami berada di Caringin Bogor. Dari Tol Jagorawi langsung masuk Tol Bocimi dan keluar di Gerbang Tol Caringin. Hanya 5 menit dari pintu tol langsung tiba di lokasi tanpa perlu melewati jalur buka-tutup Puncak.',
    },
    {
      q: 'Bagaimana cara booking dan sistem pembayarannya?',
      a: 'Pemesanan sangat fleksibel. Anda cukup menghubungi admin WhatsApp kami untuk konfirmasi tanggal dan jumlah peserta, melakukan DP (Down Payment) sebesar 30%, dan pelunasan dapat dilakukan langsung di basecamp saat hari H pelaksanaan.',
    },
  ];

  return (
    <div className="bg-white text-neutral-900 font-sans">
      
      {/* ============================================================== */}
      {/* 1. SECTION KEUNGGULAN & TRUST (Mengapa Memilih SA Adventure) */}
      {/* ============================================================== */}
      <section id="keunggulan" className="py-14 sm:py-20 bg-neutral-50 border-y border-neutral-200/80 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2 font-mono">
              KENAPA MEMILIH SA ADVENTURE
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-neutral-950 tracking-tight leading-tight">
              Standar Keselamatan Internasional, <br className="hidden sm:inline" />
              Pemandu BNSP &amp; Bebas Macet Puncak
            </h2>
            <p className="mt-3.5 text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
              Kami memadukan petualangan arung jeram sungai Cisadane yang memacu adrenalin dengan standar keamanan tanpa kompromi, fasilitas basecamp terlengkap, dan jaminan kenyamanan rombongan Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-xl mb-4">
                🎖️
              </div>
              <h3 className="font-bold text-base text-neutral-950 mb-2">Pemandu Lisensi BNSP</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Seluruh skipper dan rescue team kami tersertifikasi resmi Badan Nasional Sertifikasi Profesi (BNSP) dan Federasi Arung Jeram Indonesia (FAJI).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-xl mb-4">
                🛡️
              </div>
              <h3 className="font-bold text-base text-neutral-950 mb-2">Peralatan Standar SNI</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Perahu karet tebal bermaterial PVC rafting grade, pelampung daya apung tinggi bersertifikasi, dan helm pelindung benturan standar internasional.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-xl mb-4">
                🌊
              </div>
              <h3 className="font-bold text-base text-neutral-950 mb-2">Sensasi Dam 3 Meter</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Rute arung jeram terbaik dengan 12 jeram menantang (Grade II-III) serta atraksi ikonik meluncur bebas menuruni Dam setinggi 3 meter.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-neutral-200/80 shadow-2xs hover:shadow-md transition duration-300">
              <div className="w-12 h-12 rounded-xl bg-neutral-900 text-white flex items-center justify-center text-xl mb-4">
                🚗
              </div>
              <h3 className="font-bold text-base text-neutral-950 mb-2">Akses Tol Caringin 5 Menit</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-light">
                Akses tol Bocimi gerbang Caringin hanya 5 menit ke basecamp. Bebas stres sistem satu arah atau buka-tutup jalur Puncak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SECTION PAKET & HARGA RESMI RAFTING CISADANE BOGOR */}
      {/* ============================================================== */}
      <section id="paket" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase block mb-2 font-mono">
            PAKET RAFTING CISADANE BOGOR
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-neutral-950 tracking-tight leading-tight">
            Pilihan Harga &amp; Fasilitas Wisata Rafting Cisadane Bogor
          </h2>
          <p className="mt-3.5 text-neutral-600 text-sm sm:text-base leading-relaxed font-light">
            Dapatkan diskon spesial hingga 35% untuk kegiatan di Weekday dan 30% untuk Weekend. Semua paket sudah termasuk perlengkapan SNI, pemandu, dan asuransi resmi.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl border flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl relative ${
                pkg.featured
                  ? 'border-neutral-950 shadow-lg ring-1 ring-neutral-950/20 bg-neutral-950 text-white'
                  : 'border-neutral-200 bg-white text-neutral-900 shadow-sm'
              }`}
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${pkg.badgeColor}`}>
                    {pkg.tag}
                  </span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-1">{pkg.name}</h3>
                  <p className={`text-xs font-medium mb-4 ${pkg.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                    {pkg.subtitle}
                  </p>

                  <div className="mb-5">
                    <span className={`text-xs block mb-0.5 line-through ${pkg.featured ? 'text-neutral-500' : 'text-neutral-400'}`}>
                      {pkg.strikePrice}
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
                        {pkg.price}
                      </span>
                      <span className={`text-xs font-medium ${pkg.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                        / orang
                      </span>
                    </div>
                    <p className={`text-[11px] mt-1.5 leading-snug ${pkg.featured ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      {pkg.desc}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-neutral-200/30">
                    <span className={`text-[11px] uppercase font-bold tracking-wider block ${pkg.featured ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      Fasilitas Termasuk:
                    </span>
                    <ul className="space-y-2 text-xs">
                      {pkg.inclusions.slice(0, 5).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`font-bold mt-0.5 ${pkg.featured ? 'text-amber-400' : 'text-neutral-900'}`}>✓</span>
                          <span className={`font-light leading-relaxed ${pkg.featured ? 'text-neutral-200' : 'text-neutral-700'}`}>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={() => setActiveFasilModal(pkg)}
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition cursor-pointer text-center ${
                      pkg.featured
                        ? 'border border-neutral-700 text-white hover:bg-neutral-900'
                        : 'border border-neutral-300 text-neutral-800 hover:bg-neutral-100'
                    }`}
                  >
                    Detail Fasilitas
                  </button>

                  <a
                    href={`https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(pkg.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-sm text-center flex items-center justify-center gap-1.5 ${
                      pkg.featured
                        ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                        : 'bg-neutral-950 text-white hover:bg-neutral-800'
                    }`}
                  >
                    <span>Booking Paket</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. SECTION FASILITAS LENGKAP RAFTING (10 Fasilitas All-Inclusive) */}
      {/* ============================================================== */}
      <section id="fasilitas" className="py-16 sm:py-24 bg-neutral-900 text-white scroll-mt-20">
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
            {facilities.map((fas, idx) => (
              <div
                key={idx}
                className="bg-neutral-800/80 border border-neutral-700/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between hover:border-neutral-500 transition duration-200"
              >
                <div>
                  <div className="text-2xl mb-3">{fas.icon}</div>
                  <h3 className="font-bold text-sm sm:text-base text-white mb-1.5">{fas.title}</h3>
                  <p className="text-[11px] text-neutral-400 font-light leading-relaxed">{fas.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-800/50 border border-neutral-700 text-center max-w-3xl mx-auto">
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
      {/* 4. SECTION PAKET BUNDLING (Makin Hemat & Seru) */}
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
                    <span className="text-xs text-neutral-500">Harga Mulai Dari:</span>
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
                    Booking Paket {cur.name} Sekarang
                  </a>
                </div>
              );
            })()}
          </div>

        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SECTION FAQ (Pertanyaan yang Sering Diajukan) */}
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

      {/* ============================================================== */}
      {/* MODAL DETAIL FASILITAS PAKET */}
      {/* ============================================================== */}
      {activeFasilModal && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-white max-w-lg w-full rounded-3xl p-6 sm:p-7 shadow-2xl relative border border-neutral-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block font-mono">
                  Rincian Fasilitas Resmi
                </span>
                <h3 className="font-serif text-xl font-bold text-neutral-950">
                  {activeFasilModal.name}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveFasilModal(null)}
                className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto space-y-2.5 pr-1">
              {activeFasilModal.inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2 rounded-xl bg-neutral-50 border border-neutral-100 text-xs">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span className="text-neutral-800 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-neutral-200 flex gap-2">
              <button
                type="button"
                onClick={() => setActiveFasilModal(null)}
                className="py-3 px-4 rounded-xl border border-neutral-300 text-neutral-700 text-xs font-bold uppercase tracking-wider flex-1"
              >
                Tutup
              </button>
              <a
                href={`https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(activeFasilModal.waText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white text-xs font-bold uppercase tracking-wider flex-1 text-center"
              >
                Booking via WA
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
