import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import OrangeBanner from "@/components/OrangeBanner";
import AboutSection from "@/components/AboutSection";
import VisionCards from "@/components/VisionCards";
import CollectionGrid from "@/components/CollectionGrid";
import AtelierProducts from "@/components/AtelierProducts";
import WorkingProcess from "@/components/WorkingProcess";
import MaterialsSection from "@/components/MaterialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background">
      <Navbar />
      <HeroCarousel />
      <OrangeBanner />
      <AboutSection />
      <VisionCards />
      <CollectionGrid />
      <AtelierProducts />
      <WorkingProcess />
      <MaterialsSection />
      <BlogSection />
      <ContactSection />
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-center mb-8 reveal">
            Find <span className="text-primary">Us</span>
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto reveal">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.5!2d73.87!3d18.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBhawani+Peth%2C+Pune!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%" height="400" style={{ border: 0 }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Atelier Location"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
