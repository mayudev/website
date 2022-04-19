import theme from "styled-theming";

export const NarrowBreakpoint = 400;

// dark color palette is (catppuccin)[https://github.com/catppuccin/catppuccin]
export const BackgroundColor = theme("mode", {
  light: "#fcdee9",
  dark: "#1e1e2e",
  bluishDark: "#1b1e24",
});

export const Foreground = theme("mode", {
  light: "#2c2638",
  dark: "#d9e0ee",
  bluishDark: "#c9e5ec",
});

export const ForegroundSecondary = theme("mode", {
  light: "#80273d",
  dark: "#96cdfb",
  bluishDark: "#ece2c9",
});

export const Accent = theme("mode", {
  light: "#eabbcd",
  dark: "#96cdfb",
  bluishDark: "#c9e5ec",
});

export const AccentPrimary = theme("mode", {
  light: "#352d2f",
  dark: "#f5c2e7",
  bluishDark: "#ecc9d4",
});

export const AccentSecondary = theme("mode", {
  light: "#574742",
  dark: "#b5e8e0",
  bluishDark: "#ece2c9",
});

export const Border = theme("mode", {
  light: "#352d2f",
  dark: "#575268",
  bluishDark: "#ecc9d4",
});
