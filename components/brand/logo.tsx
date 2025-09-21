"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  href?: string;             // lien cliquable (par défaut vers /)
  className?: string;        // classes Tailwind (ex: "h-8")
  variant?: "dark" | "light"; // si tu as deux versions
  alt?: string;
};

export default function Logo({
  href = "/",
  className = "h-8",       // ← hauteur contrôlée ici (responsive: h-6 md:h-8)
  variant = "dark",
  alt = "MABAI — Agence",
}: Props) {
  const src = variant === "light" ? "/brand/logo-light.svg" : "/brand/logo.svg";

  // NB: next/image n'optimise pas les SVG, mais gère le layout/alt correctement.
  // Tu peux aussi utiliser <img> si tu préfères.
  return (
    <Link href={href} aria-label="Aller à l’accueil" className="inline-flex items-center">
      <Image
        src={src}
        alt={alt}
        width={240}           // largeur/hauteur juste pour le ratio
        height={60}
        className={`w-auto ${className}`} // on contrôle la hauteur via Tailwind
        priority
      />
    </Link>
  );
}
