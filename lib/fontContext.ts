import { createContext, useContext } from "react";

export type FontMode = "sans-serif" | "monospace";

export const FontContext = createContext<[FontMode, (font: FontMode) => void]>([
  "monospace",
  () => {},
]);

export const useFont = () => useContext(FontContext);
