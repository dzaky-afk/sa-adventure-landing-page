'use client';

import { useState } from 'react';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Apakah arung jeram aman bagi pemula atau orang yang tidak bisa berenang?',
      a: 'Sangat aman. Seluruh peserta diwajibkan mengenakan rompi pelampung (life jacket) berdaya apung tinggi berstandar resmi dan helm pengaman. Setiap perahu dikemudikan oleh pemandu sungai (river guide) profesional, didampingi tim rescue darat dan air yang siap siaga. Sebelum pengarungan, peserta diberikan safety briefing menyeluruh.',
    },
    {
      q: 'Berapa batas usia minimal dan maksimal untuk peserta rafting?',
      a: 'Untuk rute Family (7 KM), usia minimal adalah 5 tahun dan maksimal 65 tahun dalam kondisi fisik sehat. Untuk rute Adventure (11 KM), usia minimal yang direkomendasikan adalah 9 tahun.',
    },
    {
      q: 'Apa saja perlengkapan pribadi yang perlu dibawa peserta?',
      a: 'Peserta disarankan mengenakan pakaian yang nyaman saat basah (kaos berbahan sintetis/quick dry, celana training/pantai), alas kaki yang tidak mudah lepas (sandal gunung atau sepatu air), pakaian ganti kering, perlengkapan mandi pribadi, serta obat-obatan pribadi jika ada riwayat kesehatan khusus.',
    },
    {
      q: 'Bagaimana jika acara diadakan saat musim hujan di Bogor?',
      a: 'Kegiatan arung jeram tetap berjalan aman pada saat hujan ringan hingga sedang. Kami memiliki alat pengukur debit air di hulu sungai. Apabila terjadi kenaikan debit air melebihi ambang batas keamanan (banjir bandang), pengarungan akan ditunda sementara atau dialihkan sesuai protokol keselamatan demi keselamatan mutlak peserta.',
    },
    {
      q: 'Apakah SA Adventure dapat menyesuaikan rundown dan konsep acara khusus perusahaan?',
      a: 'Tentu saja. Sebagai Event Organizer profesional, kami sangat fleksibel dalam merancang kegiatan mulai dari penyediaan villa/resort, bus pariwisata, master game, dekorasi, hingga malam penghargaan (gala dinner) yang disesuaikan dengan nilai-nilai perusahaan dan anggaran yang Anda tentukan.',
    },
  ];

  const toggleFaq = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <span className="section-tagline">Informasi Praktis</span>
          <h2 className="section-title">Pertanyaan Umum (FAQ)</h2>
          <p className="section-desc">
            Hal-hal yang sering ditanyakan terkait kegiatan arung jeram dan reservasi event organizer
            di SA Adventure.
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className={`faq-item ${isOpen ? 'active' : ''}`}>
                <button
                  className="faq-question"
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="faq-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="faq-answer">{faq.a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
