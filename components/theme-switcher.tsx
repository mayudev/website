import { faClose, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { Accent } from "../lib/themes";
import ThemePicker from "./theme-picker";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  justify-content: flex-end;
  margin: 15px;
`;

const FloatingActionButton = styled.button`
  all: unset;

  //padding: 15px;
  height: 52px;
  width: 52px;

  text-align: center;
  vertical-align: center;

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
  const [picker, setPicker] = useState(false);

  const togglePicker = () => {
    setPicker(!picker);
  };

  return (
    <Container>
      {picker && <ThemePicker onHide={togglePicker} />}
      <FloatingActionButton data-tip="Toggle theme" onClick={togglePicker}>
        {picker ? (
          <FontAwesomeIcon icon={faClose} size="lg" />
        ) : (
          <FontAwesomeIcon icon={faPalette} size="lg" />
        )}
      </FloatingActionButton>
    </Container>
  );
}
