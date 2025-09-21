"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Target } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent, TRACKING_EVENTS } from "@/lib/constants";

const packs = [
  {
    name: "Starter",
    price: "2 500€",
    period: "+ 500€/mois",
    description: "Perfect pour débuter avec une base solide",
    popular: false,
    features: [
      "Site vitrine optimisé conversion",
      "Page de capture lead",
      "Intégration CRM basique", 
      "Google Analytics + tracking",
      "Formation équipe (2h)",
      "Support email"
    ],
    deliverables: [
      "Livraison en 14 jours",
      "Révisions incluses (3)",
      "Responsive design",
      "SEO de base"
    ]
  },
  {
    name: "Growth",
    price: "5 000€",
    period: "+ 1 000€/mois",
    description: "La solution complète pour scaler rapidement",
    popular: true,
    features: [
      "Site/boutique haute conversion",
      "2 campagnes pub (setup + gestion 1 mois)",
      "Automatisations email (5 sequences)",
      "ChatBot IA intégré",
      "Dashboard ROI temps réel",
      "A/B tests automatisés",
      "Formation équipe (4h)",
      "Support prioritaire"
    ],
    deliverables: [
      "Livraison en 21 jours",
      "Révisions illimitées", 
      "Stratégie acquisition",
      "Optimisations continues"
    ]
  },
  {
    name: "Scale",
    price: "7 000€",
    period: "+ 2 000€/mois",
    description: "Pour dominer votre marché avec l'IA",
    popular: false,
    features: [
      "Écosystème digital complet",
      "Agent IA vocal + chat avancé",
      "Multi-campagnes (Google + Meta + LinkedIn)",
      "Automatisations complexes (CRM + workflows)",
      "Prédictions IA + scoring leads",
      "Intégrations sur-mesure",
      "Équipe dédiée",
      "Support 24/7"
    ],
    deliverables: [
      "Livraison en 30 jours",
      "Révisions illimitées",
      "Stratégie omnicanal",
      "Accompagnement premium"
    ]
  }
];

export default function PacksPage() {
  const handleCTAClick = (packName: string) => {
    trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { 
      from: 'pricing',
      pack: packName.toLowerCase()
    });
  };

  return (
    <div className="py-20 lg:py-28">
      <Container>
        <div className="text-center mb-16">
          <motion.h1 
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nos 
            <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
              {" "}packs solutions
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-[#C7CAD9] max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Des solutions complètes adaptées à votre ambition et votre budget. 
            Tous nos packs incluent un accompagnement personnalisé.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 bg-[#0F1222] px-4 py-2 rounded-full border border-[#1E2235]">
              <Zap className="h-4 w-4 text-violet-400" />
              <span className="text-[#C7CAD9] text-sm">MVP en 14-30 jours</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0F1222] px-4 py-2 rounded-full border border-[#1E2235]">
              <Target className="h-4 w-4 text-violet-400" />
              <span className="text-[#C7CAD9] text-sm">ROI garanti ou remboursé</span>
            </div>
            <div className="flex items-center gap-2 bg-[#0F1222] px-4 py-2 rounded-full border border-[#1E2235]">
              <Check className="h-4 w-4 text-violet-400" />
              <span className="text-[#C7CAD9] text-sm">Accompagnement inclus</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packs.map((pack, index) => (
            <motion.div
              key={pack.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Card className={`h-full relative overflow-hidden transition-all duration-300 ${
                pack.popular 
                  ? 'bg-gradient-to-b from-violet-500/5 to-violet-700/5 border-violet-500/30 shadow-xl shadow-violet-500/10' 
                  : 'bg-[#0F1222] border-[#1E2235] hover:border-violet-500/20'
              } group-hover:shadow-xl group-hover:shadow-violet-500/10`}>
                
                {pack.popular && (
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-violet-500 to-violet-700 text-white border-0">
                      <Star className="h-3 w-3 mr-1" />
                      Le plus populaire
                    </Badge>
                  </div>
                )}

                <CardHeader className={`text-center ${pack.popular ? 'pt-16' : 'pt-8'}`}>
                  <CardTitle className="text-2xl text-white mb-2">
                    {pack.name}
                  </CardTitle>
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-white">{pack.price}</span>
                    </div>
                    <p className="text-[#C7CAD9] text-sm">{pack.period}</p>
                  </div>
                  <CardDescription className="text-[#C7CAD9] leading-relaxed">
                    {pack.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-white mb-3">Inclus :</h4>
                    <ul className="space-y-2">
                      {pack.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                          <span className="text-[#C7CAD9] text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="font-medium text-white mb-3">Livrables :</h4>
                    <ul className="space-y-2">
                      {pack.deliverables.map((deliverable, deliverableIndex) => (
                        <li key={deliverableIndex} className="flex items-start gap-2">
                          <div className="h-1.5 w-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[#C7CAD9] text-sm">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button avec effet hover spécifique */}
                  <div className="pt-4">
                    <Link 
                      href="/rdv" 
                      onClick={() => handleCTAClick(pack.name)}
                      className="block"
                    >
                      <Button 
                        className={`w-full transition-all duration-200 ${
                          pack.popular
                            ? 'bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white opacity-100 translate-y-0'
                            : 'bg-gradient-to-r from-violet-500 to-violet-700 hover:from-violet-600 hover:to-violet-800 text-white opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0'
                        }`}
                        size="lg"
                      >
                        Prendre un RDV
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-[#0F1222] border border-[#1E2235] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Pas sûr du pack qui vous convient ?
            </h3>
            <p className="text-[#C7CAD9] mb-6 max-w-2xl mx-auto">
              Réservez un audit gratuit de 30 minutes. On analyse votre situation actuelle 
              et on vous recommande la solution la plus adaptée à vos objectifs.
            </p>
            <Link href="/rdv" onClick={() => handleCTAClick('consultation')}>
              <Button variant="outline" size="lg" className="border-violet-500 text-violet-400 hover:bg-violet-500/10">
                Audit gratuit (30 min)
              </Button>
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}