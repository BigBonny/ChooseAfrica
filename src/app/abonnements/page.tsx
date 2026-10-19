"use client";

import { useState } from "react";
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
      "Information fiable et crédible sur le business en Afrique",
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
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const subscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setDone(true);
  };

  return (
    <>
      <PageHero
        image="/images/office.jpg"
        eyebrow="Rubrique 7 — Abonnements"
        title="Abonnements"
        description="S'abonner au Magazine Choose Africa Economy & Business Journal et à la Newsletter hebdomadaire de Choose Africa Events, c'est avoir à sa disposition en avant-première des informations fiables et crédibles sur les opportunités et les acteurs majeurs du business en Afrique."
      />

      {/* Pricing plans */}
      <Section eyebrow="Tarifs des abonnements" title="Choisissez votre formule">
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
          papier en Europe. Frais de livraison en Afrique et à
          l'international en sus.{" "}
          <Link
            href="/cgv"
            className="font-semibold text-emerald underline hover:text-gold-dark"
          >
            Consultez nos Conditions Générales de Vente
          </Link>
          .
        </p>
      </Section>

      {/* EBNL free preview */}
      <section className="bg-sand/50">
        <Section
          eyebrow="EBNL — Eco-Business Newsletter"
          title="Tester gratuitement la EBNL"
        >
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-ink/80">
                L'<strong>EBNL (Eco-Business Newsletter)</strong> est la lettre
                d'information de Choose Africa. Découvrez gratuitement un aperçu
                de nos analyses, opportunités d'investissement et événements
                liés aux économies africaines, puis passez à l'abonnement
                hebdomadaire pour un accès complet.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted">
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
            </div>

            <div className="card p-8 sm:p-9">
              {done ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-2xl text-gold ring-2 ring-gold/40">
                    ✓
                  </div>
                  <h3 className="font-display mt-5 text-2xl font-bold text-ink">
                    Inscription confirmée
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    Bienvenue dans la communauté EBNL. Surveillez votre boîte mail !
                  </p>
                </div>
              ) : (
                <form onSubmit={subscribe}>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    Recevoir un aperçu gratuit
                  </h3>
                  <div className="gold-rule mt-3" />
                  <p className="mt-1 text-sm text-muted">
                    Gratuit. Désinscription en un clic.
                  </p>
                  <label htmlFor="ebnl-email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="ebnl-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="vous@entreprise.com"
                    className="mt-5 w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                  />
                  <button
                    type="submit"
                    className="btn-gold mt-4 w-full px-6 py-3.5 text-sm"
                  >
                    S'abonner à l'aperçu EBNL
                  </button>
                  <p className="mt-3 text-center text-xs text-muted">
                    En vous inscrivant, vous acceptez de recevoir nos e-mails.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Section>
      </section>
    </>
  );
}
