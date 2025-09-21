"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

import BrandLogo from "@/components/brand/BrandLogo";
import { Container } from "@/components/ui/container";
import { GradientButton } from "@/components/ui/gradient-button";
import { SITE_CONFIG, COMPANY_INFO, trackEvent, TRACKING_EVENTS } from "@/lib/constants";

const navigation = {
  services: [
    { name: "Sites & Apps", href: "/services/sites-apps" },
    { name: "Acquisition & Campagnes", href: "/services/acquisition-campagnes" },
    { name: "Automatisations", href: "/services/automatisations-integrations" },
    { name: "Agents IA", href: "/services/agents-ia" },
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "Content Creation", href: "/services/content-creation" },
    // Removed "Développement Mobile" as it's merged into "Sites & Apps"
  ],
  company: [
    { name: "À propos", href: "/a-propos" },
    { name: "Résultats", href: "/resultats" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Mentions légales", href: "/mentions-legales" },
    { name: "Politique de confidentialité", href: "/confidentialite" },
  ],
};

export function Footer() {
  const handleCTAClick = () => {
    trackEvent(TRACKING_EVENTS.CTA_RDV_CLICK, { from: "footer" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F1222] border-t border-[#1E2235]">
      <Container>
        <div className="py-16">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Prêt à booster vos conversions ?
            </h2>
            <p className="text-[#C7CAD9] mb-8 max-w-2xl mx-auto">
              Discutons de votre projet en 30 minutes. Analyse gratuite et recommandations personnalisées.
            </p>
            <Link
              href="/rdv"
              onClick={handleCTAClick}
              aria-label="Prendre un rendez-vous gratuit"
            >
              <GradientButton size="lg">Prendre un RDV gratuit</GradientButton>
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Link href="/" aria-label="Aller à l’accueil" className="inline-block">
                  {/* Taille contrôlée via variables CSS :
                      --logo-footer dans globals.css */}
                  <BrandLogo context="footer" />
                </Link>
              </div>

              <p className="text-[#C7CAD9] mb-6">
                Solutions digitales qui convertissent. Sites, campagnes, automatisations et agents IA.
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#C7CAD9]">
                  <Mail className="h-4 w-4" />
                  <a
                    href={`mailto:${SITE_CONFIG.links.email}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.links.email}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-[#C7CAD9]">
                  <Phone className="h-4 w-4" />
                  <a
                    href={`tel:${SITE_CONFIG.links.phone}`}
                    className="hover:text-white transition-colors"
                  >
                    {SITE_CONFIG.links.phone}
                  </a>
                </div>

                <div className="flex items-start gap-2 text-[#C7CAD9]">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span className="text-sm">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#C7CAD9] hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entreprise */}
            <div>
              <h3 className="font-semibold text-white mb-4">Entreprise</h3>
              <ul className="space-y-2">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#C7CAD9] hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Légal */}
            <div>
              <h3 className="font-semibold text-white mb-4">Légal</h3>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-[#C7CAD9] hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#1E2235]">
            <p className="text-[#C7CAD9] text-sm">
              © 2024 {COMPANY_INFO.legalName}. Tous droits réservés.
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 flex items-center gap-2 text-[#C7CAD9] hover:text-white transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="h-4 w-4" />
              <span className="text-sm">Retour en haut</span>
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
