"use client";

import { useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

type Category = {
  id: string;
  label: string;
  price: string;
  priceNote?: string;
  includes: string[];
  featured?: boolean;
};

const categories: Category[] = [
  {
    id: "payante",
    label: "Inscription payante",
    price: "125 € - 140 $",
    includes: [
      "Accès aux conférences",
      "Accès aux ateliers",
      "Accès aux cocktails",
      "Déjeuner inclus",
    ],
  },
  {
    id: "exposants",
    label: "Exposants",
    price: "4 500 € - 5 040 €",
    includes: [
      "Stand de 10 m²",
      "Accès aux cocktails",
      "Déjeuner inclus",
    ],
    featured: true,
  },
  {
    id: "intervenants",
    label: "Intervenants collaborateurs",
    price: "Gratuite",
    priceNote: "Soumise à conditions",
    includes: [
      "Inscription offerte aux intervenants collaborateurs",
      "Accès selon conditions validées avec l'organisation",
    ],
  },
  {
    id: "partenaires",
    label: "Partenaires",
    price: "À négocier",
    includes: [
      "Formule de partenariat à définir",
      "Tarif négocié selon le niveau de partenariat",
    ],
  },
  {
    id: "live",
    label: "Live streaming",
    price: "Nous contacter",
    includes: [
      "Participation au Sommet en live streaming",
      "Accès aux conférences en direct",
      "Replays disponibles",
    ],
  },
];

const formFields = [
  { name: "prenom", label: "Prénom", required: true },
  { name: "nom", label: "Nom", required: true },
  { name: "fonction", label: "Fonction", required: true },
  { name: "organisation", label: "Organisation", required: true },
  { name: "email", label: "E-mail", type: "email", required: true },
  { name: "telephone", label: "Téléphone" },
  { name: "categorie", label: "Catégorie d'inscription souhaitée", required: true, full: true },
];

export default function InscriptionPage() {
  const [selected, setSelected] = useState<string>("payante");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        image="/images/audience.jpg"
        eyebrow="Rubrique 6 — Inscription"
        title="Inscription au Sommet"
        description="Vous pouvez participer au Sommet Choose Africa Events physiquement ou en live streaming. Choisissez votre formule d'inscription parmi les cinq catégories ci-dessous."
      />

      <Section eyebrow="Tarifs d'inscription" title="Cinq formules d'inscription">
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelected(cat.id)}
              className={`card relative flex flex-col p-8 text-left transition ${
                selected === cat.id
                  ? "border-gold ring-2 ring-gold/40"
                  : cat.featured
                    ? "border-gold/60"
                    : ""
              }`}
            >
              {cat.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-gold to-gold-dark px-5 py-1.5 text-xs font-semibold text-white shadow-md">
                  Formule exposant
                </span>
              )}
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
                {cat.label}
              </h3>
              <p className="font-display mt-3 text-3xl font-bold text-emerald">
                {cat.price}
              </p>
              {cat.priceNote && (
                <p className="mt-1 text-sm text-muted">{cat.priceNote}</p>
              )}
              <ul className="mt-7 flex-1 space-y-3.5 border-t border-sand pt-7 text-sm text-muted">
                {cat.includes.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[10px] font-bold text-gold-dark">
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <span
                className={`mt-8 w-full px-6 py-3.5 text-center text-sm ${
                  selected === cat.id ? "btn-gold" : "btn-outline-dark"
                }`}
              >
                {selected === cat.id ? "Sélectionné" : "Choisir cette formule"}
              </span>
            </button>
          ))}
        </div>
      </Section>

      <section className="bg-sand/50">
        <Section eyebrow="Formulaire d'inscription" title="Demande d'inscription">
          <div className="mx-auto max-w-3xl">
            {submitted ? (
              <div className="card p-12 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-2xl text-gold ring-2 ring-gold/40">
                  ✓
                </div>
                <h2 className="font-display mt-6 text-3xl font-bold text-ink">
                  Demande envoyée !
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm text-muted">
                  Merci pour votre intérêt. Notre équipe vous recontactera dans
                  les meilleurs délais pour confirmer votre inscription au
                  Sommet Choose Africa Events (
                  {categories.find((c) => c.id === selected)?.label}).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-emerald hover:text-gold-dark"
                >
                  Soumettre une autre demande →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 sm:p-10">
                <h2 className="font-display text-2xl font-bold text-ink">
                  Inscription —{" "}
                  {categories.find((c) => c.id === selected)?.label}
                </h2>
                <div className="gold-rule mt-4" />
                <p className="mt-1 text-sm text-muted">
                  Les champs marqués d'un * sont obligatoires.
                </p>
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  {formFields.map((f) => (
                    <div
                      key={f.name}
                      className={f.full ? "sm:col-span-2" : ""}
                    >
                      <label
                        htmlFor={f.name}
                        className="mb-1.5 block text-sm font-medium text-ink"
                      >
                        {f.label}
                        {f.required && <span className="text-terracotta"> *</span>}
                      </label>
                      {f.name === "categorie" ? (
                        <select
                          id={f.name}
                          name={f.name}
                          value={selected}
                          onChange={(e) => setSelected(e.target.value)}
                          required={f.required}
                          className="w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                        >
                          {categories.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.label} — {c.price}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          id={f.name}
                          name={f.name}
                          type={f.type ?? "text"}
                          required={f.required}
                          className="w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-start gap-3">
                  <input
                    id="cgv"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-sand text-emerald focus:ring-emerald/20"
                  />
                  <label htmlFor="cgv" className="text-sm text-muted">
                    J'accepte les{" "}
                    <Link
                      href="/cgv"
                      className="font-semibold text-emerald underline hover:text-gold-dark"
                    >
                      Conditions Générales de Vente
                    </Link>{" "}
                    de Choose Africa Events. *
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn-gold mt-8 w-full px-6 py-3.5 text-sm sm:w-auto sm:px-12"
                >
                  Envoyer ma demande
                </button>
              </form>
            )}
          </div>
        </Section>
      </section>
    </>
  );
}
