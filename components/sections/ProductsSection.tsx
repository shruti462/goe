"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

// All products including Drumsticks
const products = [
  { name: "DRUMSTICKS\n(MORINGA)", sub: "Export Quality", img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80&auto=format&fit=crop" },
  { name: "BANANAS",               sub: "Export Quality", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80&auto=format&fit=crop" },
  { name: "ONIONS",                sub: "Export Quality", img: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400&q=80&auto=format&fit=crop" },
  { name: "GREEN CHILLIES",        sub: "Export Quality", img: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=400&q=80&auto=format&fit=crop" },
  { name: "SEASONAL FRUITS",       sub: "Export Quality", img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&q=80&auto=format&fit=crop" },
  { name: "FRESH VEGETABLES",      sub: "Export Quality", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80&auto=format&fit=crop" },
  { name: "MANGOES",               sub: "Export Quality", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400&q=80&auto=format&fit=crop" },
  { name: "POMEGRANATES",          sub: "Export Quality", img: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?w=400&q=80&auto=format&fit=crop" },
  { name: "GRAPES",                sub: "Export Quality", img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400&q=80&auto=format&fit=crop" },
];

const VISIBLE = 6; // cards visible at once on desktop

export default function ProductsSection() {
  const [start, setStart] = useState(0);
  const maxStart = products.length - VISIBLE;
  const canPrev  = start > 0;
  const canNext  = start < maxStart;

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(maxStart, s + 1));

  const visible = products.slice(start, start + VISIBLE);

  return (
    <section id="products" style={{ padding: "48px 0 52px", background: "#fff", position: "relative", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/bg-vegetables.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        opacity: 0.18,
      }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>

        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 28 }}>
          <div>
            <div className="section-title">OUR PRODUCTS</div>
            <div className="section-underline" />
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              className="slider-btn"
              onClick={prev}
              disabled={!canPrev}
              style={{ opacity: canPrev ? 1 : 0.35, cursor: canPrev ? "pointer" : "default" }}
            >
              <ChevronLeft style={{ width: 18, height: 18, color: "#475569" }} />
            </button>
            <button
              className="slider-btn"
              onClick={next}
              disabled={!canNext}
              style={{ opacity: canNext ? 1 : 0.35, cursor: canNext ? "pointer" : "default" }}
            >
              <ChevronRight style={{ width: 18, height: 18, color: "#475569" }} />
            </button>
          </div>
        </div>

        {/* Slider window — desktop shows 6, responsive reduces */}
        <div style={{ overflow: "hidden" }}>
          <motion.div
            key={start}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 16 }}
            className="prod-grid"
          >
            {visible.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="prod-card"
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 10,
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {/* Image */}
                <div style={{ height: 155, overflow: "hidden", position: "relative" }}>
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      display: "block", transition: "transform 0.4s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.08)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                  />
                  {/* Green badge */}
                  <div style={{
                    position: "absolute", bottom: 10, left: "50%",
                    transform: "translateX(-50%)",
                    width: 30, height: 30, borderRadius: "50%",
                    background: "#16a34a", border: "2.5px solid #fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                  }}>
                    <CheckCircle style={{ width: 15, height: 15, color: "#fff" }} />
                  </div>
                </div>

                {/* Label */}
                <div style={{ padding: "13px 10px 15px", textAlign: "center" }}>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif", fontWeight: 800,
                    fontSize: 12, color: "#0d1f3c", lineHeight: 1.3,
                    marginBottom: 4, whiteSpace: "pre-line",
                  }}>
                    {p.name}
                  </div>
                  <div style={{ fontSize: 11, color: "#64748b", marginBottom: 7 }}>{p.sub}</div>
                  <div style={{ width: 26, height: 2.5, background: "#16a34a", borderRadius: 2, margin: "0 auto" }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dot indicators */}
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
          {Array.from({ length: maxStart + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              style={{
                width: i === start ? 22 : 7, height: 7,
                borderRadius: 999, border: "none", cursor: "pointer",
                background: i === start ? "#0d1f3c" : "#cbd5e1",
                transition: "all 0.25s", padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) { .prod-grid { grid-template-columns: repeat(4,1fr) !important; } }
        @media (max-width: 768px)  { .prod-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 480px)  { .prod-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
