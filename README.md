# Site Web MABAI - Solutions Digitales qui Convertissent

## 🚀 Présentation

Site web professionnel pour l'agence MABAI, spécialisée dans les solutions digitales qui convertissent : sites haute conversion, campagnes publicitaires, automatisations et agents IA.

## 🎯 Caractéristiques Principales

### Design & UX
- **Thème sombre unique** : Palette violet/noir/blanc (#0B0B10, #7C3AED, #FFFFFF)
- **Design Apple-level** : Attention aux détails, micro-interactions, transitions fluides
- **Animations Framer Motion** : Transitions et interactions avancées
- **Responsive complet** : Mobile-first avec breakpoints optimisés
- **Accessibilité AA** : Focus visibles, aria-labels, navigation clavier

### Architecture Technique
- **Next.js 14 + App Router** : Performance et SEO optimisés
- **TypeScript** : Code typé et maintenable
- **Tailwind CSS + shadcn/ui** : Design system cohérent
- **Framer Motion** : Animations performantes
- **Configuration export statique** : Déploiement optimisé

### SEO & Analytics
- **Meta tags français** : Optimisation locale
- **Schema JSON-LD** : LocalBusiness avec données structurées
- **Google Analytics 4** : Tracking avancé avec events personnalisés
- **Google Tag Manager** : Gestion centralisée des tags
- **Sitemap automatique** : Indexation optimale

### RGPD & Conformité
- **Bannière cookies Axeptio** : Gestion du consentement
- **Pages légales complètes** : Mentions légales + confidentialité
- **Tracking conditionnel** : Activation après consentement

## 📋 Pages & Fonctionnalités

### Pages Principales
- **Accueil** (`/`) : Hero, services, démos, FAQ complète
- **Services** (`/services/*`) : 4 pages détaillées avec use cases
- **Sites & Apps** (`/services/sites-apps`) : Nouvelle page de service fusionnant sites et mobile
- **Packs** (`/packs`) : Tarification avec effet hover spécifique
- **Social Media Management** (`/services/social-media-management`) : Nouveau service de gestion des réseaux sociaux
- **Content Creation** (`/services/content-creation`) : Nouveau service de création de contenu
- **Résultats** (`/resultats`) : Cas clients et témoignages
- **À propos** (`/a-propos`) : Histoire et équipe
- **Contact & RDV** (`/contact`, `/rdv`) : Formulaires et Calendly
- **Pages légales** : Mentions légales et confidentialité

### Fonctionnalités Spéciales
- **Section Démos Interactive** : Appel agent vocal + vidéo workflow
- **Effet Hover Packs** : CTA invisible/visible au hover de carte
- **FAQ Complète** : 14 questions avec contenu détaillé
- **Tracking Events** : `cta_rdv_click`, `demo_call_click`, etc.
- **Widget Calendly Intégré** : Avec callback de tracking

## 🛠 Installation & Configuration

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner et installer
npm install

# Développement
npm run dev

# Build production
npm run build
npm run start
```

### Variables d'environnement
Créer un fichier `.env.local` :
```bash
# Analytics
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# RGPD
NEXT_PUBLIC_AXEPTIO_CLIENT_ID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

# Intégrations
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/mabai-rdv
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/33123456789
NEXT_PUBLIC_DEMO_PHONE=+33123456790
```

## 📊 Tracking & Analytics

### Events Trackés
- `cta_rdv_click` : Clics sur boutons RDV (avec source)
- `demo_call_click` : Clics appel agent vocal
- `demo_video_play` : Lecture vidéo workflow
- `calendly_booking` : Réservations RDV

### Configuration GTM
1. Créer un conteneur GTM
2. Configurer GA4 avec consentement
3. Ajouter les triggers d'événements custom
4. Tester avec le mode prévisualisation

### Conformité RGPD
1. Créer compte Axeptio
2. Configurer le widget avec vos domaines
3. Adapter les services trackés
4. Tester le consentement

## 🎨 Design System

### Couleurs Principales
```css
--color-bg: #0B0B10          /* Fond global */
--color-surface: #0F1222     /* Cartes et surfaces */
--color-border: #1E2235      /* Bordures */
--color-text: #FFFFFF        /* Texte principal */
--color-text-dim: #C7CAD9    /* Texte secondaire */
--violet-primary: #7C3AED    /* Violet principal */
--violet-dark: #6D28D9       /* Violet foncé */
--violet-light: #A78BFA      /* Violet clair */
```

### Composants Clés
- `GradientButton` : Boutons avec dégradé violet
- `Container` : Wrapper avec max-width responsive
- `Card` : Cartes avec styles sombres
- `Badge` : Badges avec variants

### Animations
- Utilisation de Framer Motion pour toutes les animations
- Transitions fluides entre les pages
- Micro-interactions sur les éléments interactifs
- Respect des préférences utilisateur (reduce-motion)

## 🔧 Personnalisation

### Contenu
- Modifier `lib/constants.ts` pour les informations de contact
- Ajuster les textes dans chaque composant/page
- Adapter les use cases dans les pages services

### Design
- Couleurs dans `app/globals.css` et `lib/colors.ts`
- Composants UI dans `components/ui/`
- Styles personnalisés avec Tailwind

### Fonctionnalités
- Events de tracking dans `lib/constants.ts`
- Pages services dans `app/services/*/`
- FAQ dans `components/home/faq-section.tsx`

## 📱 Responsive Design

### Breakpoints
- Mobile : < 768px
- Tablet : 768px - 1024px  
- Desktop : > 1024px

### Optimisations Mobile
- Navigation hamburger
- Cards empilées
- Textes adaptés
- Boutons touch-friendly

## ⚡ Performance

### Optimisations
- Images optimisées Next.js
- Lazy loading des composants
- Code splitting automatique
- Fonts optimisées (Inter)

### Scores Lighthouse Cibles
- Performance : 90+
- Accessibilité : 90+
- Best Practices : 90+
- SEO : 90+

## 🚀 Déploiement

### Build & Export
```bash
npm run build
```

### Hébergement Recommandé
- **Vercel** : Déploiement automatique via Git
- **Netlify** : Alternative avec edge functions
- **Github Pages** : Pour projets open source

### Configuration Serveur
- Redirections 301 pour SEO
- Headers de sécurité
- Cache optimisé pour assets

## 📞 Support & Maintenance

### Mises à jour
- Next.js : Updates mineures trimestrielles
- Dependencies : Monitoring automatique
- Content : CMS headless recommandé

### Monitoring
- Core Web Vitals via GA4
- Erreurs via Sentry (recommandé)
- Uptime monitoring

### Backup
- Code : Git + Github
- Content : Export régulier
- Analytics : Backup GA4

## 📄 Licence

Propriétaire - MABAI SAS - Tous droits réservés

---

**Développé avec ❤️ par l'équipe MABAI**

Pour toute question technique : dev@mabai.fr