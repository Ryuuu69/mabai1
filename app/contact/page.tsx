"use client";
import { Container } from "@/components/ui/container";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function ContactPage() {
  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      <Container>
        <section className="py-16 lg:py-24">
          <div className="text-center space-y-3 mb-10">
            <h1 className="text-4xl font-semibold">Contact</h1>
            <p className="text-[#C7CAD9] max-w-2xl mx-auto">
              Parlons de votre contexte.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-[#0B0B10] border-[#1E2235]">
              <CardHeader><CardTitle>Email</CardTitle></CardHeader>
              <CardContent className="text-[#C7CAD9]">
                <a href={`mailto:${SITE_CONFIG.links.email}`}>{SITE_CONFIG.links.email}</a>
              </CardContent>
            </Card>
            <Card className="bg-[#0B0B10] border-[#1E2235]">
              <CardHeader><CardTitle>Téléphone</CardTitle></CardHeader>
              <CardContent className="text-[#C7CAD9]">
                <a href="tel:+33745654381">+33 7 45 65 43 81</a>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Link href="/rdv">
              <Button className="bg-violet-600 hover:bg-violet-500">Prendre un RDV</Button>
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
