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
import themeCatppuccin from "../lib/themes/catppuccin";

const GlobalStyle = createGlobalStyle`
  body {
    background:${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  :root {
    --bg:  ${(props) => props.theme.colors.background};
    --fg: ${(props) => props.theme.colors.foreground};
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
      <ThemeProvider theme={themeCatppuccin}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
