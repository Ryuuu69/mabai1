// app/mentions-legales/page.tsx
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de MABAI - Informations sur l'éditeur et l'hébergeur du site",
};

export default function MentionsLegalesPage() {
  // Petits fallbacks pour éviter un crash si une clé manque dans COMPANY_INFO
  const legalName = COMPANY_INFO?.legalName ?? "MABAI";
  const address = COMPANY_INFO?.address ?? "[Adresse complète]";
  const siret = COMPANY_INFO?.siret ?? "[SIRET]";
  const vatNumber = COMPANY_INFO?.vatNumber ?? "[TVA intracommunautaire]";

  return (
    <div className="bg-[#05060A] text-[#E6E8F2]">
      <section className="py-20 lg:py-28 border-b border-[#1E2235]">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12">
              Mentions légales
            </h1>

            <div className="space-y-12 text-[#C7CAD9]">
              {/* Éditeur */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Éditeur du site</h2>
                <div className="space-y-2">
                  <p><strong>Raison sociale :</strong> {legalName}</p>
                  <p><strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)</p>
                  <p><strong>Adresse :</strong> {address}</p>
                  <p><strong>SIRET :</strong> {siret}</p>
                  <p><strong>N° TVA :</strong> {vatNumber}</p>
                  <p><strong>Capital social :</strong> 10 000 euros</p>
                </div>
              </section>

              {/* Directeur de publication */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Directeur de publication</h2>
                <p>
                  Le directeur de la publication est le représentant légal de la société {legalName}.
                </p>
              </section>

              {/* Hébergement */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Hébergement</h2>
                <div className="space-y-2">
                  <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                  <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis</p>
                  <p>
                    <strong>Site web :</strong>{" "}
                    <a
                      href="https://vercel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 underline"
                    >
                      vercel.com
                    </a>
                  </p>
                </div>
              </section>

              {/* Propriété intellectuelle */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Propriété intellectuelle</h2>
                <div className="space-y-4">
                  <p>
                    L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par les droits d'auteur
                    et appartient à {legalName} ou à ses partenaires. Toute reproduction, même partielle, est interdite
                    sans autorisation préalable écrite.
                  </p>
                  <p>
                    Les marques, logos et signes distinctifs reproduits sur ce site sont la propriété exclusive de {legalName}
                    ou font l'objet d'une autorisation d'utilisation. Leur reproduction sans autorisation constitue une contrefaçon
                    sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                  </p>
                </div>
              </section>

              {/* Responsabilité */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Responsabilité</h2>
                <div className="space-y-4">
                  <p>
                    Les informations diffusées sur ce site sont présentées à titre indicatif. {legalName} met tout en œuvre
                    pour fournir des informations fiables et actualisées, mais ne peut garantir l'exactitude, la
                    précision ou l'exhaustivité des informations mises à disposition.
                  </p>
                  <p>
                    {legalName} ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation
                    de ce site ou de l'impossibilité d'y accéder.
                  </p>
                </div>
              </section>

              {/* Données personnelles */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Données personnelles</h2>
                <p>
                  Pour toute information concernant la collecte et le traitement de vos données personnelles,
                  veuillez consulter notre{" "}
                  <a href="/confidentialite" className="text-violet-400 hover:text-violet-300 underline">
                    politique de confidentialité
                  </a>.
                </p>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Contact</h2>
                <div className="space-y-2">
                  <p><strong>Email :</strong> <a className="underline" href="mailto:contact@mabai.fr">contact@mabai.fr</a></p>
                  <p><strong>Téléphone :</strong> <a className="underline" href="tel:+33745654381">+33 7 45 65 43 81</a></p>
                  <p><strong>Adresse :</strong> {address}</p>
                </div>
              </section>

              {/* Droit applicable */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Droit applicable</h2>
                <p>
                  Les présentes mentions légales sont soumises au droit français. En cas de litige,
                  les tribunaux français seront seuls compétents.
                </p>
              </section>

              {/* Médiation */}
              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Médiation de la consommation</h2>
                <p>
                  Conformément à l'article L.616-1 du Code de la consommation, vous pouvez recourir gratuitement
                  à un service de médiation en cas de litige.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
