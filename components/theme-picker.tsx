import styled, { keyframes } from "styled-components";
import { Accent, AccentPrimary, BackgroundColor } from "../lib/themes";
import Theme from "./theme";

type Props = {
  onHide: () => void;
};

const appear = keyframes`
  from { opacity: 0; }
  to { margin-bottom: 15px; opacity: 1; }  
`;

const Picker = styled.div`
  animation: ${appear} 0.1s ease-out;

  margin-bottom: 15px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;

  background: ${BackgroundColor};
`;

export default function ThemePicker({ onHide }: Props) {
  return (
    <Picker onClick={onHide}>
      <Theme name="dark">default (catppuccin)</Theme>
      <Theme name="bluishDark">bluish-dark theme</Theme>
      <Theme name="light">light pink</Theme>
    </Picker>
  );
}
