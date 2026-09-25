import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import AccommodationSection from '@/components/AccommodationSection';
import GallerySection from '@/components/GallerySection';
import ReservationPortalBanner from '@/components/ReservationPortalBanner';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  return (
    <>
      {/* Minimalist Top Header with Brand Logo & 3-Line Hamburger Menu */}
      <Navbar />

      <main>
        {/* 1. Beranda (Home) with Monumental Serif Title & SVG Route Map */}
        <Hero />

        {/* 2. Filosofi (The Essence & Philosophy of SA Adventure) */}
        <Philosophy />

        {/* 3. Akomodasi (Villa Mawar Puncak & Villa Zanara with Interactive Slider) */}
        <AccommodationSection />

        {/* 5. Galeri (Adventure Gallery: Mosaic Grid & Authentic Photos with Lightbox) */}
        <GallerySection />

        {/* 6. Banner Khusus Portal Pemesanan & Reservasi Online */}
        <ReservationPortalBanner />

        {/* 7. Closing CTA Night Card */}
        <ClosingCTA />
      </main>

      {/* 7. About Us & Contact Footer */}
      <Footer />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal />
    </>
  );
}
