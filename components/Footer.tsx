"use client";

import { Globe, Mail, MapPin, ArrowRight, Phone } from "lucide-react";

const quickLinks  = [
  { label: "Home",           href: "#hero"     },
  { label: "About Us",       href: "#about"    },
  { label: "Products",       href: "#products" },
  { label: "Export Process", href: "#process"  },
  { label: "Certifications", href: "#certifications" },
  { label: "Gallery",        href: "#gallery"  },
  { label: "FAQs",           href: "#faqs"     },
  { label: "Contact Us",     href: "#contact"  },
];

const products = ["Drumsticks (Moringa)", "Bananas", "Onions", "Green Chillies", "Seasonal Fruits", "Fresh Vegetables"];

const go = (href: string) => document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer style={{ background: "#0d1f3c", color: "#fff" }}>
      {/* Top accent */}
      <div style={{ height: 3, background: "linear-gradient(90deg, #16a34a, #2563eb, #16a34a)" }} />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "52px 20px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr", gap: 40 }} className="foot-grid">

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <img
                src="/images/goe-logo.png"
                alt="Gamare Overseas Exim"
                style={{ height: 52, width: "auto", filter: "brightness(0) invert(1) opacity(0.92)" }}
              />
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", lineHeight: 1 }}>Gamare Overseas</div>
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 2 }}>Exim Pvt. Ltd.</div>
              </div>
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 260, marginBottom: 20 }}>
              Premium exporter of fresh Indian agricultural produce — from farm to global markets with quality and reliability.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { icon: MapPin, text: "Maharashtra, India" },
                { icon: Mail,   text: "info@gamareoverseas.com" },
                { icon: Globe,  text: "www.gamareoverseas.com" },
              ].map(c => (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
                  <c.icon style={{ width: 14, height: 14, color: "#16a34a", flexShrink: 0 }} />
                  {c.text}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map(l => (
                <li key={l.label}>
                  <button onClick={() => go(l.href)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", transition: "color 0.18s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    <ArrowRight style={{ width: 12, height: 12, color: "#16a34a" }} />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Our Products</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {products.map(p => (
                <li key={p}>
                  <button onClick={() => go("#products")} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', sans-serif", transition: "color 0.18s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                  >
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#16a34a", flexShrink: 0 }} />
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + newsletter */}
          <div>
            <h4 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 13, color: "#fff", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 18, paddingBottom: 10, borderBottom: "1px solid rgba(255,255,255,0.1)" }}>Get In Touch</h4>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 18 }}>
              Ready to import premium Indian produce? Contact our export team today.
            </p>
            <button
              onClick={() => go("#contact")}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", marginBottom: 20 }}
            >
              <Phone style={{ width: 14, height: 14 }} />
              CONTACT US
            </button>
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Newsletter</p>
              <div style={{ display: "flex", gap: 6 }}>
                <input type="email" placeholder="your@email.com" style={{ flex: 1, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 7, padding: "9px 13px", fontSize: 13, color: "#fff", outline: "none", fontFamily: "'Inter', sans-serif" }} />
                <button style={{ width: 38, height: 38, borderRadius: 7, background: "#16a34a", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <ArrowRight style={{ width: 16, height: 16, color: "#fff" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)" }}>
            © {new Date().getFullYear()} Gamare Overseas Exim Pvt. Ltd. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "rgba(255,255,255,0.28)" }}>
            Made with ❤️ in <span style={{ color: "#FF9933", fontWeight: 700, marginLeft: 4 }}>India 🇮🇳</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .foot-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px)  { .foot-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
