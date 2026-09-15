import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-emerald-deep text-background pattern-kente ${
        image ? "grain" : ""
      }`}
    >
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      )}
      <div className="hero-overlay absolute inset-0" />
      {/* Decorative rings */}
      <div className="deco-ring -right-24 -top-40 h-96 w-96" />
      <div className="deco-ring -right-10 -top-24 h-64 w-64" />
      <div className="deco-ring -bottom-32 -left-20 h-80 w-80" />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        {crumbs && (
          <nav className="animate-fade-in mb-5 flex flex-wrap items-center gap-1.5 text-xs text-sand/60">
            <Link href="/" className="transition hover:text-gold-light">
              Accueil
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <span aria-hidden>/</span>
                {c.href ? (
                  <Link href={c.href} className="transition hover:text-gold-light">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-gold-light">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display animate-fade-up delay-100 max-w-3xl text-4xl font-bold leading-[1.1] text-balance sm:text-6xl">
          {title}
        </h1>
        <div className="gold-rule animate-fade-up delay-200 mt-6" />
        {description && (
          <p className="animate-fade-up delay-300 mt-6 max-w-2xl text-lg font-light leading-relaxed text-sand/85">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
