"use client";

import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Spotlight from "@/components/ui/spotlight";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-[#1E2235] min-h-[70vh] flex items-center">
      {/* Dégradé décoratif */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(900px 500px at 50% -10%, rgba(124,58,237,0.28), transparent 60%)",
        }}
      />
      {/* Halo souris */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Spotlight color="rgba(124,58,237,0.12)" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 lg:py-24"
        >
          <div className="text-center space-y-5">
            <Badge className="bg-violet-600/20 text-violet-300 border-violet-600/40">
              Sites • Contenu • Réseaux sociaux • Ads • IA
            </Badge>

            {/* Titre avec 2e ligne en violet */}
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
              <span className="block text-white">Stop au bruit.</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-violet-600">
                Place aux résultats.
              </span>
            </h1>

            <p className="text-[#C7CAD9] max-w-2xl mx-auto">
              Une exécution intégrée (site, contenu, social, Ads, IA) qui transforme l’attention en revenus mesurables.
            </p>

            {/* Bouton unique centré */}
            <div className="flex justify-center pt-2">
              <Button asChild size="lg" className="px-8 bg-violet-600 hover:bg-violet-500">
                <Link href="/rdv" aria-label="Prendre un rendez-vous avec MABAI">
                  Prendre un RDV
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

