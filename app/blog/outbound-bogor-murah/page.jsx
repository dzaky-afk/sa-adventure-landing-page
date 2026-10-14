import Link from "next/link";

export const metadata = {
  title: "Outbound Bogor Murah untuk Gathering Kantor & Team Building 2025",
  description: "Cari paket outbound Bogor murah untuk gathering perusahaan dan team building? SA Adventure sediakan rafting, paintball, offroad & berbagai aktivitas outbound dengan harga terjangkau.",
  keywords: ["outbound bogor murah", "gathering kantor bogor", "team building bogor", "outbound cisadane", "outbound perusahaan bogor", "paket outbound murah"],
  alternates: { canonical: "https://saadventureprofile.com/blog/outbound-bogor-murah" },
  openGraph: {
    title: "Outbound Bogor Murah untuk Gathering Kantor & Team Building",
    description: "Paket outbound Bogor murah terlengkap untuk gathering kantor, team building, dan outing perusahaan. Hubungi SA Adventure!",
    url: "https://saadventureprofile.com/blog/outbound-bogor-murah",
    type: "article",
    publishedTime: "2025-09-01",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Outbound Bogor Murah untuk Gathering Kantor & Team Building 2025",
  description: "Panduan lengkap paket outbound Bogor murah untuk gathering perusahaan dan team building.",
  image: "https://saadventureprofile.com/images/teambuilding.jpg",
  datePublished: "2025-09-01",
  dateModified: "2025-09-15",
  author: { "@type": "Organization", name: "SA Adventure", url: "https://saadventureprofile.com" },
  publisher: { "@type": "Organization", name: "SA Adventure", logo: { "@type": "ImageObject", url: "https://saadventureprofile.com/images/logo_sa_adventure.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://saadventureprofile.com/blog/outbound-bogor-murah" },
};

const paketOutbound = [
  { nama: "Paket Rafting Massal", harga: "Mulai Rp185.000/orang", cocok: "Semua ukuran grup", deskripsi: "Arung jeram bersama rombongan di Sungai Cisadane — aktivitas terbaik untuk membangun kebersamaan tim." },
  { nama: "Paket Paintball Adventure", harga: "Mulai Rp250.000/orang", cocok: "Min. 20 orang", deskripsi: "Paintball seru dengan 30 peluru + rute permainan 7 KM. Bangun strategi dan komunikasi tim lewat pertempuran paintball yang mengasyikkan." },
  { nama: "Paket Offroad Jeep", harga: "Mulai Rp300.000/orang", cocok: "Grup 10-50 orang", deskripsi: "Offroad dengan Jeep melewati medan berlumpur dan sungai. Pengalaman adrenalin yang tak terlupakan untuk seluruh tim." },
  { nama: "Paket Combo Full Day", harga: "Mulai Rp485.000/orang", cocok: "Gathering 1 hari penuh", deskripsi: "Paket komplit: Rafting + Trekking Curug + Makan Siang. Seharian penuh menikmati alam Bogor bersama tim." },
  { nama: "Paket Corporate Custom", harga: "Hubungi Admin", cocok: "Perusahaan & institusi", deskripsi: "Paket gathering custom sesuai kebutuhan perusahaan: kombinasi aktivitas, catering, villa, MC, fotografer, hingga proposal resmi." },
];

export default function OutboundBogorMurahPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/blog" className="inline-block text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-neutral-700 transition-colors mb-6 no-underline">
            ← Kembali ke Blog
          </Link>

          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full mb-4">
            Outbound
          </span>

          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-tight mb-4">
            Outbound Bogor Murah untuk Gathering Kantor & Team Building 2025
          </h1>

          <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans mb-8 pb-8 border-b border-neutral-200">
            <span>1 September 2025</span>
            <span>·</span>
            <span>SA Adventure</span>
            <span>·</span>
            <span>6 menit baca</span>
          </div>

          <article className="font-sans text-neutral-700 leading-relaxed">
            <p className="text-lg text-neutral-800 font-medium leading-relaxed mb-6">
              Mencari <strong>outbound Bogor murah</strong> yang cocok untuk gathering kantor, team building, atau outing perusahaan? <strong>SA Adventure</strong> adalah pilihan tepat dengan berbagai paket aktivitas petualangan yang bisa dikustomisasi sesuai kebutuhan dan budget perusahaan Anda.
            </p>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Kenapa Bogor Jadi Pilihan Favorit untuk Outbound?
            </h2>
            <p className="mb-4">
              Bogor memiliki keunggulan alam yang sulit ditandingi daerah lain di sekitar Jabodetabek:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Udara sejuk dan segar — cocok untuk aktivitas outdoor sepanjang hari</li>
              <li>Banyak pilihan venue outbound dengan harga terjangkau</li>
              <li>Akses mudah — hanya 1,5-2 jam dari Jakarta via Tol Jagorawi</li>
              <li>Sungai Cisadane — lokasi rafting dan outbound air terbaik di Jawa Barat</li>
              <li>Tersedia fasilitas villa, catering Sunda, dan akomodasi lengkap</li>
            </ul>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Pilihan Paket Outbound Bogor di SA Adventure
            </h2>

            <div className="space-y-4 mb-8">
              {paketOutbound.map((paket, i) => (
                <div key={i} className="border border-neutral-200 rounded-2xl p-5 hover:border-neutral-400 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-neutral-900 text-base">{paket.nama}</h3>
                    <span className="text-sky-700 font-bold text-sm shrink-0">{paket.harga}</span>
                  </div>
                  <p className="text-xs text-neutral-400 mb-2">Cocok untuk: {paket.cocok}</p>
                  <p className="text-neutral-600 text-sm">{paket.deskripsi}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Yang Sudah Kami Tangani
            </h2>
            <p className="mb-4">SA Adventure telah dipercaya mengelola gathering untuk:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Perusahaan multinasional dengan 200+ peserta</li>
              <li>Instansi pemerintah dan BUMN</li>
              <li>Sekolah dan universitas (outing siswa, KKN, ospek)</li>
              <li>Komunitas hobi dan organisasi kemasyarakatan</li>
            </ul>

            <h2 className="font-serif font-bold text-xl sm:text-2xl text-neutral-900 mt-10 mb-4">
              Cara Pesan Paket Outbound Bogor Murah
            </h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Hubungi Admin SA Adventure via WhatsApp: <strong>081291068287</strong></li>
              <li>Sampaikan jumlah peserta, tanggal, dan budget</li>
              <li>Admin akan mengirimkan proposal paket yang sesuai</li>
              <li>Diskusi dan finalisasi paket custom jika perlu</li>
              <li>Konfirmasi dan DP untuk blokir tanggal</li>
            </ol>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-8">
              <p className="font-bold text-amber-900 text-lg mb-2">🏆 Minta Proposal Outbound Sekarang!</p>
              <p className="text-amber-800 text-sm mb-4">
                Tim SA Adventure siap menyiapkan proposal outbound custom untuk perusahaan atau institusi Anda secara GRATIS. Hubungi kami via WhatsApp!
              </p>
              <a
                href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20ingin%20request%20proposal%20paket%20outbound%20Bogor%20untuk%20gathering%20kantor."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-900 text-white text-sm font-bold px-6 py-3 rounded-xl no-underline hover:bg-neutral-700 transition-colors"
              >
                Minta Proposal Gratis →
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
