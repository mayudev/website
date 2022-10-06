import { PropsWithChildren, useContext } from "react";
import styled from "styled-components";
import { ThemeContext, ThemeMode } from "../lib/themeContext";
import ThemePreview from "./theme-preview";

type Props = {
  name: ThemeMode;
};

const Container = styled.button`
  all: unset;

  padding: 0.5rem;

  transition: text-decoration 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  &:hover > span {
    text-decoration: underline;
  }
`;

export default function Theme({ children, name }: PropsWithChildren<Props>) {
  const [, setTheme] = useContext(ThemeContext);

  const applyTheme = () => {
    setTheme(name);
    localStorage.setItem("theme", name);
  };

  return (
    <Container onClick={() => applyTheme()}>
      <ThemePreview name={name} />
      <span>{children}</span>
    </Container>
  );
}
