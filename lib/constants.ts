// Configuration et variables globales
export const SITE_CONFIG = {
  name: "MABAI",
  description: "Agence spécialisée dans les solutions digitales qui convertissent",
  url: "https://mabai.fr",
  ogImage: "https://mabai.fr/og.jpg",
  links: {
    calendly: "https://calendly.com/mabai-rdv",
    whatsapp: "https://wa.me/33123456789",
    email: "contact@mabai.fr",
    phone: "+33 7 45 65 43 81",
    demoPhone: "+33 1 23 45 67 90",
  }
};

export const TRACKING_CONFIG = {
  gtmId: "GTM-XXXXXXX",
  ga4Id: "G-XXXXXXXXXX",
  axeptioClientId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
};

export const DEMO_CONFIG = {
  workflowVideoSrc: "/videos/demo-workflow.mp4",
  voiceAgentPhone: SITE_CONFIG.links.demoPhone,
};

export const COMPANY_INFO = {
  name: "MABAI",
  legalName: "MABAI SAS",
  address: "25 rue Aristide Maillol, 34000 Montpellier",
  siret: "12345678901234",
  vatNumber: "FR12345678901",
};

// Events de tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const TRACKING_EVENTS = {
  CTA_RDV_CLICK: 'cta_rdv_click',
  DEMO_CALL_CLICK: 'demo_call_click',
  DEMO_VIDEO_PLAY: 'demo_video_play',
  CALENDLY_BOOKING: 'calendly_booking',
};