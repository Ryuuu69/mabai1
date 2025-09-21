"use client";

import { Container } from "@/components/ui/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqData = [
  {
    category: "Résultats & ROI",
    questions: [
      {
        question: "Combien de RDV puis-je espérer le 1er mois ?",
        answer: "Cas typiques locaux : +5 à +12 RDV/semaine quand le trafic est suffisant et l'offre claire. Pour l'e-commerce, on vise +20-40% de conversions sur les parcours optimisés. Tout dépend de votre secteur, budget pub et qualité du trafic existant. On fait toujours un audit gratuit pour estimer le potentiel."
      },
      {
        question: "En combien de temps je vois un effet ?",
        answer: "2 à 4 semaines. On livre un MVP en 14 jours, puis on optimise en continu. Les premières conversions arrivent souvent dès la 2ème semaine. Pour les campagnes pub, c'est encore plus rapide : 3-7 jours pour voir les premiers leads qualifiés."
      },
      {
        question: "Quelles garanties sur les résultats ?",
        answer: "On ne garantit pas de chiffres (personne de sérieux ne peut le faire), mais on s'engage sur la méthode et les livrables. Si après 2 mois il n'y a aucune amélioration mesurable, on travaille gratuitement jusqu'à ce que ça marche ou on vous rembourse les frais de setup."
      }
    ]
  },
  {
    category: "Technique & Méthode",
    questions: [
      {
        question: "Vous codez tout from scratch ?",
        answer: "Non, on utilise des frameworks éprouvés (Next.js, WordPress optimisé, Shopify Plus...) qu'on customise. 80% de nos développements utilisent des briques existantes qu'on assemble intelligemment. C'est plus rapide, plus stable et moins cher."
      },
      {
        question: "Comment vous mesurez les performances ?",
        answer: "Dashboard temps réel avec métriques clés : taux de conversion par source, coût d'acquisition, LTV, ROI campagnes. On connecte Google Analytics, votre CRM, et nos outils propriétaires. Rapport mensuel avec recommandations d'optimisation."
      },
      {
        question: "L'IA remplace vraiment un commercial ?",
        answer: "Elle qualifie et fait le premier tri, mais un humain reste nécessaire pour closer. Notre IA gère 70% des questions récurrentes, booke les RDV automatiquement et score les leads. Votre équipe se concentre sur les prospects les plus chauds."
      }
    ]
  },
  {
    category: "Processus & Collaboration",
    questions: [
      {
        question: "Comment ça se passe concrètement ?",
        answer: "J1-3 : Audit et stratégie. J4-14 : Développement MVP. J15-30 : Tests et optimisations. J30+ : Suivi mensuel et évolutions. Vous avez un slack privé avec l'équipe et des points hebdomadaires."
      },
      {
        question: "J'ai déjà un site, vous repartez de zéro ?",
        answer: "Pas forcément. On audite l'existant et on optimise ce qui marche. Parfois quelques ajustements UX/conversion suffisent. Si la base est solide, on garde et on améliore. Sinon on recommande une refonte partielle ou totale."
      },
      {
        question: "Vous gérez la maintenance ?",
        answer: "Oui, maintenance technique incluse : mises à jour, sécurité, backup, monitoring. Pour les évolutions fonctionnelles, on a des packs horaires ou on intègre ça dans l'abonnement mensuel selon vos besoins."
      }
    ]
  },
  {
    category: "Tarifs & Business Model",
    questions: [
      {
        question: "Quel budget prévoir pour commencer ?",
        answer: "Setup initial : 3-8K€ selon la complexité. Puis abonnement mensuel 500-2000€/mois pour l'accompagnement et les optimisations. Budget pub à prévoir en plus : minimum 1000€/mois pour tester efficacement."
      },
      {
        question: "Pourquoi un abonnement mensuel ?",
        answer: "Le digital évolue vite. Un site livré sans suivi perd en performance. L'abonnement inclut : optimisations continues, nouveaux tests A/B, évolutions techniques, support prioritaire. C'est un partenariat long terme, pas juste une prestation."
      },
      {
        question: "Je peux arrêter quand je veux ?",
        answer: "Oui, préavis de 30 jours. Après 6 mois, vous récupérez tous les codes sources et accès. On fait même une passation avec votre équipe ou nouveau prestataire. Pas de rétention artificielle."
      }
    ]
  },
  {
    category: "Secteurs & Spécialités",
    questions: [
      {
        question: "Vous travaillez dans tous les secteurs ?",
        answer: "Spécialités : services BtoB, formations/coaching, e-commerce, professions libérales. On évite : secteurs ultra-réglementés (finance, pharma), pure tech/SaaS (pas notre coeur de métier), secteurs sans budget pub minimal (1K€/mois)."
      },
      {
        question: "Vous avez des références dans mon secteur ?",
        answer: "On vous montre 2-3 cas similaires lors du RDV découverte (avec accord des clients). On signe toujours une NDA si besoin. References principales : coaching business, formations en ligne, services premium, e-commerce lifestyle."
      }
    ]
  }
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Questions 
              <span className="bg-gradient-to-r from-violet-400 to-violet-600 bg-clip-text text-transparent">
                {" "}fréquentes
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-[#C7CAD9] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Toutes les réponses aux questions que vous vous posez sur nos méthodes et résultats
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-6">
              {faqData.map((category, categoryIndex) => (
                <div key={category.category} className="space-y-4">
                  <h3 className="text-xl font-semibold text-violet-400 mb-4">
                    {category.category}
                  </h3>
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="bg-[#0F1222] border border-[#1E2235] rounded-lg px-6"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-violet-300 py-6">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-[#C7CAD9] pb-6 leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}