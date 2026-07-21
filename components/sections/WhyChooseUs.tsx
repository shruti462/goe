"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, CheckCircle } from "lucide-react";

const visionText =
  "To become a globally trusted exporter of Indian agricultural products by delivering freshness, quality, and reliability.";

const otherCerts = [
  { code: "APEDA", label: "Agricultural & Processed\nFood Export Authority", color: "#16a34a", textColor: "#4ade80" },
  { code: "FSSAI", label: "Food Safety &\nStandards Authority of India",     color: "#2563eb", textColor: "#93c5fd" },
  { code: "MSME",  label: "Ministry of MSME\nGovt. of India",                color: "#d97706", textColor: "#fcd34d" },
  { code: "PHYTO", label: "Phytosanitary\nCertificate (NPPO)",               color: "#0891b2", textColor: "#67e8f9" },
];

export default function CertificationsAndVision() {
  const [showModal, setShowModal] = useState(false);

  // Listen for the custom event fired by Navbar when "CERTIFICATIONS" is clicked
  useEffect(() => {
    const handler = () => setShowModal(true);
    window.addEventListener("open-certificate", handler);
    return () => window.removeEventListener("open-certificate", handler);
  }, []);

  // Close on ESC key
  useEffect(() => {
    if (!showModal) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setShowModal(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showModal]);

  return (
    <>
      {/* Section id = "certifications" so nav scroll also works */}
      <section id="certifications" style={{ background: "#f4f6fb" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px" }}>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 380 }}
            className="why-vision-grid"
          >

            {/* ── Left: Our Certifications ── */}
            <div style={{ background: "#0d1f3c", padding: "36px 36px 40px", display: "flex", flexDirection: "column" }}>
              <div style={{ marginBottom: 22 }}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 22, color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase" }}>
                  OUR CERTIFICATIONS
                </div>
                <div style={{ width: 40, height: 3, background: "#16a34a", borderRadius: 2, marginTop: 8 }} />
              </div>

              {/* Certificate trigger button — click to open full certificate */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: 28 }}
              >
                <motion.button
                  whileHover={{ scale: 1.04, boxShadow: "0 12px 36px rgba(0,0,0,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setShowModal(true)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    background: "linear-gradient(135deg, #1e3a6e 0%, #132347 100%)",
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    borderRadius: 14,
                    padding: "20px 24px",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Top accent */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #16a34a, #2563eb)" }} />

                  {/* Left: icon + text */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: 12,
                      background: "rgba(255,255,255,0.1)",
                      border: "1.5px solid rgba(255,255,255,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <span style={{ fontSize: 26 }}>🇮🇳</span>
                    </div>
                    <div style={{ textAlign: "left" }}>
                      <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 3 }}>
                        Udyam Registration Certificate
                      </div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: "0.03em" }}>
                        UDYAM-MH-17-0244760 · Govt. of India · MSME
                      </div>
                      <div style={{ marginTop: 6, display: "inline-flex", alignItems: "center", gap: 5, background: "rgba(22,163,74,0.25)", border: "1px solid rgba(22,163,74,0.4)", borderRadius: 999, padding: "3px 10px" }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80" }} />
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#4ade80", letterSpacing: "0.06em", textTransform: "uppercase" }}>Verified</span>
                      </div>
                    </div>
                  </div>

                  {/* Right: view button */}
                  <div style={{
                    flexShrink: 0,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 10,
                    padding: "10px 18px",
                    display: "flex", alignItems: "center", gap: 7,
                  }}>
                    <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 12, color: "#fff", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                      View Certificate
                    </span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </motion.button>
              </motion.div>

              {/* Other badges */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
                {otherCerts.map((c, i) => (
                  <motion.div key={c.code} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 + i * 0.07 }}
                    style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 7, textAlign: "center" }}>
                    <div style={{ width: 54, height: 54, borderRadius: "50%", border: `2px solid ${c.color}`, background: `${c.color}18`, display: "flex", alignItems: "center", justifyContent: "center", transition: "transform 0.2s, background 0.2s", cursor: "default" }}
                      onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "scale(1.1)"; d.style.background = `${c.color}30`; }}
                      onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = "scale(1)"; d.style.background = `${c.color}18`; }}>
                      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: c.code.length > 5 ? 8 : 10, color: c.textColor, letterSpacing: "0.03em", lineHeight: 1 }}>{c.code}</span>
                    </div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 9, color: "rgba(255,255,255,0.65)", lineHeight: 1.4, whiteSpace: "pre-line" }}>{c.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── Right: Our Vision ── */}
            <div style={{ background: "#fff", padding: "40px 36px", display: "flex", flexDirection: "column", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", right: -20, bottom: -10, width: 260, height: 220, opacity: 0.1, pointerEvents: "none" }}>
                <img src="/images/hero-ship.jpeg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 22, color: "#0d1f3c", textTransform: "uppercase", letterSpacing: "0.02em" }}>OUR VISION</div>
                <div style={{ width: 40, height: 3, background: "#16a34a", borderRadius: 2, marginTop: 8, marginBottom: 20 }} />
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.8, maxWidth: 420, marginBottom: 28 }}>{visionText}</p>
                <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="btn-primary">
                  READ MORE <ArrowRight style={{ width: 15, height: 15 }} />
                </motion.button>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .why-vision-grid { grid-template-columns: 1fr !important; } }
          .cert-card .cert-overlay { opacity: 0; transition: opacity 0.22s; }
          .cert-card:hover .cert-overlay { opacity: 1; }
        `}</style>
      </section>

      {/* ── Full Certificate Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowModal(false)}
            style={{ position: "fixed", inset: 0, background: "rgba(5,10,24,0.88)", zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", backdropFilter: "blur(8px)" }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 24 }}
              animate={{ scale: 1,    opacity: 1, y: 0  }}
              exit={{    scale: 0.85, opacity: 0, y: 24 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ background: "#fff", borderRadius: 16, overflow: "hidden", width: "100%", maxWidth: 860, maxHeight: "93vh", display: "flex", flexDirection: "column", boxShadow: "0 40px 100px rgba(0,0,0,0.65)" }}
            >
              {/* Header */}
              <div style={{ background: "#0d1f3c", padding: "16px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ fontSize: 24 }}>🇮🇳</span>
                  <div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 14, color: "#fff", letterSpacing: "0.04em" }}>
                      UDYAM REGISTRATION CERTIFICATE
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 1 }}>
                      Ministry of Micro, Small and Medium Enterprises — Govt. of India
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.22)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", flexShrink: 0, transition: "background 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.22)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.12)"; }}
                >
                  <X style={{ width: 18, height: 18, color: "#fff" }} />
                </button>
              </div>

              {/* Certificate image */}
              <div style={{ overflowY: "auto", flex: 1, background: "#f1f5f9" }}>
                <img
                  src="/images/Certificate.jpg"
                  alt="Udyam Registration Certificate — Gamare Overseas Exim"
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>

              {/* Footer */}
              <div style={{ background: "#f8fafc", borderTop: "1px solid #e2e8f0", padding: "13px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0, flexWrap: "wrap", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <CheckCircle style={{ width: 16, height: 16, color: "#16a34a" }} />
                  <span style={{ fontSize: 12, color: "#374151", fontWeight: 600 }}>
                    UDYAM-MH-17-0244760 &nbsp;·&nbsp; Gamare Overseas Exim &nbsp;·&nbsp; Registered 11/07/2026
                  </span>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  style={{ background: "#0d1f3c", color: "#fff", border: "none", cursor: "pointer", padding: "9px 22px", borderRadius: 7, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 13 }}
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
