import styled, { css } from "styled-components";

type Props = {
  withIcon?: boolean;
};

const NiceLink = styled.a<Props>`
  margin-bottom: 8px;
  padding: 2px;
  color: ${(props) => props.theme.colors.foreground};
  text-decoration: underline;
  font-weight: bolder;

  transition: background 0.2s, color 0.2s;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  ${(props) =>
    props.withIcon &&
    css`
      font-size: 1.2em;
      display: inline-flex;
      align-items: center;
    `}
`;

export const NiceLinkText = styled.span`
  padding-left: 8px;
`;

export default NiceLink;
