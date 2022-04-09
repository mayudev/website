import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../lib/themeContext";
import { Accent } from "../lib/themes";

const FloatingActionButton = styled.button`
  all: unset;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 15px;
  padding: 15px;

  border-radius: 50%;
  background: ${Accent};
  color: #1b1e24;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

export default function ThemeSwitcher() {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      <FloatingActionButton data-tip="Toggle theme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faPalette} size="lg" />
      </FloatingActionButton>
    </>
  );
}
