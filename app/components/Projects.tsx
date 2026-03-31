"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { PROJECTS } from "@/app/constants/data";

export default function Projects() {
  return (
    <Section id="projects" className="py-32">
      <SectionHeading
        label="04 — Projects"
        title="Selected Work"
        description="Projects that showcase my approach to solving real-world engineering problems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS.map((project, i) => {
          const externalUrl = project.websiteUrl || project.demoUrl;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl border flex flex-col transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span
                    className="font-mono-custom text-xs tracking-widest"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.duration}
                  </span>
                  <h3
                    className="font-display text-2xl mt-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 pt-4">
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border transition-colors duration-200"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.93 }}
                      aria-label={`${project.title} GitHub`}
                    >
                      <Github size={15} />
                    </motion.a>
                  )}
                  {externalUrl && (
                    <motion.a
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border transition-colors duration-200"
                      style={{
                        borderColor: "var(--border)",
                        color: "var(--text-muted)",
                      }}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.93 }}
                      aria-label={`${project.title} website`}
                    >
                      <ExternalLink size={15} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className="text-sm leading-7 mb-6"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 flex-1">
                {project.highlights.map((highlight, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-xs leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <CheckCircle2
                      size={12}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    />
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Tech badges */}
              <div
                className="flex flex-wrap gap-2 pt-4 border-t"
                style={{ borderColor: "var(--border)" }}
              >
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-xs font-mono-custom"
                    style={{
                      backgroundColor: "var(--accent-subtle)",
                      color: "var(--accent)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
