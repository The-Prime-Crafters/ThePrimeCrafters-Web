export const THEME = {
  colors: {
    background: "#0b0c14",
    surface: "rgba(255, 255, 255, 0.025)",
    border: "rgba(255, 255, 255, 0.07)",
    primary: "#C9A84C", // Gold/Yellow
    text: "#f5f1e8",
    textMuted: "rgba(240, 237, 230, 0.5)",
    cardHover: "rgba(201, 168, 76, 0.05)",
  },
  fonts: {
    serif: "'Playfair Display', serif",
    sans: "'DM Sans', sans-serif",
  },
};

export const PA_FONTS_LINK = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Playfair+Display:wght@700&display=swap";

export const PA_RESPONSIVE_STYLES = `
  @media (max-width: 900px) {
    .pa-grid-2 { grid-template-columns: 1fr !important; }
    .pa-grid-3 { grid-template-columns: 1fr !important; }
    .pa-section { padding: 60px 20px !important; }
    .pa-h1 { fontSize: 32px !important; }
    .pa-h2 { fontSize: 28px !important; }
  }
`;
