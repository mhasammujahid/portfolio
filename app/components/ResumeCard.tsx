"use client";

import { motion } from "framer-motion";
import { Download, FileText, Briefcase, Calendar } from "lucide-react";
import { HERO } from "@/app/constants/data";

const highlights = [
  { icon: Briefcase, label: "Experience", value: "3+ Years" },
  { icon: FileText, label: "Stack", value: "MERN + Cloud" },
  { icon: Calendar, label: "Available", value: "Immediately" },
];

export default function ResumeCard() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl border p-10 md:p-14"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, var(--glow) 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Left — text */}
          <div className="flex-1">
            <p
              className="font-mono-custom text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Resume
            </p>
            <h2
              className="font-display text-3xl md:text-4xl mb-3"
              style={{ color: "var(--text-primary)" }}
            >
              Download My CV
            </h2>
            <p
              className="text-base leading-relaxed max-w-lg mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              A full overview of my experience, skills, and projects — one PDF,
              everything you need.
            </p>

            {/* Highlight chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border text-sm"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <Icon size={13} style={{ color: "var(--accent)" }} />
                  <span style={{ color: "var(--text-muted)" }}>{label}:</span>
                  <span
                    className="font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Download button */}
            <motion.a
              href={HERO.resumeUrl}
              download="Muhammad_Hassam_Mujahid_Resume_3.pdf"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-200"
              style={{ backgroundColor: "var(--accent)", color: "white" }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
            >
              <Download size={16} />
              Download Resume
              <span
                className="px-2 py-0.5 rounded-md text-xs font-mono-custom"
                style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
              >
                PDF
              </span>
            </motion.a>
          </div>

          {/* Right — decorative resume preview card */}
          <motion.div
            whileHover={{ y: -4, rotate: 1 }}
            transition={{ duration: 0.3 }}
            className="hidden lg:flex flex-col gap-3 w-56 p-5 rounded-2xl border flex-shrink-0"
            style={{
              backgroundColor: "var(--bg-secondary)",
              borderColor: "var(--border)",
            }}
          >
            {/* Mock resume lines */}
            <div className="flex items-center gap-2 mb-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  color: "var(--accent)",
                }}
              >
                HM
              </div>
              <div>
                <div
                  className="h-2 w-20 rounded-full"
                  style={{ backgroundColor: "var(--border-strong)" }}
                />
                <div
                  className="h-1.5 w-14 rounded-full mt-1"
                  style={{ backgroundColor: "var(--border)" }}
                />
              </div>
            </div>

            {[70, 90, 60, 80, 50, 75, 55].map((w, i) => (
              <div
                key={i}
                className="h-1.5 rounded-full"
                style={{
                  width: `${w}%`,
                  backgroundColor:
                    i % 3 === 0 ? "var(--accent-subtle)" : "var(--border)",
                }}
              />
            ))}

            <div
              className="mt-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-mono-custom"
              style={{
                backgroundColor: "var(--accent-subtle)",
                color: "var(--accent)",
              }}
            >
              <FileText size={11} />
              resume.pdf
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
