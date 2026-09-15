import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";

export const metadata = { title: "Choose Africa" };

const objectifs = [
  {
    title: "Promouvoir l'attractivité",
    text: "Mettre en lumière le potentiel économique et la diversité des pays africains auprès des investisseurs internationaux.",
  },
  {
    title: "Faciliter l'investissement",
    text: "Fournir des Dossiers-Pays rigoureux pour décoder les opportunités, les secteurs porteurs et les cadres réglementaires.",
  },
  {
    title: "Créer des rencontres",
    text: "Réunir décideurs publics, investisseurs et entrepreneurs autour d'un Sommet annuel de haut niveau.",
  },
  {
    title: "Accompagner la transformation",
    text: "Soutenir les chaînes de valeur locales et la diversification des économies africaines.",
  },
];

const parrainages = [
  "Ministère de l'Économie et des Finances",
  "Ministère de l'Europe et des Affaires étrangères",
  "Banque Africaine de Développement",
  "Commission de la CEMAC",
  "Chambre de Commerce et d'Industrie Paris Île-de-France",
  "Conseil National du Patronat (invités)",
];

export default function ChooseAfricaPage() {
  return (
    <>
      <PageHero
        image="/images/skyline.jpg"
        eyebrow="Rubrique 1 — Choose Africa"
        title="Choose Africa"
        description="Une initiative dédiée à la promotion de l'investissement et au rayonnement économique de l'Afrique, portée par un réseau d'acteurs publics et privés."
      />

      {/* Promoteur */}
      <Section eyebrow="Promoteur" title="À l'initiative du projet">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/meeting.jpg"
                alt="L'équipe Choose Africa en réunion"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-deep/70 to-transparent" />
              <span className="font-display absolute bottom-4 left-5 text-2xl font-bold text-background">
                Choose <span className="text-gold-light">Africa</span>
              </span>
            </div>
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-ink/80">
              Choose Africa est porté par un collectif d'entrepreneurs,
              d'institutions financières et de personnalités engagées dans le
              développement économique du continent. Le projet s'inspire des
              modèles <em>Forum Investir en Afrique</em>, <em>L'Opinion</em> et{" "}
              <em>Choose France</em>, en adaptant leur format aux réalités et
              opportunités africaines.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Le promoteur réunit une équipe pluridisciplinaire — économistes,
              juristes, communicants et chefs d'entreprise — qui conçoit le
              Sommet, les Dossiers-Pays et le Magazine dans une logique de
              service aux investisseurs et aux territoires.
            </p>
          </div>
        </div>
      </Section>

      {/* But & objectifs */}
      <section className="bg-sand/40">
        <Section eyebrow="But & objectifs" title="Comprendre pour investir, agir pour transformer">
          <div className="grid gap-5 sm:grid-cols-2">
            {objectifs.map((o, i) => (
              <div key={o.title} className="card card-hover p-8">
                <span className="font-display flex h-11 w-11 items-center justify-center rounded-full bg-emerald text-sm font-bold text-gold ring-1 ring-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display mt-5 text-xl font-bold text-ink">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {o.text}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </section>

      {/* Haut-parrainage */}
      <Section eyebrow="Haut-parrainage" title="Un engagement au plus haut niveau">
        <div className="card border-l-4 border-l-gold p-10">
          <p className="font-display text-xl italic leading-relaxed text-ink/85">
            Le Sommet Choose Africa se tient sous le haut-parrainage du Chef de
            l'État, témoignant de l'importance stratégique accordée à
            l'attractivité du continent et à la coopération économique
            internationale. Ce haut-parrainage assure la visibilité, la
            crédibilité et la portée institutionnelle du rendez-vous.
          </p>
        </div>
      </Section>

      {/* Parrainages */}
      <section className="bg-emerald-deep pattern-kente text-background">
        <Section light eyebrow="Parrainages" title="Le soutien d'institutions de référence">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {parrainages.map((p) => (
              <div
                key={p}
                className="rounded-xl border border-emerald-light/50 bg-emerald/40 px-6 py-7 transition hover:border-gold/50"
              >
                <p className="text-sm font-semibold text-sand/90">{p}</p>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
