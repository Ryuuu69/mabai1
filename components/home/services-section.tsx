"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Monitor, Target, Cog, Bot, ArrowRight, Users, Edit } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    icon: Monitor,
    title: "Sites & Apps",
    description: "Vitrines ultra rapides (<3s), landings orientées conversion, apps mobiles & web cohérentes avec votre funnel.",
    href: "/services/sites-apps",
    highlights: [
      "Sites vitrines & landings (<3s)",
      "Apps web & mobiles",
      "Tracking & SEO technique",
      "Maintenance continue"
    ]
  },
  {
    icon: Target,
    title: "Acquisition & Campagnes",
    description: "Campagnes publicitaires performantes qui génèrent des leads qualifiés et du CA.",
    href: "/services/acquisition-campagnes",
    highlights: ["Meta Ads", "Google Ads", "Retargeting", "Tracking précis"]
  },
  {
    icon: Cog,
    title: "Automatisations & Intégrations",
    description: "Workflows automatisés pour nurturing, suivi client et optimisation des processus.",
    href: "/services/automatisations-integrations",
    highlights: ["CRM synchronisé", "Email sequences", "N8N/Make", "Webhooks"]
  },
  {
    icon: Bot,
    title: "Agents IA",
    description: "Agents IA conversationnels qui qualifient vos prospects et bookent vos RDV 24/7.",
    href: "/services/agents-ia",
    highlights: ["Agent Chat", "Agent vocal", "Qualification auto", "Booking RDV"]
  },
  {
    icon: Users,
    title: "Social Media Management",
    description: "Croissance organique pilotée par la donnée : gestion de vos réseaux, communauté et contenus pour engager et convertir.",
    href: "/services/social-media-management",
    highlights: [
      "Gestion multi-réseaux",
      "Programmation & veille",
      "Gestion communauté",
      "Reporting croissance & engagement"
    ]
  },
  {
    icon: Edit,
    title: "Création Contenu",
    description: "Contenu qui performe : posts & vidéos prêts pour l'organiques et les Ads.",
    href: "/services/content-creation",
    highlights: [
      "Posts & carrousels brandés",
      "Vidéos courtes (Reels, UGC, TikTok)",
      "Créas publicitaires (Ads, variantes)",
      "Copywriting & scripts conversion"
    ]
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 scroll-mt-20">
      <Container>
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl lg:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Nos services qui 
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              {" "}convertissent
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-[#C7CAD9] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Une approche complète pour transformer vos visiteurs en clients et maximiser votre ROI
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-[#0F1222] border-[#1E2235] hover:border-violet-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-violet-500/10 to-violet-700/10 rounded-lg border border-violet-500/20">
                      <service.icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <CardTitle className="text-2xl text-white">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="text-[#C7CAD9] text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((highlight) => (
                        <div 
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-[#C7CAD9]"
                        >
                          <div className="h-1.5 w-1.5 bg-violet-400 rounded-full" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                    <Link href={service.href}>
                      <Button variant="ghost" className="w-full justify-between text-violet-400 hover:text-violet-300 hover:bg-violet-500/10 group">
                        Voir comment
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}