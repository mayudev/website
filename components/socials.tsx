import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin: 2rem 0;
`;

export default function Socials() {
  return (
    <Container>
      <a href="https://github.com/mayudev" title="GitHub">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </Container>
  );
}
