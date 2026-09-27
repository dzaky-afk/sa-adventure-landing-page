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

      {/* Main Content Area - Centered Vertically (Unified for Mobile & Desktop) */}
      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center items-center my-auto relative z-10 text-center px-3 sm:px-4">
        {/* Large Monumental Serif Title as Scalable SVG */}
        <h1 className="w-full flex justify-center items-center my-0">
          <span className="sr-only">SA ADVENTURE - Event Organizer, Outbound &amp; Rafting Cisadane Bogor</span>
          <svg
            viewBox="0 0 920 95"
            className="w-full max-w-sm sm:max-w-2xl md:max-w-4xl h-auto select-none overflow-visible max-h-[55px] sm:max-h-[75px] md:max-h-[85px] lg:max-h-[105px]"
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
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-5 max-w-3xl mx-auto font-sans">
          <a
            href="#rafting"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
          >
            <svg className="w-3.5 h-3.5 text-sky-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 2" />
              <path d="M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 2" />
            </svg>
            <span>Rafting Cisadane River</span>
          </a>

          <a
            href="#trekking"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
          >
            <svg className="w-3.5 h-3.5 text-emerald-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
            </svg>
            <span>Nature &amp; Curug Trekking</span>
          </a>

          <a
            href="#bundling"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
          >
            <svg className="w-3.5 h-3.5 text-amber-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
            </svg>
            <span>Paintball &amp; Offroad</span>
          </a>

          <a
            href="#bundling"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
          >
            <svg className="w-3.5 h-3.5 text-indigo-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide transition-all shadow-2xs hover:shadow-xs no-underline"
          >
            <svg className="w-3.5 h-3.5 text-orange-600 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Catering &amp; Villa</span>
          </a>
        </div>

        {/* Primary CTA Action Buttons */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 w-full sm:w-auto px-4 max-w-sm sm:max-w-none mx-auto">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-neutral-950 hover:bg-neutral-800 text-white font-sans text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl shadow-xs transition-all hover:scale-[1.02] active:scale-98 no-underline"
          >
            <svg className="w-4 h-4 fill-white shrink-0" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.311.045-.698.059-1.146-.084-.304-.097-.694-.23-1.206-.452-2.126-.921-3.51-3.08-3.616-3.221-.106-.142-.862-1.146-.862-2.186 0-1.039.544-1.551.737-1.764.193-.212.422-.265.563-.265.141 0 .281.002.404.007.129.006.302-.049.472.361.176.423.6 1.464.653 1.57.053.106.088.23.018.371-.07.141-.106.229-.211.353-.106.124-.222.277-.317.371-.106.106-.217.221-.093.434.123.212.549.905 1.177 1.464.81.719 1.492.942 1.704 1.048.212.106.335.088.459-.053.123-.141.528-.618.669-.83.141-.212.282-.177.476-.106.194.07 1.233.582 1.444.688.211.106.352.159.405.247.053.088.053.512-.091.917z" />
            </svg>
            <span>Konsultasi WhatsApp</span>
          </a>

          <a
            href="#petualangan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-neutral-50 text-neutral-800 border border-neutral-300 font-sans text-xs sm:text-sm font-semibold py-3 px-6 rounded-xl transition-all shadow-2xs hover:shadow-xs no-underline"
          >
            <span>Lihat Paket Petualangan</span>
            <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
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

