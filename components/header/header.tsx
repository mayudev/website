import styled, { keyframes } from "styled-components";
import {
  Accent,
  AccentPrimary,
  AccentSecondary,
  Foreground,
  ForegroundSecondary,
} from "../../lib/themes";
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
  from { border-color: var(--bg); }
  to { border-color: var(--fg); }
`;

const Heading = styled.h1`
  font-size: 2em;
  overflow: hidden;
  border-right: 0.3rem solid ${Foreground};
  line-height: 2rem;
  padding-right: 3px;
  margin-bottom: 0.5rem;
  width: 0;
  white-space: nowrap;
  animation: ${type} 0.2s steps(4, end) forwards, ${blink} 0.4s alternate infinite;
`;

const Subheading = styled.h2`
  color: ${AccentPrimary};
  margin: 0 0 1rem 0;
  border-bottom: 1px solid ${AccentPrimary};
  font-size: 1.2rem;
  line-height: 1.5;
`;

const Split = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Header() {
  return (
    <Container>
      <span style={{ height: 100 }}>
        <Avatar />
      </span>

      <Split>
        <div>
          <HeadingContainer>
            <Heading>Mayu</Heading>
          </HeadingContainer>

          <Subheading>hobbyist webdev</Subheading>
        </div>
        <div>
          <Links />
        </div>
      </Split>
    </Container>
  );
}
