import Reveal from "@/components/Reveal";

export default function Section({
  eyebrow,
  title,
  children,
  className = "",
  id,
  light = false,
}: {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  light?: boolean;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      {(eyebrow || title) && (
        <Reveal>
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p
                className={`mb-3 text-xs font-semibold uppercase tracking-[0.3em] ${
                  light ? "text-gold" : "text-gold-dark"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`font-display text-3xl font-bold leading-tight text-balance sm:text-[2.6rem] sm:leading-[1.15] ${
                  light ? "text-background" : "text-ink"
                }`}
              >
                {title}
              </h2>
            )}
            <div className="gold-rule mt-6" />
          </div>
        </Reveal>
      )}
      <Reveal delay={120}>{children}</Reveal>
    </section>
  );
}
