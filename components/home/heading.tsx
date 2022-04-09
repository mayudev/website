import styled from "styled-components";
import { AccentPrimary } from "../../lib/themes";

const Heading = styled.h1`
  font-size: 1.2rem;
  padding-left: 1rem;

  color: ${AccentPrimary};
  border-left: 3px solid ${AccentPrimary};
`;

export default Heading;
