import styled from "styled-components";
import { themeMappings, ThemeMode } from "../lib/themeContext";

type Props = {
  name: ThemeMode;
};

const Background = styled.div`
  font-size: 16px;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  border-radius: 6px;
`;

const Heading = styled.div`
  border-bottom: 2px solid;
  font-weight: 700;
`;

export default function ThemePreview({ name }: Props) {
  const colors = themeMappings[name].colors;

  return (
    <div>
      <Background style={{ background: colors.background, color: colors.foreground }}>
        <Heading style={{ color: colors.primary }}>header</Heading>
        <span>text</span>
      </Background>
    </div>
  );
}
