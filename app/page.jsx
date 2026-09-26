import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import CompanyProfileRafting from '@/components/CompanyProfileRafting';
import GallerySection from '@/components/GallerySection';
import ReviewSection from '@/components/ReviewSection';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  return (
    <>
      {/* Minimalist Top Header with Brand Logo & 3-Line Hamburger Menu */}
      <Navbar />

      <main>
        {/* 1. Beranda: Monumental Serif Title, SVG Route Map, & Panorama */}
        <Hero />

        {/* 2. Filosofi: The Essence & Safety Standards of SA Adventure */}
        <Philosophy />

        {/* 3. Company Profile Rafting: Paket & Harga, Bundling Paintball/Offroad, Fasilitas, FAQ */}
        <CompanyProfileRafting />

        {/* 4. Galeri: Curated Authentic Photography with Lightbox */}
        <GallerySection />

        {/* 5. Ulasan: Verified Customer Reviews & Shareable Submission Form */}
        <ReviewSection />

        {/* 6. Contact Us & Portal Reservasi: Unified Closing CTA */}
        <ClosingCTA />
      </main>

      {/* 7. Contact Info & Basecamp Footer */}
      <Footer />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal />
    </>
  );
}
