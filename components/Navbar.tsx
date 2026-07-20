"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "HOME",           href: "#hero"     },
  { label: "ABOUT US",       href: "#about"    },
  { label: "PRODUCTS",       href: "#products" },
  { label: "EXPORT PROCESS", href: "#process"  },
  { label: "CERTIFICATIONS",  href: "#certifications"  },
  { label: "GALLERY",        href: "#gallery"  },
  { label: "FAQS",           href: "#faqs"     },
  { label: "CONTACT US",     href: "#contact"  },
];

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

    // "CERTIFICATIONS" nav click → open certificate modal directly
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
          maxWidth: 1280, margin: "0 auto",
          padding: "0 20px",
          display: "flex", alignItems: "center",
          height: 68,
        }}>

          {/* ── Logo: actual GOE image ── */}
          <button
            onClick={() => go("#hero")}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 0, marginRight: 24, flexShrink: 0,
              display: "flex", alignItems: "center", gap: 10,
            }}
          >
            <img
              src="/images/goe-logo.svg"
              alt="Gamare Overseas Exim"
              style={{ height: 48, width: "auto", display: "block" }}
            />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800, fontSize: 15,
                color: "#1e3a6e", letterSpacing: "0.01em",
                whiteSpace: "nowrap",
              }}>
                GAMARE OVERSEAS EXIM
              </span>
              <span style={{
                fontSize: 9.5, fontWeight: 600,
                color: "#64748b", letterSpacing: "0.1em",
                textTransform: "uppercase", marginTop: 2,
              }}>
                From Indian Farms to Global Markets
              </span>
            </div>
          </button>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex" style={{ flex: 1, alignItems: "center", gap: 20, justifyContent: "center" }}>
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

          {/* ── CTA button ── */}
          <button
            onClick={() => go("#contact")}
            className="hidden lg:flex btn-primary"
            style={{ marginLeft: 16, gap: 8, flexShrink: 0 }}
          >
            <Phone style={{ width: 15, height: 15 }} />
            CONTACT US
          </button>

          {/* ── Mobile hamburger ── */}
          <button
            className="lg:hidden"
            onClick={() => setMenu(!menu)}
            style={{
              marginLeft: "auto", background: "none", border: "none",
              cursor: "pointer", color: "#1e3a6e", padding: 4,
            }}
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
              padding: "16px 20px",
              display: "flex", flexDirection: "column", gap: 2,
            }}
          >
            {/* Mobile logo */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid #f1f5f9" }}>
              <img src="/images/goe-logo.svg" alt="GOE" style={{ height: 40, width: "auto" }} />
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
