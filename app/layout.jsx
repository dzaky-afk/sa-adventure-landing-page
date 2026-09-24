import { Montserrat, Playfair_Display } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  metadataBase: new URL('https://sa-adventure.com'),
  title: 'SA Adventure - Rafting Cisadane & Nature Adventure',
  description:
    'Experience the pristine rapids of Cisadane River in Caringin Bogor with SA Adventure. Official rafting provider & event organizer.',
  icons: {
    icon: '/images/logo_sa_adventure.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${montserrat.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <link rel="icon" type="image/png" href="/images/logo_sa_adventure.png" />
        {/* Tailwind CSS CDN matching the user reference */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      'sans': ['Montserrat', 'sans-serif'],
                      'serif': ['"Playfair Display"', 'serif'],
                    },
                    colors: {
                      'brand-dark': '#1a1a1a',
                      'brand-gray': '#f8f9fa',
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen selection:bg-brand-dark selection:text-white bg-white text-[#333333] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
