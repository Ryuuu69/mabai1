"use client";
import { Container } from "@/components/ui/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const packs = [
  { name: "Starter", price: "2 500€", features: ["Landing page", "Formulaire + CRM", "Mise en ligne"] },
  { name: "Growth", price: "5 000€", features: ["Mini-site", "Automatisations", "Suivi conversion"] },
  { name: "Scale", price: "7 000€", features: ["Site complet", "Agents IA", "Ops & intégrations"] },
];

export function PacksSection() {
  return (
    <section id="packs" className="py-20 lg:py-28 border-t border-[#1E2235]">
      <Container>
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Packs</h2>
          <p className="text-[#C7CAD9]">Trois niveaux pour avancer vite selon votre contexte.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packs.map((p) => (
            <Card key={p.name} className="bg-[#0B0B10] border-[#1E2235]">
              <CardHeader>
                <CardTitle className="text-white">{p.name}</CardTitle>
                <CardDescription className="text-[#C7CAD9]">{p.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-[#C7CAD9] space-y-2 list-disc pl-5">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
