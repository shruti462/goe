"use client";

import SplashScreen     from "@/components/SplashScreen";
import Navbar          from "@/components/Navbar";
import HeroSection     from "@/components/sections/HeroSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhyChooseUs     from "@/components/sections/WhyChooseUs";
import AboutSection    from "@/components/sections/AboutSection";
import ProcessSection  from "@/components/sections/ProcessSection";
import GallerySection  from "@/components/sections/GallerySection";
import FaqsSection     from "@/components/sections/FaqsSection";
import ContactSection  from "@/components/sections/ContactSection";
import Footer          from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#fff" }}>
      <SplashScreen />
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <WhyChooseUs />
      <AboutSection />
      <ProcessSection />
      <GallerySection />
      <FaqsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
