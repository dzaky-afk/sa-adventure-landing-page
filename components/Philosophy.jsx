export default function Philosophy() {
  return (
    <section id="filosofi" className="py-16 sm:py-24 px-5 sm:px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left Column: Narrative */}
        <div className="w-full md:w-1/2">
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-gray-400 uppercase mb-3 sm:mb-4 block font-sans">
            The Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-brand-dark mb-4 sm:mb-6 leading-tight">
            Harmoni Adrenalin<br />&amp; Keindahan Alam Bogor
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light font-sans text-sm md:text-base">
            Kami percaya petualangan luar ruang bukan sekadar olahraga fisik. Di SA Adventure, setiap deburan arus jeram alami Cisadane dan setiap langkah di jalur trekking perbukitan sejuk Bogor adalah ruang di mana kepenatan luntur, rasa saling percaya terjalin, dan energi baru bangkit kembali.
          </p>
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light font-sans text-sm md:text-base">
            Melalui semangat <em>&ldquo;Create Moments. Build Memories. Have Fun!&rdquo;</em>, para pemandu bersertifikasi resmi dan tim rescue kami memastikan setiap momen penjelajahan—baik menembus jeram Grade III maupun trekking curug tersembunyi—berjalan aman, tertib, dan berkesan mendalam bagi Anda dan tim.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#petualangan"
              className="block sm:inline-block text-center border border-brand-dark px-7 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-brand-dark hover:text-white transition-colors duration-300 font-sans text-brand-dark no-underline shadow-xs"
            >
              Lihat Paket Petualangan
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6281291068287&text=Halo%20Admin%20SA%20Adventure,%20saya%20ingin%20konsultasi%20paket%20Rafting%20&%20Trekking%20Cisadane%20Bogor."
              target="_blank"
              rel="noopener noreferrer"
              className="block sm:inline-block text-center bg-brand-dark text-white px-7 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-neutral-800 transition-colors duration-300 font-sans no-underline shadow-xs"
            >
              Konsultasi WhatsApp
            </a>
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="w-full md:w-1/2 relative mt-2 sm:mt-0">
          <div className="aspect-[16/11] sm:aspect-[4/5] bg-gray-100 rounded-xl sm:rounded-none overflow-hidden relative shadow-sm sm:shadow-none">
            <img
              src="/images/philosophy-rafting.png"
              alt="Petualangan Arung Jeram dan Trekking SA Adventure"
              loading="lazy"
              width="752"
              height="564"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
          {/* Decorative Corner Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l-2 border-b-2 border-brand-dark hidden md:block pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
