// Lightweight design tokens to replace MUI theme usage.
const theme = {
  colors: {
    primary: '#1a365d',
    primaryAlt: '#2d4a77',
    background: { default: '#f8faff', paper: '#ffffff' },
    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      400: '#9CA3AF',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },
    warning: { main: '#ED6C02', dark: '#C55A02' }
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
    h1Weight: 700,
    h2Weight: 600
  }
};

export default theme;