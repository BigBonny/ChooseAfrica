"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";

type Remaining = {
  jours: number;
  heures: number;
  minutes: number;
  secondes: number;
};

function getRemaining(): Remaining | null {
  const diff = new Date(site.sommetDate).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    jours: Math.floor(diff / 86400000),
    heures: Math.floor(diff / 3600000) % 24,
    minutes: Math.floor(diff / 60000) % 60,
    secondes: Math.floor(diff / 1000) % 60,
  };
}

export default function Countdown({ compact = false }: { compact?: boolean }) {
  const [t, setT] = useState<Remaining | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setT(getRemaining());
    setReady(true);
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!ready) return null;
  if (!t) {
    return (
      <p className="text-sm font-semibold text-gold-light">
        Rendez-vous à la prochaine édition !
      </p>
    );
  }

  const cells = [
    { v: t.jours, l: "Jours" },
    { v: t.heures, l: "Heures" },
    { v: t.minutes, l: "Min" },
    { v: t.secondes, l: "Sec" },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {cells.map((c) => (
        <div
          key={c.l}
          className={`rounded-xl border border-gold/30 bg-emerald-deep/50 text-center backdrop-blur-sm ${
            compact ? "px-3 py-2" : "px-4 py-3 sm:px-5"
          }`}
        >
          <p
            className={`font-display font-bold text-gold tabular-nums ${
              compact ? "text-xl" : "text-2xl sm:text-3xl"
            }`}
          >
            {String(c.v).padStart(2, "0")}
          </p>
          <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-sand/60">
            {c.l}
          </p>
        </div>
      ))}
    </div>
  );
}
