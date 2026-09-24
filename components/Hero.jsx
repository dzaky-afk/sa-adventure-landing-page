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
    <section id="hero">
      {/* Editorial Title & Route Section */}
      <div className="w-full bg-white relative z-10 pt-8 sm:pt-14 md:pt-18 pb-6 md:pb-10">
        {/* Large Monumental Title */}
        <div className="text-center px-4">
          {/* Eyebrow Badge: Adventure & Event Organizer */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 mb-3.5 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-neutral-800 font-sans">
              SA ADVENTURE &bull; OUTDOOR &amp; EVENT ORGANIZER
            </span>
          </div>

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

          <p className="mt-3.5 sm:mt-5 text-gray-500 tracking-[0.18em] uppercase text-[10px] sm:text-xs md:text-sm max-w-2xl mx-auto leading-relaxed">
            White Water Rafting &bull; Company Gathering &bull; Outbound &bull; Villa &amp; Camp Caringin Bogor
          </p>

          {/* Quick Service Category Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6 max-w-2xl mx-auto font-sans">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide">
              <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 12c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
                <path d="M2 17c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2" />
              </svg>
              Rafting Cisadane
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide">
              <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Company Gathering
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide">
              <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
              </svg>
              Outbound &amp; Paintball
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-neutral-50 border border-neutral-200 text-neutral-800 tracking-wide">
              <svg className="w-3.5 h-3.5 text-neutral-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Villa &amp; Riverside Camp
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

      {/* Hero Panoramic Image with Mobile Responsive Picture & Clean Wave Edge Mask */}
      <div className="hero-image-container relative overflow-hidden flex items-center justify-center">
        <picture className="absolute inset-0 w-full h-full pointer-events-none">
          <source
            media="(max-width: 640px)"
            srcSet="/images/hero-gathering-water-splash-mobile.webp"
            type="image/webp"
          />
          <source
            media="(max-width: 640px)"
            srcSet="/images/hero-gathering-water-splash-mobile.jpg"
            type="image/jpeg"
          />
          <source
            srcSet="/images/hero-gathering-water-splash.webp"
            type="image/webp"
          />
          <img
            src="/images/hero-gathering-water-splash.jpg"
            alt="Petualangan Arung Jeram Cisadane SA Adventure Caringin Bogor"
            fetchPriority="high"
            loading="eager"
            decoding="async"
            width="1200"
            height="600"
            className="w-full h-full object-cover object-[center_40%]"
          />
        </picture>

        {/* Clean Natural River Wave Mask on Top (Replaces CPU-Heavy Turbulence Filter) */}
        <svg
          className="brush-mask-top"
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 0,0 L 1200,0 L 1200,18 C 1040,36 880,8 720,24 C 560,40 400,12 240,28 C 120,40 40,16 0,22 Z"
            fill="#ffffff"
          />
        </svg>

        {/* Ambient overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>
    </section>
  );
}
