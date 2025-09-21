"use client";

import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Target, Shield, Users, Gauge, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      {/* HERO */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(800px 400px at 50% 0%, rgba(124,58,237,.25), transparent 60%)" }} />
        <Container>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="text-center space-y-4">
              <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">Notre manifeste</Badge>
              <h1 className="text-4xl md:text-5xl font-semibold">Construire des systèmes utiles qui convertissent</h1>
              <p className="text-[#C7CAD9] max-w-3xl mx-auto">
                MABAI est une agence produit & growth. On livre vite, on mesure, on améliore — en restant simples, honnêtes, et orientés impact.
              </p>
              <div className="pt-2">
                <Button asChild size="lg" className="px-8 bg-violet-600 hover:bg-violet-500">
                  <Link href="/rdv">Prendre un RDV</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* PILIERS */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235]">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Rocket, title: "Vitesse pragmatique", desc: "MVP en 14 jours. On avance avec ce qui compte vraiment." },
              { icon: Target, title: "Conversion-first", desc: "Design, contenu, offres : tout sert la conversion." },
              { icon: Gauge, title: "Piloté par la donnée", desc: "KPIs clairs, dashboards, boucles d’apprentissage courtes." },
              { icon: Shield, title: "Sécurité & RGPD", desc: "Conformité, consentement, minimisation — par défaut." },
              { icon: Users, title: "Expérience humaine", desc: "IA au bon endroit ; humain là où la nuance est clé." },
              { icon: Zap, title: "Automatisations utiles", desc: "Pas de gadgets : des gains mesurables qui tiennent." },
            ].map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group">
                <Card className="bg-[#0B0B10] border-[#1E2235] h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_10px_30px_rgba(124,58,237,0.15)]">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <b.icon className="h-5 w-5 text-violet-400" />
                      <CardTitle className="text-white">{b.title}</CardTitle>
                    </div>
                    <CardDescription className="text-[#C7CAD9]">{b.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* APPROCHE */}
      <section className="py-16 lg:py-24 border-b border-[#1E2235]">
        <Container>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Découverte", desc: "Objectifs, offre, audience, canaux et contraintes." },
              { step: "02", title: "MVP 14 jours", desc: "Version utile en production, sans dettes inutiles." },
              { step: "03", title: "Mesure", desc: "Tracking propre, KPIs, insights et priorisation." },
              { step: "04", title: "Itération", desc: "A/B tests, contenus, optimisations et scale." },
            ].map((p) => (
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

      {/* ENGAGEMENTS */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-[#0B0B10] border-[#1E2235]">
              <CardHeader>
                <CardTitle className="text-white">Nos engagements</CardTitle>
                <CardDescription className="text-[#C7CAD9]">Ce que nous promettons — et tenons.</CardDescription>
              </CardHeader>
              <CardContent className="text-[#C7CAD9] space-y-2">
                <p>• <b>Clarté</b> : pas de jargon inutile, des plans actionnables.</p>
                <p>• <b>Mesure</b> : objectifs chiffrés, reporting simple, transparence.</p>
                <p>• <b>Ownership</b> : vous gardez la main sur vos outils & données.</p>
                <p>• <b>Éthique</b> : respect users, RGPD, sécurité & consentement.</p>
                <p>• <b>Résultats</b> : nous itérons jusqu’à l’impact réel.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#0B0B10] border-[#1E2235]">
              <CardHeader>
                <CardTitle className="text-white">Ce que vous obtenez</CardTitle>
                <CardDescription className="text-[#C7CAD9]">Un système qui travaille pour vous.</CardDescription>
              </CardHeader>
              <CardContent className="text-[#C7CAD9] space-y-2">
                <p>• Un site rapide & orienté conversion</p>
                <p>• Des campagnes pilotées aux KPIs</p>
                <p>• Des automatisations utiles (pas gadgets)</p>
                <p>• Des agents IA qui qualifient & bookent</p>
                <p>• Un plan d’amélioration continue</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-500 px-8">
              <Link href="/rdv">Parler de votre projet</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
