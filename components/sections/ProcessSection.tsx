"use client";

import { motion } from "framer-motion";
import { Tractor, Microscope, ArrowDownUp, Box, FileText, Ship, Globe } from "lucide-react";

const steps = [
  { id: 1, icon: Tractor,     title: "Farm Sourcing",      desc: "Certified farms across Maharashtra and India." },
  { id: 2, icon: Microscope,  title: "Quality Inspection", desc: "Pesticide analysis, freshness & size grading."  },
  { id: 3, icon: ArrowDownUp, title: "Sorting & Grading",  desc: "Weight, size & appearance sorting by standards." },
  { id: 4, icon: Box,         title: "Packaging",          desc: "Export-grade, temperature-controlled cartons."   },
  { id: 5, icon: FileText,    title: "Documentation",      desc: "Phytosanitary, APEDA & shipping documents."      },
  { id: 6, icon: Ship,        title: "Shipping",           desc: "Reefer containers — sea and air freight."        },
  { id: 7, icon: Globe,       title: "Global Delivery",    desc: "Real-time tracking to buyer's destination."      },
];

export default function ProcessSection() {
  return (
    <section id="process" style={{ padding: "52px 0", background: "#f4f6fb", borderTop: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
      {/* Logistics background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/bg-logistics.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: 0.13,
      }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 36 }}>
          <div className="section-title">EXPORT PROCESS</div>
          <div className="section-underline" />
        </div>

        <div style={{ display: "flex", gap: 0, alignItems: "stretch", overflowX: "auto", paddingBottom: 4 }} className="process-row">
          {steps.map((s, i) => (
            <div key={s.id} style={{ display: "flex", alignItems: "stretch", flex: 1, minWidth: 120 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "24px 12px", background: "#fff", border: "1px solid #e2e8f0", borderRadius: i === 0 ? "10px 0 0 10px" : i === steps.length - 1 ? "0 10px 10px 0" : "0", borderLeft: i > 0 ? "none" : "1px solid #e2e8f0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                {/* Step number */}
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#0d1f3c", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 13, marginBottom: 12 }}>
                  {s.id}
                </div>
                {/* Icon */}
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "#f0f4ff", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 12 }}>
                  <s.icon style={{ width: 22, height: 22, color: "#1e3a6e" }} />
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: "#0d1f3c", marginBottom: 6, lineHeight: 1.3 }}>{s.title}</div>
                <div style={{ fontSize: 11, color: "#64748b", lineHeight: 1.5 }}>{s.desc}</div>
              </motion.div>

              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 0, zIndex: 2 }}>
                  <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "12px solid #0d1f3c", flexShrink: 0 }} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-row { flex-wrap: nowrap; }
        @media (max-width: 900px) {
          .process-row { flex-wrap: wrap !important; gap: 12px !important; }
          .process-row > div { min-width: calc(50% - 6px) !important; flex: unset !important; }
          .process-row > div > div:last-child { display: none !important; }
          .process-row > div > div:first-child { border-radius: 10px !important; border: 1px solid #e2e8f0 !important; }
        }
        @media (max-width: 500px) {
          .process-row > div { min-width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
