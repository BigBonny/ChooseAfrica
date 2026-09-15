"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { countries, nav, navExplorer, navPrimary, site } from "@/lib/data";

function Chevron() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
    >
      <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile overlay when navigating + lock body scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const dropdownPanel =
    "pointer-events-none invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100";

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_rgba(26,26,23,0.1)]" : ""
      }`}
    >
      {/* Top bar — folds away on scroll */}
      <div
        className={`overflow-hidden bg-emerald-deep text-sand/80 transition-all duration-300 ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-[11px] tracking-wide sm:px-6">
          <p className="hidden sm:block">
            {site.sommetLabel}
          </p>
          <p className="flex items-center gap-4">
            <span className="text-gold-light">{site.email}</span>
            <span className="hidden text-sand/50 md:inline">{site.address}</span>
          </p>
        </div>
      </div>

      {/* Main bar — stays above the overlay so the close button is reachable */}
      <div
        className={`relative z-50 border-b transition-colors duration-300 ${
          open
            ? "border-emerald-light/40 bg-emerald-deep/95"
            : "border-sand bg-background/92 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-emerald shadow-md ring-1 ring-gold/40 transition group-hover:ring-gold">
              <span className="font-display text-base font-bold text-gold">
                CA
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
            </span>
            <span className="flex flex-col leading-tight">
              <span
                className={`font-display text-lg font-bold tracking-tight transition-colors ${
                  open ? "text-background" : "text-ink"
                }`}
              >
                {site.name}
              </span>
              <span
                className={`text-[9px] font-semibold uppercase tracking-[0.3em] transition-colors ${
                  open ? "text-gold" : "text-gold-dark"
                }`}
              >
                {site.tagline}
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navPrimary.slice(0, 2).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                data-active={isActive(item.href)}
                className="nav-link text-sm font-medium text-ink/75 transition hover:text-emerald"
              >
                {item.label}
              </Link>
            ))}

            {/* Dossiers-Pays with country mega dropdown */}
            <div className="group relative">
              <Link
                href="/dossiers-pays"
                data-active={isActive("/dossiers-pays")}
                className="nav-link flex items-center gap-1.5 text-sm font-medium text-ink/75 transition hover:text-emerald"
              >
                Dossiers-Pays
                <Chevron />
              </Link>
              <div className={dropdownPanel}>
                <div className="grid w-[26rem] grid-cols-1 gap-1 rounded-2xl border border-sand bg-white p-3 shadow-[0_16px_48px_rgba(26,26,23,0.16)]">
                  {countries.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/dossiers-pays/${c.slug}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-sand/50"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sand/60 text-xl">
                        {c.flag}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-semibold text-ink">
                          {c.name}
                        </span>
                        <span className="block text-xs text-muted">
                          {c.capital}
                        </span>
                      </span>
                      <span className="text-sm text-emerald opacity-0 transition group-hover:opacity-100">
                        →
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/dossiers-pays"
                    className="mt-1 border-t border-sand px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-dark transition hover:text-gold"
                  >
                    Tous les dossiers →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/magazine"
              data-active={isActive("/magazine")}
              className="nav-link text-sm font-medium text-ink/75 transition hover:text-emerald"
            >
              Le Magazine
            </Link>

            {/* Explorer dropdown */}
            <div className="group relative">
              <button className="nav-link flex items-center gap-1.5 text-sm font-medium text-ink/75 transition hover:text-emerald">
                Explorer
                <Chevron />
              </button>
              <div className={dropdownPanel}>
                <div className="w-72 rounded-2xl border border-sand bg-white p-3 shadow-[0_16px_48px_rgba(26,26,23,0.16)]">
                  {navExplorer.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-3 py-2.5 transition hover:bg-sand/50"
                    >
                      <span className="block text-sm font-semibold text-ink">
                        {item.label}
                      </span>
                      <span className="block text-xs text-muted">
                        {item.desc}
                      </span>
                    </Link>
                  ))}
                  <Link
                    href="/inscription"
                    className="btn-gold mt-2 w-full px-4 py-2.5 text-sm"
                  >
                    S&apos;inscrire au Sommet
                  </Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden lg:block">
            <Link href="/inscription" className="btn-gold px-6 py-2.5 text-sm">
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile trigger */}
          <button
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-lg border transition lg:hidden ${
              open
                ? "border-emerald-light/60 text-gold-light"
                : "border-sand text-ink hover:border-gold"
            }`}
          >
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute h-0.5 w-5 bg-current transition-all duration-300 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Full-screen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-emerald-deep pattern-kente grain transition-[opacity,visibility] duration-500 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="deco-ring -right-24 top-16 h-80 w-80" />
        <div className="deco-ring -bottom-32 -left-24 h-96 w-96" />

        {/* Spacer matching header height */}
        <div className="h-16" />

        <nav className="relative mx-auto flex w-full max-w-xl flex-1 flex-col justify-center gap-1 overflow-y-auto px-6 py-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="gold-rule" style={{ width: 32 }} />
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold">
              Navigation
            </p>
          </div>
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={open ? { animationDelay: `${0.08 + i * 0.05}s` } : undefined}
              className={`group flex items-baseline gap-4 py-2 ${
                open ? "animate-fade-up" : ""
              }`}
            >
              <span className="font-mono text-xs font-semibold text-gold/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-display text-[1.75rem] font-bold leading-tight transition-colors group-hover:text-gold-light ${
                  isActive(item.href) ? "text-gold" : "text-background"
                }`}
              >
                {item.label}
              </span>
            </Link>
          ))}

          {/* Country shortcuts */}
          <div
            style={open ? { animationDelay: "0.55s" } : undefined}
            className={`mt-6 flex flex-wrap gap-2 ${open ? "animate-fade-up" : ""}`}
          >
            {countries.map((c) => (
              <Link
                key={c.slug}
                href={`/dossiers-pays/${c.slug}`}
                className="flex items-center gap-2 rounded-full border border-emerald-light/60 bg-emerald/40 px-3.5 py-1.5 text-xs font-semibold text-sand/90 transition hover:border-gold/60 hover:text-gold-light"
              >
                <span>{c.flag}</span>
                {c.name.replace("Le ", "")}
              </Link>
            ))}
          </div>
        </nav>

        {/* Overlay footer */}
        <div
          style={open ? { animationDelay: "0.65s" } : undefined}
          className={`relative border-t border-emerald-light/40 px-6 py-5 ${
            open ? "animate-fade-up" : ""
          }`}
        >
          <p className="text-xs text-sand/60">{site.sommetLabel}</p>
          <p className="mt-1 text-sm font-semibold text-gold-light">
            {site.email}
          </p>
        </div>
      </div>
    </header>
  );
}
