'use client';

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
            Harmoni Keberanian<br />&amp; Alam Cisadane
          </h2>
          <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed font-light font-sans text-sm md:text-base">
            Kami percaya petualangan arung jeram bukan sekadar basah-basahan dan mendayung perahu karet. Di SA Adventure, setiap aliran sungai Cisadane adalah ruang di mana ego luntur, rasa saling percaya terjalin, dan tawa lepas tercipta di tengah gemuruh arus jeram alami.
          </p>
          <p className="text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light font-sans text-sm md:text-base">
            Melalui semangat <em>&ldquo;Create Moments. Build Memories. Have Fun!&rdquo;</em>, para pemandu bersertifikasi resmi FAJI kami memastikan tidak hanya sensasi adrenalin yang mendebarkan, tetapi juga pengalaman yang aman, tertib, dan mempererat kebersamaan seluruh tim Anda.
          </p>
          <a
            href="#paket"
            className="block sm:inline-block text-center border border-brand-dark px-8 py-3.5 uppercase tracking-widest text-xs font-bold hover:bg-brand-dark hover:text-white transition-colors duration-300 font-sans text-brand-dark no-underline shadow-xs"
          >
            Lihat Pilihan Paket
          </a>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="w-full md:w-1/2 relative mt-2 sm:mt-0">
          <div className="aspect-[16/11] sm:aspect-[4/5] bg-gray-100 rounded-xl sm:rounded-none overflow-hidden relative shadow-sm sm:shadow-none">
            <img
              src="/images/philosophy-rafting.png"
              alt="Aksi Arung Jeram Cisadane SA Adventure"
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
