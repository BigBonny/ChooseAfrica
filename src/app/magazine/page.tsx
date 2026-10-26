import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { articles, magazineRubrics, portraits } from "@/lib/data";

export const metadata = { title: "Le Magazine" };

export default function MagazinePage() {
  return (
    <>
      <PageHero
        image="/images/mara.jpg"
        eyebrow="Rubrique 2 — Le Magazine"
        title="Le Magazine"
        description="Celles et ceux qui construisent l'Afrique, qui entreprennent."
      />

      {/* Sommaire / Rubriques */}
      <Section eyebrow="Sommaire" title="Economy & Business Journal">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {magazineRubrics.map((r, i) => (
            <div key={r.name} className="card card-hover p-8">
              <span className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-sm font-bold text-gold ring-1 ring-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-5 text-xl font-bold text-ink">
                {r.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {r.desc}
              </p>
              <ul className="mt-5 space-y-1.5 border-t border-sand pt-4">
                {r.sub.map((s) => (
                  <li
                    key={s}
                    className="text-xs font-medium uppercase tracking-[0.1em] text-gold-dark"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Articles */}
      <section className="bg-sand/50">
        <Section eyebrow="Articles" title="L'analyse des économies africaines">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <article
                key={a.title}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-emerald">
                  <Image
                    src={a.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-emerald">
                    {a.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <span>{a.date}</span>
                    <span aria-hidden>·</span>
                    <span>{a.readTime} de lecture</span>
                  </div>
                  <h3 className="font-display mt-3 text-xl font-bold leading-snug text-ink transition group-hover:text-emerald">
                    {a.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {a.excerpt}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition group-hover:gap-3 group-hover:text-gold-dark">
                    Lire l'article <span aria-hidden>→</span>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Section>
      </section>

      {/* Portraits */}
      <Section eyebrow="Portraits" title="Des hommes et des femmes d'influence">
        <div className="grid gap-7 md:grid-cols-3">
          {portraits.map((p) => (
            <figure key={p.name} className="card card-hover flex flex-col p-8">
              <span
                aria-hidden
                className="font-display text-6xl leading-none text-gold/40"
              >
                &ldquo;
              </span>
              <blockquote className="font-display mt-2 flex-1 text-lg italic leading-relaxed text-ink/85">
                {p.quote}
              </blockquote>
              <div className="mt-7 flex items-center gap-4 border-t border-sand pt-6">
                <div className="font-display flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-lg font-bold text-gold ring-1 ring-gold/40">
                  {p.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <div>
                  <figcaption className="font-display text-base font-bold text-ink">
                    {p.name}
                  </figcaption>
                  <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold-dark">
                    {p.role}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </Section>
    </>
  );
}
