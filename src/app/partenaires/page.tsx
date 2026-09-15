import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { partners } from "@/lib/data";

export const metadata = { title: "Les Partenaires" };

const tiers = [
  "Partenaire institutionnel",
  "Partenaire financier",
  "Partenaire sponsor",
  "Partenaire officiel",
  "Média partenaire",
];

export default function PartenairesPage() {
  return (
    <>
      <PageHero
        image="/images/handshake.jpg"
        eyebrow="Rubrique 5 — Les Partenaires"
        title="Les Partenaires"
        description="Institutions, financeurs, entreprises et médias : un écosystème engagé aux côtés de Choose Africa pour promouvoir l'investissement en Afrique."
      />

      <Section eyebrow="Nos partenaires" title="Un réseau pluriel">
        <div className="space-y-14">
          {tiers.map((tier) => {
            const list = partners.filter((p) => p.tier === tier);
            if (list.length === 0) return null;
            return (
              <div key={tier}>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-dark">
                    {tier}
                  </h3>
                  <div className="h-px flex-1 bg-sand" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {list.map((p) => (
                    <div
                      key={p.name}
                      className="card card-hover flex items-center gap-5 p-7"
                    >
                      <div className="font-display flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-emerald text-sm font-bold text-gold ring-1 ring-gold/40">
                        {p.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                      <p className="text-sm font-semibold text-ink">{p.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-emerald-deep pattern-kente text-background">
        <Image
          src="/images/audience.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <Section light eyebrow="Devenir partenaire" title="Associez votre marque au Sommet" className="relative">
          <p className="max-w-2xl text-lg font-light leading-relaxed text-sand/85">
            Choose Africa offre aux partenaires une visibilité auprès d&apos;un
            public qualifié de décideurs et d&apos;investisseurs, ainsi que des
            opportunités de networking tout au long de l&apos;année.
          </p>
          <Link href="/inscription" className="btn-gold mt-9 px-8 py-3.5 text-sm">
            Devenir partenaire
          </Link>
        </Section>
      </section>
    </>
  );
}
