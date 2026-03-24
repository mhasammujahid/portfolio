"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { HERO } from "@/app/constants/data";

const contacts = [
  {
    Icon: Mail,
    label: "Email",
    value: HERO.email,
    href: `mailto:${HERO.email}`,
    description: "Best for project inquiries",
  },
  {
    Icon: Github,
    label: "GitHub",
    value: "@mhasammujahid",
    href: HERO.githubUrl,
    description: "See my open source work",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "mhassammujahid",
    href: HERO.linkedinUrl,
    description: "Professional network",
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="py-32 pb-40">
      <SectionHeading
        label="05 — Contact"
        title="Let's Work Together"
        description="I'm open to discussing new projects, creative ideas, or opportunities to be part of your vision."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {contacts.map(({ Icon, label, value, href, description }, i) => (
          <motion.a
            key={label}
            href={href}
            target={label !== "Email" ? "_blank" : undefined}
            rel={label !== "Email" ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group p-6 rounded-2xl border flex flex-col gap-4 transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <div className="flex items-center justify-between">
              <div
                className="p-2.5 rounded-xl border"
                style={{
                  backgroundColor: "var(--accent-subtle)",
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                }}
              >
                <Icon size={18} />
              </div>
              <ArrowUpRight
                size={16}
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: "var(--accent)" }}
              />
            </div>
            <div>
              <p
                className="font-mono-custom text-xs tracking-widest uppercase mb-1"
                style={{ color: "var(--text-muted)" }}
              >
                {label}
              </p>
              <p className="font-medium text-sm mb-1" style={{ color: "var(--text-primary)" }}>
                {value}
              </p>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                {description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="p-10 md:p-14 rounded-3xl border text-center"
        style={{
          background: "linear-gradient(135deg, var(--accent-subtle), var(--bg-card))",
          borderColor: "var(--accent)",
        }}
      >
        <p
          className="font-mono-custom text-xs tracking-widest uppercase mb-4"
          style={{ color: "var(--accent)" }}
        >
          Open to opportunities
        </p>
        <h3
          className="font-display text-3xl md:text-4xl mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Have a project in mind?
        </h3>
        <p
          className="text-base leading-relaxed max-w-lg mx-auto mb-8"
          style={{ color: "var(--text-secondary)" }}
        >
          Whether you&apos;re building from scratch or scaling an existing system — let&apos;s
          talk about how I can help.
        </p>
        <motion.a
          href={`mailto:${HERO.email}`}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-medium text-sm"
          style={{ backgroundColor: "var(--accent)", color: "white" }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          <Mail size={16} />
          Send me a message
        </motion.a>
      </motion.div>
    </Section>
  );
}
