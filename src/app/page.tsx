import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import Section from "@/components/Section";
import { countries, articles, partners, site } from "@/lib/data";

const eclairent = [
  {
    name: "M. Jean-Pierre Mbemba",
    role: "Président, Chambre de Commerce Afrique-Europe",
    quote:
      "L'Afrique n'est pas un marché à risque, c'est un marché à comprendre.",
    topic: "Points de vue — L'intégration régionale, levier de croissance",
  },
  {
    name: "Mme Aïssatou Diallo",
    role: "Directrice, Banque Africaine de Développement",
    quote:
      "Financer la transition, c'est investir dans la résilience de tout un continent.",
    topic: "Analyse — Les nouveaux chemins du financement en Afrique",
  },
  {
    name: "Mme Fatou Ndiaye",
    role: "Fondatrice, Africa Tech Ventures",
    quote:
      "Le numérique permet de sauter des étapes et d'inclure des millions d'usagers.",
    topic: "Portrait — Une entrepreneure au cœur de la fintech africaine",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-emerald-deep text-background pattern-kente">
        <Image
          src="/images/hero.jpg"
          alt="Savane africaine au coucher du soleil"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        {/* Decorative rings */}
        <div className="deco-ring -right-32 -top-52 h-[32rem] w-[32rem]" />
        <div className="deco-ring -right-12 -top-28 h-80 w-80" />
        <div className="deco-ring -bottom-40 -left-24 h-96 w-96" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Left: text */}
            <div>
              <p className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-light backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {site.sommetLabel}
              </p>

              <h1 className="font-display animate-fade-up delay-100 mt-7 text-5xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl">
                Choose <span className="text-gold">Africa</span>
                <span className="mt-2 block text-2xl font-medium tracking-[0.15em] text-sand/80 sm:text-3xl">
                  EVENTS
                </span>
              </h1>
              <p className="font-display animate-fade-up delay-200 mt-5 text-xl italic text-sand/85 sm:text-2xl">
                Investir en Afrique, comprendre pour agir.
              </p>
              <p className="animate-fade-up delay-300 mt-6 max-w-xl text-lg font-light leading-relaxed text-sand/80">
                Des outils efficients au service de la promotion des
                investissements et de l'attractivité des économies
                africaines.
              </p>

              <div className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-4">
                <Link href="/inscription" className="btn-gold px-8 py-3.5 text-sm">
                  S'inscrire au Sommet
                  <span aria-hidden>→</span>
                </Link>
                <Link
                  href="/dossiers-pays"
                  className="btn-outline-light px-8 py-3.5 text-sm"
                >
                  Découvrir les Dossiers-Pays
                </Link>
              </div>

              <div className="animate-fade-up delay-400 mt-12">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-sand/60">
                  Le Sommet débute dans
                </p>
                <Countdown />
              </div>
            </div>

            {/* Right: Africa map */}
            <div className="animate-fade-in delay-300 relative hidden lg:block">
              <div className="relative mx-auto aspect-square max-w-md">
                <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" />
                <div className="deco-ring absolute inset-0" />
                <div className="deco-ring absolute inset-4" />
                <Image
                  src="/images/africa-globe.jpg"
                  alt="Le continent africain vu depuis l'espace"
                  fill
                  priority
                  sizes="(max-width: 1024px) 0vw, 40vw"
                  className="rounded-full object-cover shadow-2xl ring-2 ring-gold/30"
                />
              </div>
            </div>
          </div>

          <dl className="animate-fade-up delay-400 mt-16 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-10 border-t border-sand/15 pt-10 sm:grid-cols-4">
            {[
              { v: "5", l: "Dossiers-Pays" },
              { v: "30+", l: "Intervenants" },
              { v: "1000+", l: "Participants" },
              { v: "20+", l: "Partenaires" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-display text-4xl font-bold text-gold">
                  {s.v}
                </dt>
                <dd className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-sand/60">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
          <div className="scroll-hint flex h-9 w-6 items-start justify-center rounded-full border border-sand/40 pt-1.5">
            <span className="h-2 w-1 rounded-full bg-gold" />
          </div>
        </div>
      </section>

      {/* Pillars / Rubriques */}
      <Section
        eyebrow="Le rendez-vous"
        title="Un écosystème au service de l'investissement en Afrique"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              href: "/sommet",
              num: "01",
              title: "Le Sommet",
              text: "Programme, intervenants et lieu du rendez-vous annuel des décideurs et investisseurs internationaux.",
            },
            {
              href: "/dossiers-pays",
              num: "02",
              title: "Dossiers-Pays",
              text: "Analyses approfondies du climat des affaires et des secteurs porteurs dans cinq pays cibles.",
            },
            {
              href: "/magazine",
              num: "03",
              title: "Le Magazine",
              text: "Articles, portraits et analyses pour décoder les économies africaines au fil de l'année.",
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="card card-hover group relative overflow-hidden p-8"
            >
              <span className="font-display absolute -right-3 -top-6 text-8xl font-bold text-sand/70 transition group-hover:text-gold-light/40">
                {c.num}
              </span>
              <div className="relative">
                <div className="gold-rule" />
                <h3 className="font-display mt-5 text-2xl font-bold text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {c.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition group-hover:gap-3 group-hover:text-gold-dark">
                  En savoir plus <span aria-hidden>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Countries preview */}
      <section className="bg-sand/50">
        <Section eyebrow="Dossiers-Pays" title="55 économies, 55 opportunités !">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/dossiers-pays/${c.slug}`}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-emerald">
                  <Image
                    src={c.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 to-transparent" />
                  <div className="absolute bottom-4 left-5 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-2xl shadow-md ring-1 ring-gold/40">
                      {c.flag}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-background">
                        {c.name}
                      </h3>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-light">
                        {c.capital}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-7 pt-5">
                <p className="flex-1 text-sm leading-relaxed text-muted">
                  {c.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.sectors.slice(0, 2).map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-emerald/8 px-3 py-1 text-xs font-medium text-emerald"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald transition group-hover:gap-3 group-hover:text-gold-dark">
                  Consulter le dossier <span aria-hidden>→</span>
                </span>
                </div>
              </Link>
            ))}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gold/50 bg-white/40 p-8 text-center">
              <span className="font-display text-4xl text-gold">+</span>
              <p className="mt-3 text-sm text-muted">
                De nouveaux Dossiers-Pays seront ajoutés au fil des éditions.
              </p>
              <Link
                href="/dossiers-pays"
                className="mt-5 text-sm font-semibold text-emerald transition hover:text-gold-dark"
              >
                Voir tous les dossiers →
              </Link>
            </div>
          </div>
        </Section>
      </section>

      {/* Magazine preview */}
      <Section eyebrow="Le Magazine" title="L'actualité des économies africaines">
        <div className="grid gap-7 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <article key={a.title} className="card card-hover group flex flex-col overflow-hidden">
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
        <div className="mt-10 text-center">
          <Link href="/magazine" className="btn-outline-dark px-8 py-3 text-sm">
            Tous les articles
          </Link>
        </div>
      </Section>

      {/* Elles & ils éclairent */}
      <section className="bg-sand/50">
        <Section eyebrow="Elles & ils éclairent" title="Points de vue, analyses et portraits">
          <div className="grid gap-7 md:grid-cols-3">
            {eclairent.map((p) => (
              <div key={p.name} className="card card-hover flex flex-col p-8">
                <span
                  aria-hidden
                  className="font-display text-6xl leading-none text-gold/40"
                >
                  &ldquo;
                </span>
                <blockquote className="font-display mt-2 flex-1 text-lg italic leading-relaxed text-ink/85">
                  {p.quote}
                </blockquote>
                <p className="mt-5 border-l-2 border-gold pl-4 text-xs font-semibold uppercase tracking-[0.15em] text-gold-dark">
                  {p.topic}
                </p>
                <div className="mt-6 flex items-center gap-4 border-t border-sand pt-6">
                  <div className="font-display flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-lg font-bold text-gold ring-1 ring-gold/40">
                    {p.name
                      .replace(/^(M\.|Mme)\s+/, "")
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-ink">
                      {p.name}
                    </p>
                    <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                      {p.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Partners strip */}
      <section className="bg-emerald-deep pattern-kente text-background">
        <Section
          light
          eyebrow="Ils s'engagent"
          title="Un réseau de partenaires de confiance"
        >
          <div className="marquee relative -mx-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] sm:-mx-6">
            <div className="marquee-track gap-4 pr-4">
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={`${p.name}-${i}`}
                  className="flex min-h-24 w-56 shrink-0 items-center justify-center rounded-xl border border-emerald-light/50 bg-emerald/40 px-4 py-6 text-center transition hover:border-gold/50"
                >
                  <p className="text-sm font-semibold text-sand/90">{p.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Link
              href="/partenaires"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition hover:gap-3 hover:text-gold-light"
            >
              Devenir partenaire <span aria-hidden>→</span>
            </Link>
          </div>
        </Section>
      </section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-emerald-deep px-6 py-16 text-center text-background shadow-xl sm:px-12 sm:py-20">
          <Image
            src="/images/conference.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="deco-ring -left-20 -top-24 h-72 w-72" />
          <div className="deco-ring -bottom-28 -right-16 h-80 w-80" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              Édition {new Date(site.sommetDate).getFullYear()}
            </p>
            <h2 className="font-display mt-4 text-3xl font-bold text-balance sm:text-5xl">
              Rejoignez le Sommet Choose Africa
            </h2>
            <p className="mx-auto mt-5 max-w-2xl font-light leading-relaxed text-sand/85">
              Participants, exposants, partenaires : réservez votre place et
              prenez part au rendez-vous de l'investissement en Afrique.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/inscription" className="btn-gold px-8 py-3.5 text-sm">
                S'inscrire
              </Link>
              <Link
                href="/abonnements"
                className="btn-outline-light px-8 py-3.5 text-sm"
              >
                S'abonner à la newsletter
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
