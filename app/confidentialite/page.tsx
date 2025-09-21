import { Container } from "@/components/ui/container";
import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de MABAI - Comment nous collectons, utilisons et protégeons vos données personnelles",
};

export default function ConfidentialitePage() {
  return (
    <div className="py-20 lg:py-28">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-12">
            Politique de confidentialité
          </h1>

          <div className="space-y-12 text-[#C7CAD9]">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Introduction</h2>
              <p className="leading-relaxed">
                MABAI SAS, société par actions simplifiée au capital de 10 000 euros, immatriculée au RCS de Paris 
                sous le numéro {COMPANY_INFO.siret}, dont le siège social est situé {COMPANY_INFO.address}, 
                s'engage à protéger la confidentialité et la sécurité de vos données personnelles.
              </p>
            </section>

            {/* Responsable de traitement */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Responsable du traitement</h2>
              <div className="space-y-2">
                <p><strong>Société :</strong> {COMPANY_INFO.legalName}</p>
                <p><strong>Adresse :</strong> {COMPANY_INFO.address}</p>
                <p><strong>Email :</strong> contact@mabai.fr</p>
                <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Données personnelles collectées</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Données d'identification</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Nom de l'entreprise</li>
                    <li>Fonction dans l'entreprise</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Données de navigation</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Adresse IP</li>
                    <li>Type de navigateur</li>
                    <li>Pages visitées et temps passé</li>
                    <li>Source de trafic</li>
                    <li>Actions réalisées sur le site</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalités */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Finalités du traitement</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Gestion des demandes de contact</h3>
                  <p>Traitement de vos demandes de renseignements et prise de rendez-vous.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Communication commerciale</h3>
                  <p>Envoi d'informations sur nos services et offres (avec votre consentement).</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Amélioration de nos services</h3>
                  <p>Analyse statistique de l'utilisation du site pour optimiser l'expérience utilisateur.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Obligations légales</h3>
                  <p>Respect de nos obligations comptables, fiscales et réglementaires.</p>
                </div>
              </div>
            </section>

            {/* Base légale */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Base légale du traitement</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Consentement</h3>
                  <p>Pour l'envoi de communications commerciales et l'utilisation de cookies non essentiels.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intérêt légitime</h3>
                  <p>Pour l'analyse des performances du site et l'amélioration de nos services.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Exécution d'un contrat</h3>
                  <p>Pour la gestion de la relation client et la fourniture de nos services.</p>
                </div>
              </div>
            </section>

            {/* Durée de conservation */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Durée de conservation</h2>
              <div className="space-y-3">
                <p><strong>Prospects :</strong> 3 ans à compter du dernier contact</p>
                <p><strong>Clients :</strong> 10 ans à compter de la fin de la relation contractuelle (obligations comptables)</p>
                <p><strong>Données de navigation :</strong> 25 mois maximum</p>
                <p><strong>Cookies :</strong> 13 mois maximum</p>
              </div>
            </section>

            {/* Destinataires */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Destinataires des données</h2>
              <div className="space-y-4">
                <p>Vos données personnelles peuvent être communiquées à :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Les membres de notre équipe habilités</li>
                  <li>Nos prestataires techniques (hébergement, emailing, CRM)</li>
                  <li>Nos partenaires commerciaux (avec votre consentement explicite)</li>
                  <li>Les autorités compétentes en cas d'obligation légale</li>
                </ul>
              </div>
            </section>

            {/* Transferts */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Transferts de données</h2>
              <p className="leading-relaxed">
                Certains de nos prestataires peuvent être situés en dehors de l'Union européenne. 
                Dans ce cas, nous nous assurons que des garanties appropriées sont mises en place 
                (clauses contractuelles types, certification Privacy Shield, etc.).
              </p>
            </section>

            {/* Sécurité */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Sécurité des données</h2>
              <div className="space-y-4">
                <p>Nous mettons en œuvre les mesures techniques et organisationnelles appropriées pour :</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Protéger vos données contre l'accès non autorisé</li>
                  <li>Assurer la confidentialité et l'intégrité des données</li>
                  <li>Prévenir la perte ou la destruction accidentelle</li>
                  <li>Former notre personnel à la protection des données</li>
                </ul>
              </div>
            </section>

            {/* Droits des personnes */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Vos droits</h2>
              <div className="space-y-4">
                <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Droit d'accès :</strong> obtenir une copie de vos données personnelles</li>
                  <li><strong>Droit de rectification :</strong> corriger les données inexactes ou incomplètes</li>
                  <li><strong>Droit à l'effacement :</strong> demander la suppression de vos données</li>
                  <li><strong>Droit à la limitation :</strong> restreindre le traitement de vos données</li>
                  <li><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</li>
                  <li><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</li>
                  <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
                </ul>
                
                <p className="mt-6">
                  Pour exercer vos droits, contactez-nous à : <strong>dpo@mabai.fr</strong> 
                  en précisant votre demande et en joignant une copie de votre pièce d'identité.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Cookies et traceurs</h2>
              <div className="space-y-4">
                <p>
                  Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser 
                  l'utilisation de notre site. Vous pouvez gérer vos préférences via le bandeau de cookies 
                  ou les paramètres de votre navigateur.
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Types de cookies utilisés</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site</li>
                    <li><strong>Cookies analytiques :</strong> Google Analytics (avec anonymisation IP)</li>
                    <li><strong>Cookies marketing :</strong> suivi des conversions et remarketing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Réclamations */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Réclamations</h2>
              <p className="leading-relaxed">
                Si vous estimez que le traitement de vos données personnelles ne respecte pas la réglementation, 
                vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) : 
                <a href="https://www.cnil.fr" className="text-violet-400 hover:text-violet-300 ml-1">www.cnil.fr</a>
              </p>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-bold text-white mb-6">Modifications</h2>
              <p className="leading-relaxed">
                Cette politique de confidentialité peut être modifiée à tout moment. 
                Nous vous informerons de toute modification importante par email ou via un avis sur notre site.
              </p>
              
              <p className="mt-4">
                <strong>Dernière mise à jour :</strong> 15 janvier 2024
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}