import React, { createContext } from "react";

export type ThemeMode = "dark" | "bluishDark" | "light";

export const ThemeContext = createContext<
  [ThemeMode, React.Dispatch<React.SetStateAction<ThemeMode>>]
>(["dark", () => {}]);
