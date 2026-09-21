import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata = {
  metadataBase: new URL('https://sa-adventure.com'),
  title: 'SA Adventure | Jasa Rafting Cisadane Bogor & Event Organizer Profesional',
  description:
    'SA Adventure menyelenggarakan kegiatan Rafting Cisadane Bogor, Company Gathering, Outing Kantor, dan Team Building profesional dengan konsep kreatif, standar keselamatan tinggi, dan pelayanan prima.',
  keywords: [
    'rafting bogor',
    'arung jeram cisadane',
    'event organizer bogor',
    'outbound bogor',
    'team building bogor',
    'sa adventure',
    'rafting caringin bogor',
  ],
  icons: {
    icon: '/images/logo_sa_adventure.png',
  },
  openGraph: {
    title: 'SA Adventure | Jasa Rafting Cisadane Bogor & Event Organizer Profesional',
    description:
      'Create Moments. Build Memories. Have Fun! Spesialis Rafting Cisadane Bogor, Outbound & Company Gathering.',
    type: 'website',
    images: [
      {
        url: '/images/hero_rafting.jpg',
        width: 1200,
        height: 630,
        alt: 'SA Adventure Rafting Cisadane Bogor',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={plusJakarta.variable}>
      <head>
        <link rel="icon" type="image/png" href="/images/logo_sa_adventure.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
