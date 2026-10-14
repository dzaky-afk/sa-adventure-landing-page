import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://saadventureprofile.com'),
  title: {
    default: 'SA Adventure - Rafting Bogor Murah Mulai 185rb | Arung Jeram Cisadane & Outbound',
    template: '%s | SA Adventure Rafting Bogor',
  },
  description:
    'Rafting Bogor murah mulai Rp185.000 bersama SA Adventure. Arung jeram Sungai Cisadane Caringin 7 KM & 11 KM dam 3 meter, trekking curug, paintball, offroad & outbound gathering. Pemandu bersertifikat, peralatan standar keselamatan resmi.',
  keywords: [
    // Keyword utama — rafting
    'rafting bogor',
    'rafting murah bogor',
    'rafting cisadane',
    'arung jeram bogor',
    'arung jeram cisadane',
    'rafting caringin bogor',
    'rafting murah',
    'rafting seru bogor',
    'paket rafting cisadane',
    'harga rafting bogor',
    'rafting cisadane murah',
    'wisata rafting bogor',
    // Keyword outbound & gathering
    'outbound bogor',
    'outbound bogor murah',
    'gathering kantor bogor',
    'team building bogor',
    'outbound cisadane',
    'paket outbound murah',
    'wisata outbound bogor',
    // Keyword trekking
    'trekking bogor',
    'curug trekking bogor',
    'wisata alam bogor',
    'trekking curug murah',
    'paket trekking bogor',
    // Keyword lainnya
    'paintball bogor',
    'offroad bogor',
    'wisata petualangan bogor',
    'sa adventure bogor',
    'wisata bogor murah',
    'liburan alam bogor',
    'camping bogor',
    // Long-tail SEO
    'rafting cisadane caringin bogor',
    'paket rafting trekking combo bogor',
    'arung jeram cisadane murah bogor',
    'outbound gathering perusahaan bogor',
  ],
  authors: [{ name: 'SA Adventure' }],
  creator: 'SA Adventure',
  publisher: 'SA Adventure',
  alternates: {
    canonical: 'https://saadventureprofile.com',
  },
  openGraph: {
    title: 'SA Adventure - Rafting Bogor Murah Mulai 185rb | Cisadane & Outbound',
    description:
      'Rafting Bogor terpercaya mulai Rp185.000. Arung jeram Sungai Cisadane 7-11 KM, trekking curug, paintball & outbound gathering di Caringin Bogor. Rating 4.9⭐ dari 1500+ pelanggan.',
    url: 'https://saadventureprofile.com',
    siteName: 'SA Adventure Bogor',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/hero_rafting.jpg',
        width: 1200,
        height: 630,
        alt: 'Rafting Cisadane Bogor Murah - SA Adventure Arung Jeram Sungai Cisadane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SA Adventure - Rafting Bogor Murah | Arung Jeram Cisadane',
    description:
      'Rafting Bogor murah mulai Rp185.000. Arung jeram Cisadane, trekking curug, paintball & outbound. Pemandu bersertifikat. Rating 4.9⭐',
    images: ['/images/hero_rafting.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo_sa_adventure.png',
    apple: '/images/logo_sa_adventure.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'google851967cf85c0902d',
  },

};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // ─── 1. LocalBusiness (Bisnis Lokal) ───────────────────────────────────────
    {
      '@type': ['LocalBusiness', 'SportsActivityLocation', 'TouristAttraction'],
      '@id': 'https://saadventureprofile.com/#business',
      name: 'SA Adventure - Rafting & Outbound Bogor',
      alternateName: ['SA Adventure Bogor', 'Rafting Cisadane Caringin', 'Arung Jeram Bogor'],
      description:
        'Penyedia paket rafting Bogor murah mulai Rp185.000 di Sungai Cisadane Caringin. Melayani arung jeram 7 KM & 11 KM, trekking curug, paintball, offroad, dan outbound gathering perusahaan. Pemandu bersertifikat FAJI, peralatan standar keselamatan internasional.',
      url: 'https://saadventureprofile.com',
      telephone: '+6281291068287',
      priceRange: 'Rp 185.000 - Rp 585.000',
      image: [
        'https://saadventureprofile.com/images/hero_rafting.jpg',
        'https://saadventureprofile.com/images/gallery1.jpg',
      ],
      logo: 'https://saadventureprofile.com/images/logo_sa_adventure.png',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Raya Bogor - Sukabumi No. 1, Caringin (Papalidan Outdoor Resto)',
        addressLocality: 'Caringin',
        addressRegion: 'Bogor, Jawa Barat',
        postalCode: '16730',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.7030124,
        longitude: 106.8263064,
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '17:00',
        },
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1500',
        reviewCount: '1500',
      },
      sameAs: [
        'https://wa.me/6281291068287',
        'https://saadventure.web.id/',
      ],
    },

    // ─── 2. Service — Paket Rafting 7 KM ───────────────────────────────────────
    {
      '@type': 'Service',
      '@id': 'https://saadventureprofile.com/#paket-reguler',
      name: 'Paket Rafting Cisadane 7 KM — Reguler',
      description: 'Paket rafting murah Bogor rute 7 KM cocok untuk pemula dan keluarga. Termasuk perlengkapan safety, pemandu bersertifikat, dan dokumentasi.',
      provider: { '@id': 'https://saadventureprofile.com/#business' },
      areaServed: { '@type': 'City', name: 'Bogor' },
      offers: {
        '@type': 'Offer',
        price: '185000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: 'https://saadventureprofile.com',
      },
    },

    // ─── 3. Service — Paket Rafting 11 KM Adventure ────────────────────────────
    {
      '@type': 'Service',
      '@id': 'https://saadventureprofile.com/#paket-adventure',
      name: 'Paket Rafting Cisadane 11 KM — Adventure Dam 3 Meter',
      description: 'Paket arung jeram Cisadane rute panjang 11 KM melewati dam setinggi 3 meter, tantangan jeram kelas III-IV. Cocok untuk pecinta petualangan dan team building.',
      provider: { '@id': 'https://saadventureprofile.com/#business' },
      areaServed: { '@type': 'City', name: 'Bogor' },
      offers: {
        '@type': 'Offer',
        price: '285000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: 'https://saadventureprofile.com',
      },
    },

    // ─── 4. Service — Paket Combo 1-Day Adventure ──────────────────────────────
    {
      '@type': 'Service',
      '@id': 'https://saadventureprofile.com/#paket-combo',
      name: 'Paket Combo 1-Day Adventure — Rafting + Trekking Curug',
      description: 'Paket wisata alam Bogor seharian: rafting Cisadane + trekking curug + makan siang. Pengalaman petualangan lengkap dengan harga terjangkau. Cocok untuk gathering kantor, sekolah, dan komunitas.',
      provider: { '@id': 'https://saadventureprofile.com/#business' },
      areaServed: { '@type': 'City', name: 'Bogor' },
      offers: {
        '@type': 'Offer',
        price: '485000',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        url: 'https://saadventureprofile.com',
      },
    },

    // ─── 5. FAQ Schema (KUNCI untuk Google SGE & AI Search) ────────────────────
    {
      '@type': 'FAQPage',
      '@id': 'https://saadventureprofile.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Berapa harga rafting di Bogor yang murah?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SA Adventure menawarkan rafting Bogor murah mulai Rp185.000/orang untuk paket Cisadane 7 KM. Paket Adventure 11 KM dam 3 meter mulai Rp285.000, dan Paket Combo Rafting + Trekking Curug mulai Rp485.000. Harga sudah termasuk pemandu bersertifikat, perlengkapan safety, dan asuransi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Dimana lokasi rafting di Bogor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SA Adventure berlokasi di Jl. Raya Bogor-Sukabumi No.1, Caringin, Bogor (Papalidan Outdoor Resto). Sungai yang digunakan adalah Sungai Cisadane. Lokasi mudah dijangkau dari Jakarta sekitar 1,5-2 jam perjalanan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah rafting di SA Adventure aman untuk pemula?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya, sangat aman! SA Adventure menggunakan pemandu bersertifikat FAJI (Federasi Arung Jeram Indonesia), perahu rescue khusus, perlengkapan safety standar internasional (helm, life jacket, paddle), dan dilengkapi asuransi jiwa. Paket 7 KM sangat cocok untuk pemula dan anak-anak usia 10 tahun ke atas.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apa saja paket outbound Bogor murah yang tersedia?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SA Adventure menyediakan berbagai paket outbound Bogor: Rafting Cisadane, Trekking Curug, Paintball (30 peluru, rute 7 KM), Offroad, dan Paket Combo. Semua bisa dikustom untuk kebutuhan gathering perusahaan, team building, outbound sekolah, dan komunitas. Hubungi WA: 081291068287.',
          },
        },
        {
          '@type': 'Question',
          name: 'Bagaimana cara booking rafting di SA Adventure Bogor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Booking bisa melalui: (1) WhatsApp ke 081291068287, (2) Tombol "Booking Sekarang" di website saadventureprofile.com, atau (3) website saadventure.web.id. Disarankan booking 2-3 hari sebelum kedatangan, terutama untuk weekend dan hari libur.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah tersedia paket rafting untuk gathering kantor?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ya! SA Adventure spesialis gathering kantor dan outbound perusahaan. Tersedia paket team building, outbound games, paintball, offroad, dan rafting massal untuk grup besar. Fasilitas lengkap termasuk villa, catering, dan dokumentasi foto/video.',
          },
        },
        {
          '@type': 'Question',
          name: 'Berapa jarak rute rafting Cisadane di SA Adventure?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'SA Adventure menyediakan dua rute: Paket Reguler 7 KM cocok untuk pemula dan keluarga, dan Paket Adventure 11 KM melewati dam setinggi 3 meter untuk yang suka tantangan lebih. Durasi rafting sekitar 2-3 jam untuk rute 7 KM dan 3-4 jam untuk rute 11 KM.',
          },
        },
      ],
    },

    // ─── 6. Review Schema ───────────────────────────────────────────────────────
    {
      '@type': 'Product',
      '@id': 'https://saadventureprofile.com/#product',
      name: 'Paket Rafting Bogor Murah — SA Adventure Cisadane',
      description: 'Paket rafting Bogor terpercaya mulai Rp185.000. Arung jeram Sungai Cisadane Caringin, outbound gathering, trekking curug.',
      image: 'https://saadventureprofile.com/images/hero_rafting.jpg',
      brand: { '@type': 'Brand', name: 'SA Adventure' },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'IDR',
        lowPrice: '185000',
        highPrice: '585000',
        offerCount: '4',
        availability: 'https://schema.org/InStock',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1500',
        reviewCount: '1500',
      },
      review: [
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Budi Santoso' },
          reviewBody: 'Rafting Cisadane bareng SA Adventure seru banget! Pemandu profesional, aman, dan harganya terjangkau. Recommended buat gathering kantor!',
          datePublished: '2025-06-15',
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Siti Rahayu' },
          reviewBody: 'Paket combo rafting + trekking curug worth banget! Puas banget dengan pelayanan SA Adventure. Pemandangan alamnya indah sekali.',
          datePublished: '2025-07-20',
        },
        {
          '@type': 'Review',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          author: { '@type': 'Person', name: 'Andi Wijaya' },
          reviewBody: 'Outbound gathering perusahaan kami di SA Adventure sangat berkesan. Fasilitas lengkap, tim solid, semua berjalan lancar. Pasti balik lagi!',
          datePublished: '2025-08-10',
        },
      ],
    },

    // ─── 7. BreadcrumbList ──────────────────────────────────────────────────────
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://saadventureprofile.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Beranda',
          item: 'https://saadventureprofile.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Paket Rafting Bogor',
          item: 'https://saadventureprofile.com/#paket',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Booking Rafting',
          item: 'https://saadventureprofile.com/#booking',
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/images/logo_sa_adventure.png" />
        {/* Google Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen selection:bg-brand-dark selection:text-white bg-white text-[#333333] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
