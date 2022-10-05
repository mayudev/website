import styled from "styled-components";

const Heading = styled.h1`
  font-size: 1.2rem;
  padding-left: 1rem;

  color: ${(props) => props.theme.colors.primary};
  border-left: 3px solid ${(props) => props.theme.colors.primary};
`;

export default Heading;
