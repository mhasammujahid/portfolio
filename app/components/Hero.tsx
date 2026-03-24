"use client";

import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, ArrowDown, Mail } from "lucide-react";
import { HERO } from "@/app/constants/data";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 45%, var(--glow), transparent 70%)",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        {/* Status pill */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono-custom tracking-widest uppercase"
            style={{
              borderColor: "var(--accent)",
              backgroundColor: "var(--accent-subtle)",
              color: "var(--accent)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "var(--accent)" }}
            />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display leading-none mb-5"
          style={{
            fontSize: "clamp(3rem, 10vw, 6rem)",
            color: "var(--text-primary)",
          }}
        >
          Muhammad Hassam{" "}
          <span style={{ color: "var(--accent)" }}>Mujahid</span>
        </motion.h1>

        {/* Role line */}
        <motion.p
          variants={itemVariants}
          className="font-mono-custom text-sm md:text-base tracking-widest uppercase mb-6"
          style={{ color: "var(--text-secondary)" }}
        >
          {HERO.subtitle}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12"
          style={{ color: "var(--text-secondary)" }}
        >
          {HERO.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <motion.a
            href={HERO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: "var(--text-primary)",
              color: "var(--bg)",
            }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            <Github size={15} />
            GitHub
          </motion.a>

          <motion.a
            href={HERO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-200"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
            whileHover={{
              scale: 1.04,
              y: -2,
              backgroundColor: "var(--accent-subtle)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            <Linkedin size={15} />
            LinkedIn
          </motion.a>

          <motion.a
            href={`mailto:${HERO.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border transition-all duration-200"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-secondary)",
            }}
            whileHover={{ scale: 1.04, y: -2, borderColor: "var(--border-strong)" }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={15} />
            {HERO.email}
          </motion.a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-20"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <button
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to about section"
          >
            <ArrowDown size={20} style={{ color: "var(--text-muted)" }} />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
