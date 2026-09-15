import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { countries } from "@/lib/data";

export const metadata = { title: "Dossiers-Pays" };

export default function DossiersPaysPage() {
  return (
    <>
      <PageHero
        image="/images/savanna.jpg"
        eyebrow="Rubrique 4 — Dossiers-Pays"
        title="Dossiers-Pays"
        description="Des analyses approfondies du climat des affaires, des secteurs porteurs et des opportunités d'investissement dans chaque pays cible."
      />

      <Section eyebrow="Les pays" title="Cinq économies à découvrir">
        <div className="grid gap-7 md:grid-cols-2">
          {countries.map((c) => (
            <Link
              key={c.slug}
              href={`/dossiers-pays/${c.slug}`}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[21/9] overflow-hidden bg-emerald">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/75 to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-2xl shadow-md ring-1 ring-gold/40">
                    {c.flag}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-background">
                      {c.name}
                    </h3>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                      {c.capital}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="text-sm leading-relaxed text-muted">
                  {c.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.sectors.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-emerald/8 px-3 py-1 text-xs font-medium text-emerald"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition group-hover:gap-3 group-hover:text-gold-dark">
                  Consulter le dossier <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
