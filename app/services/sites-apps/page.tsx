"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Target,
  Zap,
  TrendingUp,
  Users,
  ShoppingCart,
  CheckCircle,
  ArrowRight,
  Clock,
  Euro,
  Laptop,
  Smartphone,
  Code,
  Search,
  ShieldCheck,
  Gauge
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import Script from "next/script";
import React from "react";

const objectives = [
  {
    icon: Target,
    title: "Maximiser les conversions",
    description: "Transformer plus de visiteurs en prospects et clients"
  },
  {
    icon: Users,
    title: "Améliorer l'UX",
    description: "Créer des parcours utilisateur fluides et intuitifs sur tous les supports"
  },
  {
    icon: Zap,
    title: "Booster les performances",
    description: "Sites et apps rapides, optimisés SEO et mobiles-first"
  },
  {
    icon: ShoppingCart,
    title: "Augmenter les ventes",
    description: "Pages produits, tunnels d'achat et fonctionnalités in-app qui convertissent"
  }
];

const deliverables = [
  {
    category: "Conception & Design",
    items: [
      "Audit UX/conversion de l'existant (sites & apps)",
      "Wireframes et maquettes haute fidélité",
      "Design system adaptatif et charte graphique",
      "Prototypes interactifs"
    ]
  },
  {
    category: "Développement",
    items: [
      "Sites web responsives (Next.js, WordPress optimisé)",
      "Applications mobiles natives (iOS/Android) ou hybrides (React Native, PWA)",
      "Optimisation vitesse de chargement (<3s)",
      "Intégrations CRM, ERP et outils tiers"
    ]
  },
  {
    category: "Conversion & Analytics",
    items: [
      "Pages de capture optimisées (CRO)",
      "A/B tests automatisés",
      "Tracking avancé (GA4, pixels, server-side events)",
      "Heatmaps et analyse comportementale"
    ]
  },
  {
    category: "SEO & Performance",
    items: [
      "Optimisation SEO technique (sites & apps)",
      "Structure et maillage interne",
      "Balises meta et schema markup",
      "Audit Lighthouse (90+ score)"
    ]
  }
];

const useCases = [
  {
    title: "Site vitrine BtoB",
    description: "Générer des leads qualifiés avec des pages de services qui convertissent",
    metrics: "+150% leads qualifiés",
    timeline: "14 jours"
  },
  {
    title: "E-commerce optimisé",
    description: "Boutique en ligne avec tunnel d'achat frictionless et upsells automatiques",
    metrics: "+40% taux de conversion",
    timeline: "21 jours"
  },
  {
    title: "Application mobile de services",
    description: "App métier pour gestion client et prise de RDV en mobilité",
    metrics: "+40% productivité terrain",
    timeline: "6-10 semaines"
  },
  {
    title: "Landing pages haute conversion",
    description: "Pages d'atterrissage dédiées aux campagnes pub avec A/B testing intégré",
    metrics: "+200% ROI campagnes",
    timeline: "7 jours"
  }
];

export default function SitesAppsPage() {
  const handleCTAClick = () => {
    trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, {
      from: "service_page",
      service: "sites_apps",
    });
  };

  return (
    <div className="py-20 lg:py-28">
      {/* JSON-LD Schema */}
      <Script id="ld-service-sites-apps" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sites & Apps",
          serviceType: "Web and Mobile Development",
          provider: { "@type": "Organization", name: "MABAI", url: "https://mabai.fr" },
          areaServed: "France",
          description:
            "Conception et développement de sites web ultra rapides, de landing pages optimisées pour la conversion, et d'applications mobiles natives ou hybrides.",
          url: "https://mabai.fr/services/sites-apps",
        })}
      </Script>

      <Container>
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 px-6 py-2 text-sm bg-violet-500/10 text-violet-300 border border-violet-500/20"
            >
              <Monitor className="h-4 w-4 mr-2" />
              Sites & Apps Haute Conversion
            </Badge>
          </motion.div>

          <motion.h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Sites & Apps qui
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              {" "}
              convertissent
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-[#C7CAD9] max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Vitrines ultra rapides (&lt;3s), landings orientées conversion, apps mobiles & web cohérentes
            avec votre funnel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/rdv" onClick={handleCTAClick}>
              <GradientButton size="lg" className="px-8">
                Discuter de mon projet
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
            Nos objectifs pour votre site & app
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
                      {React.createElement(objective.icon, {
                        className: "h-6 w-6 text-violet-400",
                      })}
                    </div>
                    <CardTitle className="text-xl text-white">{objective.title}</CardTitle>
                    <CardDescription className="text-[#C7CAD9]">{objective.description}</CardDescription>
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
            Cas d'usage & résultats
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

        {/* Livrables détaillés */}
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

        {/* KPI & Tarifs */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* KPI */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-violet-500/5 to-violet-700/5 border-violet-500/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">KPI mesurés</CardTitle>
                  <CardDescription className="text-[#C7CAD9]">
                    Indicateurs de performance que nous suivons
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">+40%</div>
                      <div className="text-sm text-[#C7CAD9]">Taux de conversion</div>
                    </div>
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">{"<3s"}</div>
                      <div className="text-sm text-[#C7CAD9]">Temps de chargement</div>
                    </div>
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">90+</div>
                      <div className="text-sm text-[#C7CAD9]">Score Lighthouse</div>
                    </div>
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">+60%</div>
                      <div className="text-sm text-[#C7CAD9]">Temps sur site/app</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Tarifs */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#0F1222] border-[#1E2235] h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Délais & Tarifs</CardTitle>
                  <CardDescription className="text-[#C7CAD9]">Transparence totale sur nos prestations</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div>
                        <div className="font-medium text-white">Site vitrine</div>
                        <div className="text-sm text-[#C7CAD9]">5-10 pages + optimisations</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-violet-400">1-2K€</div>
                        <div className="text-sm text-[#C7CAD9]">14 jours</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div>
                        <div className="font-medium text-white">E-commerce</div>
                        <div className="text-sm text-[#C7CAD9]">Catalogue + paiement</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-violet-400">3-4K€</div>
                        <div className="text-sm text-[#C7CAD9]">21 jours</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div>
                        <div className="font-medium text-white">Application Mobile</div>
                        <div className="text-sm text-[#C7CAD9]">Natif ou Hybride</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-violet-400">5-10K€</div>
                        <div className="text-sm text-[#C7CAD9]">6-12 semaines</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-[#C7CAD9]">
                    <p>
                      💡 <strong>Maintenance incluse</strong> : Hébergement, sécurité, sauvegardes
                    </p>
                    <p>
                      🎯 <strong>Garantie résultats</strong> : +20% conversions ou optimisations gratuites
                    </p>
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
          <h3 className="text-3xl font-bold text-white mb-4">Prêt à booster vos conversions ?</h3>
          <p className="text-xl text-[#C7CAD9] mb-8 max-w-2xl mx-auto">
            Discutons de votre projet en 30 minutes. Audit gratuit de votre site actuel et recommandations
            personnalisées pour maximiser vos conversions.
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
