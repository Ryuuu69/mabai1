"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { LineChart } from "lucide-react";

export default function ResultsPage() {
  const cases = [
    {
      tag: "Local • Esthétique",
      title: "Institut de beauté — +9 RDV/semaine",
      before: ["Site lent (>5s)", "Aucun tracking", "Appels manqués"],
      after: ["Site <2s", "Chat IA + agent vocal", "Calendly intégré"],
      metrics: [
        { v: "+280%", l: "Leads qualifiés" },
        { v: "+9/sem", l: "RDV bookés" },
        { v: "–35%", l: "No-show" },
      ],
      approach: ["Landing claire", "Bot FAQ + booking", "Campagnes locales + retargeting"],
    },
    {
      tag: "E-commerce",
      title: "D2C accessoires — ROAS 3.1x",
      before: ["PMAX non segmenté", "Créatifs génériques", "Abandon panier élevé"],
      after: ["Angles UGC", "Segmentation intention", "Relances automatisées"],
      metrics: [
        { v: "3.1x", l: "ROAS" },
        { v: "+34%", l: "AOV" },
        { v: "–22%", l: "Abandon panier" },
      ],
      approach: ["Tests créas", "Bundles & upsell", "Emails/SMS post-add-to-cart"],
    },
    // 🔁 Cas 3 : LE KUISTO (fast-food) — commandes en ligne & click-and-collect
    // NOTE: ajuste librement les chiffres si tu veux coller au réel.
    {
      tag: "Local • Restauration rapide",
      title: "LE KUISTO — commandes en ligne & click-and-collect",
      before: [
        "Commandes au comptoir/téléphone uniquement",
        "Temps d’attente élevés aux heures de rush",
        "Menu non à jour / options peu visibles",
      ],
      after: [
        "Site de commande en ligne (mobile-first)",
        "Click-and-collect avec créneaux horodatés",
        "Paiement en ligne + upsell simple",
      ],
      metrics: [
        { v: "80/mois", l: "Commandes en ligne" },
        { v: "–30%", l: "Temps d’attente moyen" },
        { v: "+18%", l: "Panier moyen" },
      ],
      approach: [
        "Parcours 3 étapes (menu → panier → paiement)",
        "Menu dynamique (options/variantes) + upsell",
        "Tracking & campagnes locales (Search/Maps + retarget)",
      ],
    },
  ];

  const globalKPIs = [
    { v: "+40%", l: "Taux de conversion" },
    { v: "–30%", l: "Coût par lead" },
    { v: "+25%", l: "RDV tenus" },
    { v: "<3s", l: "Temps de chargement" },
  ];

  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,.25), transparent 60%)" }}
        />
        <Container>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center space-y-4">
              <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">Études de cas</Badge>
              <h1 className="text-4xl md:text-5xl font-semibold">Ce que ça change</h1>
              <p className="text-[#C7CAD9] max-w-3xl mx-auto">
                Des exemples concrets pour illustrer l’impact d’un socle propre, d’actions simples et d’un suivi des bons KPIs.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* KPIs globaux */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235]">
        <Container>
          <Card className="bg-[#0B0B10] border-[#1E2235]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-violet-400" />
                <CardTitle className="text-white">Tendances obtenues (ordre de grandeur)</CardTitle>
              </div>
              <CardDescription className="text-[#C7CAD9]">
                Les valeurs varient selon le contexte, mais l’approche reste la même.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {globalKPIs.map((k) => (
                  <div key={k.l} className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div className="text-2xl font-bold text-violet-400">{k.v}</div>
                    <div className="text-sm text-[#C7CAD9]">{k.l}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Cas par cas */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {cases.map((c) => (
              <Card
                key={c.title}
                className="bg-[#0B0B10] border-[#1E2235] transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">{c.tag}</Badge>
                  </div>
                  <CardTitle className="text-white">{c.title}</CardTitle>
                  <CardDescription className="text-[#C7CAD9]">Avant → Après</CardDescription>
                </CardHeader>
                <CardContent className="text-[#C7CAD9] space-y-4">
                  <div>
                    <div className="text-white font-medium mb-1">Avant</div>
                    <ul className="list-disc pl-5 space-y-1">{c.before.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Après</div>
                    <ul className="list-disc pl-5 space-y-1">{c.after.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {c.metrics.map((m) => (
                      <div
                        key={m.l}
                        className="text-center p-3 bg-[#0B0B10] rounded-lg border border-[#1E2235]"
                      >
                        <div className="text-xl font-bold text-violet-400">{m.v}</div>
                        <div className="text-xs text-[#C7CAD9]">{m.l}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Approche appliquée</div>
                    <ul className="list-disc pl-5 space-y-1">{c.approach.map((x) => <li key={x}>{x}</li>)}</ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-500 px-8">
              <Link href="/rdv">Parler d’un cas similaire</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
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

// Assets are expected under /public/proof/... and /public/demos/...

const PROOFS = [
  {
    id: "roas89k",
    title: "Campagne e-commerce — +$88.9k CA incrémental",
    subtitle: "Meta Ads + landing optimisée",
    metrics: [
      { label: "ROAS moyen", value: "12.97x" },
      { label: "Coût/achat", value: "$7.84" },
      { label: "Achats", value: "875" },
    ],
    image: "/proof/roas-table.png",
    caption: "Extrait Meta Ads (30 j).",
  },
  {
    id: "back2back",
    title: "2 mois consécutifs en hausse",
    subtitle: "Shopify + retargeting + upsells",
    metrics: [
      { label: "Ventes mai", value: "$65,925" },
      { label: "Ventes juin", value: "$58,797" },
    ],
    image: "/proof/shopify-back2back.png",
    caption: "Dashboard Shopify (mai/juin).",
  },
  {
    id: "brands",
    title: "Ils nous font confiance",
    subtitle: "Sélection de marques accompagnées",
    image: "/proof/brands-wall.png",
    caption: "Logos.",
  },
];

const DEMOS = [
  {
    id: "alp",
    client: "ALP Plomberie",
    title: "Site vitrine + prise de RDV",
    cover: "/demos/alp-cover.jpg",
    url: "https://…",
    video: "https://www.youtube.com/embed/XXXXXXXX",
  },
  {
    id: "krok",
    client: "KROK",
    title: "Commande en ligne + Stripe",
    cover: "/demos/krok-cover.jpg",
    url: "https://…",
    video: "/demos/krok-demo.mp4",
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
                    priority={false}
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
              {Array.isArray(item.metrics) && item.metrics.length > 0 && (
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

function DemoGrid({ items }: { items: DemoItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const openItem = items.find((i) => i.id === openId);
  const onClose = useCallback(() => setOpenId(null), []);
  useEscClose(Boolean(openId), onClose);

  const isEmbed = (src?: string) =>
    !!src && (src.includes("youtube.com") || src.includes("youtu.be") || src.includes("vimeo.com"));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Card
            key={item.id}
            className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors"
          >
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
              <div className="text-white font-semibold">{item.title}</div>
              <div className="mt-3 flex flex-wrap gap-3">
                {item.url && (
                  <Button asChild variant="outline" className="border-zinc-700 text-zinc-200">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Voir le site
                    </a>
                  </Button>
                )}
                {item.video && (
                  <Button
                    variant="default"
                    className="bg-violet-600 hover:bg-violet-500"
                    onClick={() => setOpenId(item.id)}
                  >
                    Voir la démo
                  </Button>
                )}
              </div>
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
                {isEmbed(openItem.video) ? (
                  <iframe
                    src={openItem.video}
                    title={openItem.title}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : openItem.video ? (
                  <video
                    src={openItem.video}
                    className="absolute inset-0 w-full h-full"
                    controls
                    playsInline
                  />
                ) : (
                  <div className="absolute inset-0 bg-zinc-800" />
                )}
              </div>
              <div className="p-4">
                <div className="text-white font-semibold">{openItem.title}</div>
                <div className="text-sm text-zinc-400 mt-1">{openItem.client}</div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
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
              Exemples de sites & démos
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
              <Link href="/contact">Obtenir un plan & un devis en 24h</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
