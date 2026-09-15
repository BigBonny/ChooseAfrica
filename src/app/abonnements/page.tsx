"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

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
        description="Restez informé de l'actualité de l'investissement en Afrique : la newsletter EBNL et le Magazine Choose Africa."
      />

      {/* EBNL */}
      <Section eyebrow="EBNL — Eco-Business Newsletter" title="La newsletter des décideurs africains">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-ink/80">
              L'<strong>EBNL (Eco-Business Newsletter)</strong> est la lettre
              d'information de Choose Africa. Chaque semaine, recevez une
              sélection d'analyses, d'opportunités d'investissement et
              d'événements liés aux économies africaines.
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
                  Recevoir la newsletter
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
                  S&apos;abonner à l&apos;EBNL
                </button>
                <p className="mt-3 text-center text-xs text-muted">
                  En vous inscrivant, vous acceptez de recevoir nos e-mails.
                </p>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Magazine */}
      <section className="bg-sand/50">
        <Section eyebrow="Le Magazine" title="L'abonnement au Magazine Choose Africa">
          <div className="grid gap-7 md:grid-cols-3">
            {[
              {
                name: "Numérique",
                price: "Gratuit",
                features: [
                  "Accès aux articles en ligne",
                  "Newsletter EBNL incluse",
                  "Alertes sur les Dossiers-Pays",
                ],
                cta: "S'abonner",
                featured: false,
              },
              {
                name: "Premium",
                price: "49 €/an",
                features: [
                  "Tout le contenu Numérique",
                  "Dossiers-Pays complets en PDF",
                  "Archives du Magazine",
                  "Accès prioritaire au Sommet",
                ],
                cta: "Choisir Premium",
                featured: true,
              },
              {
                name: "Entreprise",
                price: "Sur devis",
                features: [
                  "Tout le contenu Premium",
                  "Licences multi-utilisateurs",
                  "Veille personnalisée par pays",
                  "Accompagnement dédié",
                ],
                cta: "Nous contacter",
                featured: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`card relative flex flex-col p-8 ${
                  plan.featured ? "border-gold ring-2 ring-gold/40 md:-translate-y-3" : ""
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-gold-dark px-5 py-1.5 text-xs font-semibold text-white shadow-md">
                    Le plus choisi
                  </span>
                )}
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                  {plan.name}
                </h3>
                <p className="font-display mt-3 text-4xl font-bold text-emerald">
                  {plan.price}
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
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
