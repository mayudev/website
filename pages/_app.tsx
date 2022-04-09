import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeMode, ThemeContext } from "../lib/themeContext";
import { useEffect, useState } from "react";
// Font Awesome fix
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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

    if (currentTheme && currentTheme === "light") setThemeContext("light");
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
