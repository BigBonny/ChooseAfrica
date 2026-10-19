import Image from "next/image";
import Countdown from "@/components/Countdown";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { programme, site, speakers } from "@/lib/data";

export const metadata = { title: "Le Sommet" };

export default function SommetPage() {
  return (
    <>
      <PageHero
        image="/images/conference.jpg"
        eyebrow="Rubrique 3 — Le Sommet"
        title="Le Sommet Choose Africa"
        description="Le rendez-vous annuel des décideurs, investisseurs et entrepreneurs. Programme, intervenants et lieu du Sommet."
      />

      {/* Countdown band */}
      <div className="border-b border-sand bg-sand/50 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 sm:px-6 md:flex-row">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-dark">
              Rendez-vous
            </p>
            <p className="font-display mt-1 text-lg font-bold text-ink">
              {site.sommetLabel}
            </p>
          </div>
          <Countdown compact />
        </div>
      </div>

      {/* Le programme */}
      <Section eyebrow="Le programme" title="Une journée pour comprendre, rencontrer et investir">
        <div className="card overflow-hidden">
          <ul className="divide-y divide-sand">
            {programme.map((item, i) => (
              <li
                key={i}
                className="group flex flex-col gap-3 px-6 py-6 transition hover:bg-sand/30 sm:flex-row sm:items-center sm:gap-8 sm:px-8"
              >
                <div className="flex w-24 shrink-0 items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <span className="font-mono text-sm font-bold text-gold-dark">
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                </div>
                <div className="shrink-0">
                  <span
                    className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                      item.type === "Plénière"
                        ? "bg-emerald/10 text-emerald"
                        : item.type === "Atelier"
                          ? "bg-gold/15 text-gold-dark"
                          : "bg-sand text-muted"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Les intervenants */}
      <section className="bg-sand/50">
        <Section eyebrow="Les intervenants" title="Des voix de référence sur l'investissement en Afrique">
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {speakers.map((s) => (
              <div key={s.name} className="card card-hover flex flex-col p-8">
                <div className="flex items-center gap-4">
                  <div className="font-display flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-lg font-bold text-gold ring-1 ring-gold/40">
                    {s.name
                      .replace(/^(M\.|Mme)\s+/, "")
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">
                      {s.name}
                    </h3>
                    <p className="mt-0.5 text-xs text-muted">{s.role}</p>
                  </div>
                </div>
                <p className="mt-6 border-l-2 border-gold pl-4 text-sm italic leading-relaxed text-ink/80">
                  {s.topic}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Le lieu */}
      <Section eyebrow="Le lieu" title="Un cadre à la hauteur de l'événement">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-lg font-light leading-relaxed text-ink/80">
              Le Sommet Choose Africa Events se tiendra dans un Palais des
              Congrès, facilement accessible aux délégations internationales et
              offrant des espaces adaptés aux plénières, aux ateliers et aux
              rendez-vous d&apos;affaires. La ville hôte sera annoncée
              prochainement.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { icon: "📍", text: "Palais des Congrès — ville à confirmer" },
                { icon: "🚆", text: "Accès facilité pour les délégations internationales" },
                { icon: "🤝", text: "Espace B2B dédié aux rendez-vous d'affaires" },
                { icon: "🍽️", text: "Déjeuner d'affaires & cocktail de clôture inclus" },
              ].map((f) => (
                <li key={f.text} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand/70 text-base ring-1 ring-gold/30">
                    {f.icon}
                  </span>
                  <span className="text-sm font-medium text-ink/80">{f.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/audience.jpg"
                alt="Palais des Congrès"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                  Le lieu
                </p>
                <p className="font-display mt-1 text-3xl font-bold italic text-background">
                  Palais des Congrès
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
