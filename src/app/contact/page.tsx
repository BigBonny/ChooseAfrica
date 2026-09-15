"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { site } from "@/lib/data";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        image="/images/meeting.jpg"
        eyebrow="Rubrique 8 — Contact"
        title="Contact"
        description="Une question, un projet d'investissement, une demande de partenariat ? L'équipe Choose Africa vous répond."
      />

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          {/* Coordonnées */}
          <div>
            <h2 className="font-display text-3xl font-bold text-ink">
              Nos coordonnées
            </h2>
            <div className="gold-rule mt-4" />
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Choisissez le canal le plus adapté à votre demande. Nous
              traitons les messages sous 48 h ouvrées.
            </p>

            <ul className="mt-8 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald text-lg text-gold ring-1 ring-gold/40">
                  ✉
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    E-mail
                  </p>
                  <p className="text-sm font-semibold text-ink">
                    {site.email}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald text-lg text-gold ring-1 ring-gold/40">
                  ☎
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Téléphone
                  </p>
                  <p className="text-sm font-semibold text-ink">
                    {site.phone}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald text-lg text-gold ring-1 ring-gold/40">
                  📍
                </span>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted">
                    Bureaux
                  </p>
                  <p className="text-sm font-semibold text-ink">
                    {site.address}
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-2xl border-l-4 border-l-gold bg-sand/50 p-7">
              <h3 className="font-display text-base font-bold text-ink">Presse & médias</h3>
              <p className="mt-2 text-sm text-muted">
                Pour toute demande presse, contactez-nous à{" "}
                <span className="font-semibold text-emerald">
                  presse@choose-africa.com
                </span>
                .
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="card p-8 sm:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald text-2xl text-gold ring-2 ring-gold/40">
                  ✓
                </div>
                <h3 className="font-display mt-5 text-2xl font-bold text-ink">
                  Message envoyé
                </h3>
                <p className="mt-2 text-sm text-muted">
                  Merci de nous avoir contactés. Nous vous répondrons dans les
                  meilleurs délais.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 text-sm font-semibold text-emerald hover:text-gold-dark"
                >
                  Envoyer un autre message →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display text-2xl font-bold text-ink">
                  Écrivez-nous
                </h3>
                <div className="gold-rule mt-4" />
                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="c-nom" className="mb-1.5 block text-sm font-medium text-ink">
                      Nom *
                    </label>
                    <input
                      id="c-nom"
                      required
                      className="w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-ink">
                      E-mail *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-sujet" className="mb-1.5 block text-sm font-medium text-ink">
                      Sujet
                    </label>
                    <select
                      id="c-sujet"
                      className="w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                    >
                      <option>Inscription au Sommet</option>
                      <option>Dossiers-Pays</option>
                      <option>Partenariat</option>
                      <option>Presse</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="c-msg" className="mb-1.5 block text-sm font-medium text-ink">
                      Message *
                    </label>
                    <textarea
                      id="c-msg"
                      required
                      rows={5}
                      className="w-full rounded-lg border border-sand bg-background px-4 py-2.5 text-sm text-ink outline-none transition focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-gold mt-8 w-full px-6 py-3.5 text-sm sm:w-auto sm:px-12"
                >
                  Envoyer le message
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
