// Design system - Couleurs obligatoires
export const colors = {
  bg: '#0B0B10',
  surface: '#0F1222',
  border: '#1E2235',
  text: '#FFFFFF',
  textDim: '#C7CAD9',
  violet: {
    primary: '#7C3AED',
    dark: '#6D28D9',
    light: '#A78BFA',
  },
  gradientAccent: 'linear-gradient(90deg, #8B5CF6 0%, #6D28D9 100%)',
};

// Fonction utilitaire pour les dégradés
export const getGradientClass = (direction = '90deg') => 
  `bg-gradient-to-r from-violet-500 to-violet-700`;