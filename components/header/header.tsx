import styled, { css, keyframes } from "styled-components";
import { Avatar } from "./avatar";
import Links from "./links";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadingContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const type = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  from { border-color: transparent; }
  to { border-color: var(--fg); }
`;

const Heading = styled.h1<{
  blink: boolean;
}>`
  font-size: 2rem;
  overflow: hidden;
  line-height: 2.1rem;
  padding-right: 3px;
  margin-bottom: 0.5rem;
  white-space: nowrap;

  @media not (prefers-reduced-motion) {
    ${(props) =>
      props.blink
        ? css`
            border-right: 0.3rem solid ${(props) => props.theme.colors.foreground};
            width: 0;
            animation: ${type} 0.2s steps(4, end) forwards,
              ${blink} 0.4s alternate infinite;
          `
        : ""};
  }
`;

const Subheading = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  margin: 0 0 1rem 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Split = styled.div`
  display: flex;

  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoint}px) {
    flex-direction: column;
  }
`;

export default function Header({ post }: { post: boolean }) {
  return (
    <Container>
      <span style={{ height: 96 }}>
        <Avatar size={96} />
      </span>

      <Split>
        <div>
          <HeadingContainer>
            <Heading blink={!post}>Mayu</Heading>
          </HeadingContainer>

          <Subheading>hobbyist web developer</Subheading>
        </div>
        <div>
          <Links />
        </div>
      </Split>
    </Container>
  );
}
