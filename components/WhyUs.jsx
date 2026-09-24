export default function WhyUs() {
  const points = [
    {
      num: '01 / KONSEP',
      title: 'Creative & Fun Concept',
      desc: 'Kami menghadirkan konsep acara yang fresh, kreatif, dan tidak membosankan. Bagi kami, acara seru tidak harus kaku, namun tetap tertata rapi dan berbobot.',
    },
    {
      num: '02 / TIM',
      title: 'Professional Team',
      desc: 'Didukung tim yang berpengalaman, komunikatif, bersahabat, dan siap menemani Anda dari tahap perencanaan, survei lokasi, hingga eksekusi akhir acara.',
    },
    {
      num: '03 / KEAMANAN',
      title: 'Safety First Standards',
      desc: 'Peralatan arung jeram bersertifikasi resmi, standar operasional prosedur ketat, pemandu terlatih berlisensi resmi, serta perlindungan asuransi peserta.',
    },
    {
      num: '04 / ANGGARAN',
      title: 'Customizable Budget',
      desc: 'Rancangan fasilitas dan rundown acara yang fleksibel, transparan tanpa biaya tersembunyi, dan dapat disesuaikan dengan anggaran instansi atau kelompok Anda.',
    },
  ];

  return (
    <section className="why-section" id="keunggulan">
      <div className="container">
        <div className="text-center">
          <span className="section-tagline">Nilai Utama</span>
          <h2 className="section-title">Mengapa Memilih SA Adventure?</h2>
          <p className="section-desc">
            Komitmen profesional kami untuk menghadirkan kenyamanan, keselamatan tertinggi, dan
            kebahagiaan sejati di setiap momen kegiatan Anda.
          </p>
        </div>

        <div className="why-grid">
          {points.map((pt, idx) => (
            <div className="why-card" key={idx}>
              <div className="why-number">{pt.num}</div>
              <h3 className="why-title">{pt.title}</h3>
              <p className="why-desc">{pt.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
