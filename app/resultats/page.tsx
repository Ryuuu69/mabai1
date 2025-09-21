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
