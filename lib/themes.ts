import theme from "styled-theming";

// TODO unbreak light theme :)

export const BackgroundColor = theme("mode", {
  light: "#fcdee9",
  dark: "#1b1e24",
});

export const Foreground = theme("mode", {
  light: "#2c2638",
  dark: "#c9e5ec",
});

export const ForegroundSecondary = theme("mode", {
  light: "#493f5e",
  dark: "#88a2a8", // #728188
});

export const Accent = theme("mode", {
  light: "#eabbcd",
  dark: "#c9e5ec",
});

export const AccentPrimary = theme("mode", {
  light: "#ecc9d4",
  dark: "#ecc9d4",
});

export const AccentSecondary = theme("mode", {
  light: "#ece2c9",
  dark: "#ece2c9",
});
