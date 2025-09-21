"use client";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ResultsSection() {
  return (
    <section id="resultats" className="py-20 lg:py-28 border-t border-[#1E2235]">
      <Container>
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Résultats</h2>
          <p className="text-[#C7CAD9]">Des gains visibles sur les indicateurs qui comptent.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { v: "+40%", l: "Conversion" },
            { v: "–30%", l: "Coût/lead" },
            { v: "+25%", l: "RDV tenus" },
          ].map((m) => (
            <Card key={m.l} className="bg-[#0B0B10] border-[#1E2235]">
              <CardHeader>
                <CardTitle className="text-3xl text-violet-400">{m.v}</CardTitle>
                <CardDescription className="text-[#C7CAD9]">{m.l}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/resultats">
            <Button className="bg-violet-600 hover:bg-violet-500">Voir les études de cas</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
