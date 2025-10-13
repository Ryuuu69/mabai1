"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TrustedByBanner() {
  const [imgError, setImgError] = useState(false);
  return (
    <section aria-labelledby="trustedby-title" className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-8">
        <p className="text-sm uppercase tracking-wider text-zinc-400">Preuves sociales</p>
        <h2 id="trustedby-title" className="mt-2 text-2xl md:text-3xl font-semibold text-white">
          Ils nous ont fait confiance
        </h2>
        <p className="mt-3 text-zinc-300">
          Des marques réelles, des résultats mesurables. Rejoignez celles qui
          transforment leur acquisition avec des actions claires et trackées.
        </p>
      </div>

      {/* Banner image */}
      <div className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50">
        <div className="relative w-full aspect-[21/5]">
          {imgError ? (
            <div className="absolute inset-0 grid place-items-center text-zinc-400">
              Bientôt disponible
            </div>
          ) : (
            <Image
              src="/brand/brands-banner.png"   // ➜ tu mettras ton image ici
              alt="Logos de marques accompagnées par MABAI"
              fill
              priority={false}
              sizes="(max-width:768px) 100vw, 1000px"
              className="object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>
      </div>

      {/* CTA to results page */}
      <div className="mt-8 flex justify-center">
        <Link
          href="/resultats"
          className="inline-flex items-center rounded-xl border border-violet-500 px-5 py-2.5 text-violet-300 hover:bg-violet-500/10 transition"
          aria-label="Voir les résultats vérifiables"
        >
          Voir les résultats
        </Link>
      </div>
    </section>
  );
}

