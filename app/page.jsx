import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import GallerySection from '@/components/GallerySection';
import ReviewSection from '@/components/ReviewSection';
import ClosingCTA from '@/components/ClosingCTA';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function HomePage() {
  return (
    <>
      {/* Header & Navigasi */}
      <Navbar />

      <main>
        {/* 1. Beranda */}
        <Hero />

        {/* 2. Filosofi */}
        <Philosophy />

        {/* 3. Galeri */}
        <GallerySection />

        {/* 4. Ulasan */}
        <ReviewSection />

        {/* 5. Kontak Kami */}
        <ClosingCTA />
      </main>

      {/* Footer & Basecamp Contact Info */}
      <Footer />

      {/* Interactive Booking & WhatsApp Inquiry Modal */}
      <BookingModal />
    </>
  );
}
