import styled, { keyframes } from "styled-components";
import { FontMode, useFont } from "../lib/fontContext";
import Theme from "./theme";

type Props = {
  onHide: () => void;
};

const appear = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }  
`;

const Picker = styled.div`
  background: ${(props) => props.theme.colors.background};

  margin-bottom: 1rem;
  padding: 0.5rem;

  box-shadow: 1px 3px 10px rgba(0, 0, 0, 0.3);

  animation: ${appear} 0.1s ease-out;

  border-radius: 6px;
  display: grid;
`;

const FontSettings = styled.div`
  padding: 0.5rem;
`;

const Font = styled.button<{
  active?: boolean;
}>`
  all: unset;
  display: block;

  ${(props) =>
    props.active &&
    `
  color: ${props.theme.colors.primary};
  text-decoration: underline;`}

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export default function ThemePicker({ onHide }: Props) {
  const [font, setFont] = useFont();

  const applyFont = (font: FontMode) => {
    setFont(font);
    localStorage.setItem("font", font);
  };

  return (
    <Picker onClick={onHide}>
      <FontSettings>
        font setting
        <Font onClick={() => applyFont("monospace")} active={font === "monospace"}>
          monospace
        </Font>
        <Font onClick={() => applyFont("sans-serif")} active={font === "sans-serif"}>
          sans-serif
        </Font>
      </FontSettings>
      <Theme name="dark">default dark</Theme>
      <Theme name="bluishDark">bluish-dark theme</Theme>
      <Theme name="light">light pink</Theme>
    </Picker>
  );
}
