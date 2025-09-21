"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type Service = { name: string; href: string };

type Props = {
  open: boolean;
  onClose: () => void;
  services: Service[];
  /** Taille du logo dans le popup (ex: "h-72 md:h-80 lg:h-96") */
  logoSizeClass?: string;
};

export default function ServicesPopup({
  open,
  onClose,
  services,
  logoSizeClass = "h-72 md:h-80 lg:h-96",
}: Props) {
  // Lock du scroll de la page quand ouvert
  useEffect(() => {
    if (!open) return;
    const prevHtml = document.documentElement.style.overflow;
    const prevBody = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, [open]);

  if (!open) return null;

  // === PORTAL DIRECTEMENT DANS document.body (aucun parent ne peut clipper) ===
  return createPortal(
    <div
      // Forcé en plein écran et au-dessus de TOUT (même si des parents ont transform)
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647, // très haut
        pointerEvents: "auto",
      }}
      aria-modal="true"
      role="dialog"
    >
      {/* Backdrop qui masque la page */}
      <div
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.8)",
          backdropFilter: "blur(3px)",
        }}
      />
      {/* Contenu scrollable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Barre top (fermer) */}
        <div className="w-full flex items-center justify-end p-4 sm:p-6">
          <Button variant="ghost" className="text-[#C7CAD9]" onClick={onClose} aria-label="Fermer">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* LOGO GÉANT — net (SVG), PAS de transform */}
        <div className="mt-2 mb-8">
          <Image
            src="/brand/logo.svg"
            alt="MABAI"
            width={1400}
            height={380}
            className={`${logoSizeClass} w-auto`} // ← AGRANDIS ICI (ex: h-80 md:h-96 lg:h-[28rem])
            priority
          />
        </div>

        {/* Liens services */}
        <div className="w-full max-w-xl px-6 sm:px-8 pb-16">
          <div className="flex flex-col">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="rounded-xl px-4 py-4 text-lg sm:text-xl font-medium text-[#C7CAD9] hover:text-white hover:bg-[#1E2235] transition-colors"
                onClick={onClose}
              >
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
