"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import BrandLogo from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { cn } from "@/lib/utils";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";

type NavItem = { name: string; href: string };

const navigation: NavItem[] = [
  { name: "Services", href: "/#services" },
  { name: "Résultats", href: "/resultats" }, // Keep RǸsultats
  { name: "à propos", href: "/a-propos" }, // Keep �? propos
  { name: "Contact", href: "/contact" }, // Keep Contact
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // EmpǦche le scroll de l�?Tarri��re-plan quand le menu mobile est ouvert
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileMenuOpen]);

  // �%chap pour fermer le menu mobile
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-[#1E2235]",
        mobileMenuOpen ? "bg-[#0B0B10]" : "bg-[#0B0B10]/80 backdrop-blur-md"
      )}
    >
      <Container>
        {/* ��'��'��' Mobile: h-16 (inchangǸ) | Desktop: lg:h-20 pour laisser place au logo */}
        <nav className="flex h-16 lg:h-20 items-center justify-between" aria-label="Menu principal">
          {/* Logo header */}
          <Link href="/" aria-label="Aller �� l�?Taccueil" className="flex items-center">
            <BrandLogo context="header" />
          </Link>

          {/* Nav desktop */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-[#C7CAD9] hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <div className="ml-4 flex items-center gap-3">
              <GradientButton asChild>
                <Link
                  href="/rdv"
                  onClick={() =>
                    trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { from: "header" })
                  }
                  aria-label="Prendre un rendez-vous"
                >
                  Prendre un RDV
                </Link>
              </GradientButton>
            </div>
          </div>

          {/* Bouton hamburger */}
          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#C7CAD9]"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
        </nav>
      </Container>

      {/* MENU MOBILE via Portal, plein Ǹcran */}
      {mobileMenuOpen &&
        typeof window !== "undefined" &&
        createPortal(
          <div id="mobile-menu" className="fixed inset-0 z-[100]" role="dialog" aria-modal="true">
            {/* Backdrop qui masque l�?Tarri��re-plan */}
            <button
              aria-label="Fermer le menu (arri��re-plan)"
              className="absolute inset-0 bg-black/60 supports-[backdrop-filter]:backdrop-blur-[2px]"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Panneau (drawer) */}
            <div className="absolute inset-0 flex items-start justify-end">
              <div className="h-full w-full max-w-sm bg-[#0F1222] ring-1 ring-[#1E2235] px-6 py-6 overflow-y-auto">
                <div className="flex items-center justify-between">
                  <Link
                    href="/"
                    className="-m-1.5 p-1.5"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Aller �� l�?Taccueil"
                  >
                    <BrandLogo context="header" />
                  </Link>
                  <Button
                    variant="ghost"
                    className="-m-2.5 rounded-md p-2.5 text-[#C7CAD9]"
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Fermer le menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </Button>
                </div>

                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-[#1E2235]">
                    <div className="space-y-1 py-6">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-xl px-4 py-3 text-base text-[#C7CAD9] hover:text-white hover:bg-[#1E2235] transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="py-6 grid grid-cols-1 gap-3">
                      <GradientButton asChild>
                        <Link
                          href="/rdv"
                          onClick={() => {
                            trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { from: "header_mobile" });
                            setMobileMenuOpen(false);
                          }}
                        >
                          Prendre un RDV
                        </Link>
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}

