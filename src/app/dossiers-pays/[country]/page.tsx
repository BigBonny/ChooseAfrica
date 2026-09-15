import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { countries } from "@/lib/data";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  return params.then((p) => {
    const country = countries.find((c) => c.slug === p.country);
    return { title: country ? country.name : "Dossier-Pays" };
  });
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ country: string }>;
}) {
  const { country: slug } = await params;
  const country = countries.find((c) => c.slug === slug);
  if (!country) notFound();

  return (
    <>
      <PageHero
        image={country.image}
        eyebrow="Dossiers-Pays"
        title={`${country.flag} ${country.name}`}
        description={country.blurb}
        crumbs={[{ label: "Dossiers-Pays", href: "/dossiers-pays" }, { label: country.name }]}
      />

      {/* Chiffres clés */}
      <Section eyebrow="Chiffres clés" title="L'économie en un coup d'œil">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {country.stats.map((s) => (
            <div key={s.label} className="card card-hover p-8 text-center">
              <p className="font-display text-3xl font-bold text-emerald">
                {s.value}
              </p>
              <div className="gold-rule mx-auto mt-4" style={{ width: 32 }} />
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Secteurs porteurs */}
      <section className="bg-sand/50">
        <Section eyebrow="Secteurs porteurs" title="Où investir">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {country.sectors.map((s, i) => (
              <div
                key={s}
                className="card card-hover flex items-center gap-5 p-6"
              >
                <span className="font-display flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald text-sm font-bold text-gold ring-1 ring-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-ink">{s}</span>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Atouts */}
      <Section eyebrow="Atouts" title="Pourquoi choisir ce pays">
        <div className="grid gap-7 md:grid-cols-2">
          <div className="card card-hover p-9">
            <div className="gold-rule" />
            <h3 className="font-display mt-5 text-2xl font-bold text-ink">
              Cadre institutionnel
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Stabilité politique, réformes du climat des affaires et
              engagements en faveur de la diversification économique. Le pays
              poursuit la modernisation de son environnement réglementaire pour
              faciliter l&apos;investissement privé.
            </p>
          </div>
          <div className="card card-hover p-9">
            <div className="gold-rule" />
            <h3 className="font-display mt-5 text-2xl font-bold text-ink">
              Opportunités
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Une base de ressources naturelles riches, un marché en croissance
              et une jeunesse nombreuse. Les chaînes de valeur locales offrent
              de nombreuses opportunités de transformation et de partenariats.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="relative overflow-hidden rounded-3xl bg-emerald-deep px-6 py-14 text-center text-background shadow-xl sm:px-12">
          <Image
            src={country.image}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="deco-ring -left-16 -top-20 h-64 w-64" />
          <div className="deco-ring -bottom-24 -right-12 h-72 w-72" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Approfondissez ce dossier au Sommet
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-light text-sand/85">
              Rencontrez les acteurs du {country.name} et explorez les
              opportunités d&apos;investissement lors des ateliers Dossiers-Pays.
            </p>
            <Link
              href="/inscription"
              className="btn-gold mt-8 px-8 py-3.5 text-sm"
            >
              S&apos;inscrire au Sommet
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
