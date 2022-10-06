import "../styles/globals.css";
import "../styles/catppuccin.css";

import type { AppProps } from "next/app";
import { ThemeMode, ThemeContext, isTheme, themeMappings } from "../lib/themeContext";
import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
// Font Awesome fix
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@fontsource/iosevka/400.css";
import "@fontsource/iosevka/700.css";

import "@fontsource/lexend/variable.css";

import { FontContext, FontMode } from "../lib/fontContext";
config.autoAddCss = false;

const GlobalStyle = createGlobalStyle<{
  isSansSerif: boolean;
}>`
  body {
    background:${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};

    ${(props) => props.isSansSerif && `font-family: LexendVariable, sans-serif;`}
    
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
  const [font, setFont] = useState<FontMode>("monospace");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme && isTheme(currentTheme)) setThemeContext(currentTheme);

    const currentFont = localStorage.getItem("font");
    if ((currentFont && currentFont === "monospace") || currentFont === "sans-serif")
      setFont(currentFont);
  }, []);

  return (
    <ThemeContext.Provider value={[themeContext, setThemeContext]}>
      <FontContext.Provider value={[font, setFont]}>
        <ThemeProvider theme={themeMappings[themeContext]}>
          <GlobalStyle isSansSerif={font === "sans-serif"} />
          <Component {...pageProps} />
        </ThemeProvider>
      </FontContext.Provider>
    </ThemeContext.Provider>
  );
}

export default MyApp;
