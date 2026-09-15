import Image from "next/image";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { videos } from "@/lib/data";

export const metadata = { title: "Vidéo" };

export default function VideoPage() {
  return (
    <>
      <PageHero
        image="/images/elephant.jpg"
        eyebrow="Rubrique 9 — Vidéo"
        title="Vidéo"
        description="Revivez les temps forts du Sommet, les témoignages d'investisseurs et les analyses en vidéo."
      />

      {/* Vidéo à la une */}
      <Section eyebrow="À la une" title="Le teaser officiel">
        <div className="card overflow-hidden">
          <div className="relative aspect-video bg-emerald-deep">
            <Image
              src={videos[0].image}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-emerald-deep/40" />
            <button
              aria-label="Lecture"
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-full bg-background/95 pl-1.5 text-3xl text-emerald shadow-2xl ring-4 ring-gold/30 transition group-hover:scale-110 group-hover:ring-gold/60">
                ▶
              </span>
            </button>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-deep/90 to-transparent p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
                {videos[0].duration}
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold text-background sm:text-3xl">
                {videos[0].title}
              </h3>
            </div>
          </div>
          <p className="p-7 text-sm leading-relaxed text-muted">
            {videos[0].description}
          </p>
        </div>
      </Section>

      {/* Playlist */}
      <section className="bg-sand/50">
        <Section eyebrow="Toutes les vidéos" title="La playlist Choose Africa">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((v) => (
              <div
                key={v.title}
                className="card card-hover group flex flex-col overflow-hidden"
              >
                <div className="relative aspect-video overflow-hidden bg-emerald">
                  <Image
                    src={v.image}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-emerald-deep/25 transition group-hover:bg-emerald-deep/10" />
                  <span className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background/90 pl-1 text-lg text-emerald shadow-lg transition group-hover:scale-110">
                      ▶
                    </span>
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-md bg-ink/75 px-2.5 py-1 text-xs font-semibold text-background">
                    {v.duration}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold leading-snug text-ink transition group-hover:text-emerald">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </section>
    </>
  );
}
