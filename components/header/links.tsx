import { faHome, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  display: flex;

  @media (max-width: ${(props) => props.theme.breakpoint}px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const LinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;

  &:not(:first-child) {
    margin-left: 3rem;
  }

  transition: text-decoration 0.2s ease-in-out, color 0.2s;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.colors.primary};
  }
`;

const LinkBold = styled.span`
  font-weight: bolder;
`;

export default function Links() {
  return (
    <Container>
      <Link href="/" passHref>
        <LinkContainer>
          <span>
            <FontAwesomeIcon icon={faHome} />
          </span>
          <LinkBold>Home</LinkBold>
        </LinkContainer>
      </Link>

      <Link href="/posts" passHref>
        <LinkContainer>
          <span>
            <FontAwesomeIcon icon={faNewspaper} />
          </span>
          <LinkBold>Blog</LinkBold>
        </LinkContainer>
      </Link>
    </Container>
  );
}
