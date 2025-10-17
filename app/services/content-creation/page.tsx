"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  LineChart,
  Clock,
  Megaphone,
  Sparkles,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import Script from "next/script";
import React from "react";

const objectives = [
  {
    icon: Megaphone,
    title: "Des pubs prêtes à diffuser",
    description:
      "Nous produisons vos vidéos & visuels, sans tournage ni logistique de plateau.",
  },
  {
    icon: Sparkles,
    title: "Effet “tournage” en IA",
    description:
      "Interviews de rue, porte-parole face cam, UGC, démos produit… recréés par IA.",
  },
  {
    icon: LineChart,
    title: "Pensé pour performer",
    description:
      "Hooks, scripts et variantes pour tester rapidement et scaler ce qui fonctionne.",
  },
  {
    icon: Clock,
    title: "Déploiement express",
    description:
      "Brief ultra-simple, production end-to-end. Apparition caméra facultative.",
  },
];

const formats = [
  {
    category: "Formats & styles (100% IA ou hybride)",
    items: [
      "Interview de rue (micro-trottoir) IA",
      "Porte-parole face caméra (avatar/clone)",
      "UGC-style (mains/produit) avec voix off",
      "Démonstrations & tutoriels produit",
      "Carrousels & visuels Ads (variantes)",
      "Testimonials & études de cas synthétiques",
    ],
  },
  {
    category: "Ce dont nous avons besoin de vous",
    items: [
      "Un brief express (offre, cible, objections)",
      "Votre identité visuelle (logo/charte) — optionnel",
      "Apparition caméra si vous le souhaitez",
      "Validation des messages clés",
    ],
  },
];

const useCases = [
  {
    title: "Micro-trottoir IA pour retail",
    description:
      "Questions/réponses rythmées avec sous-titres impactants pour capter en 3 secondes.",
    metrics: "+28% CTR",
    timeline: "72 h",
  },
  {
    title: "Avatar porte-parole B2B",
    description:
      "Scripts AIDA + variantes d’offres pour ABM LinkedIn/Meta et nurturing.",
    metrics: "x2 MQL",
    timeline: "1 semaine",
  },
  {
    title: "UGC IA e-commerce",
    description:
      "Démonstrations produit + voice-over + hooks TikTok/Meta adaptés à votre niche.",
    metrics: "+35% ROAS",
    timeline: "5 jours",
  },
  {
    title: "Carrousels Ads multilingues",
    description:
      "Génération visuelle + slogans localisés pour ouvrir de nouveaux marchés.",
    metrics: "-22% CPA",
    timeline: "72 h",
  },
];

const workflow = [
  {
    category: "Pipeline & garanties",
    items: [
      "Discovery & script (hooks, angles, objections)",
      "Storyboard & moodboard (validation rapide)",
      "Génération IA (vidéo, voix, avatar/acteur)",
      "Variantes créa (hook, CTA, cadrage) pour A/B",
      "Sous-titres, formats 1:1 / 9:16 / 16:9",
      "Livraison + fichiers sources + itérations",
    ],
  },
  {
    category: "Conformité & éthique",
    items: [
      "Mentions claires si nécessaire (contenu synthétique)",
      "Respect du droit à l’image & des marques",
      "Voix/visages avec droits/licences appropriés",
      "Protection des données & validations légales",
    ],
  },
];

// Packs (mention des prestations selon le pack — pas de prix ici)
const packs = [
  {
    name: "Starter",
    tag: "Pour démarrer",
    subtitle: "Lancez vos premières créas IA et validez l’angle.",
    bullets: [
      "2 vidéos courtes (9:16) prêtes Ads",
      "1 carrousel décliné pour Meta/LinkedIn",
      "3 variantes de hook/CTA",
      "Sous-titres & exports multi-formats",
    ],
  },
  {
    name: "Growth",
    tag: "Pour accélérer",
    subtitle: "Augmentez le volume de tests créatifs.",
    bullets: [
      "4 vidéos (UGC / face cam / micro-trottoir)",
      "6 variantes (hooks, accroches, endings)",
      "Carrousels & statiques déclinés",
      "Itérations selon les premiers résultats",
    ],
  },
  {
    name: "Scale",
    tag: "Pour scaler",
    subtitle: "Production continue orientée ROAS.",
    bullets: [
      "Production vidéo mensuelle + déclinaisons",
      "Itérations hebdo data-driven",
      "Personnalisation offres & multilingue",
      "Priorité de production & support",
    ],
  },
];

