"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { Mail, Globe, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";

interface FormData { name: string; company: string; country: string; email: string; phone: string; message: string; }

export default function ContactSection() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async () => {
    setSending(true);
    await new Promise(r => setTimeout(r, 1400));
    setSending(false); setSent(true); reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" style={{ padding: "52px 0", background: "#fff", borderTop: "1px solid #e2e8f0", position: "relative", overflow: "hidden" }}>
      {/* YOUR uploaded contact background image */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "url('/images/CONTACT RJ.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} />
      <div style={{ position: "absolute", inset: 0, background: "rgba(255,255,255,0.86)" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 20px", position: "relative", zIndex: 1 }}>
        <div style={{ marginBottom: 36 }}>
          <div className="section-title">CONTACT US</div>
          <div className="section-underline" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 40, alignItems: "start" }} className="contact-layout">

          {/* Left info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #e2e8f0", height: 260 }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30188.86!2d72.7907!3d19.4191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ac0ca4fc2a0b%3A0x1b3a15b6a7e12c3f!2sNalasopara%2C%20Palghar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                width="100%" height="100%" style={{ border: 0, display: "block" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Location"
              />
            </div>

            {[
              { icon: MapPin, label: "Address",  val: "Nalasopara, Palghar, Maharashtra, India",           href: "#" },
              { icon: Mail,   label: "Email",    val: "info@gamareoverseas.com",       href: "mailto:info@gamareoverseas.com" },
              { icon: Globe,  label: "Website",  val: "www.gamareoverseas.com",        href: "https://www.gamareoverseas.com" },
            ].map(c => (
              <a key={c.label} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 10, padding: "14px 18px", textDecoration: "none", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)")}
                onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = "none")}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: "#0d1f3c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <c.icon style={{ width: 18, height: 18, color: "#fff" }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.07em" }}>{c.label}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0d1f3c" }}>{c.val}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Right form */}
          <div style={{ background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 14, padding: "32px 32px" }}>
            <h3 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 20, color: "#0d1f3c", marginBottom: 6 }}>Send an Inquiry</h3>
            <p style={{ fontSize: 14, color: "#64748b", marginBottom: 24 }}>We'll get back to you within 24 hours.</p>

            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#dcfce7", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <CheckCircle style={{ width: 28, height: 28, color: "#16a34a" }} />
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 18, color: "#0d1f3c", marginBottom: 8 }}>Inquiry Sent!</div>
                <p style={{ fontSize: 14, color: "#64748b" }}>Our export team will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 6 }}>Full Name *</label>
                    <input {...register("name", { required: "Required" })} placeholder="John Smith" className="form-input" style={{ borderColor: errors.name ? "#f87171" : undefined }} />
                    {errors.name && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 6 }}>Company</label>
                    <input {...register("company")} placeholder="Acme Imports" className="form-input" />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 6 }}>Country *</label>
                    <input {...register("country", { required: "Required" })} placeholder="UAE" className="form-input" style={{ borderColor: errors.country ? "#f87171" : undefined }} />
                    {errors.country && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.country.message}</p>}
                  </div>
                  <div>
                    <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 6 }}>Phone</label>
                    <input {...register("phone")} placeholder="+971 50 000 0000" className="form-input" />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 6 }}>Email *</label>
                  <input {...register("email", { required: "Required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })} type="email" placeholder="john@company.com" className="form-input" style={{ borderColor: errors.email ? "#f87171" : undefined }} />
                  {errors.email && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.email.message}</p>}
                </div>
                <div>
                  <label style={{ fontSize: 12, fontWeight: 600, color: "#475569", display: "block", marginBottom: 6 }}>Message / Product Inquiry *</label>
                  <textarea {...register("message", { required: "Required" })} rows={4} placeholder="I'm interested in importing fresh produce..." className="form-input" style={{ resize: "none", borderColor: errors.message ? "#f87171" : undefined }} />
                  {errors.message && <p style={{ color: "#ef4444", fontSize: 11, marginTop: 3 }}>{errors.message.message}</p>}
                </div>
                <button type="submit" disabled={sending} className="btn-primary" style={{ justifyContent: "center", marginTop: 4, opacity: sending ? 0.7 : 1 }}>
                  {sending ? (
                    <><motion.div animate={{ rotate: 360 }} transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }} style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "#fff", borderRadius: "50%" }} />Sending...</>
                  ) : (
                    <><Send style={{ width: 15, height: 15 }} />SEND INQUIRY</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) { .contact-layout { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
