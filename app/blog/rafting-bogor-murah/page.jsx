import Link from "next/link";

export const metadata = {
  title: "Rafting Bogor Murah 2025: Harga Mulai 185rb di Cisadane Caringin",
  description: "Cari rafting Bogor murah tapi profesional? SA Adventure tawarkan arung jeram Sungai Cisadane mulai Rp185.000/orang. Pemandu bersertifikat FAJI, lengkap asuransi. Booking via WA!",
  keywords: ["rafting bogor murah", "rafting cisadane murah", "harga rafting bogor", "arung jeram bogor murah", "rafting murah"],
  alternates: { canonical: "https://saadventureprofile.com/blog/rafting-bogor-murah" },
  openGraph: {
    title: "Rafting Bogor Murah 2025: Mulai 185rb di Cisadane",
    description: "Paket rafting Bogor murah terpercaya di Sungai Cisadane Caringin. Mulai Rp185.000 termasuk guide bersertifikat & asuransi.",
    url: "https://saadventureprofile.com/blog/rafting-bogor-murah",
    type: "article",
    publishedTime: "2025-08-01",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rafting Bogor Murah 2025: Harga Mulai 185rb di Cisadane Caringin",
  description: "Panduan lengkap rafting Bogor murah bersama SA Adventure di Sungai Cisadane Caringin.",
  image: "https://saadventureprofile.com/images/hero_rafting.jpg",
  datePublished: "2025-08-01",
  dateModified: "2025-09-01",
  author: { "@type": "Organization", name: "SA Adventure", url: "https://saadventureprofile.com" },
  publisher: { "@type": "Organization", name: "SA Adventure", logo: { "@type": "ImageObject", url: "https://saadventureprofile.com/images/logo_sa_adventure.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://saadventureprofile.com/blog/rafting-bogor-murah" },
};

export default function RaftingBogorMurahPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/blog" className="inline-block text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-neutral-700 transition-colors mb-6 no-underline">
            ← Kembali ke Blog
          </Link>

          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full mb-4">
            Rafting
          </span>

          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-tight mb-4">
            Rafting Bogor Murah 2025: Harga Mulai 185rb di Cisadane Caringin
          </h1>

          <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans mb-8 pb-8 border-b border-neutral-200">
            <span>1 Agustus 2025</span>
            <span>·</span>
            <span>SA Adventure</span>
            <span>·</span>
            <span>5 menit baca</span>
          </div>

          <article className="prose prose-neutral max-w-none font-sans text-neutral-700 leading-relaxed">
            <p className="text-lg text-neutral-800 font-medium leading-relaxed mb-6">
              Rafting Bogor murah bukan berarti kualitasnya murahan. Bersama <strong>SA Adventure</strong>, kamu bisa menikmati arung jeram Sungai Cisadane yang seru dan aman mulai hanya <strong>Rp185.000 per orang</strong> — sudah termasuk pemandu bersertifikat, perlengkapan safety, dan asuransi.
            </p>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Kenapa Rafting Bogor Sangat Populer?
            </h2>
            <p className="mb-4">
              Bogor dikenal sebagai kota hujan dengan kekayaan alam yang luar biasa. Sungai Cisadane di Caringin menjadi salah satu spot rafting terbaik di Jawa Barat dengan jeram kelas II hingga IV — cocok untuk pemula maupun yang sudah berpengalaman.
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Lokasi mudah dijangkau — hanya 1,5-2 jam dari Jakarta</li>
              <li>Arus sungai yang konsisten dan menantang sepanjang tahun</li>
              <li>Pemandangan alam tropis yang indah di kanan-kiri sungai</li>
              <li>Tersedia berbagai pilihan rute — 7 KM (pemula) hingga 11 KM (adventure)</li>
            </ul>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Paket Rafting Bogor Murah di SA Adventure
            </h2>
            <p className="mb-4">Berikut daftar harga paket rafting Bogor murah yang bisa kamu pilih:</p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-neutral-900 text-white">
                    <th className="text-left px-4 py-3">Paket</th>
                    <th className="text-left px-4 py-3">Rute</th>
                    <th className="text-left px-4 py-3">Harga/Orang</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-200">
                    <td className="px-4 py-3 font-medium">Rafting Reguler</td>
                    <td className="px-4 py-3">7 KM Cisadane</td>
                    <td className="px-4 py-3 font-bold text-sky-700">Rp185.000</td>
                  </tr>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Rafting Adventure</td>
                    <td className="px-4 py-3">11 KM + Dam 3m</td>
                    <td className="px-4 py-3 font-bold text-sky-700">Rp285.000</td>
                  </tr>
                  <tr className="border-b border-neutral-200">
                    <td className="px-4 py-3 font-medium">Combo Rafting + Trekking</td>
                    <td className="px-4 py-3">Rafting + Curug</td>
                    <td className="px-4 py-3 font-bold text-sky-700">Rp485.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-neutral-500 mb-6">*Semua paket sudah termasuk: pemandu bersertifikat, helm, life jacket, asuransi, shuttle balik basecamp, dan kamar bilas.</p>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Apa yang Bikin SA Adventure Berbeda?
            </h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Pemandu bersertifikat FAJI</strong> (Federasi Arung Jeram Indonesia)</li>
              <li><strong>Rating 4.9/5</strong> dari 1.500+ ulasan Google Maps terverifikasi</li>
              <li><strong>Peralatan standar SNI</strong> — helm, pelampung, perahu karet tebal</li>
              <li><strong>Rescue team</strong> siaga di setiap titik jeram kritis</li>
              <li><strong>Harga transparan</strong> — tidak ada biaya tersembunyi</li>
              <li><strong>Bisa kustom</strong> untuk rombongan, gathering kantor, sekolah</li>
            </ul>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Lokasi Rafting Cisadane Caringin Bogor
            </h2>
            <p className="mb-4">
              Basecamp SA Adventure berada di <strong>Jl. Raya Bogor-Sukabumi No.1, Caringin, Bogor</strong> (Papalidan Outdoor Resto). Akses mudah dari:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Jakarta Selatan: ±1,5 jam via Tol Jagorawi</li>
              <li>Depok/Bogor Kota: ±45 menit - 1 jam</li>
              <li>Bandung: ±2 jam via Sukabumi</li>
            </ul>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Cara Booking Rafting Bogor Murah
            </h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Hubungi Admin via WhatsApp: <strong>081291068287</strong></li>
              <li>Tentukan tanggal kunjungan dan jumlah peserta</li>
              <li>Pilih paket yang sesuai kebutuhan</li>
              <li>Konfirmasi dan lakukan DP (minimal H-1)</li>
              <li>Datang ke basecamp tepat waktu dan siap berpetualang!</li>
            </ol>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 my-8">
              <p className="font-bold text-sky-900 text-lg mb-2">🌊 Siap Rafting di Cisadane?</p>
              <p className="text-sky-800 text-sm mb-4">
                Hubungi SA Adventure sekarang via WhatsApp dan dapatkan penawaran terbaik untuk rombongan Anda. Booking sebelum weekend agar slot tidak habis!
              </p>
              <a
                href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20baca%20artikel%20blog%20dan%20ingin%20booking%20rafting%20Bogor%20murah."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-900 text-white text-sm font-bold px-6 py-3 rounded-xl no-underline hover:bg-neutral-700 transition-colors"
              >
                Chat WhatsApp Sekarang →
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
