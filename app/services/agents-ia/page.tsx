"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bot, PhoneCall, MessageSquare, Database, Shield, LineChart } from "lucide-react";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import Script from "next/script";

export default function AgentsIAPage() {
  const handleCTAClick = (from: string) => {
    try {
      trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { from });
    } catch {}
  };

  const benefits = [
    {
      icon: MessageSquare,
      title: "Chat IA utile",
      desc: "Qualifie, répond, collecte les infos et escalade quand c’est nécessaire.",
      bullets: ["Intents & slots", "Règles de redirection", "Historique conversationnel"],
    },
    {
      icon: PhoneCall,
      title: "Agent vocal 24/7",
      desc: "Prend les appels, pose les bonnes questions, booke un RDV.",
      bullets: ["STT/TTS fiables", "Script paramétrable", "Fallback humain"],
    },
    {
      icon: Database,
      title: "Base de connaissances",
      desc: "FAQ, documents et process intégrés pour des réponses contextualisées.",
      bullets: ["Indexation contrôlée", "Versioning", "Tests & garde-fous"],
    },
    {
      icon: Shield,
      title: "Conformité & logs",
      desc: "RGPD, consentement et traçabilité, avec métriques de qualité.",
      bullets: ["Masquage PII", "Consent flows", "Logs & monitoring"],
    },
  ];

  const process = [
    { step: "01", title: "Use-cases & script", desc: "Intentions, parcours et résultats attendus." },
    { step: "02", title: "Sources & prompts", desc: "Constitution de la base, consignes & ton de marque." },
    { step: "03", title: "Calendrier/CRM", desc: "Qualification + prise de RDV + push CRM." },
    { step: "04", title: "Tests & métriques", desc: "Taux de résolution, CSAT, AHT, taux de booking." },
  ];

  const kpis = [
    { v: "+8/sem", l: "RDV bookés" },
    { v: "<10s", l: "1er temps de réponse" },
    { v: "70–85%", l: "Résolution" },
    { v: "4.6/5", l: "CSAT" },
  ];

  const faqs = [
    { q: "Quel ton/voix ?", a: "On aligne le ton, les limites et les redirections à votre marque et vos contraintes." },
    { q: "Ça remplace un commercial ?", a: "Non : l’IA fait le premier contact et la qualif ; l’humain close mieux avec une qualif propre." },
    { q: "Formation continue ?", a: "On améliore la base, les prompts et les jeux de tests selon le feedback réel." },
  ];

  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      {/* JSON-LD */}
      <Script id="ld-service-agents" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Agents IA (Chat & Voix)",
          serviceType: "Conversational AI",
          provider: { "@type": "Organization", name: "MABAI", url: "https://mabai.fr" },
          areaServed: "France",
          description:
            "Agents IA (chat & voix) pour qualifier les prospects, répondre aux questions et réserver des rendez-vous 24/7.",
          url: "https://mabai.fr/services/agents-ia",
        })}
      </Script>

      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235] relative overflow-hidden">
        {/* Fix: ce calque ne doit pas bloquer les clics */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background:
              "radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,.25), transparent 60%)",
          }}
        />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center space-y-5">
              <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">
                Chat • Voix • Booking
              </Badge>
              <h1 className="text-4xl md:text-5xl font-semibold">Agents IA (Chat & Voix)</h1>
              <p className="text-[#C7CAD9] max-w-2xl mx-auto">
                Un premier contact toujours présent, qui qualifie et booke, puis passe la main à l’humain quand il faut.
              </p>
              <div className="flex flex-wrap gap-3 justify-center pt-2">
                {/* Boutons corrigés */}
                <Button asChild size="lg" className="px-8 bg-violet-600 hover:bg-violet-500">
                  <Link href="/rdv" onClick={() => handleCTAClick("agents-hero")}>
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
                      {b.bullets.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
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
              <Card
                key={p.step}
                className="bg-[#0B0B10] border-[#1E2235] transition-all duration-300 hover:-translate-y-1"
              >
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
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {kpis.map((k) => (
                  <div
                    key={k.l}
                    className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]"
                  >
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
              <Card
                key={f.q}
                className="bg-[#0B0B10] border-[#1E2235] hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-white">{f.q}</CardTitle>
                </CardHeader>
                <CardContent className="text-[#C7CAD9]">{f.a}</CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 lg:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h2 className="text-3xl font-semibold mb-2">Audit gratuit (30 min)</h2>
              <p className="text-[#C7CAD9] mb-6 max-w-2xl mx-auto">
                Cas d’usage, sources, métriques — on définit un MVP IA utile et mesurable.
              </p>
              <Link href="/rdv" onClick={() => handleCTAClick("agents-cta")}>
                <Button size="lg" className="bg-violet-600 hover:bg-violet-500 px-8">
                  Réserver un créneau
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
