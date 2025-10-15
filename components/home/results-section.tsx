"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function ResultsSection() {
  return (
    <section id="resultats" className="py-20 lg:py-28 border-t border-[#1E2235]">
      <Container>
        <div className="text-center space-y-3 mb-8">
          <p className="text-xs uppercase tracking-wider text-[#9ba0b8]">Preuves sociales</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Ils nous ont fait confiance
          </h2>
          <p className="text-[#C7CAD9]">
            Des marques réelles, des résultats mesurables. Rejoignez celles qui
            transforment leur acquisition avec des actions claires et trackées.
          </p>
        </div>

        {/* Bannière logos (mets ton image ici : /public/brand/brands-banner.png) */}
        <div className="relative overflow-hidden rounded-2xl border border-[#1E2235] bg-[#0B0B10]/60">
          <div className="relative w-full aspect-[21/5]">
            <Image
              src="/brand/brands-banner.png"
              alt="Logos de marques accompagnées par MABAI"
              fill
              sizes="(max-width: 768px) 100vw, 1000px"
              className="object-cover"
              priority={false}
            />
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/resultats">
            <Button className="bg-violet-600 hover:bg-violet-500">
              Voir les résultats
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
