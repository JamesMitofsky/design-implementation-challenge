import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    allVariants: {
      color: "#ffffff",
      fontFamily: "sans-serif",
    },
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#18191d",
    },
    background: {
      default: "18191d",
      paper: "18191d",
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

// #18191d
