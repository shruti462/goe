"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, Globe } from "lucide-react";

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

/**
 * GoeLogo — built entirely with HTML/CSS divs.
 * No SVG file, no gradients that can clash, always renders.
 */
function GoeLogo({ size = 48 }: { size?: number }) {
  const fontSize = Math.round(size * 0.72);
  const globeSize = Math.round(size * 0.7);

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      height: size,
      flexShrink: 0,
      position: "relative",
      gap: 0,
    }}>
      {/* G */}
      <span style={{
        fontFamily: "'Arial Black', 'Impact', sans-serif",
        fontWeight: 900,
        fontSize: fontSize,
        lineHeight: 1,
        color: "#1a5fd4",
        letterSpacing: -2,
        textShadow: "1px 2px 4px rgba(10,42,120,0.35)",
        display: "block",
      }}>G</span>

      {/* Globe replacing O */}
      <div style={{
        width: globeSize,
        height: globeSize,
        borderRadius: "50%",
        background: "radial-gradient(circle at 35% 30%, #c8e8ff 0%, #5ab4f7 30%, #1565d8 65%, #082878 100%)",
        boxShadow: "0 2px 12px rgba(21,101,216,0.45), inset 0 -2px 6px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0,
        overflow: "hidden",
        border: "1.5px solid rgba(74,180,255,0.5)",
      }}>
        {/* Grid lines on globe */}
        <div style={{
          position: "absolute", inset: 0,
          borderRadius: "50%",
          background: "transparent",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.15)",
        }}/>
        {/* Vertical meridian */}
        <div style={{
          position: "absolute",
          width: "50%", height: "100%",
          border: "none",
          borderLeft: "1px solid rgba(255,255,255,0.2)",
          left: "50%",
        }}/>
        {/* Horizontal equator */}
        <div style={{
          position: "absolute",
          height: "50%", width: "100%",
          borderBottom: "1px solid rgba(255,255,255,0.2)",
          top: 0,
        }}/>
        {/* Globe highlight */}
        <div style={{
          position: "absolute",
          top: "12%", left: "18%",
          width: "35%", height: "28%",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.28)",
          transform: "rotate(-20deg)",
        }}/>
        {/* Orbital ring */}
        <div style={{
          position: "absolute",
          width: "130%", height: "38%",
          border: "2px solid rgba(74,180,255,0.75)",
          borderRadius: "50%",
          transform: "rotate(-20deg)",
          left: "-15%",
        }}/>
      </div>

      {/* E */}
      <span style={{
        fontFamily: "'Arial Black', 'Impact', sans-serif",
        fontWeight: 900,
        fontSize: fontSize,
        lineHeight: 1,
        color: "#1a5fd4",
        letterSpacing: -2,
        textShadow: "1px 2px 4px rgba(10,42,120,0.35)",
        display: "block",
      }}>E</span>

      {/* Arrow top-right */}
      <div style={{
        position: "absolute",
        top: 0,
        right: -8,
        width: 18,
        height: 18,
      }}>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <line x1="2" y1="16" x2="16" y2="2" stroke="#1a5fd4" strokeWidth="2.2" strokeLinecap="round"/>
          <polygon points="16,2 9,5 13,9" fill="#1a5fd4"/>
        </svg>
      </div>
    </div>
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
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(ids[i]);
          break;
        }
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
          display: "flex", alignItems: "center", height: 68, gap: 0,
        }}>

          {/* ── Logo ── */}
          <button
            onClick={() => go("#hero")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 0, marginRight: 24, flexShrink: 0,
              display: "flex", alignItems: "center", gap: 10,
            }}
          >
            <GoeLogo size={48} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1, paddingLeft: 10 }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif", fontWeight: 800,
                fontSize: 14, color: "#1e3a6e", whiteSpace: "nowrap", letterSpacing: "0.01em",
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

          {/* ── Desktop nav ── */}
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

          {/* ── CTA ── */}
          <button
            onClick={() => go("#contact")}
            className="hidden lg:flex btn-primary"
            style={{ marginLeft: 16, gap: 8, flexShrink: 0 }}
          >
            <Phone style={{ width: 15, height: 15 }} />
            CONTACT US
          </button>

          {/* ── Mobile toggle ── */}
          <button
            className="lg:hidden"
            onClick={() => setMenu(!menu)}
            style={{ marginLeft: "auto", background: "none", border: "none", cursor: "pointer", color: "#1e3a6e", padding: 4 }}
          >
            {menu ? <X style={{ width: 26, height: 26 }} /> : <Menu style={{ width: 26, height: 26 }} />}
          </button>
        </div>
      </header>

      {/* ── Mobile menu ── */}
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
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
              <GoeLogo size={38} />
              <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 13, color: "#1e3a6e", paddingLeft: 8 }}>
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
