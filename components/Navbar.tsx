"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "HOME",           href: "#hero"           },
  { label: "ABOUT US",       href: "#about"          },
  { label: "PRODUCTS",       href: "#products"       },
  { label: "EXPORT PROCESS", href: "#process"        },
  { label: "CERTIFICATIONS", href: "#certifications" },
  { label: "GALLERY",        href: "#gallery"        },
  { label: "FAQS",           href: "#faqs"           },
  { label: "CONTACT US",     href: "#contact"        },
];

/** Inline GOE logo — no external file, always renders */
function GoeLogo({ height = 50 }: { height?: number }) {
  const w = height * 2.7;
  return (
    <svg
      width={w}
      height={height}
      viewBox="0 0 270 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lg1" x1="0" y1="0" x2="0.2" y2="1">
          <stop offset="0%" stopColor="#5ab4f7" />
          <stop offset="45%" stopColor="#1a6fd4" />
          <stop offset="100%" stopColor="#0a2e7a" />
        </linearGradient>
        <radialGradient id="globeFill" cx="38%" cy="32%" r="65%">
          <stop offset="0%" stopColor="#d0eeff" />
          <stop offset="30%" stopColor="#7ec8f5" />
          <stop offset="65%" stopColor="#2080d0" />
          <stop offset="100%" stopColor="#0a3080" />
        </radialGradient>
        <linearGradient id="orbitG" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#90d0ff" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#4ab0ff" />
          <stop offset="100%" stopColor="#1060c0" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* G */}
      <text
        x="0" y="86"
        fontFamily="'Arial Black',Impact,sans-serif"
        fontWeight="900"
        fontSize="90"
        fill="url(#lg1)"
        style={{ letterSpacing: "-3px" }}
      >G</text>

      {/* E */}
      <text
        x="182" y="86"
        fontFamily="'Arial Black',Impact,sans-serif"
        fontWeight="900"
        fontSize="90"
        fill="url(#lg1)"
        style={{ letterSpacing: "-3px" }}
      >E</text>

      {/* Globe circle */}
      <circle cx="135" cy="47" r="40" fill="url(#globeFill)" />

      {/* Globe grid */}
      <ellipse cx="135" cy="47" rx="40" ry="40" stroke="rgba(255,255,255,0.2)" strokeWidth="0.7" fill="none" />
      <ellipse cx="135" cy="47" rx="22" ry="40" stroke="rgba(255,255,255,0.18)" strokeWidth="0.7" fill="none" />
      <ellipse cx="135" cy="47" rx="40" ry="16" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" fill="none" />
      <ellipse cx="135" cy="47" rx="40" ry="29" stroke="rgba(255,255,255,0.14)" strokeWidth="0.6" fill="none" />
      <line x1="95" y1="47" x2="175" y2="47" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />
      <line x1="135" y1="7"  x2="135" y2="87" stroke="rgba(255,255,255,0.18)" strokeWidth="0.6" />

      {/* Globe highlight */}
      <ellipse cx="120" cy="30" rx="12" ry="8" fill="rgba(255,255,255,0.2)" transform="rotate(-20 120 30)" />

      {/* Orbital ring */}
      <ellipse cx="135" cy="47" rx="50" ry="18"
        stroke="url(#orbitG)" strokeWidth="3" fill="none"
        transform="rotate(-18 135 47)"
        strokeLinecap="round"
      />

      {/* Swoosh under G */}
      <path d="M6 92 Q38 103 66 95" stroke="#5ab4f7" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />

      {/* Arrow */}
      <line x1="168" y1="16" x2="192" y2="2" stroke="#1a6fd4" strokeWidth="2.8" strokeLinecap="round" />
      <polygon points="192,2 181,6 186,15" fill="#1a6fd4" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("hero");
  const [menu, setMenu]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const ids = links.map((l) => l.href.slice(1));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) { setActive(ids[i]); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href: string) => {
    const id = href.slice(1);
    if (id === "certifications") {
      window.dispatchEvent(new Event("open-certificate"));
      setMenu(false);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
        background: "#fff",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.1)" : "0 1px 4px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.3s",
      }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto", padding: "0 20px",
          display: "flex", alignItems: "center", height: 68,
        }}>

          {/* Logo */}
          <button
            onClick={() => go("#hero")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 0, marginRight: 20, flexShrink: 0,
              display: "flex", alignItems: "center", gap: 8,
            }}
          >
            <GoeLogo height={48} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 14,
                color: "#1e3a6e", letterSpacing: "0.01em", whiteSpace: "nowrap",
              }}>
                GAMARE OVERSEAS EXIM
              </span>
              <span style={{
                fontSize: 9, fontWeight: 600, color: "#64748b",
                letterSpacing: "0.09em", textTransform: "uppercase", marginTop: 2,
              }}>
                From Indian Farms to Global Markets
              </span>
            </div>
          </button>

          {/* Desktop nav */}
          <nav className="hidden lg:flex" style={{ flex: 1, alignItems: "center", gap: 18, justifyContent: "center" }}>
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => go(l.href)}
                className="nav-link"
                style={{
                  borderBottomColor: active === l.href.slice(1) ? "#1e3a6e" : "transparent",
                  color: active === l.href.slice(1) ? "#1e3a6e" : "#374151",
                }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => go("#contact")}
            className="hidden lg:flex btn-primary"
            style={{ marginLeft: 16, gap: 8, flexShrink: 0 }}
          >
            <Phone style={{ width: 15, height: 15 }} />
            CONTACT US
          </button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMenu(!menu)}
            style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#1e3a6e", padding: 4 }}
          >
            {menu ? <X style={{ width: 26, height: 26 }} /> : <Menu style={{ width: 26, height: 26 }} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            style={{
              position: "fixed", top: 68, left: 0, right: 0, zIndex: 9998,
              background: "#fff", borderTop: "1px solid #e2e8f0",
              boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
              padding: "16px 20px", display: "flex", flexDirection: "column", gap: 2,
            }}
          >
            {/* Mobile logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
              <GoeLogo height={40} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 14, color: "#1e3a6e" }}>
                GAMARE OVERSEAS EXIM
              </span>
            </div>

            {links.map((l, i) => (
              <motion.button
                key={l.label}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => go(l.href)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  padding: "12px 8px", fontSize: 14, fontWeight: 600,
                  color: active === l.href.slice(1) ? "#1e3a6e" : "#374151",
                  fontFamily: "'Inter', sans-serif", textAlign: "left",
                  borderBottom: "1px solid #f1f5f9",
                }}
              >
                {l.label}
              </motion.button>
            ))}

            <button
              onClick={() => go("#contact")}
              className="btn-primary"
              style={{ marginTop: 12, justifyContent: "center" }}
            >
              <Phone style={{ width: 15, height: 15 }} />
              CONTACT US
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
