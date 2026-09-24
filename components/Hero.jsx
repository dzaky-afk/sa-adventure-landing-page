'use client';

export default function Hero() {
  const waypoints = [
    { num: '01', title: 'Start Caringin', sub: 'Basecamp SA &bull; 0 KM' },
    { num: '02', title: 'Jeram Mahkota', sub: 'Grade III Rapids' },
    { num: '03', title: 'Rest Area Kelapa', sub: 'Kelapa Muda &bull; 6 KM' },
    { num: '04', title: 'Dam 2 Meter', sub: 'Adrenaline Drop' },
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
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight text-brand-dark tracking-wide">
            CISADANE RIVER<br />
            <span className="mt-1 sm:mt-2 block">RAFTING</span>
          </h1>
          <p className="mt-3.5 sm:mt-5 text-gray-500 tracking-[0.2em] uppercase text-[10px] sm:text-xs md:text-sm max-w-xl mx-auto leading-relaxed">
            Experience the pristine rapids &amp; nature in Caringin Bogor
          </p>
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
            {/* Waypoint Node Circle */}
            <circle cx="100" cy="135" r="11" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="100" cy="135" r="5" fill="#111" />
            <circle cx="100" cy="135" r="1.5" fill="white" />
            {/* Elegant Cartographic Pill Badge (Positioned below curve without collision) */}
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

            {/* ================= WAYPOINT 2: JERAM MAHKOTA (310, 75) ================= */}
            {/* Waypoint Node Circle */}
            <circle cx="310" cy="75" r="10" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="310" cy="75" r="4.5" fill="#111" />
            <circle cx="310" cy="75" r="1.5" fill="white" />
            {/* Badge positioned above the crest curve */}
            <g transform="translate(310, 26)" className="group cursor-default">
              <line x1="0" y1="18" x2="0" y2="39" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="-65" y="-18" width="130" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#badge-shadow)" />
              <text x="0" y="-3" textAnchor="middle" className="font-sans font-extrabold text-[10px] tracking-wider fill-neutral-900 uppercase">
                JERAM MAHKOTA
              </text>
              <text x="0" y="9" textAnchor="middle" className="font-sans font-semibold text-[8px] tracking-widest fill-gray-500 uppercase">
                Grade III Rapids
              </text>
            </g>

            {/* ================= WAYPOINT 3: REST AREA KELAPA (510, 155) ================= */}
            {/* Waypoint Node Circle */}
            <circle cx="510" cy="155" r="10" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="510" cy="155" r="4.5" fill="#111" />
            <circle cx="510" cy="155" r="1.5" fill="white" />
            {/* Badge positioned cleanly below the trough curve (NO TEXT OVERLAP!) */}
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

            {/* ================= WAYPOINT 4: DAM 2 METER (730, 70) ================= */}
            {/* Waypoint Node Circle */}
            <circle cx="730" cy="70" r="10" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="730" cy="70" r="4.5" fill="#111" />
            <circle cx="730" cy="70" r="1.5" fill="white" />
            {/* Badge positioned above the second wave crest */}
            <g transform="translate(730, 21)" className="group cursor-default">
              <line x1="0" y1="18" x2="0" y2="39" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
              <rect x="-60" y="-18" width="120" height="34" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" filter="url(#badge-shadow)" />
              <text x="0" y="-3" textAnchor="middle" className="font-sans font-extrabold text-[10px] tracking-wider fill-neutral-900 uppercase">
                DAM 2 METER
              </text>
              <text x="0" y="9" textAnchor="middle" className="font-sans font-semibold text-[8px] tracking-widest fill-gray-500 uppercase">
                Adrenaline Drop
              </text>
            </g>

            {/* ================= WAYPOINT 5: FINISH BASECAMP (920, 130) ================= */}
            {/* Waypoint Node Circle */}
            <circle cx="920" cy="130" r="11" fill="white" stroke="#111" strokeWidth="2" />
            <circle cx="920" cy="130" r="5" fill="#111" />
            <circle cx="920" cy="130" r="1.5" fill="white" />
            {/* Badge positioned below finish */}
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

      {/* Hero Image with Brush Edge Mask */}
      <div
        className="hero-image-container flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/hero-gathering-water-splash.jpg')",
          backgroundPosition: 'center 40%',
          backgroundSize: 'cover',
        }}
      >
        {/* SVG Brush Mask overlapping from top */}
        <svg
          className="brush-mask-top"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="rough-edge-top" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.08 0.03" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="0.5" result="smoothed" />
            </filter>
          </defs>
          <path d="M 0,0 L 1200,0 L 1200,50 Q 900,60 600,45 T 0,55 Z" fill="#ffffff" filter="url(#rough-edge-top)" />
        </svg>

        {/* Ambient overlay */}
        <div className="absolute inset-0 bg-black/15 pointer-events-none" />
      </div>
    </section>
  );
}
