"use client";

import { Container } from "@/components/ui/container"; // Keep this import
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smartphone, 
  Zap, 
  Users, 
  Shield, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  LineChart,
  Apple,
  Play
} from "lucide-react"; // Keep this import
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";
import Script from "next/script";

const objectives = [
  {
    icon: Smartphone,
    title: "Applications natives",
    description: "Développement d'apps iOS et Android natives pour des performances optimales"
  },
  {
    icon: Users,
    title: "UX/UI mobile-first",
    description: "Interface utilisateur intuitive adaptée aux usages mobiles"
  },
  {
    icon: Zap,
    title: "Performance optimisée",
    description: "Applications rapides et fluides avec temps de chargement minimal"
  },
  {
    icon: Shield,
    title: "Sécurité & conformité",
    description: "Respect des standards de sécurité iOS et Android, conformité RGPD"
  }
];

const deliverables = [
  {
    category: "Conception & Design",
    items: [
      "Audit UX mobile et benchmark concurrentiel",
      "Wireframes et prototypes interactifs",
      "Design system mobile adaptatif",
      "Tests utilisateurs et itérations"
    ]
  },
  {
    category: "Développement",
    items: [
      "Applications natives iOS et Android",
      "Intégrations API et services tiers",
      "Optimisation des performances",
      "Tests automatisés et debugging"
    ]
  },
  {
    category: "Publication & Suivi",
    items: [
      "Publication sur App Store et Google Play",
      "Analytics et tracking d'usage",
      "Monitoring des performances",
      "Support et maintenance continue"
    ]
  },
  {
    category: "Marketing & Growth",
    items: [
      "Optimisation ASO (App Store Optimization)",
      "Stratégie d'acquisition d'utilisateurs",
      "Push notifications et engagement",
      "A/B testing des fonctionnalités"
    ]
  }
];

const useCases = [
  {
    title: "App e-commerce mobile",
    description: "Application de vente en ligne avec paiement intégré et notifications push",
    metrics: "+60% conversions mobile",
    timeline: "8-12 semaines"
  },
  {
    title: "App de services BtoB",
    description: "Application métier pour gestion client et prise de RDV en mobilité",
    metrics: "+40% productivité terrain",
    timeline: "6-10 semaines"
  },
  {
    title: "App communautaire",
    description: "Plateforme sociale avec chat, partage de contenu et système de notifications",
    metrics: "+80% engagement utilisateur",
    timeline: "10-16 semaines"
  },
  {
    title: "App de formation",
    description: "Application éducative avec vidéos, quiz interactifs et suivi de progression",
    metrics: "+50% taux de complétion",
    timeline: "8-14 semaines"
  }
];

