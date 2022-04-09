import styled, { css } from "styled-components";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = styled.div`
  display: flex;
`;

const Entry = css`
  display: inline-flex;
  align-items: center;
  padding: 1rem;
`;

const Icon = styled.span`
  ${Entry}
`;

const IconLink = styled.a`
  ${Entry}

  :hover {
    text-decoration: underline;
  }
`;

const IconText = styled.span`
  padding-left: 8px;
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Icon as="span">&copy; mayudev {currentYear}</Icon>
      <IconLink href="https://github.com/mayudev/website" title="Website source">
        <FontAwesomeIcon icon={faGithub} />
        <IconText>Source code</IconText>
      </IconLink>
    </Container>
  );
}
