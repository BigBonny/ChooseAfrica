import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

type Plan = {
  name: string;
  tagline: string;
  price6: string;
  price12: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Magazine — Édition numérique",
    tagline: "Le Magazine Choose Africa en format digital",
    price6: "9 €",
    price12: "17 €",
    features: [
      "Édition numérique du Magazine Choose Africa Economy & Business Journal",
      "Accès en avant-première aux articles et analyses",
      "Lecture sur tous vos appareils",
    ],
  },
  {
    name: "Magazine — Édition papier",
    tagline: "Le Magazine livré chez vous",
    price6: "15 €",
    price12: "28 €",
    features: [
      "Édition papier du Magazine Choose Africa",
      "Livraison par voie postale",
      "Informations fiables et crédibles sur le business en Afrique",
    ],
  },
  {
    name: "Newsletter hebdomadaire",
    tagline: "La lettre Choose Africa Events",
    price6: "6 €",
    price12: "11 €",
    features: [
      "Newsletter hebdomadaire de Choose Africa Events",
      "Opportunités d'affaires et acteurs majeurs du business en Afrique",
      "Alertes sur les Dossiers-Pays et le Sommet",
    ],
  },
  {
    name: "Magazine Numérique + Papier",
    tagline: "Le meilleur des deux supports",
    price6: "22 €",
    price12: "41 €",
    features: [
      "Édition numérique du Magazine Choose Africa",
      "Édition papier livrée chez vous",
      "Accès complet aux analyses et portraits",
    ],
    featured: true,
  },
  {
    name: "Magazine Numérique + Papier + Newsletter",
    tagline: "La formule la plus complète",
    price6: "26 €",
    price12: "50 €",
    features: [
      "Édition numérique du Magazine Choose Africa",
      "Édition papier livrée chez vous",
      "Newsletter hebdomadaire de Choose Africa Events",
      "Toute l'actualité du business africain en avant-première",
    ],
  },
];

export default function AbonnementsPage() {
  return (
    <>
      <PageHero
        image="/images/office.jpg"
        eyebrow="Rubrique 7 — Abonnements"
        title="Abonnements"
        description="S'abonner au Magazine Choose Africa Economy & Business Journal et à la Newsletter hebdomadaire de Choose Africa Events, c'est avoir à sa disposition en avant-première des informations fiables et crédibles sur les opportunités et les acteurs majeurs du business en Afrique."
      />

      {/* Pricing plans */}
      <Section eyebrow="Tarifs des abonnements" title="Choisissez votre formule" id="tarifs">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`card relative flex flex-col p-8 ${
                plan.featured
                  ? "border-gold ring-2 ring-gold/40 lg:-translate-y-3"
                  : ""
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-gold-dark px-5 py-1.5 text-xs font-semibold text-white shadow-md">
                  Le plus complet
                </span>
              )}
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{plan.tagline}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-emerald">
                  {plan.price12}
                </span>
                <span className="text-sm text-muted">/ 12 mois</span>
              </div>
              <p className="mt-1 text-sm text-muted">
                soit {plan.price6} / 6 mois
              </p>
              <ul className="mt-7 flex-1 space-y-3.5 border-t border-sand pt-7 text-sm text-muted">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[10px] font-bold text-gold-dark">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full px-6 py-3.5 text-sm ${
                  plan.featured ? "btn-gold" : "btn-outline-dark"
                }`}
              >
                S'abonner
              </button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Tarifs en euros T.T.C., frais d'envoi inclus pour les livraisons
          papier en Europe. Frais de livraison en Afrique et à l'international
          en sus.{" "}
          <Link
            href="/cgv"
            className="font-semibold text-emerald underline hover:text-gold-dark"
          >
            Consultez nos Conditions Générales de Vente
          </Link>
          .
        </p>
      </Section>

      {/* EBNL */}
      <section className="bg-sand/50">
        <Section
          eyebrow="EBNL — Eco-Business Newsletter"
          title="La newsletter des décideurs africains"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-relaxed text-ink/80">
              L'<strong>EBNL (Eco-Business Newsletter)</strong> est la lettre
              d'information de Choose Africa Events. Chaque semaine, recevez une
              sélection d'analyses, d'opportunités d'investissement et
              d'événements liés aux économies africaines — disponible dans la
              formule « Newsletter hebdomadaire » ou dans le pack complet
              « Magazine + Newsletter ».
            </p>
            <ul className="mx-auto mt-6 inline-block space-y-3 text-left text-sm text-muted">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-gold">✦</span>
                Analyses des Dossiers-Pays et secteurs porteurs
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-gold">✦</span>
                Agenda du Sommet et des rendez-vous B2B
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-gold">✦</span>
                Success stories et témoignages d'investisseurs
              </li>
            </ul>
            <div className="mt-8">
              <a
                href="#tarifs"
                className="btn-gold inline-block px-8 py-3.5 text-sm"
              >
                S'abonner — 6 € / 6 mois ou 11 € / 12 mois
              </a>
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}
