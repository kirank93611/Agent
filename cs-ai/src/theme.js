import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a365d',
    },
    background: {
      default: '#f8faff',
      paper: '#ffffff',
    },
    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      400: '#9CA3AF',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',  // Sidebar background color
      900: '#111827',
    },
    warning: {
      main: '#ED6C02',  // Logout button color
      dark: '#C55A02',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: '#1F2937',
          color: '#FFFFFF',
        },
      },
    },
  },
});

export default theme; 