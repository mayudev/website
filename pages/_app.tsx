import "../styles/globals.css";
import "../styles/catppuccin.css";

import type { AppProps } from "next/app";
import { ThemeMode, ThemeContext, isTheme } from "../lib/themeContext";
import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// Font Awesome fix
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import { BackgroundColor, Foreground } from "../lib/themes";

const GlobalStyle = createGlobalStyle`
  body {
    background: ${BackgroundColor};
    color: ${Foreground};
  }

  :root {
    --bg: ${BackgroundColor};
    --fg: ${Foreground};
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [themeContext, setThemeContext] = useState<ThemeMode>("dark");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme && isTheme(currentTheme)) setThemeContext(currentTheme);
  }, []);

  return (
    <ThemeContext.Provider value={[themeContext, setThemeContext]}>
      <ThemeProvider theme={{ mode: themeContext }}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
