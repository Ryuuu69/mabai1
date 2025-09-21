"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  CalendarDays,
  Send,
  BarChart3,
  MessageCircle,
  Hash,
  TrendingUp,
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import Script from "next/script";
import React from "react";

const objectives = [
  {
    icon: Users,
    title: "Croissance d’audience",
    description: "Attirer des abonnés qualifiés sur les bons réseaux"
  },
  {
    icon: CalendarDays,
    title: "Régularité & timing",
    description: "Calendrier éditorial et programmation optimale"
  },
  {
    icon: MessageCircle,
    title: "Communauté active",
    description: "Réponses rapides, modération et proximité"
  },
  {
    icon: BarChart3,
    title: "Performance mesurée",
    description: "Suivi d’indicateurs clés et itérations"
  }
];

const deliverables = [
  {
    category: "Gestion Opérationnelle",
    items: [
      "Instagram, TikTok, LinkedIn, Facebook",
      "Calendrier éditorial & thèmes mensuels",
      "Programmation & publication cross-plateformes",
      "Modération DM/commentaires (option IA)"
    ]
  },
  {
    category: "Optimisation & Analytics",
    items: [
      "Veille tendances & social listening",
      "Tests A/B visuels & légendes",
      "UTM & tracking (GA4, pixels)",
      "Reporting mensuel (reach, ER, croissance)"
    ]
  }
];

const useCases = [
  {
    title: "Scale Instagram local → national",
    description: "Série de carrousels & Reels + collabs créateurs pour booster la portée.",
    metrics: "+120% reach",
    timeline: "2 mois"
  },
  {
    title: "Acquisition B2B via LinkedIn",
    description: "Posts éducatifs, proof-cases, DM séquences → RDV qualifiés.",
    metrics: "x2 leads/MQL",
    timeline: "6 semaines"
  },
  {
    title: "Top-of-funnel TikTok",
    description: "Shorts tendances adaptés marque + repurpose multi-réseaux.",
    metrics: "+300% vues",
    timeline: "1 mois"
  },
  {
    title: "Relance communauté Facebook",
    description: "Calendrier thématique + UGC & lives mensuels.",
    metrics: "+40% engagement",
    timeline: "8 semaines"
  }
];

export default function SocialMediaManagementPage() {
  const handleCTAClick = () => {
    trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, {
      from: "service_page",
      service: "social_media_management",
    });
  };

  return (
    <div className="py-20 lg:py-28">
      {/* JSON-LD */}
      <Script id="ld-service-smm" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Social Media Management",
          serviceType: "Social Media Management",
          provider: { "@type": "Organization", name: "MABAI", url: "https://mabai.fr" },
          areaServed: "France",
          description:
            "Gestion et croissance des réseaux sociaux : calendrier éditorial, programmation, modération, analytics et reporting orientés performance.",
          url: "https://mabai.fr/services/social-media-management",
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
              <Hash className="h-4 w-4 mr-2" />
              Social Media Management
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Croissance sociale
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              {" "}pilotée par la data
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-[#C7CAD9] max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Gestion complète de vos réseaux : contenu, programmation, modération et reporting. Objectif :
            visibilité, engagement et leads qualifiés.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link href="/rdv" onClick={handleCTAClick}>
              <GradientButton size="lg" className="px-8">
                Discuter de ma gestion social media
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
            Nos objectifs sur vos réseaux
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-[#0F1222] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-violet-500/10 to-violet-700/10 rounded-lg border border-violet-500/20 w-fit">
                      {React.createElement(objective.icon, { className: "h-6 w-6 text-violet-400" })}
                    </div>
                    <CardTitle className="text-xl text-white">{objective.title}</CardTitle>
                    <CardDescription className="text-[#C7CAD9]">{objective.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Use cases */}
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
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0F1222] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-xl text-white">{useCase.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-green-400">
                          <TrendingUp className="h-4 w-4" />
                          {useCase.metrics}
                        </div>
                        <div className="flex items-center gap-1 text-violet-400">
                          <Clock className="h-4 w-4" />
                          {useCase.timeline}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-[#C7CAD9] text-base">{useCase.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Livrables */}
        <section className="mb-20">
          <motion.h2
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Livrables détaillés
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {deliverables.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0F1222] border-[#1E2235] h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-white">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
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

        {/* Packs + KPI */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Packs (add-ons) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#0F1222] border-[#1E2235] h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Packs Social Media (add-ons)</CardTitle>
                  <CardDescription className="text-[#C7CAD9]">
                    À combiner avec vos offres existantes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div>
                      <div className="font-medium text-white">Starter</div>
                      <div className="text-sm text-[#C7CAD9]">1 réseau, 8 posts/mois</div>
                    </div>
                    <Send className="h-4 w-4 text-violet-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div>
                      <div className="font-medium text-white">Growth</div>
                      <div className="text-sm text-[#C7CAD9]">2 réseaux, 12 posts + 2 vidéos/mois</div>
                    </div>
                    <Send className="h-4 w-4 text-violet-400" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div>
                      <div className="font-medium text-white">Scale</div>
                      <div className="text-sm text-[#C7CAD9]">Gestion 360° + créas Ads illimitées</div>
                    </div>
                    <Send className="h-4 w-4 text-violet-400" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* KPI */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-violet-500/5 to-violet-700/5 border-violet-500/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">KPI suivis</CardTitle>
                  <CardDescription className="text-[#C7CAD9]">
                    Mesure continue et optimisations
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div className="text-2xl font-bold text-violet-400">+25%</div>
                    <div className="text-sm text-[#C7CAD9]">Engagement</div>
                  </div>
                  <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div className="text-2xl font-bold text-violet-400">+120%</div>
                    <div className="text-sm text-[#C7CAD9]">Reach</div>
                  </div>
                  <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div className="text-2xl font-bold text-violet-400">+2x</div>
                    <div className="text-sm text-[#C7CAD9]">Leads qualifiés</div>
                  </div>
                  <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                    <div className="text-2xl font-bold text-violet-400">-30%</div>
                    <div className="text-sm text-[#C7CAD9]">Coût par lead</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
          <h3 className="text-3xl font-bold text-white mb-4">On fait décoller vos réseaux ?</h3>
          <p className="text-xl text-[#C7CAD9] mb-8 max-w-2xl mx-auto">
            30 minutes pour auditer vos comptes, définir les quick wins et planifier la montée en puissance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rdv" onClick={handleCTAClick}>
              <GradientButton size="lg" className="px-8">
                Réserver mon audit gratuit
              </GradientButton>
            </Link>
            <Link href="/packs">
              <motion.button
                className="px-8 py-3 text-violet-400 hover:text-violet-300 border border-violet-500 hover:bg-violet-500/10 rounded-lg transition-colors duration-200 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir nos packs
                <ArrowRight className="h-4 w-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
