import React, { createContext } from "react";
import { DefaultTheme } from "styled-components";
import themeBluish from "./themes/bluish";
import themeDefault from "./themes/default";
import themeLight from "./themes/light";

export type ThemeMode = "dark" | "bluishDark" | "light";

// for type checking
const themeModes = ["dark", "bluishDark", "light"];

export const ThemeContext = createContext<
  [ThemeMode, React.Dispatch<React.SetStateAction<ThemeMode>>]
>(["dark", () => {}]);

export function isTheme(value: string): value is ThemeMode {
  return themeModes.indexOf(value) >= 0;
}

type ThemeMapping = {
  [key in ThemeMode]: DefaultTheme;
};

export const themeMappings: ThemeMapping = {
  dark: themeDefault,
  bluishDark: themeBluish,
  light: themeLight,
};
