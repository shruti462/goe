"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 99999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Background — hero ship image */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/images/hero-ship.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />

          {/* Dark overlay */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(10,18,46,0.92) 0%, rgba(13,31,60,0.88) 60%, rgba(10,18,46,0.95) 100%)",
          }} />

          {/* Dot grid texture */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            opacity: 0.7,
          }} />

          {/* Content */}
          <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              style={{ marginBottom: 20 }}
            >
              <img
                src="/images/goe-logo.svg"
                alt="GOE Logo"
                style={{ width: 220, height: "auto", filter: "drop-shadow(0 8px 32px rgba(30,100,220,0.5))" }}
              />
            </motion.div>

            {/* Company name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.45 }}
              style={{ textAlign: "center", marginBottom: 8 }}
            >
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(22px, 4vw, 32px)",
                color: "#ffffff",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                lineHeight: 1.2,
                textShadow: "0 2px 16px rgba(0,0,0,0.4)",
              }}>
                GAMARE OVERSEAS EXIM
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "rgba(255,255,255,0.65)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                marginBottom: 36,
              }}
            >
              From Indian Farms to Global Markets
            </motion.div>

            {/* Animated loader bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{ width: 200, height: 3, background: "rgba(255,255,255,0.12)", borderRadius: 999, overflow: "hidden" }}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.6, delay: 0.9, ease: "easeInOut" }}
                style={{ height: "100%", background: "linear-gradient(90deg, #16a34a, #3b82f6)", borderRadius: 999 }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
