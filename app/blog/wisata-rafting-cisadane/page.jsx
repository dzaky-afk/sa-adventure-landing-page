import Link from "next/link";

export const metadata = {
  title: "Wisata Rafting Cisadane: Panduan Lengkap Arung Jeram di Bogor",
  description: "Panduan wisata rafting Cisadane Bogor: rute jeram kelas II-IV, harga paket, fasilitas, lokasi basecamp, dan tips memilih operator terpercaya. Booking di SA Adventure mulai 185rb!",
  keywords: ["wisata rafting cisadane", "rafting cisadane bogor", "arung jeram cisadane", "rafting cisadane caringin", "wisata alam bogor"],
  alternates: { canonical: "https://saadventureprofile.com/blog/wisata-rafting-cisadane" },
  openGraph: {
    title: "Wisata Rafting Cisadane: Panduan Lengkap Arung Jeram Bogor",
    description: "Panduan wisata rafting Sungai Cisadane Bogor — rute, harga, fasilitas, dan tips terbaik dari SA Adventure.",
    url: "https://saadventureprofile.com/blog/wisata-rafting-cisadane",
    type: "article",
    publishedTime: "2025-09-15",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wisata Rafting Cisadane: Panduan Lengkap Arung Jeram di Bogor",
  description: "Panduan lengkap wisata rafting Sungai Cisadane Bogor dari SA Adventure.",
  image: "https://saadventureprofile.com/images/hero_rafting.jpg",
  datePublished: "2025-09-15",
  dateModified: "2025-09-20",
  author: { "@type": "Organization", name: "SA Adventure", url: "https://saadventureprofile.com" },
  publisher: { "@type": "Organization", name: "SA Adventure", logo: { "@type": "ImageObject", url: "https://saadventureprofile.com/images/logo_sa_adventure.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://saadventureprofile.com/blog/wisata-rafting-cisadane" },
};

export default function WisataRaftingCisadanePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/blog" className="inline-block text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-neutral-700 transition-colors mb-6 no-underline">
            ← Kembali ke Blog
          </Link>

          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full mb-4">
            Wisata
          </span>

          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-tight mb-4">
            Wisata Rafting Cisadane: Panduan Lengkap Arung Jeram di Bogor
          </h1>

          <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans mb-8 pb-8 border-b border-neutral-200">
            <span>15 September 2025</span>
            <span>·</span>
            <span>SA Adventure</span>
            <span>·</span>
            <span>8 menit baca</span>
          </div>

          <article className="font-sans text-neutral-700 leading-relaxed">
            <p className="text-lg text-neutral-800 font-medium leading-relaxed mb-6">
              <strong>Sungai Cisadane</strong> di kawasan Caringin, Bogor adalah surga bagi para pecinta rafting dan wisata alam. Dengan arus yang konsisten sepanjang tahun, pemandangan tropis yang menakjubkan, dan jeram kelas II hingga IV, Cisadane menjadi destinasi arung jeram terpopuler di Jawa Barat.
            </p>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Tentang Sungai Cisadane
            </h2>
            <p className="mb-4">
              Sungai Cisadane mengalir sepanjang 126 km dari hulu di Gunung Salak dan Gunung Pangrango hingga muara di Tangerang. Segmen rafting terbaik berada di kawasan Caringin, Bogor — area yang dikenal dengan jeram-jeram menantang dan alam yang masih sangat alami.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Kelas Jeram:</strong> II – IV (tergantung musim dan debit air)</li>
              <li><strong>Ketinggian air:</strong> Optimal untuk rafting sepanjang tahun</li>
              <li><strong>Suhu air:</strong> Sejuk 22-25°C — menyegarkan!</li>
              <li><strong>Lebar sungai:</strong> 15-30 meter, ideal untuk rafting perahu karet</li>
            </ul>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Dua Rute Rafting Utama di Cisadane
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="border border-neutral-200 rounded-2xl p-5">
                <div className="font-bold text-neutral-900 text-base mb-1">🌊 Rute Reguler — 7 KM</div>
                <div className="text-sky-700 font-bold text-sm mb-2">Rp185.000/orang</div>
                <ul className="text-sm text-neutral-600 space-y-1">
                  <li>✓ Cocok untuk pemula & keluarga</li>
                  <li>✓ Durasi ±2-3 jam</li>
                  <li>✓ Jeram kelas II-III</li>
                  <li>✓ Min. usia 10 tahun</li>
                </ul>
              </div>
              <div className="border border-neutral-900 rounded-2xl p-5 bg-neutral-900 text-white">
                <div className="font-bold text-white text-base mb-1">⚡ Rute Adventure — 11 KM</div>
                <div className="text-sky-400 font-bold text-sm mb-2">Rp285.000/orang</div>
                <ul className="text-sm text-neutral-300 space-y-1">
                  <li>✓ Melewati Dam 3 Meter</li>
                  <li>✓ Durasi ±3-4 jam</li>
                  <li>✓ Jeram kelas III-IV</li>
                  <li>✓ Pengalaman adrenalin maksimal</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Highlight Wisata Rafting Cisadane
            </h2>
            <p className="mb-4">Yang membuat rafting di Cisadane begitu spesial:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Dam 3 Meter</strong> — sensasi menuruni dam setinggi 3 meter yang memacu adrenalin</li>
              <li><strong>Jeram Beragam</strong> — dari jeram lembut untuk santai hingga jeram kencang yang mendebarkan</li>
              <li><strong>Pemandangan Hutan Tropis</strong> — pohon-pohon rimbun di kanan-kiri sungai menciptakan suasana alami</li>
              <li><strong>Kolam Alam</strong> — spot foto dengan bebatuan sungai yang indah</li>
              <li><strong>Curug Terdekat</strong> — bisa dikombinasikan dengan trekking ke air terjun terdekat</li>
            </ul>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Fasilitas All-Inclusive SA Adventure
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {["Pemandu Bersertifikat FAJI", "Helm & Life Jacket SNI", "Perahu Karet Premium", "Rescue Team Siaga", "Shuttle Balik Basecamp", "Kamar Bilas & Toilet", "Loker Barang Berharga", "Asuransi Jiwa Peserta", "Dokumentasi Foto"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-neutral-700 bg-neutral-50 rounded-xl px-3 py-2">
                  <span className="text-emerald-500 shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Cara ke Lokasi Rafting Cisadane
            </h2>
            <p className="mb-4">
              <strong>Alamat Basecamp:</strong> Jl. Raya Bogor-Sukabumi No.1, Caringin, Bogor (Papalidan Outdoor Resto)
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Dari Jakarta:</strong> Tol Jagorawi → Keluar Bogor → Arah Sukabumi → Caringin (±1,5-2 jam)</li>
              <li><strong>Dari Depok:</strong> Jalan Raya Bogor → Cibinong → Caringin (±45-60 menit)</li>
              <li><strong>Dari Bogor Kota:</strong> Arah Sukabumi → Caringin (±30-40 menit)</li>
            </ul>
            <p className="text-sm text-neutral-500 mb-6">Koordinat GPS: -6.703012, 106.826306 — bisa langsung di-navigate via Google Maps.</p>

            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 my-8">
              <p className="font-bold text-indigo-900 text-lg mb-2">🎯 Book Rafting Cisadane Sekarang!</p>
              <p className="text-indigo-800 text-sm mb-4">
                Jangan tunda lagi! Slot weekend dan hari libur sering penuh. Booking sekarang untuk memastikan tanggal pilihanmu tersedia.
              </p>
              <a
                href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20booking%20rafting%20Cisadane.%20Mohon%20info%20jadwal%20dan%20harga%20terbaiknya."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-900 text-white text-sm font-bold px-6 py-3 rounded-xl no-underline hover:bg-neutral-700 transition-colors"
              >
                Booking via WhatsApp →
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