export default function MobileAppDevelopmentPage() {
  const handleCTAClick = () => {
    trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { 
      from: 'service_page',
      service: 'mobile_app_development'
    });
  };

  return (
    <div className="py-20 lg:py-28">
      <Container>
        {/* JSON-LD Schema */}
        <Script id="ld-service-mobile" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Développement Mobile",
            serviceType: "Mobile Application Development",
            provider: { "@type": "Organization", name: "MABAI", url: "https://mabai.fr" },
            areaServed: "France",
            description: "Création d'applications mobiles natives et hybrides pour iOS et Android, optimisées pour la performance et l'expérience utilisateur.",
            url: "https://mabai.fr/services/mobile-app-development",
          })}
        </Script>

        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-sm bg-violet-500/10 text-violet-300 border border-violet-500/20">
              <Smartphone className="h-4 w-4 mr-2" />
              Applications iOS & Android
            </Badge>
          </motion.div>

          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Applications mobiles qui 
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              {" "}engagent
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl text-[#C7CAD9] max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Développement d'applications mobiles natives et hybrides pour iOS et Android. 
            Design moderne, performance optimale et expérience utilisateur exceptionnelle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/rdv" onClick={handleCTAClick}>
              <Button size="lg" className="px-8 bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white">
                Discuter de mon app
              </Button>
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
            Nos objectifs pour votre application
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
                      <objective.icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {objective.title}
                    </CardTitle>
                    <CardDescription className="text-[#C7CAD9]">
                      {objective.description}
                    </CardDescription>
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
                      <CardTitle className="text-xl text-white">
                        {useCase.title}
                      </CardTitle>
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
                    <CardDescription className="text-[#C7CAD9] text-base">
                      {useCase.description}
                    </CardDescription>
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
                    <CardTitle className="text-xl text-white">
                      {section.category}
                    </CardTitle>
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

        {/* KPI & Plateformes */}
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
                  <CardTitle className="text-2xl text-white">
                    KPI mesurés
                  </CardTitle>
                  <CardDescription className="text-[#C7CAD9]">
                    Indicateurs de performance que nous suivons
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">4.8+</div>
                      <div className="text-sm text-[#C7CAD9]">Note App Store</div>
                    </div>
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">&lt;2s</div>
                      <div className="text-sm text-[#C7CAD9]">Temps de lancement</div>
                    </div>
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">+70%</div>
                      <div className="text-sm text-[#C7CAD9]">Rétention J7</div>
                    </div>
                    <div className="text-center p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="text-2xl font-bold text-violet-400">+45%</div>
                      <div className="text-sm text-[#C7CAD9]">Engagement utilisateur</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plateformes & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#0F1222] border-[#1E2235] h-full">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    Plateformes & Technologies
                  </CardTitle>
                  <CardDescription className="text-[#C7CAD9]">
                    Stack technique moderne et éprouvée
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="flex items-center gap-3">
                        <Apple className="h-6 w-6 text-violet-400" />
                        <div>
                          <div className="font-medium text-white">iOS Native</div>
                          <div className="text-sm text-[#C7CAD9]">Swift, SwiftUI, Xcode</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="flex items-center gap-3">
                        <Play className="h-6 w-6 text-green-400" />
                        <div>
                          <div className="font-medium text-white">Android Native</div>
                          <div className="text-sm text-[#C7CAD9]">Kotlin, Jetpack Compose</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                      <div className="flex items-center gap-3">
                        <Zap className="h-6 w-6 text-blue-400" />
                        <div>
                          <div className="font-medium text-white">Cross-Platform</div>
                          <div className="text-sm text-[#C7CAD9]">React Native, Flutter</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-[#C7CAD9]">
                    <p>📱 <strong>Publication incluse</strong> : App Store et Google Play</p>
                    <p>🔄 <strong>Maintenance</strong> : Mises à jour et support technique</p>
                    <p>📊 <strong>Analytics</strong> : Suivi d'usage et optimisations</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Process de développement */}
        <section className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Notre processus de développement
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Découverte", desc: "Analyse des besoins, définition des fonctionnalités et architecture technique" },
              { step: "02", title: "Design", desc: "Création des maquettes, prototypage et validation de l'expérience utilisateur" },
              { step: "03", title: "Développement", desc: "Codage des applications, intégrations API et tests de performance" },
              { step: "04", title: "Publication", desc: "Déploiement sur les stores, formation équipe et suivi post-lancement" },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0F1222] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="text-violet-400 text-sm font-mono mb-2">{process.step}</div>
                    <CardTitle className="text-xl text-white mb-3">
                      {process.title}
                    </CardTitle>
                    <CardDescription className="text-[#C7CAD9]">
                      {process.desc}
                    </CardDescription>
                  </CardHeader>
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
            Prêt à lancer votre application mobile ?
          </h3>
          <p className="text-xl text-[#C7CAD9] mb-8 max-w-2xl mx-auto">
            Discutons de votre projet d'application mobile en 30 minutes. Audit gratuit 
            de vos besoins et recommandations personnalisées pour maximiser l'engagement utilisateur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/rdv" onClick={handleCTAClick}>
              <Button size="lg" className="px-8 bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white">
                Réserver mon audit gratuit
              </Button>
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
