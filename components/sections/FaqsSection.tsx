"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What products does Gamare Overseas Exim export?", a: "We export a wide range of fresh Indian agricultural produce including Drumsticks (Moringa), Bananas, Onions, Green Chillies, Seasonal Fruits (mangoes, pomegranates, grapes), and Fresh Vegetables (okra, bitter gourd, ridge gourd, cluster beans)." },
  { q: "Which countries do you export to?", a: "We currently export to 50+ countries across the Middle East (UAE, Saudi Arabia, Qatar), Southeast Asia, Europe (UK, Germany, Netherlands), North America, and Africa. We are continuously expanding our global reach." },
  { q: "What certifications do you hold?", a: "We are APEDA (Agricultural and Processed Food Products Export Development Authority) certified and comply with all international phytosanitary requirements, EU import standards, and destination-country import regulations." },
  { q: "What is the minimum order quantity?", a: "Minimum order quantities vary by product. Generally, we handle container loads (FCL) of 20ft and 40ft reefer containers. Please contact us for specific product MOQs and pricing." },
  { q: "How do you ensure freshness during transit?", a: "We use temperature-controlled reefer containers, export-grade moisture-barrier packaging, and maintain strict cold chain integrity from our packing facility to the destination port. All produce is packed within 24 hours of harvest." },
  { q: "Do you provide documentation support?", a: "Yes, we provide complete export documentation including phytosanitary certificates, certificates of origin, bills of lading, packing lists, invoices, and any destination-specific import permits required." },
];

export default function FaqsSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faqs" style={{ padding: "52px 0", background: "#f4f6fb", borderTop: "1px solid #e2e8f0" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "0 20px" }}>
        <div style={{ marginBottom: 32 }}>
          <div className="section-title">FREQUENTLY ASKED QUESTIONS</div>
          <div className="section-underline" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 10, overflow: "hidden", boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "18px 22px", background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: 14, color: "#0d1f3c",
                  textAlign: "left", gap: 12,
                }}
              >
                <span>{faq.q}</span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }}>
                  <ChevronDown style={{ width: 18, height: 18, color: "#64748b", flexShrink: 0 }} />
                </motion.div>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#475569", lineHeight: 1.75, borderTop: "1px solid #f1f5f9" }}>
                      <div style={{ paddingTop: 14 }}>{faq.a}</div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
