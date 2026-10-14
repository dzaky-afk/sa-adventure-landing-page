import Link from 'next/link';

export const metadata = {
  title: 'Blog SA Adventure - Panduan Wisata Rafting & Outbound Bogor',
  description: 'Baca artikel tips rafting, panduan outbound, dan informasi wisata alam Bogor dari SA Adventure. Temukan info harga, lokasi, dan rekomendasi terbaik.',
  alternates: { canonical: 'https://saadventureprofile.com/blog' },
};

const articles = [
  {
    slug: 'rafting-bogor-murah',
    title: 'Rafting Bogor Murah 2025: Harga Mulai 185rb di Cisadane Caringin',
    excerpt: 'Cari rafting Bogor yang murah tapi tetap aman dan profesional? SA Adventure menawarkan paket arung jeram Sungai Cisadane mulai Rp185.000/orang dengan pemandu bersertifikat FAJI.',
    date: '2025-08-01',
    category: 'Rafting',
    readTime: '5 menit',
  },
  {
    slug: 'tips-rafting-pemula-bogor',
    title: '10 Tips Rafting Aman untuk Pemula di Bogor yang Wajib Diketahui',
    excerpt: 'Pertama kali mau rafting di Bogor? Jangan khawatir! Berikut 10 tips penting yang perlu kamu persiapkan sebelum arung jeram di Sungai Cisadane agar pengalaman makin seru dan aman.',
    date: '2025-08-15',
    category: 'Tips',
    readTime: '7 menit',
  },
  {
    slug: 'outbound-bogor-murah',
    title: 'Outbound Bogor Murah untuk Gathering Kantor & Team Building 2025',
    excerpt: 'Mencari paket outbound Bogor murah yang cocok untuk gathering perusahaan dan team building? SA Adventure menyediakan berbagai aktivitas dari rafting, paintball, hingga offroad.',
    date: '2025-09-01',
    category: 'Outbound',
    readTime: '6 menit',
  },
  {
    slug: 'wisata-rafting-cisadane',
    title: 'Wisata Rafting Cisadane: Seru Memacu Adrenalin di Sungai Cisadane Bogor',
    excerpt: 'Sungai Cisadane di Caringin, Bogor adalah surga arung jeram dengan jeram kelas II-IV. Simak panduan lengkap wisata rafting Cisadane, rute, harga, dan tips terbaik dari SA Adventure.',
    date: '2025-09-15',
    category: 'Wisata',
    readTime: '8 menit',
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 sm:mb-14 text-center">
          <Link href="/" className="inline-block text-xs font-bold tracking-widest uppercase text-neutral-400 hover:text-neutral-700 transition-colors mb-4 no-underline">
            ← Kembali ke Beranda
          </Link>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-neutral-900 mt-2">
            Blog SA Adventure
          </h1>
          <p className="mt-3 text-neutral-500 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Tips, panduan, dan informasi lengkap seputar rafting, outbound, dan wisata alam Bogor.
          </p>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block border border-neutral-200 rounded-2xl p-6 hover:border-neutral-400 hover:shadow-md transition-all duration-300 no-underline"
            >
              <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full mb-3">
                {article.category}
              </span>
              <h2 className="font-serif font-bold text-lg text-neutral-900 group-hover:text-sky-700 transition-colors leading-snug mb-2">
                {article.title}
              </h2>
              <p className="text-neutral-500 text-sm font-sans leading-relaxed mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-sans">
                <span>{new Date(article.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span>·</span>
                <span>{article.readTime} baca</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
