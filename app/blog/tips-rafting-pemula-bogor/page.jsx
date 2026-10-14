import Link from "next/link";

export const metadata = {
  title: "10 Tips Rafting Aman untuk Pemula di Bogor yang Wajib Diketahui",
  description: "Pertama kali rafting di Bogor? Baca 10 tips rafting aman untuk pemula di Sungai Cisadane. Panduan persiapan, barang bawaan, hingga cara menjaga keselamatan saat arung jeram.",
  keywords: ["tips rafting pemula", "rafting bogor pemula", "arung jeram pertama kali", "tips rafting aman", "persiapan rafting bogor"],
  alternates: { canonical: "https://saadventureprofile.com/blog/tips-rafting-pemula-bogor" },
  openGraph: {
    title: "10 Tips Rafting Aman untuk Pemula di Bogor",
    description: "Panduan lengkap persiapan rafting pertama kali di Sungai Cisadane Bogor. Aman, seru, dan anti panik!",
    url: "https://saadventureprofile.com/blog/tips-rafting-pemula-bogor",
    type: "article",
    publishedTime: "2025-08-15",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "10 Tips Rafting Aman untuk Pemula di Bogor yang Wajib Diketahui",
  description: "Panduan lengkap rafting aman pertama kali di Sungai Cisadane Bogor untuk pemula.",
  image: "https://saadventureprofile.com/images/hero_rafting.jpg",
  datePublished: "2025-08-15",
  dateModified: "2025-09-10",
  author: { "@type": "Organization", name: "SA Adventure", url: "https://saadventureprofile.com" },
  publisher: { "@type": "Organization", name: "SA Adventure", logo: { "@type": "ImageObject", url: "https://saadventureprofile.com/images/logo_sa_adventure.png" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://saadventureprofile.com/blog/tips-rafting-pemula-bogor" },
};

const tips = [
  { no: 1, judul: "Pastikan Kondisi Fisik Fit", isi: "Rafting membutuhkan stamina. Tidur cukup, sarapan sebelum berangkat, dan hindari konsumsi alkohol minimal 24 jam sebelumnya. Jika punya kondisi medis seperti asma atau jantung, konsultasikan dulu dengan dokter." },
  { no: 2, judul: "Kenali Batas Usia & Kemampuan Berenang", isi: "SA Adventure menerima peserta minimal usia 10 tahun. Tidak wajib bisa berenang, namun harus mampu mengikuti arahan pemandu. Paket reguler 7 KM sangat cocok untuk pemula dan anak-anak." },
  { no: 3, judul: "Gunakan Pakaian yang Tepat", isi: "Kenakan baju olahraga yang nyaman dan tidak mudah menyerap air berlebih. Hindari pakaian berbahan katun tebal. Sandal gunung atau sepatu olahraga lebih aman daripada sandal jepit." },
  { no: 4, judul: "Amankan Barang Bawaan", isi: "Simpan smartphone, dompet, dan barang elektronik di dalam dry bag atau titipkan di basecamp. SA Adventure menyediakan loker aman untuk barang berharga selama rafting berlangsung." },
  { no: 5, judul: "Dengarkan Briefing dari Pemandu", isi: "Briefing keselamatan berlangsung 15-20 menit sebelum turun ke sungai. Ini WAJIB diikuti. Pemandu akan menjelaskan cara memegang paddle, posisi duduk yang benar, dan prosedur jika perahu terbalik." },
  { no: 6, judul: "Pakai Semua Perlengkapan Safety", isi: "Helm dan life jacket WAJIB dipakai selama rafting tanpa pengecualian. SA Adventure menyediakan peralatan standar SNI yang dicek rutin. Jangan pernah melepas pelampung saat di atas perahu." },
  { no: 7, judul: "Ikuti Komando Pemandu", isi: 'Pemandu akan memberi aba-aba seperti "maju kiri", "stop", atau "jongkok". Respons cepat terhadap perintah pemandu sangat penting, terutama saat melewati jeram atau dam.' },
  { no: 8, judul: "Jaga Posisi Tubuh saat di Air", isi: "Jika terjatuh dari perahu, jangan panik. Posisikan tubuh terlentang, kaki di depan menghadap arus, tangan bebas untuk keseimbangan. Tunggu pemandu atau tim rescue menjemput Anda." },
  { no: 9, judul: "Jangan Paksakan Diri", isi: "Jika merasa lelah, pusing, atau tidak nyaman saat di sungai, segera beritahu pemandu. Tidak ada yang akan menghakimi — keselamatan peserta adalah prioritas utama SA Adventure." },
  { no: 10, judul: "Booking di Operator Terpercaya", isi: "Pilih operator rafting yang memiliki pemandu bersertifikat FAJI, peralatan lengkap, dan asuransi jiwa. SA Adventure telah melayani 1.500+ rombongan dengan rating Google 4.9/5." },
];

export default function TipsRaftingPemulaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
          <Link href="/blog" className="inline-block text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-neutral-700 transition-colors mb-6 no-underline">
            ← Kembali ke Blog
          </Link>

          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full mb-4">
            Tips
          </span>

          <h1 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-neutral-900 leading-tight mb-4">
            10 Tips Rafting Aman untuk Pemula di Bogor yang Wajib Diketahui
          </h1>

          <div className="flex items-center gap-3 text-xs text-neutral-400 font-sans mb-8 pb-8 border-b border-neutral-200">
            <span>15 Agustus 2025</span>
            <span>·</span>
            <span>SA Adventure</span>
            <span>·</span>
            <span>7 menit baca</span>
          </div>

          <article className="font-sans text-neutral-700 leading-relaxed">
            <p className="text-lg text-neutral-800 font-medium leading-relaxed mb-8">
              Rafting di Bogor adalah pengalaman yang menyenangkan dan tidak perlu ditakuti — asalkan kamu tahu cara mempersiapkan diri dengan benar. Berikut <strong>10 tips rafting aman untuk pemula</strong> yang wajib kamu baca sebelum turun ke Sungai Cisadane.
            </p>

            <div className="space-y-6">
              {tips.map((tip) => (
                <div key={tip.no} className="flex gap-4 p-5 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-colors">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-serif font-bold text-lg">
                    {tip.no}
                  </div>
                  <div>
                    <h2 className="font-bold text-neutral-900 text-base sm:text-lg mb-1">{tip.judul}</h2>
                    <p className="text-neutral-600 text-sm leading-relaxed">{tip.isi}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 mt-10">
              <p className="font-bold text-sky-900 text-lg mb-2">🌊 Siap Rafting Pertama Kali?</p>
              <p className="text-sky-800 text-sm mb-4">
                SA Adventure siap membimbing kamu dari nol! Pemandu berpengalaman kami akan memastikan rafting pertamamu jadi kenangan yang tak terlupakan. Hubungi kami sekarang!
              </p>
              <a
                href="https://wa.me/6281291068287?text=Halo%20SA%20Adventure,%20saya%20pemula%20dan%20ingin%20coba%20rafting%20di%20Bogor.%20Bisa%20minta%20info%20paketnya?"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-neutral-900 text-white text-sm font-bold px-6 py-3 rounded-xl no-underline hover:bg-neutral-700 transition-colors"
              >
                Konsultasi via WhatsApp →
              </a>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
