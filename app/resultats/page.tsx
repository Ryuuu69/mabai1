"use client";
import { useEffect, useState, useCallback } from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

/**
 * Assets attendus :
 * - /public/proof/meta-roas-12x.png (ou .svg si tu gardes ce format)
 * - /public/proof/shopify-56k.png  (ou .svg)
 * - /public/demos/rieges-cover.jpg
 * - /public/demos/krok-cover.jpg
 */

const PROOFS = [
  {
    id: "meta12x",
    title: "Meta Ads — ROAS 12.56× sur 30 jours",
    subtitle: "Tableau de campagne : $1,644.98 dépensés → $20,663.95 de ventes",
    metrics: [
      { label: "ROAS moyen", value: "12.56×" },
      { label: "ROAS site", value: "12.46×" },
      { label: "Dépenses", value: "$1,644.98" },
      { label: "Ventes", value: "$20,663.95" },
    ],
    image: "/proof/meta-roas-12x.svg",
    caption: "Extrait Meta Ads (achat — 30 jours).",
  },
  {
    id: "back2back",
    title: "2 mois consécutifs en hausse",
    subtitle: "Shopify + retargeting + upsells",
    metrics: [
      { label: "Ventes mai", value: "$65,925" },
      { label: "Ventes juin", value: "$58,797" },
    ],
    image: "/proof/shopify-back2back.svg",
    caption: "Dashboard Shopify (mai/juin).",
  },
  {
    id: "shopify56k",
    title: "Shopify — 56 070 € sur 30 jours",
    subtitle: "Comparé au mois précédent : +219%",
    metrics: [
      { label: "Total des Ventes", value: "€56 070.50" },
      { label: "Croissance", value: "+219%" },
    ],
    image: "/proof/shopify-56k.svg",
    caption: "Dashboard Shopify (Dernier Mois vs Mai 1–Mai 31, 2023).",
  },
];

// ✅ Démos SANS vidéo. Les cartes sont cliquables (ouvrent le site).
const DEMOS = [
  {
    id: "rieges",
    client: "Institut de beauté Les Rièges",
    title: "Site vitrine + prise de RDV",
    cover: "/demos/rieges-cover.svg",
    url: "https://institut-les-rieges.netlify.app/", // corrige avec https://
  },
  {
    id: "krok",
    client: "KROK",
    title: "Commande en ligne + Stripe",
    cover: "/demos/krok-cover.svg",
    url: "https://krokburger.fr",
  },
];

type ProofItem = typeof PROOFS[number];
type DemoItem = typeof DEMOS[number];

function useEscClose(enabled: boolean, onClose: () => void) {
  useEffect(() => {
    if (!enabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enabled, onClose]);
}

function ProofGallery({ items }: { items: ProofItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = items.find((i) => i.id === openId);
  const onClose = useCallback(() => setOpenId(null), []);
  useEscClose(Boolean(openId), onClose);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
          >
            <button
              onClick={() => setOpenId(item.id)}
              className="block w-full text-left"
              aria-label={`Ouvrir l’aperçu: ${item.title}`}
            >
              <div className="relative aspect-[16/10] w-full">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                )}
              </div>
            </button>
            <div className="p-4">
              <div className="text-white font-semibold">{item.title}</div>
              {item.subtitle && (
                <div className="text-sm text-zinc-400 mt-1">{item.subtitle}</div>
              )}
              {!!item.metrics?.length && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-200"
                    >
                      <span className="font-medium text-white/90 mr-1">{m.value}</span>
                      <span className="text-zinc-400">{m.label}</span>
                    </span>
                  ))}
                </div>
              )}
              {item.caption && (
                <div className="text-xs text-zinc-500 mt-3">{item.caption}</div>
              )}
            </div>
          </Card>
        ))}
      </div>

      {openItem && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={onClose}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Fermer"
              className="absolute -top-10 right-0 text-zinc-300 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60">
              <div className="relative aspect-[16/10] w-full">
                {openItem.image ? (
                  <Image
                    src={openItem.image}
                    alt={openItem.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
                )}
              </div>
              <div className="p-4">
                <div className="text-white font-semibold">{openItem.title}</div>
                {openItem.subtitle && (
                  <div className="text-sm text-zinc-400 mt-1">
                    {openItem.subtitle}
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

// ✅ Démos : cartes cliquables (pas de bouton, pas de vidéo)
function DemoGrid({ items }: { items: DemoItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link
          key={item.id}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group focus:outline-none"
          aria-label={`Ouvrir le site : ${item.client}`}
        >
          <Card className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-colors group-hover:border-zinc-700">
            <div className="relative aspect-[16/10] w-full">
              {item.cover ? (
                <Image
                  src={item.cover}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
              )}
            </div>
            <div className="p-4">
              <div className="text-xs text-zinc-400">{item.client}</div>
              <div className="text-white font-semibold group-hover:underline">
                {item.title}
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default function ResultsPage() {
  const KPIS = [
    "+40% Taux de conversion",
    "–30% No-show",
    "+20% Panier moyen",
    "x2 Leads qualifiés",
    "+120% Reach social",
  ];

  return (
    <div className="py-16 lg:py-24">
      {/* Hero compact */}
      <section className="mb-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">
              Résultats vérifiables
            </Badge>
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              Des résultats concrets, pas des promesses.
            </h1>
            <p className="text-zinc-300 max-w-2xl mx-auto">
              Quelques preuves et démos concrètes issues de campagnes et projets livrés.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Proof gallery */}
      <section className="mb-16">
        <Container>
          <ProofGallery items={PROOFS} />
        </Container>
      </section>

      {/* KPI callout */}
      <section className="mb-16">
        <Container>
          <Card className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {KPIS.map((k) => (
                <span
                  key={k}
                  className="text-sm px-3 py-1 rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-200"
                >
                  {k}
                </span>
              ))}
            </div>
          </Card>
        </Container>
      </section>

      {/* Demos */}
      <section className="mb-16">
        <Container>
          <div className="mb-6 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Exemples de sites
            </h2>
          </div>
          <DemoGrid items={DEMOS} />
        </Container>
      </section>

      {/* CTA */}
      <section>
        <Container>
          <div className="text-center">
            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-500 px-8">
              <Link href="/rdv">Prendre un RDV</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
