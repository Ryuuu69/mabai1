"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cog, Cable, Webhook, MailCheck, BellRing, Database, LineChart } from "lucide-react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import Script from "next/script";

export default function AutomatisationsIntegrationsPage() {
  const handleCTAClick = (from: string) => {
    try {
      trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { from });
    } catch {}
  };

  const benefits = [
    {
      icon: Cable,
      title: "Outils connectés",
      desc: "CRM, Notion, facturation, calendrier — tout se parle sans frictions.",
      bullets: ["Sync bidirectionnelle", "Champs propres", "Historisation minimaliste"],
    },
    {
      icon: Webhook,
      title: "Webhooks & API",
      desc: "Échanges fiables entre vos systèmes (Zapier/Make inclus).",
      bullets: ["Webhook in/out", "Retries & logs", "Idempotence & SLA"],
    },
    {
      icon: MailCheck,
      title: "Séquences & nurturing",
      desc: "Emails/SMS automatiques, relances et reprise no-show.",
      bullets: ["Templates réutilisables", "Tests A/B", "Calendrier intégré"],
    },
    {
      icon: BellRing,
      title: "Alerting & run",
      desc: "Alertes Slack/Email, dashboards, priorisation des exceptions.",
      bullets: ["Props obligatoires", "Fail-safe & requeue", "Playbooks d’intervention"],
    },
  ];

  const process = [
    { step: "01", title: "Cartographie", desc: "Outils, flux, points de friction, priorités business." },
    { step: "02", title: "Design des flux", desc: "Spécifications, schémas, mapping de champs et règles." },
    { step: "03", title: "Implémentation", desc: "Connexions, webhooks, orchestrations, tests end-to-end." },
    { step: "04", title: "Run & évolutions", desc: "Monitoring, alertes, doc, dette technique sous contrôle." },
  ];

  const kpis = [
    { v: "–60%", l: "Temps admin" },
    { v: "–35%", l: "No-show" },
    { v: "<10m", l: "SLA réponse" },
    { v: "+20%", l: "Productivité" },
  ];

  const faqs = [
    { q: "N8N/Make suffisent-ils ?", a: "Souvent oui pour démarrer vite. On peut aller vers API custom si l’échelle l’exige." },
    { q: "Quid de la sécurité RGPD ?", a: "Accès minimaux, journaux d’accès, consentement et purge. On suit vos DPA." },
    { q: "Combien d’outils max ?", a: "Autant que nécessaire, mais on favorise la simplicité : moins d’outils = moins d’erreurs." },
  ];

  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      {/* JSON-LD */}
      <Script id="ld-service-auto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Automatisations & Intégrations",
          serviceType: "Workflow Automation",
          provider: { "@type": "Organization", name: "MABAI", url: "https://mabai.fr" },
          areaServed: "France",
          description:
            "Automatisation CRM, séquences Email/SMS, webhooks et intégrations (Zapier/Make) pour fluidifier vos opérations.",
          url: "https://mabai.fr/services/automatisations-integrations",
        })}
      </Script>

      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235] relative overflow-hidden">
        {/* ✅ Ne bloque pas les clics */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,.25), transparent 60%)" }}
        />
        <Container>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center space-y-5">
              <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">
                CRM • Zapier/Make • Webhooks
              </Badge>
              <h1 className="text-4xl md:text-5xl font-semibold">Automatisations & Intégrations</h1>
              <p className="text-[#C7CAD9] max-w-2xl mx-auto">
                On connecte vos outils, on automatise le répétitif, et on mesure l’impact sur vos KPIs d’exploitation.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {/* ✅ Boutons corrigés */}
                <Button asChild size="lg" className="px-8 bg-violet-600 hover:bg-violet-500">
                  <Link href="/rdv" onClick={() => handleCTAClick("auto-hero")}>
                    Prendre un RDV
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-8 border-violet-500 text-violet-400 hover:bg-violet-500/10">
                  <Link href="/contact">Obtenir un plan & un devis en 24h</Link>
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
              <CardDescription className="text-[#C7CAD9]">Moins de tâches, moins de no-show, meilleures réponses.</CardDescription>
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

      {/* FAQ */}
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

      {/* CTA FINAL */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">Audit gratuit (30 min)</h2>
              <p className="text-[#C7CAD9] mb-6 max-w-2xl mx-auto">
                On cartographie vos flux, on propose 2–3 automatisations à ROI rapide et mesurable.
              </p>
              <Link href="/rdv" onClick={() => handleCTAClick("auto-cta")}>
                <Button size="lg" className="bg-violet-600 hover:bg-violet-500 px-8">Réserver un créneau</Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
