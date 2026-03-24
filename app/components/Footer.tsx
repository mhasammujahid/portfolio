export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t py-8 px-6"
      style={{ borderColor: "var(--border)", backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono-custom text-xs" style={{ color: "var(--text-muted)" }}>
          © {year} Muhammad Hassam Mujahid. All rights reserved.
        </p>
        <p className="font-mono-custom text-xs" style={{ color: "var(--text-muted)" }}>
          Built with Next.js · TypeScript · Tailwind CSS · Framer Motion
        </p>
      </div>
    </footer>
  );
}
