import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InfoSection from '@/components/InfoSection';
import Services from '@/components/Services';
import AccommodationSlider from '@/components/AccommodationSlider';
import Packages from '@/components/Packages';
import Gallery from '@/components/Gallery';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoSection />
        <Services />
        <Packages />
        <AccommodationSlider />
        <Gallery />
        <Locations />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
