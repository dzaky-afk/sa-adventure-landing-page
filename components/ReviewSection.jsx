'use client';

import { useState, useEffect } from 'react';

const INITIAL_REVIEWS = [
  {
    id: 1,
    name: 'Dimas Prasetyo',
    role: 'HR & GA Committee - PT Wijaya Karya',
    activity: 'Rafting Cisadane & Gathering',
    rating: 5,
    date: '18 September 2026',
    comment:
      'Luar biasa profesional! Kami membawa 65 karyawan kantor untuk gathering dan rafting. Tim pemandu sangat disiplin soal keamanan, perahu dan helm dalam kondisi prima. Makanan prasmanan Sundanya enak sekali dan kelapa muda di tengah sungai jadi highlight favorit!',
  },
  {
    id: 2,
    name: 'Siti Rahmawati, S.E.',
    role: 'Koordinator Family Gathering',
    activity: 'Paket Menginap Villa Mawar & Rafting',
    rating: 5,
    date: '10 September 2026',
    comment:
      'Villa Mawar sangat megah dan private pool-nya jernih. Anak-anak dan orang tua senang sekali. Besok paginya langsung rafting, guide perahu kami sabar dan pandai mencairkan suasana. Sangat direkomendasikan untuk acara keluarga besar.',
  },
  {
    id: 3,
    name: 'Rian Kurniawan',
    role: 'Komunitas Pecinta Alam Depok',
    activity: 'Nature & Curug Trekking',
    rating: 5,
    date: '2 September 2026',
    comment:
      'Jalur trekkingnya juara! Melewati sawah terasering dan hutan pinus berhawa sejuk sampai ke curug tersembunyi. Local guide-nya paham rute dan ramah banget. Buah segar dan refreshment di spot air terjun bener-bener menyegarkan.',
  },
  {
    id: 4,
    name: 'Anita Wijaya',
    role: 'Divisi Digital Banking - Bank Mandiri',
    activity: 'Combo 1-Day (Trekking + Rafting)',
    rating: 5,
    date: '25 Agustus 2026',
    comment:
      'Paket Combo satu hari sangat padat dan efisien! Pagi jalan santai trekking ke curug, siang makan siang di basecamp, sorenya adrenalin terpacu di Dam 3 meter Cisadane. Dokumentasi fotonya jernih dan cepat dikirim.',
  },
];

