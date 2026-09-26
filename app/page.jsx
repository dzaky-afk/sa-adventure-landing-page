import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import RaftingCisadaneProfile from '@/components/RaftingCisadaneProfile';
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

        {/* 2. Filosofi & Nilai Petualangan */}
        <Philosophy />

        {/* 3. Company Profile Rafting Cisadane Bogor (Sesuai Referensi CR-One Group): Keunggulan, Paket & Harga, Fasilitas All-Inclusive, Bundling Seru, FAQ */}
        <RaftingCisadaneProfile />

        {/* 4. Galeri Foto Autentik & Dokumentasi HD */}
        <GallerySection />

        {/* 5. Ulasan Pelanggan Terverifikasi Bintang 5 */}
        <ReviewSection />

        {/* 6. Kontak Kami & Portal Reservasi */}
        <ClosingCTA />
      </main>

      {/* Footer & Basecamp Contact Info */}
      <Footer />

      {/* Interactive Booking & WhatsApp Inquiry Modal */}
      <BookingModal />
    </>
  );
}
