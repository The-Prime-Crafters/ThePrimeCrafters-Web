export const PA_RESPONSIVE_STYLES = `
  @media (max-width: 1024px) {
    .pa-section { padding: 64px 24px !important; }
    .pa-grid-2 { grid-template-columns: 1fr !important; }
    .pa-grid-3 { grid-template-columns: repeat(2, 1fr) !important; }
    .pa-hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .pa-h2 { font-size: 30px !important; }
  }
  @media (max-width: 640px) {
    .pa-section { padding: 56px 16px !important; }
    .pa-grid-3 { grid-template-columns: 1fr !important; }
    .pa-h2 { font-size: 26px !important; }
    .pa-h1 { font-size: 36px !important; }
    .pa-ctas { flex-direction: column !important; }
    .pa-ctas a { width: 100% !important; justify-content: center !important; text-align: center !important; }
  }
  @media (max-width: 480px) {
    .pa-section { padding: 44px 16px !important; }
    .pa-h2 { font-size: 22px !important; }
    .pa-h1 { font-size: 30px !important; }
  }
`;

export const PA_FONTS_LINK =
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap";
