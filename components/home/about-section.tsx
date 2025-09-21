"use client";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="a-propos" className="py-20 lg:py-28 border-t border-[#1E2235]">
      <Container>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">À propos</h2>
            <p className="text-[#C7CAD9]">
              On préfère les systèmes simples qui marchent aux usines à gaz.
              Une base propre, des boucles d’apprentissage rapides, et des décisions pilotées par la donnée.
            </p>
            <Link href="/a-propos">
              <Button variant="outline" className="border-violet-500 text-violet-400 hover:bg-violet-500/10">
                En savoir plus
              </Button>
            </Link>
          </div>
          <Card className="bg-[#0B0B10] border-[#1E2235]">
            <CardHeader>
              <CardTitle className="text-white">Notre approche</CardTitle>
              <CardDescription className="text-[#C7CAD9]">Mesurable. Itérative. Alignée business.</CardDescription>
            </CardHeader>
            <CardContent className="text-[#C7CAD9] text-sm space-y-2">
              <p>• MVP en 14 jours</p>
              <p>• Design & contenu orientés conversion</p>
              <p>• Automatisations utiles, pas gadgets</p>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
