interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-16">
      <p
        className="font-mono-custom text-xs tracking-widest uppercase mb-3"
        style={{ color: "var(--accent)" }}
      >
        {label}
      </p>
      <h2
        className="font-display text-4xl md:text-5xl mb-4"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
