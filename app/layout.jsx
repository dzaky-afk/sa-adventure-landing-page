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
    default: 'SA Adventure - Paket Rafting Cisadane & Nature Trekking Curug Bogor',
    template: '%s | SA Adventure Rafting & Trekking',
  },
  description:
    'Operator arung jeram / rafting Sungai Cisadane Caringin & wisata trekking curug Bogor bersama pemandu berpengalaman. Tersedia Paket 7 KM, Adventure 11 KM Dam 3 Meter, Curug Trekking, dan Paket Combo 1-Day Adventure.',
  keywords: [
    'rafting cisadane',
    'rafting bogor',
    'arung jeram cisadane',
    'trekking bogor',
    'curug trekking',
    'trekking sentul',
    'paket rafting cisadane',
    'paket trekking bogor',
    'combo rafting trekking',
    'harga rafting bogor',
    'rafting caringin',
    'outbound bogor',
    'gathering kantor cisadane',
    'paintball bogor',
    'offroad bogor',
    'sa adventure bogor',
  ],
  authors: [{ name: 'SA Adventure' }],
  creator: 'SA Adventure',
  publisher: 'SA Adventure',
  alternates: {
    canonical: 'https://saadventureprofile.com',
  },
  openGraph: {
    title: 'SA Adventure - Paket Rafting Cisadane & Nature Trekking Curug Bogor',
    description:
      'Sensasi arung jeram Cisadane Caringin & eksplorasi curug alami Bogor bersama tim pemandu berpengalaman. Pilihan paket 7 KM, 11 KM Dam 3M, Curug Trekking, dan Combo 1-Day Adventure.',
    url: 'https://saadventureprofile.com',
    siteName: 'SA Adventure Bogor',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/images/hero_rafting.jpg',
        width: 1200,
        height: 630,
        alt: 'Aksi Arung Jeram Rafting Cisadane SA Adventure Bogor',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SA Adventure - Paket Rafting Cisadane Bogor',
    description:
      'Arung jeram Sungai Cisadane Caringin Bogor standar keselamatan resmi & paket outbound gathering.',
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
  verification: {
    google: 'google851967cf85c0902d',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://saadventureprofile.com/#business',
      name: 'SA Adventure - Rafting Cisadane Bogor',
      description:
        'Operator arung jeram Sungai Cisadane & wisata trekking curug Bogor bersama pemandu berpengalaman, event organizer outbound gathering, dan paket petualangan seru di Caringin Bogor.',
      url: 'https://saadventureprofile.com',
      telephone: '+6281291068287',
      priceRange: 'Rp 185.000 - Rp 585.000',
      image: 'https://saadventureprofile.com/images/hero_rafting.jpg',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jl. Raya Bogor - Sukabumi No. 1, Caringin (Papalidan Outdoor Resto)',
        addressLocality: 'Caringin, Bogor',
        addressRegion: 'Jawa Barat',
        postalCode: '16730',
        addressCountry: 'ID',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -6.7030124,
        longitude: 106.8263064,
      },
    },
    {
      '@type': 'Product',
      '@id': 'https://saadventureprofile.com/#product',
      name: 'Paket Rafting Cisadane Bogor - SA Adventure',
      description:
        'Petualangan arung jeram Sungai Cisadane Bogor 11 KM dam 3 meter seru dan aman, lengkap dengan pemandu berpengalaman, perlengkapan rescue, dan asuransi.',
      image: 'https://saadventureprofile.com/images/hero_rafting.jpg',
      brand: {
        '@type': 'Brand',
        name: 'SA Adventure',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'IDR',
        lowPrice: '185000',
        highPrice: '585000',
        offerCount: '3',
        url: 'https://saadventure.web.id/',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '1500',
        reviewCount: '1500',
      },
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
