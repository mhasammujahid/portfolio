"use client";

import { motion } from "framer-motion";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { ABOUT, EDUCATION } from "@/app/constants/data";

export default function About() {
  return (
    <Section id="about" className="py-32">
      <SectionHeading label="01 — About" title="The Engineer Behind the Code" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Text content */}
        <div className="space-y-5">
          {ABOUT.paragraphs.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-base leading-8"
              style={{ color: "var(--text-secondary)" }}
            >
              {para}
            </motion.p>
          ))}

          {/* Education block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="pt-6 mt-2 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="font-mono-custom text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)" }}
            >
              Education
            </p>
            <p
              className="font-semibold text-sm mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              {EDUCATION.degree}
            </p>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {EDUCATION.institution} · {EDUCATION.location}
            </p>
            <p
              className="font-mono-custom text-xs mt-1"
              style={{ color: "var(--text-muted)" }}
            >
              {EDUCATION.duration}
            </p>
          </motion.div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-4">
          {ABOUT.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 rounded-2xl border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <p
                className="font-display text-4xl md:text-5xl mb-2"
                style={{ color: "var(--accent)" }}
              >
                {stat.value}
              </p>
              <p className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
