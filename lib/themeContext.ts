import React, { createContext } from "react";

export type ThemeMode = "dark" | "bluishDark" | "light";

// for type checking
const themeModes = ["dark", "bluishDark", "light"];

export const ThemeContext = createContext<
  [ThemeMode, React.Dispatch<React.SetStateAction<ThemeMode>>]
>(["dark", () => {}]);

export function isTheme(value: string): value is ThemeMode {
  return themeModes.indexOf(value) >= 0;
}
