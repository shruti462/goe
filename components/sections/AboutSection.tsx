"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "56px 0", background: "#fff", borderTop: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
      {/* YOUR uploaded about us background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/about us RJ.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.85)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center" }} className="about-grid">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ position: "relative" }}
          >
            <div style={{ borderRadius: 12, overflow: "hidden", boxShadow: "0 12px 40px rgba(0,0,0,0.13)" }}>
              <img
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80&auto=format&fit=crop"
                alt="Indian farm"
                style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
                loading="lazy"
              />
            </div>
            {/* Stat badge */}
            <div style={{
              position: "absolute", bottom: -20, right: -20,
              background: "#0d1f3c", borderRadius: 12,
              padding: "18px 22px",
              boxShadow: "0 8px 24px rgba(13,31,60,0.25)",
            }}>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: 32, color: "#fff", lineHeight: 1 }}>50+</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>Countries Served</div>
            </div>
          </motion.div>

          {/* Right — content only, no bullet points */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div className="section-title" style={{ marginBottom: 8 }}>ABOUT US</div>
            <div className="section-underline" style={{ marginBottom: 20 }} />

            <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, marginBottom: 16 }}>
              <strong style={{ color: "#0d1f3c" }}>Gamare Overseas Exim</strong> is a Maharashtra-based premier exporter of fresh Indian
              agricultural produce. We specialize in exporting farm-fresh fruits and vegetables that meet the highest international standards, connecting Indian farms to global markets.
            </p>
            <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8 }}>
              From our extensive network of certified partner farms, we carefully source, grade, and pack produce that preserves natural freshness from harvest to destination — with complete export documentation and cold-chain logistics support.
            </p>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .about-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
