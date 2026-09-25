export default function Hero() {
  const waypoints = [
    { num: '01', title: 'Start Caringin', sub: 'Basecamp SA &bull; 0 KM' },
    { num: '02', title: 'Aneka Jeram', sub: 'Grade III Rapids' },
    { num: '03', title: 'Rest Area Kelapa', sub: 'Kelapa Muda &bull; 6 KM' },
    { num: '04', title: 'Dam 3 Meter', sub: 'Adrenaline Drop' },
    { num: '05', title: 'Finish Basecamp', sub: 'Bilas & Santap &bull; 11 KM' },
  ];

  // River path: Smooth Bezier curve flowing through (100,135) -> (310,75) -> (510,155) -> (730,70) -> (920,130)
  const riverPath = 'M 100,135 C 170,135 230,75 310,75 C 390,75 430,155 510,155 C 590,155 650,70 730,70 C 810,70 860,130 920,130';

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-68px)] sm:min-h-[calc(100vh-74px)] flex flex-col justify-between items-center bg-white border-b border-neutral-200/80 px-4 sm:px-6 pt-8 sm:pt-12 md:pt-14 pb-5 sm:pb-7 overflow-hidden select-none"
    >
      {/* Editorial Title & Route Section - Centered Vertically */}
      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center items-center my-auto">
        {/* Large Monumental Title */}
        <div className="text-center px-4">

          {/* Large Elegant Serif Title as Scalable SVG */}
          <h1 className="w-full flex justify-center items-center my-0">
            <span className="sr-only">SA ADVENTURE - Event Organizer, Outbound &amp; Rafting Cisadane Bogor</span>
            <svg
              viewBox="0 0 920 95"
              className="w-full max-w-2xl sm:max-w-3xl md:max-w-4xl h-auto select-none overflow-visible max-h-[46px] sm:max-h-[70px] md:max-h-[85px] lg:max-h-[105px]"
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
                  fill: "#1a1a1a",
                  textTransform: "uppercase",
                }}
              >
                SA ADVENTURE
              </text>
            </svg>
          </h1>

          {/* Quick Service Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-3.5 sm:mt-5 max-w-2xl mx-auto font-sans">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide">
              <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
                <path d="M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
              </svg>
              <span>Rafting Cisadane</span>
            </span>
            <a
              href="#akomodasi"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 tracking-wide transition-colors no-underline"
            >
              <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Akomodasi Villa Puncak</span>
            </a>
            <a
              href="#ulasan"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-800 tracking-wide transition-colors no-underline"
            >
              <svg className="w-3.5 h-3.5 text-amber-500 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>Rating 4.9 &bull; 1.300+ Ulasan Google</span>
            </a>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide">
              <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Pemandu Lisensi Resmi</span>
            </span>
          </div>
        </div>

        {/* 1. DESKTOP Editorial Cartographic River Route Map (hidden on mobile, visible md+) */}
        <div className="hidden md:block w-full max-w-5xl mx-auto mt-10 md:mt-14 px-4 h-48 md:h-56 relative select-none">
          <svg
            className="w-full h-full overflow-visible"
            viewBox="0 0 1000 230"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <filter id="badge-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Layer 1: Translucent River Ribbon (Channel Bed) */}
            <path
              d={riverPath}
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="12"
              strokeLinecap="round"
            />

            {/* Layer 2: Subtle River Contour Line */}
            <path
              d={riverPath}
              fill="none"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeLinecap="round"
            />

            {/* Layer 3: Animated Dashed Expeditions Stream */}
            <path
              className="route-path"
              d={riverPath}
              fill="none"
              stroke="#111111"
              strokeWidth="2"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />

            {/* ================= WAYPOINT 1: START CARINGIN (100, 135) ================= */}
            <circle cx="100" cy="135" r="11" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="100" cy="135" r="5" fill="#111" />
            <circle cx="100" cy="135" r="1.5" fill="white" />
            <g transform="translate(100, 185)" className="group cursor-default">
              <line x1="0" y1="-39" x2="0" y2="-18" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="-65" y="-18" width="130" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#badge-shadow)" />
              <text x="0" y="-3" textAnchor="middle" className="font-sans font-extrabold text-[10px] tracking-wider fill-neutral-900 uppercase">
                START CARINGIN
              </text>
              <text x="0" y="9" textAnchor="middle" className="font-sans font-semibold text-[8px] tracking-widest fill-gray-500 uppercase">
                Basecamp &bull; 0 KM
              </text>
            </g>

            {/* ================= WAYPOINT 2: ANEKA JERAM (310, 75) ================= */}
            <circle cx="310" cy="75" r="10" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="310" cy="75" r="4.5" fill="#111" />
            <circle cx="310" cy="75" r="1.5" fill="white" />
            <g transform="translate(310, 26)" className="group cursor-default">
              <line x1="0" y1="18" x2="0" y2="39" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="-65" y="-18" width="130" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#badge-shadow)" />
              <text x="0" y="-3" textAnchor="middle" className="font-sans font-extrabold text-[10px] tracking-wider fill-neutral-900 uppercase">
                ANEKA JERAM
              </text>
              <text x="0" y="9" textAnchor="middle" className="font-sans font-semibold text-[8px] tracking-widest fill-gray-500 uppercase">
                Grade III Rapids
              </text>
            </g>

            {/* ================= WAYPOINT 3: REST AREA KELAPA (510, 155) ================= */}
            <circle cx="510" cy="155" r="10" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="510" cy="155" r="4.5" fill="#111" />
            <circle cx="510" cy="155" r="1.5" fill="white" />
            <g transform="translate(510, 206)" className="group cursor-default">
              <line x1="0" y1="-41" x2="0" y2="-18" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="-70" y="-18" width="140" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#badge-shadow)" />
              <text x="0" y="-3" textAnchor="middle" className="font-sans font-extrabold text-[10px] tracking-wider fill-neutral-900 uppercase">
                REST AREA KELAPA
              </text>
              <text x="0" y="9" textAnchor="middle" className="font-sans font-semibold text-[8px] tracking-widest fill-gray-500 uppercase">
                Kelapa Muda &bull; 6 KM
              </text>
            </g>

            {/* ================= WAYPOINT 4: DAM 3 METER (730, 70) ================= */}
            <circle cx="730" cy="70" r="10" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="730" cy="70" r="4.5" fill="#111" />
            <circle cx="730" cy="70" r="1.5" fill="white" />
            <g transform="translate(730, 21)" className="group cursor-default">
              <line x1="0" y1="18" x2="0" y2="39" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="-60" y="-18" width="120" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#badge-shadow)" />
              <text x="0" y="-3" textAnchor="middle" className="font-sans font-extrabold text-[10px] tracking-wider fill-neutral-900 uppercase">
                DAM 3 METER
              </text>
              <text x="0" y="9" textAnchor="middle" className="font-sans font-semibold text-[8px] tracking-widest fill-gray-500 uppercase">
                Adrenaline Drop
              </text>
            </g>

            {/* ================= WAYPOINT 5: FINISH BASECAMP (920, 130) ================= */}
            <circle cx="920" cy="130" r="11" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="920" cy="130" r="5" fill="#111" />
            <circle cx="920" cy="130" r="1.5" fill="white" />
            <g transform="translate(920, 180)" className="group cursor-default">
              <line x1="0" y1="-39" x2="0" y2="-18" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="-65" y="-18" width="130" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#badge-shadow)" />
              <text x="0" y="-3" textAnchor="middle" className="font-sans font-extrabold text-[10px] tracking-wider fill-neutral-900 uppercase">
                FINISH BASECAMP
              </text>
              <text x="0" y="9" textAnchor="middle" className="font-sans font-semibold text-[8px] tracking-widest fill-gray-500 uppercase">
                Bilas &bull; 11 KM Total
              </text>
            </g>
          </svg>
        </div>

        {/* 2. MOBILE Responsive Waypoint Stepper (Phones only: md:hidden) */}
        <div className="md:hidden mt-6 px-3 sm:px-4">
          <div className="bg-gray-50/90 border border-gray-200 rounded-xl p-3.5 shadow-2xs font-sans">
            <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3 px-1">
              <span>Aliran Rute Rafting</span>
              <span className="text-brand-dark font-extrabold">&plusmn; 11 KM / 2 Jam</span>
            </div>

            {/* Stepper with Connecting Line */}
            <div className="flex justify-between items-start relative px-1">
              <div className="absolute top-3 left-4 right-4 h-0.5 bg-gray-200 z-0" />
              {waypoints.map((wp, idx) => (
                <div key={wp.num} className="flex flex-col items-center relative z-10 w-1/5">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold mb-1.5 shadow-2xs ${
                      idx === 0 || idx === 4
                        ? 'bg-brand-dark text-white ring-2 ring-gray-200'
                        : 'bg-white border border-gray-300 text-gray-800'
                    }`}
                  >
                    {idx + 1}
                  </div>
                  <span className="text-[8.5px] font-bold text-gray-900 leading-tight block text-center truncate max-w-full">
                    {wp.title.replace('Start ', '').replace('Finish ', '')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt at the Bottom of Viewport */}
      <div className="w-full flex justify-center items-center pt-2 pb-1 shrink-0 z-10">
        <a
          href="#filosofi"
          className="group inline-flex flex-col items-center gap-1 text-neutral-400 hover:text-neutral-900 transition-colors no-underline font-sans cursor-pointer py-1"
          aria-label="Scroll ke bagian Filosofi"
        >
          <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-neutral-400 group-hover:text-neutral-700 transition-colors">
            Jelajahi Pengalaman
          </span>
          <svg
            className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors animate-bounce"
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
