import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/hind-guntur";
import { grey } from "@mui/material/colors";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    cardTitle: React.CSSProperties;
    cardSubtitle: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    cardTitle?: React.CSSProperties;
    cardSubtitle?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    cardTitle: true;
    cardSubtitle: true;
  }
}

const primaryDark = "#18191d";
const callToAction = "#3b39e8";
const callToActionDark = "#2a2a9e";

let theme = createTheme({
  typography: {
    allVariants: {
      color: "#ffffff",
      fontFamily: "'Hind Guntur', sans-serif",
    },
    h1: {
      fontSize: "2.8rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: ".8rem",
      fontWeight: 100,
      color: "#6e7279",
    },
    cardTitle: {
      fontSize: "1.05rem",
      lineHeight: "1.3rem",
      fontWeight: 700,
      color: grey[50],
      fontFamily: "'Hind Guntur', sans-serif",
    },
    cardSubtitle: {
      fontSize: ".8rem",
      lineHeight: "1.1rem",
      color: grey[700],
      fontFamily: "'Hind Guntur', sans-serif",
    },
  },
  palette: {
    primary: {
      main: primaryDark,
      light: "hsl(0deg 0% 14% / 61%)",
    },
    secondary: {
      main: grey[900],
      light: grey[800],
    },
    background: {
      default: primaryDark,
      paper: primaryDark,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: callToAction,
          "&:hover": {
            background: callToActionDark,
          },
          borderRadius: ".4rem",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: ".7rem",
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
