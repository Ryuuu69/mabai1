import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SITE_CONFIG } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'MABAI - Solutions digitales qui convertissent',
    template: '%s | MABAI',
  },
  description: 'Sites & boutiques qui convertissent, campagnes qui ramènent, automatisations et agents IA (chat & voix) qui qualifient et bookent.',
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: ['conversion', 'marketing digital', 'automatisation', 'intelligence artificielle', 'sites web', 'campagnes publicitaires'],
  authors: [{ name: 'MABAI' }],
  creator: 'MABAI',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'MABAI - Solutions digitales qui convertissent',
    description: 'Sites & boutiques qui convertissent, campagnes qui ramènent, automatisations et agents IA qui qualifient et bookent.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'MABAI - Solutions digitales qui convertissent',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MABAI - Solutions digitales qui convertissent',
    description: 'Sites & boutiques qui convertissent, campagnes qui ramènent, automatisations et agents IA qui qualifient et bookent.',
    images: [SITE_CONFIG.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="canonical" href={SITE_CONFIG.url} />
        <meta name="theme-color" content="#7C3AED" />
        
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "MABAI",
              "description": "Agence spécialisée dans les solutions digitales qui convertissent",
              "url": SITE_CONFIG.url,
              "telephone": SITE_CONFIG.links.phone,
              "email": SITE_CONFIG.links.email,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "25 rue Aristide Maillol",
                "addressLocality": "Montpellier",
                "postalCode": "34000",
                "addressCountry": "FR"
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "€€€",
              "serviceArea": {
                "@type": "Country",
                "name": "France"
              }
            })
          }}
        />

        {/* Axeptio Cookie Banner */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.axeptioSettings = {
                clientId: "${process.env.NEXT_PUBLIC_AXEPTIO_CLIENT_ID || 'your-axeptio-client-id'}",
                cookiesVersion: "base"
              };
              (function(d, s) {
                var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                e.async = true; e.src = "//static.axept.io/sdk.js";
                t.parentNode.insertBefore(e, t);
              })(document, "script");
            `
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}');
            `
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0B0B10] text-white antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID || 'GTM-XXXXXXX'}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Skip to main content */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-violet-600 text-white px-4 py-2 rounded-md z-50"
        >
          Aller au contenu principal
        </a>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}