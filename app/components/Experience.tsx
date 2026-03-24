"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Calendar } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { EXPERIENCE, AWARDS } from "@/app/constants/data";

export default function Experience() {
  return (
    <Section id="experience" className="py-32">
      <SectionHeading
        label="03 — Experience"
        title="Where I've Built"
        description="Full-time engineering experience delivering production systems at scale."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main experience card */}
        <div className="lg:col-span-2 space-y-6">
          {EXPERIENCE.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h3
                    className="font-display text-2xl mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {exp.role}
                  </h3>
                  <p
                    className="font-semibold text-base"
                    style={{ color: "var(--accent)" }}
                  >
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span
                    className="flex items-center gap-1.5 font-mono-custom text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Calendar size={11} />
                    {exp.duration}
                  </span>
                  <span
                    className="flex items-center gap-1.5 font-mono-custom text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <MapPin size={11} />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Achievements */}
              <ul className="space-y-3">
                {exp.achievements.map((item, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.07, duration: 0.4 }}
                    className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <CheckCircle2
                      size={14}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="p-6 rounded-2xl border"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <p
              className="font-mono-custom text-xs tracking-widest uppercase mb-5"
              style={{ color: "var(--accent)" }}
            >
              Awards
            </p>
            <div className="space-y-5">
              {AWARDS.map((award) => (
                <div key={award.title}>
                  <p
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {award.title}
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                    {award.detail}
                  </p>
                  <p
                    className="font-mono-custom text-xs mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {award.year}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Current status */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="p-6 rounded-2xl border"
            style={{
              backgroundColor: "var(--accent-subtle)",
              borderColor: "var(--accent)",
            }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <p
                className="font-mono-custom text-xs tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                Currently
              </p>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Actively building at Ilmversity — scaling LMS infrastructure and shipping new features for 50K+ daily users.
            </p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