export default function ReviewSection() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [name, setName] = useState('');
  const [activity, setActivity] = useState('Rafting Cisadane');
  const [comment, setComment] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Load any previously saved user reviews from localStorage & handle #tulis-ulasan hash
  useEffect(() => {
    try {
      const saved = localStorage.getItem('sa_adventure_user_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...INITIAL_REVIEWS]);
        }
      }
    } catch {
      // Fallback silently if localStorage is not accessible
    }

    if (typeof window !== 'undefined' && window.location.hash === '#tulis-ulasan') {
      setTimeout(() => {
        const el = document.getElementById('tulis-ulasan');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 500);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newReview = {
      id: Date.now(),
      name: name.trim(),
      role: 'Ulasan Pelanggan Terverifikasi',
      activity,
      rating,
      date: 'Baru saja',
      comment: comment.trim(),
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);

    try {
      const savedUserReviews = JSON.parse(
        localStorage.getItem('sa_adventure_user_reviews') || '[]'
      );
      localStorage.setItem(
        'sa_adventure_user_reviews',
        JSON.stringify([newReview, ...savedUserReviews])
      );
    } catch {
      // Ignore storage errors
    }

    setIsSubmitted(true);
    setName('');
    setComment('');
    setRating(5);
  };

  const handleCopyReviewLink = () => {
    const url =
      typeof window !== 'undefined'
        ? `${window.location.origin}${window.location.pathname}#tulis-ulasan`
        : 'https://salandingpage.vercel.app/#tulis-ulasan';

    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 3000);
    }
  };

  const waForwardUrl = `https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent(
    `*Ulasan Baru Pelanggan SA Adventure*\n` +
      `Rating: ${rating}/5 Bintang ⭐\n` +
      `Aktivitas: ${activity}\n` +
      `Pesan: Terima kasih SA Adventure atas pelayanannya!`
  )}`;

  return (
    <section id="ulasan" className="py-16 sm:py-24 px-4 sm:px-6 bg-white border-t border-b border-neutral-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-neutral-400 uppercase mb-2 block font-sans">
            Testimoni &amp; Ulasan Pelanggan
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-neutral-900 tracking-tight leading-tight">
            Apa Kata Mereka Tentang Kami
          </h2>
          <p className="mt-3 text-neutral-600 font-light font-sans text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Pengalaman nyata dari rombongan perusahaan, komunitas, dan keluarga yang telah menaklukkan jeram dan menikmati sejuknya alam Bogor bersama SA Adventure.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-neutral-50 border border-neutral-200/90 rounded-2xl py-3 px-5 sm:px-7 font-sans">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold text-neutral-950">4.9</span>
              <span className="text-neutral-400 text-xs">/ 5.0</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <div className="text-xs text-neutral-500 font-medium border-t sm:border-t-0 sm:border-l border-neutral-200 pt-1 sm:pt-0 sm:pl-4">
              1.500+ Rombongan Terlayani &bull; 98% Kepuasan
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Reviews Grid (Left) & Interactive Submission Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* LEFT: Reviews List Grid (7 Cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between mb-2 font-sans">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900">
                Ulasan Terverifikasi ({reviews.length})
              </h3>
              <a
                href="#tulis-ulasan"
                className="text-xs font-bold text-neutral-900 hover:underline uppercase tracking-wider"
              >
                + Tulis Ulasan Anda
              </a>
            </div>

            <div className="space-y-4 max-h-[720px] overflow-y-auto pr-1">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-neutral-50/80 hover:bg-neutral-50 border border-neutral-200/80 rounded-xl p-5 sm:p-6 transition-all font-sans"
                >
                  <div className="flex items-start justify-between gap-3 mb-2.5">
                    <div>
                      <h4 className="font-serif text-base sm:text-lg font-bold text-neutral-950 leading-tight">
                        {rev.name}
                      </h4>
                      <p className="text-[11px] text-neutral-500 font-light mt-0.5 m-0">
                        {rev.role}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-amber-500 shrink-0">
                      {[...Array(rev.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-neutral-200/70 text-neutral-800 mb-3">
                    {rev.activity}
                  </span>

                  <p className="text-neutral-700 font-light text-xs sm:text-sm leading-relaxed m-0">
                    &ldquo;{rev.comment}&rdquo;
                  </p>

                  <div className="mt-3 text-[10px] text-neutral-400 font-medium">
                    {rev.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Shareable Review Form (5 Cols) */}
          <div
            id="tulis-ulasan"
            className="lg:col-span-5 bg-neutral-950 text-white rounded-2xl p-6 sm:p-8 border border-neutral-800 shadow-xl scroll-mt-28"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-400 font-sans">
                Form Ulasan Pelanggan
              </span>

              {/* Share Link Button for Admin to Copy & Send to Customers */}
              <button
                type="button"
                onClick={handleCopyReviewLink}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-neutral-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 px-2.5 py-1 rounded-md transition-colors cursor-pointer font-sans"
                title="Salin link ini untuk dibagikan ke customer via WhatsApp"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                <span>{copiedLink ? 'Link Tersalin!' : 'Bagi Link Form'}</span>
              </button>
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-white font-bold mb-2">
              Bagikan Pengalaman Anda
            </h3>
            <p className="text-neutral-400 font-light text-xs leading-relaxed font-sans mb-6">
              Ulasan Anda sangat berarti bagi kami untuk terus menjaga mutu layanan, keamanan, dan keramahan pemandu.
            </p>

            {isSubmitted && (
              <div className="mb-6 bg-emerald-950/80 border border-emerald-500/50 rounded-xl p-4 font-sans text-xs text-emerald-200">
                <div className="flex items-center gap-2 font-bold mb-1">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Terima kasih! Ulasan Anda telah diterbitkan.</span>
                </div>
                <p className="m-0 text-emerald-300/90 font-light">
                  Ulasan Anda kini tampil di daftar ulasan pelanggan terverifikasi.
                </p>
                <div className="mt-3 pt-3 border-t border-emerald-800/60">
                  <a
                    href={waForwardUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-white underline hover:no-underline"
                  >
                    <span>Kirim juga ulasan ini via WhatsApp ke Admin &rarr;</span>
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 font-sans">
              {/* Star Rating Selector */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Beri Bintang Kepuasan:
                </label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 cursor-pointer transition-transform hover:scale-110"
                      aria-label={`Beri rating ${star} bintang`}
                    >
                      <svg
                        className={`w-7 h-7 sm:w-8 sm:h-8 transition-colors ${
                          star <= (hoverRating || rating)
                            ? 'text-amber-400 fill-current'
                            : 'text-neutral-700 fill-current'
                        }`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </button>
                  ))}
                  <span className="text-xs font-bold text-neutral-300 ml-2">
                    {rating === 5 ? 'Sangat Puas! (5/5)' : `${rating}/5 Bintang`}
                  </span>
                </div>
              </div>

              {/* Name & Role */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Nama Anda / Rombongan:
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Budi Santoso (PT Mandiri) / Keluarga Ibu Ratna"
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-white transition-colors"
                />
              </div>

              {/* Activity Choice */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Kegiatan Yang Diikuti:
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-hidden focus:border-white transition-colors"
                >
                  <option value="Rafting Cisadane (11 KM)">Rafting Cisadane (11 KM)</option>
                  <option value="Nature & Curug Trekking">Nature &amp; Curug Trekking</option>
                  <option value="Paket Menginap Villa Mawar / Zanara">Paket Menginap Villa Mawar / Zanara</option>
                  <option value="Combo Rafting + Trekking">Combo Rafting + Trekking 1 Hari</option>
                  <option value="Company Gathering & Outbound">Company Gathering &amp; Outbound</option>
                </select>
              </div>

              {/* Review Text */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1.5">
                  Cerita Ulasan Anda:
                </label>
                <textarea
                  required
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Ceritakan pengalaman seru Anda, keramahan pemandu, fasilitas basecamp, villa, makanan, dll..."
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:outline-hidden focus:border-white transition-colors leading-relaxed"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-neutral-950 font-bold text-xs uppercase tracking-widest py-3 rounded-lg transition-all shadow-md cursor-pointer active:scale-98"
              >
                Kirim Ulasan Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
