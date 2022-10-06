import styled, { keyframes } from "styled-components";
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

export default function ThemePicker({ onHide }: Props) {
  return (
    <Picker onClick={onHide}>
      <Theme name="dark">default dark</Theme>
      <Theme name="bluishDark">bluish-dark theme</Theme>
      <Theme name="light">light pink</Theme>
    </Picker>
  );
}
