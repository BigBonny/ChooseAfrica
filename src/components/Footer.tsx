import Link from "next/link";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mt-24 bg-emerald-deep text-sand">
      {/* Newsletter band */}
      <div className="border-b border-emerald-light/40">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              EBNL — Eco-Business Newsletter
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-background">
              Recevez l&apos;essentiel de l&apos;économie africaine
            </h3>
          </div>
          <Link href="/abonnements" className="btn-gold px-7 py-3 text-sm">
            S&apos;abonner gratuitement
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-emerald ring-1 ring-gold/40">
              <span className="font-display text-base font-bold text-gold">CA</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-lg font-bold text-background">
                {site.name}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
                {site.tagline}
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-sand/70">
            {site.description}
          </p>
          <div className="mt-6 space-y-1 text-sm text-sand/60">
            <p>{site.address}</p>
            <p className="text-gold-light">{site.email}</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Découvrir
          </h3>
          <ul className="mt-5 space-y-2.5">
            {nav.slice(0, 5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-sand/75 transition hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Participer
          </h3>
          <ul className="mt-5 space-y-2.5">
            {nav.slice(5).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-sand/75 transition hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-light/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-sand/50 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name} — Tous droits réservés.
          </p>
          <p className="tracking-wide">{site.url}</p>
        </div>
      </div>
    </footer>
  );
}
