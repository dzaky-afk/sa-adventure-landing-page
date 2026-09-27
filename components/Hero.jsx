import Image from 'next/image';

export default function Hero() {
  const waUrl = 'https://api.whatsapp.com/send?phone=6281291068287&text=' + encodeURIComponent('Halo SA Adventure, saya ingin tanya info paket Rafting Cisadane & Gathering.');

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-68px)] sm:min-h-[calc(100vh-74px)] flex flex-col justify-between items-center bg-gradient-to-b from-sky-50/50 via-white to-neutral-50/80 border-b border-neutral-200/80 px-4 sm:px-6 pt-5 sm:pt-10 md:pt-14 pb-4 sm:pb-6 overflow-hidden select-none"
    >
      {/* Decorative Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl" />
      </div>

      {/* Main Content Area - Centered Vertically */}
      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center items-center my-auto relative z-10">
        
        {/* ======================= MOBILE DISPLAY (< md) ======================= */}
        <div className="md:hidden w-full max-w-sm mx-auto flex flex-col items-center text-center">
          {/* Subtle Clean Kicker */}
          <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-neutral-400 font-sans mb-1.5 block">
            Caringin &bull; Bogor
          </span>

          {/* Monumental Serif Title */}
          <h1 className="font-serif text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight leading-none mb-2">
            SA ADVENTURE
          </h1>

          {/* Clean Editorial Subtitle */}
          <p className="text-xs text-neutral-600 font-sans max-w-xs mx-auto font-light leading-relaxed mb-4">
            Wisata arung jeram Cisadane 11 KM &amp; petualangan trekking curug alam Bogor bersama pemandu berpengalaman.
          </p>

          {/* Clean, High-End Visual Card (Professional & Uncluttered) */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-neutral-200/90 bg-neutral-100 mb-3.5">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/images/hero_rafting.jpg"
                alt="Aksi Rafting Cisadane SA Adventure"
                fill
                priority
                sizes="(max-width: 640px) 100vw, 400px"
                className="object-cover"
              />
              {/* Subtle Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

              {/* Minimalist Rating Badge */}
              <a
                href="#ulasan"
                className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 bg-neutral-950/75 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-sans font-medium border border-white/20"
              >
                <svg className="w-3 h-3 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>4.9 (1.300+ Google Reviews)</span>
              </a>

              {/* River Spec Tag */}
              <div className="absolute bottom-2.5 right-2.5 bg-white/90 backdrop-blur-md text-neutral-900 px-2 py-0.5 rounded-md text-[9.5px] font-sans font-bold shadow-xs">
                <span>11 KM &bull; Grade III</span>
              </div>
            </div>
          </div>

          {/* Focused Professional CTA Buttons */}
          <div className="w-full flex items-center gap-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs font-semibold py-3 px-4 rounded-xl shadow-xs transition-transform active:scale-98"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.084-.304-.097-.694-.23-1.206-.452-2.126-.921-3.51-3.08-3.616-3.221-.106-.142-.862-1.146-.862-2.186 0-1.039.544-1.551.737-1.764.193-.212.422-.265.563-.265.141 0 .281.002.404.007.129.006.302-.049.472.361.176.423.6 1.464.653 1.57.053.106.088.23.018.371-.07.141-.106.229-.211.353-.106.124-.222.277-.317.371-.106.106-.217.221-.093.434.123.212.549.905 1.177 1.464.81.719 1.492.942 1.704 1.048.212.106.335.088.459-.053.123-.141.528-.618.669-.83.141-.212.282-.177.476-.106.194.07 1.233.582 1.444.688.211.106.352.159.405.247.053.088.053.512-.091.917z" />
              </svg>
              <span>Konsultasi WhatsApp</span>
            </a>

            <a
              href="#petualangan"
              className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-sans text-xs font-semibold py-3 px-4 rounded-xl transition-all shadow-2xs"
            >
              <span>Petualangan</span>
              <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ======================= DESKTOP DISPLAY (md+) ======================= */}
        <div className="hidden md:block w-full text-center px-4">

          {/* Large Monumental Serif Title as Scalable SVG */}
          <h1 className="w-full flex justify-center items-center my-0">
            <span className="sr-only">SA ADVENTURE - Event Organizer, Outbound &amp; Rafting Cisadane Bogor</span>
            <svg
              viewBox="0 0 920 95"
              className="w-full max-w-3xl md:max-w-4xl h-auto select-none overflow-visible max-h-[70px] md:max-h-[85px] lg:max-h-[105px]"
              aria-hidden="true"
            >
              <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                className="font-serif font-bold"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "76px",
                  letterSpacing: "0.14em",
                  fontWeight: 700,
                  fill: "#111827",
                  textTransform: "uppercase",
                }}
              >
                SA ADVENTURE
              </text>
            </svg>
          </h1>


          {/* Quick Service Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-5 max-w-3xl mx-auto font-sans">
            <a
              href="#rafting"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
            >
              <svg className="w-3.5 h-3.5 text-sky-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 2" />
                <path d="M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 2" />
              </svg>
              <span>Rafting Cisadane River</span>
            </a>

            <a
              href="#trekking"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
            >
              <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
              </svg>
              <span>Nature &amp; Curug Trekking</span>
            </a>

            <a
              href="#bundling"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
            >
              <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
              </svg>
              <span>Paintball &amp; Offroad</span>
            </a>

            <a
              href="#bundling"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
            >
              <svg className="w-3.5 h-3.5 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Outbound dan Team building</span>
            </a>

            <a
              href={`https://api.whatsapp.com/send?phone=6281291068287&text=${encodeURIComponent('Halo SA Adventure, saya ingin reservasi/tanya info Catering & Villa.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
            >
              <svg className="w-3.5 h-3.5 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Catering &amp; Villa</span>
            </a>
          </div>


          {/* Desktop Primary CTA Action Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-98 no-underline"
            >
              <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.084-.304-.097-.694-.23-1.206-.452-2.126-.921-3.51-3.08-3.616-3.221-.106-.142-.862-1.146-.862-2.186 0-1.039.544-1.551.737-1.764.193-.212.422-.265.563-.265.141 0 .281.002.404.007.129.006.302-.049.472.361.176.423.6 1.464.653 1.57.053.106.088.23.018.371-.07.141-.106.229-.211.353-.106.124-.222.277-.317.371-.106.106-.217.221-.093.434.123.212.549.905 1.177 1.464.81.719 1.492.942 1.704 1.048.212.106.335.088.459-.053.123-.141.528-.618.669-.83.141-.212.282-.177.476-.106.194.07 1.233.582 1.444.688.211.106.352.159.405.247.053.088.053.512-.091.917z" />
              </svg>
              <span>Konsultasi WhatsApp</span>
            </a>

            <a
              href="#petualangan"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-sans text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl transition-all shadow-2xs hover:shadow-xs no-underline"
            >
              <span>Lihat Paket Petualangan</span>
              <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt at the Bottom of Viewport */}
      <div className="w-full flex justify-center items-center pt-1 pb-1 shrink-0 z-10">
        <a
          href="#filosofi"
          className="group inline-flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors no-underline font-sans cursor-pointer py-0.5"
          aria-label="Scroll ke bagian Filosofi"
        >
          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-[0.22em] uppercase text-neutral-400 group-hover:text-neutral-700 transition-colors">
            Jelajahi Pengalaman
          </span>
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

