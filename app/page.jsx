import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import RaftingTrekkingSection from '@/components/RaftingTrekkingSection';
import GallerySection from '@/components/GallerySection';
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

        {/* 2. Filosofi: Narrative, Certified Guides, & Safety Standards */}
        <Philosophy />

        {/* 3. Paket Petualangan Utama: Rafting Cisadane & Nature Trekking Bogor */}
        <RaftingTrekkingSection />

        {/* 4. Galeri: Curated 4-Photo Authentic Showcase (Rafting & Trekking) with Lightbox */}
        <GallerySection />

        {/* 5. Portal Reservasi & Closing CTA: Unified Online Booking & WA Inquiry */}
        <ClosingCTA />
      </main>

      {/* 6. Contact & Basecamp Info Footer */}
      <Footer />

      {/* Interactive Booking & Inquiry Modal */}
      <BookingModal />
    </>
  );
}
