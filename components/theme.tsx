import { PropsWithChildren, useContext } from "react";
import styled from "styled-components";
import { ThemeContext, ThemeMode } from "../lib/themeContext";
import { Accent } from "../lib/themes";

type Props = {
  name: ThemeMode;
};

const Container = styled.button`
  all: unset;
  display: flex;

  padding: 5px 10px;

  transition: text-decoration 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
  user-select: none;

  font-size: 1.2rem;
  align-self: flex-end;

  border-right: 2px solid ${Accent};

  &:hover {
    text-decoration: underline;
  }
`;

export default function Theme({ children, name }: PropsWithChildren<Props>) {
  const [, setTheme] = useContext(ThemeContext);

  const applyTheme = () => {
    setTheme(name);
    localStorage.setItem("theme", name);
  };

  return <Container onClick={() => applyTheme()}>{children}</Container>;
}
