import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { ThemeProvider } from "@/components/theme-provider"
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider defaultTheme="dark">
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>,
);
