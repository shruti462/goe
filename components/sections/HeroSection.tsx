"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Leaf, Truck } from "lucide-react";

const features = [
  { icon: Leaf,   title: "PREMIUM QUALITY",    sub: "Exporting the finest agricultural products"  },
  { icon: Globe,  title: "GLOBAL REACH",        sub: "Delivering freshness across the world"       },
  { icon: Shield, title: "TRUST & RELIABILITY", sub: "Committed to quality and transparency"       },
  { icon: Truck,  title: "TIMELY DELIVERY",     sub: "On-time delivery with safe logistics"        },
];

export default function HeroSection() {
  return (
    <section id="hero" style={{ paddingTop: 68 }}>

      {/* ── Hero Banner ── */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "clamp(420px, 56vw, 620px)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        backgroundColor: "#0d1f3c",   /* fallback while image loads */
      }}>

        {/* ── Full-bleed background image ── */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-ship.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }} />

        {/* ── Left-to-right dark gradient so text is readable ── */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(to right, rgba(10,18,46,0.92) 0%, rgba(10,18,46,0.78) 35%, rgba(10,18,46,0.38) 60%, rgba(10,18,46,0.08) 100%)",
        }} />

        {/* ── Top/bottom vignette ── */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, transparent 25%, transparent 72%, rgba(13,31,60,0.6) 100%)",
        }} />

        {/* ── Content ── */}
        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: 1280, margin: "0 auto",
          padding: "0 40px",
          width: "100%",
        }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            style={{ maxWidth: 520 }}
          >
            {/* Welcome italic */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(16px, 2vw, 21px)",
                color: "rgba(255,255,255,0.93)",
                marginBottom: 4,
                textShadow: "0 1px 10px rgba(0,0,0,0.5)",
              }}
            >
              Welcome to
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18 }}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(38px, 6.5vw, 70px)",
                color: "#ffffff",
                lineHeight: 1.04,
                marginBottom: 12,
                letterSpacing: "-0.5px",
                textShadow: "0 2px 18px rgba(0,0,0,0.45)",
              }}
            >
              GAMARE
              <br />
              OVERSEAS EXIM
            </motion.h1>

            {/* Green accent line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.36, duration: 0.45 }}
              style={{
                width: 68, height: 3,
                background: "#16a34a",
                borderRadius: 2,
                marginBottom: 14,
                transformOrigin: "left",
              }}
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.44 }}
              style={{
                fontSize: "clamp(11px, 1.3vw, 14px)",
                fontWeight: 700,
                color: "rgba(255,255,255,0.85)",
                letterSpacing: "0.12em",
                marginBottom: 30,
                textTransform: "uppercase",
                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
              }}
            >
              FROM INDIAN FARMS TO GLOBAL MARKETS
            </motion.p>

            {/* CTA */}
            <motion.button
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.54 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "rgba(13,31,60,0.68)",
                border: "2px solid rgba(255,255,255,0.65)",
                color: "#fff",
                padding: "13px 28px",
                borderRadius: 6,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                backdropFilter: "blur(10px)",
                letterSpacing: "0.06em",
                transition: "background 0.2s, border-color 0.2s",
              }}
              onMouseEnter={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "rgba(30,58,110,0.88)";
                b.style.borderColor = "#fff";
              }}
              onMouseLeave={(e) => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = "rgba(13,31,60,0.68)";
                b.style.borderColor = "rgba(255,255,255,0.65)";
              }}
            >
              CONTACT US
              <div style={{
                width: 30, height: 30,
                borderRadius: "50%",
                background: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <ArrowRight style={{ width: 15, height: 15, color: "#1e3a6e" }} />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* ── Features bar ── */}
      <div style={{ background: "#0d1f3c" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
            className="feat-grid"
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 + i * 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "20px 22px",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
                }}
              >
                <div style={{
                  width: 42, height: 42,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(255,255,255,0.35)",
                  background: "rgba(255,255,255,0.06)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <f.icon style={{ width: 19, height: 19, color: "#fff" }} />
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700, fontSize: 12,
                    color: "#fff", letterSpacing: "0.05em",
                  }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 2, lineHeight: 1.45 }}>
                    {f.sub}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .feat-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .feat-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