export default function ContentCreationAIPage() {
  const handleCTAClick = () => {
    trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, {
      from: "service_page",
      service: "ai_ad_studio",
    });
  };

  return (
    <div className="py-20 lg:py-28">
      {/* JSON-LD */}
      <Script id="ld-service-ai-ads" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "AI Ad Studio",
          serviceType: "AI-generated Advertising Content",
          provider: { "@type": "Organization", name: "MABAI", url: "https://mabai.fr" },
          areaServed: "France",
          description:
            "Création de publicités vidéo et visuelles 100% IA (ou hybride) : interviews de rue, porte-parole face cam, UGC, démos produit, carrousels. Variantes orientées performance, sans tournage.",
          url: "https://mabai.fr/services/content-creation",
        })}
      </Script>

      <Container>
        {/* Hero */}
        <div className="text-center mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-2 text-sm bg-violet-500/10 text-violet-300 border border-violet-500/20"
            >
              <Bot className="h-4 w-4 mr-2" />
              AI Ad Studio — Publicités générées par IA
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Les mêmes pubs qu’en vrai,
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              {" "}sans tournage
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-[#C7CAD9] max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vous nous donnez le brief. Nous écrivons, générons et livrons des pubs prêtes à diffuser
            (vidéo & visuel), avec des variantes testées pour trouver ce qui convertit le mieux.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link href="/rdv" onClick={handleCTAClick}>
              <GradientButton size="lg" className="px-8">
                Lancer vos pubs IA
              </GradientButton>
            </Link>
          </motion.div>
        </div>

        {/* Objectifs */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ce que vous obtenez
          </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-[#0F1222] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-violet-500/10 to-violet-700/10 rounded-lg border border-violet-500/20 w-fit">
                    {React.createElement(o.icon, { className: "h-6 w-6 text-violet-400" })}
                  </div>
                  <CardTitle className="text-xl text-white">{o.title}</CardTitle>
                  <CardDescription className="text-[#C7CAD9]">{o.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Cas d’usage & résultats
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0F1222] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-xl text-white">{u.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-green-400">
                          <LineChart className="h-4 w-4" />
                          {u.metrics}
                        </div>
                        <div className="flex items-center gap-1 text-violet-400">
                          <Clock className="h-4 w-4" />
                          {u.timeline}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-[#C7CAD9] text-base">{u.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Formats & Inputs */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Comment ça marche
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formats.map((block, i) => (
              <motion.div
                key={block.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0F1222] border-[#1E2235] h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{block.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {block.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                          <span className="text-[#C7CAD9]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Packs (référence aux prestations, pas de prix) */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Prestations selon votre pack
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packs.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0F1222] border-[#1E2235] h-full hover:border-violet-500/30 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-white">{p.name}</CardTitle>
                      <Badge className="bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {p.tag}
                      </Badge>
                    </div>
                    <CardDescription className="text-[#C7CAD9]">
                      {p.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {p.bullets.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                          <span className="text-[#C7CAD9]">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-2 text-sm text-[#C7CAD9]">
                      Plus de détails sur la page <Link className="underline hover:text-violet-300" href="/packs">Packs</Link>.
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Final */}
        <motion.div
          className="text-center bg-gradient-to-r from-violet-500/10 to-violet-700/10 border border-violet-500/20 rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Prêt à lancer vos publicités IA cette semaine ?
          </h3>
          <p className="text-xl text-[#C7CAD9] mb-8 max-w-2xl mx-auto">
            Brief express → scripts & variantes → pubs prêtes à diffuser. Zéro logistique, 100% orienté résultats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rdv" onClick={handleCTAClick}>
              <GradientButton size="lg" className="px-8">
                Réserver votre session
              </GradientButton>
            </Link>
            <Link href="/contact">
              <motion.button
                className="px-8 py-3 text-violet-400 hover:text-violet-300 border border-violet-500 hover:bg-violet-500/10 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Obtenir un plan & un devis en 24h
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
