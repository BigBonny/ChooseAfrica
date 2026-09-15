"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";

const tabs = [
  { id: "participants", label: "Participants" },
  { id: "exposants", label: "Exposants" },
  { id: "partenaires", label: "Partenaires" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const fields: Record<TabId, { name: string; label: string; type?: string; required?: boolean }[]> = {
  participants: [
    { name: "prenom", label: "Prénom", required: true },
    { name: "nom", label: "Nom", required: true },
    { name: "fonction", label: "Fonction", required: true },
    { name: "organisation", label: "Organisation", required: true },
    { name: "email", label: "E-mail", type: "email", required: true },
    { name: "telephone", label: "Téléphone" },
  ],
  exposants: [
    { name: "societe", label: "Société", required: true },
    { name: "pays", label: "Pays", required: true },
    { name: "secteur", label: "Secteur d'activité", required: true },
    { name: "contact", label: "Nom du contact", required: true },
    { name: "email", label: "E-mail", type: "email", required: true },
    { name: "telephone", label: "Téléphone" },
    { name: "stand", label: "Type de stand souhaité" },
  ],
  partenaires: [
    { name: "organisation", label: "Organisation", required: true },
    { name: "type", label: "Type de partenariat souhaité", required: true },
    { name: "contact", label: "Nom du contact", required: true },
    { name: "email", label: "E-mail", type: "email", required: true },
    { name: "telephone", label: "Téléphone" },
  ],
};

export default function InscriptionPage() {
  const [tab, setTab] = useState<TabId>("participants");
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
        title="Inscription"
        description="Participants, exposants, partenaires : choisissez votre formule et rejoignez le Sommet Choose Africa."
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        {/* Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 rounded-full border border-sand bg-white p-1.5 shadow-sm">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setTab(t.id);
                setSubmitted(false);
              }}
              className={`flex-1 rounded-full px-4 py-3 text-sm font-semibold transition ${
                tab === t.id
                  ? "bg-emerald text-background shadow-md"
                  : "text-ink/70 hover:bg-sand/50 hover:text-emerald"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {submitted ? (
          <div className="card p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-2xl text-gold ring-2 ring-gold/40">
              ✓
            </div>
            <h2 className="font-display mt-6 text-3xl font-bold text-ink">
              Demande envoyée !
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-muted">
              Merci pour votre intérêt. Notre équipe vous recontactera dans les
              meilleurs délais pour confirmer votre inscription au Sommet
              Choose Africa.
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
              Inscription — {tabs.find((t) => t.id === tab)?.label}
            </h2>
            <div className="gold-rule mt-4" />
            <p className="mt-1 text-sm text-muted">
              Les champs marqués d'un * sont obligatoires.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {fields[tab].map((f) => (
                <div
                  key={f.name}
                  className={f.name === "stand" ? "sm:col-span-2" : ""}
                >
                  <label
                    htmlFor={f.name}
                    className="mb-1.5 block text-sm font-medium text-ink"
                  >
                    {f.label}
                    {f.required && <span className="text-terracotta"> *</span>}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type ?? "text"}
                    required={f.required}
                    className="w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="btn-gold mt-8 w-full px-6 py-3.5 text-sm sm:w-auto sm:px-12"
            >
              Envoyer ma demande
            </button>
          </form>
        )}
      </section>
    </>
  );
}
