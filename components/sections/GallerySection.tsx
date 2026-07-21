"use client";

import { motion } from "framer-motion";

const images = [
  { src: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500&q=80&auto=format&fit=crop", alt: "Bananas" },
  { src: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500&q=80&auto=format&fit=crop", alt: "Red Onions" },
  { src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80&auto=format&fit=crop", alt: "Fresh Vegetables" },
  { src: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=500&q=80&auto=format&fit=crop", alt: "Mixed Tropical Fruits" },
  { src: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500&q=80&auto=format&fit=crop", alt: "Mangoes" },
  { src: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500&q=80&auto=format&fit=crop", alt: "Grapes" },
  { src: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=500&q=80&auto=format&fit=crop", alt: "Pomegranate" },
  { src: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&q=80&auto=format&fit=crop", alt: "Fresh Produce" },
  { src: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=500&q=80&auto=format&fit=crop", alt: "Fruits Platter" },
  { src: "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=500&q=80&auto=format&fit=crop", alt: "Tomatoes" },
  { src: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500&q=80&auto=format&fit=crop", alt: "Apple" },
  { src: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500&q=80&auto=format&fit=crop", alt: "Green Vegetables" },
];

export default function GallerySection() {
  return (
    <section id="gallery" style={{ padding: "52px 0", borderTop: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
      {/* YOUR uploaded gallery background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/GALLERY RJ.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.88)" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 32 }}>
          <div className="section-title">GALLERY</div>
          <div className="section-underline" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }} className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              style={{ borderRadius: 10, overflow: "hidden", border: "1px solid #e2e8f0", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", cursor: "pointer" }}
            >
              <img src={img.src} alt={img.alt} loading="lazy" style={{ width: "100%", height: 180, objectFit: "cover", display: "block", transition: "transform 0.4s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.07)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 600px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
