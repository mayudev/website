import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoint: 400;
    colors: {
      background: string;
      backgroundSimple: string;
      foreground: string;
      primary: string;
      onPrimary: string;
      secondary: string;
    };
  }
}
