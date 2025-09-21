"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, CheckCircle, Users } from "lucide-react";
import { motion } from "framer-motion";
import CalendlyInline from "@/components/integrations/CalendlyInline";
import React from "react";

const CALENDLY_URL = "https://calendly.com/rayanmabrouk55/mabai-rdv?hide_gdpr_banner=1";

const benefits = [
  "Audit gratuit de votre situation actuelle",
  "Recommandations personnalisées",
  "Estimation de ROI potentiel",
  "Plan d'action détaillé",
  "Pas de hard selling, juste du conseil",
];

const process = [
  { step: "1", title: "Analyse", description: "On audite votre situation actuelle et vos objectifs" },
  { step: "2", title: "Recommandations", description: "On vous présente les solutions les plus adaptées" },
  { step: "3", title: "Plan d'action", description: "On établit ensemble une roadmap claire et chiffrée" },
];

export default function RDVPage() {
  const openCalendlyMobile = () => {
    // Tente un nouvel onglet ; si bloqué, bascule en navigation directe
    const win = window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
    if (!win) window.location.href = CALENDLY_URL;
  };

  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      {/* HERO */}
      <section className="py-12 lg:py-16 border-b border-[#1E2235]">
        <Container>
          <div className="text-center space-y-3">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-2 px-6 py-2 text-sm bg-violet-500/10 text-violet-300 border border-violet-500/20">
                <Calendar className="h-4 w-4 mr-2 inline-block" />
                Consultation gratuite • 30 minutes
              </Badge>
            </motion.div>
            <motion.h1 className="text-4xl lg:text-5xl font-bold text-white" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              Réservez votre{" "}
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">audit gratuit</span>
            </motion.h1>
            <motion.p className="text-lg text-[#C7CAD9] max-w-3xl mx-auto" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              30 minutes pour analyser votre situation et identifier les opportunités de croissance les plus
              impactantes pour votre business.
            </motion.p>
          </div>
        </Container>
      </section>

      <section className="py-10 lg:py-14">
        <Container>
          <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne gauche */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
                <Card className="bg-[#0F1222] border-[#1E2235]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-violet-400" />
                      Ce que vous obtenez
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-[#C7CAD9]">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
                <Card className="bg-[#0F1222] border-[#1E2235]">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <Clock className="h-6 w-6 text-violet-400" />
                      Comment ça se passe
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {process.map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-violet-500 to-violet-700 rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                            <p className="text-[#C7CAD9] text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
                <Card className="bg-gradient-to-br from-violet-500/5 to-violet-700/5 border-violet-500/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center gap-2">
                      <Users className="h-6 w-6 text-violet-400" />
                      Informations pratiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                        <div className="font-semibold text-white">Durée</div>
                        <div className="text-[#C7CAD9] text-sm">30 minutes</div>
                      </div>
                      <div className="text-center p-3 bg-[#0B0B10] rounded-lg border border-[#1E2235]">
                        <div className="font-semibold text-white">Format</div>
                        <div className="text-[#C7CAD9] text-sm">Visioconférence</div>
                      </div>
                    </div>
                    <div className="text-sm text-[#C7CAD9] space-y-2">
                      <p>📧 <strong>Confirmation immédiate</strong> par email avec le lien de visio</p>
                      <p>📋 <strong>Préparation</strong> : Pensez à préparer vos questions et objectifs</p>
                      <p>🎯 <strong>Engagement</strong> : Pas de hard selling, juste du conseil de qualité</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Colonne droite : Calendly */}
            <motion.div className="flex justify-center lg:justify-end" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="w-full">
                {/* Mobile : lien direct (pas d’iframe, pas de popup) */}
                <div className="md:hidden text-center">
                  <p className="text-[#C7CAD9] mb-3 text-sm">
                    Sur mobile, la prise de rendez-vous s’ouvre dans un nouvel onglet pour plus de fiabilité.
                  </p>
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener"
                    className="inline-block px-6 py-3 rounded-lg border border-violet-500 text-violet-300 hover:bg-violet-500/10 transition"
                  >
                    Prendre un RDV
                  </a>
                </div>

                {/* Desktop : inline (inchangé) */}
                <div className="hidden md:block">
                  <CalendlyInline
                    baseUrl={CALENDLY_URL}
                    fixedHeight={600}
                    scale={1}
                    hueRotateDeg={48}
                    forceDarkHack
                    containerClassName="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  );
}
