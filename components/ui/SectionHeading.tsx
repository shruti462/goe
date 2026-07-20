"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({ badge, title, highlight, subtitle, align = "center", dark = false }: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-56px" }}
      transition={{ duration: 0.62 }}
      style={{ textAlign: isCenter ? "center" : "left", marginBottom: 56 }}
    >
      {badge && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          padding: "6px 16px", borderRadius: 999, marginBottom: 16,
          fontSize: 13, fontWeight: 600,
          background: dark ? "rgba(11,110,79,0.28)" : "rgba(11,110,79,0.09)",
          color: dark ? "rgba(134,239,172,0.92)" : "#0B6E4F",
          border: dark ? "1px solid rgba(11,110,79,0.35)" : "1px solid rgba(11,110,79,0.18)",
        }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", opacity: 0.9 }} />
          {badge}
        </div>
      )}

      <h2 style={{
        fontFamily: "'Poppins', sans-serif",
        fontSize: "clamp(30px, 4.5vw, 48px)",
        fontWeight: 800,
        lineHeight: 1.15,
        color: dark ? "#ffffff" : "#101820",
        marginBottom: 14,
      }}>
        {title}{" "}
        {highlight && (
          <span style={{
            background: "linear-gradient(135deg, #0B6E4F 0%, #22c55e 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            {highlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p style={{
          fontSize: "clamp(15px, 1.6vw, 18px)",
          color: dark ? "rgba(255,255,255,0.6)" : "#6b7280",
          lineHeight: 1.72,
          maxWidth: 600,
          margin: isCenter ? "0 auto" : "0",
        }}>
          {subtitle}
        </p>
      )}

      {/* Accent line */}
      <div style={{
        marginTop: 20,
        height: 3,
        width: 52,
        borderRadius: 999,
        background: "linear-gradient(90deg, #0B6E4F, #FFD54F)",
        marginLeft: isCenter ? "auto" : 0,
        marginRight: isCenter ? "auto" : 0,
      }} />
    </motion.div>
  );
}
