"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Target, TrendingUp, BarChart3, Rocket, MousePointerClick, RefreshCcw, CheckCircle, Gauge, LineChart
} from "lucide-react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import Script from "next/script";

export default function AcquisitionCampagnesPage() {
  const handleCTAClick = (from: string) => {
    // ⚙️ Sécurise le tracking pour ne jamais bloquer la nav
    try {
      trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { from });
    } catch {}
  };

  const benefits = [
    {
      icon: Target,
      title: "Ciblage propre",
      desc: "ICP clarifié, audiences pertinentes et exclusions nettes pour éviter le gaspillage.",
      bullets: ["Segmentation intentionnelle", "Lookalikes pertinents", "Caping & exclusions"],
    },
    {
      icon: TrendingUp,
      title: "Créatifs qui scalent",
      desc: "Hooks/angles testés en continu, formats adaptés (UGC, carrousel, 6s).",
      bullets: ["Frameworks d’angles", "UGC & motion léger", "Batch A/B testing"],
    },
    {
      icon: BarChart3,
      title: "Tracking fiable",
      desc: "Consent Mode, conversions server-side, nomenclature & UTM disciplinés.",
      bullets: ["Pixels & server events", "UTM normalisés", "Nomenclature / naming"],
    },
    {
      icon: Rocket,
      title: "Funnel aligné",
      desc: "Offre, landing et messages cohérents avec l’intention → conversion plus fluide.",
      bullets: ["Promesse claire", "Preuves & réassurance", "Form steps rapides"],
    },
  ];

  const process = [
    { step: "01", title: "Audit & Plan", desc: "État des lieux, ICP, offre, canaux & budget, structure de campagnes." },
    { step: "02", title: "Setup & Tracking", desc: "Pixels, conversions, UTM, règles, conventions & dashboard." },
    { step: "03", title: "Launch & Test", desc: "Créas, audiences, itérations (J1–J14) avec coupe rapide de ce qui ne performe pas." },
    { step: "04", title: "Scale & CRO", desc: "Double sur ce qui marche, retarget, A/B landing, optimisation des formulaires." },
  ];

  const kpis = [
    { v: "+2.5%", l: "CTR moyen" },
    { v: "–30%", l: "CPL (MQL)" },
    { v: "+40%", l: "Taux de conv." },
    { v: "≥3x", l: "ROAS (e-com)" },
  ];

  const faqs = [
    {
      q: "Combien de temps pour voir un effet ?",
      a: "Souvent 2–4 semaines : on lance, on teste, on coupe, on scale. Si vous avez déjà de l’historique, c’est encore plus rapide.",
    },
    {
      q: "Quel budget pub mensuel ?",
      a: "Cas typiques PME : 1–5 k€/mois au départ. On l’ajuste après les premiers signaux positifs (CPL/ROAS).",
    },
    {
      q: "Vous gérez quelles plateformes ?",
      a: "Meta (FB/IG), Google (Search/Performance Max), parfois LinkedIn Ads selon ICP/B2B.",
    },
  ];

  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      {/* JSON-LD */}
      <Script id="ld-service-acq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Acquisition & Campagnes",
          serviceType: "Digital Advertising",
          provider: { "@type": "Organization", name: "MABAI", url: "https://mabai.fr" },
          areaServed: "France",
          description:
            "Meta Ads, Google Ads, retargeting et tracking propre pour générer des leads qualifiés et du CA mesurable.",
          url: "https://mabai.fr/services/acquisition-campagnes",
        })}
      </Script>

      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235] relative overflow-hidden">
        {/* 🎯 Fix: le calque décoratif ne doit pas intercepter les clics */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,.25), transparent 60%)" }}
        />
        <Container>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center space-y-5">
              <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">
                Meta Ads • Google Ads • Retargeting
              </Badge>
              <h1 className="text-4xl md:text-5xl font-semibold">Acquisition & Campagnes</h1>
              <p className="text-[#C7CAD9] max-w-2xl mx-auto">
                Des campagnes qui amènent des leads/ventes et un tracking propre pour piloter au KPI (pas à l’intuition).
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {/* ✅ Boutons corrigés : Button asChild + Link */}
                <Button asChild size="lg" className="px-8 bg-violet-600 hover:bg-violet-500">
                  <Link href="/rdv" onClick={() => handleCTAClick("acq-hero")}>
                    Prendre un RDV
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 border-violet-500 text-violet-400 hover:bg-violet-500/10"
                >
                  <Link href="/packs">Voir les packs</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group"
              >
                <Card className="bg-[#0B0B10] border-[#1E2235] h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)]">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <b.icon className="h-5 w-5 text-violet-400" />
                      <CardTitle className="text-white">{b.title}</CardTitle>
                    </div>
                    <CardDescription className="text-[#C7CAD9]">{b.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-[#C7CAD9] space-y-2 list-disc pl-5">
                      {b.bullets.map((x) => <li key={x}>{x}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235]">
        <Container>
          <div className="grid md:grid-cols-4 gap-6">
            {process.map((p, i) => (
              <Card key={p.step} className="bg-[#0B0B10] border-[#1E2235] transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="text-[#8B8EA3] text-xs">{p.step}</div>
                  <CardTitle className="text-white">{p.title}</CardTitle>
                  <CardDescription className="text-[#C7CAD9]">{p.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* KPIs */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235]">
        <Container>
          <Card className="bg-[#0B0B10] border-[#1E2235]">
            <CardHeader>
              <div className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-violet-400" />
                <CardTitle className="text-white">Indicateurs suivis</CardTitle>
              </div>
              <CardDescription className="text-[#C7CAD9]">Pilotage par données, pas au feeling.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {kpis.map((k) => (
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

      {/* FAQ courte */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235]">
        <Container>
          <div className="grid md:grid-cols-3 gap-6">
            {faqs.map((f) => (
              <Card key={f.q} className="bg-[#0B0B10] border-[#1E2235] hover:-translate-y-1 transition-all duration-300">
                <CardHeader><CardTitle className="text-white">{f.q}</CardTitle></CardHeader>
                <CardContent className="text-[#C7CAD9]">{f.a}</CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL (laisse tel quel si tu veux) */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">Audit gratuit (30 min)</h2>
              <p className="text-[#C7CAD9] mb-6 max-w-2xl mx-auto">
                On estime le potentiel, on propose un plan simple, et on suit les bons KPIs dès J1.
              </p>
              <Link href="/rdv" onClick={() => handleCTAClick("acq-cta")}>
                <Button size="lg" className="bg-violet-600 hover:bg-violet-500 px-8">Réserver un créneau</Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
