import styled, { css } from "styled-components";
import { AccentSecondary, BackgroundColor } from "../../lib/themes";

type Props = {
  withIcon?: boolean;
};

const NiceLink = styled.a<Props>`
  margin-bottom: 8px;
  padding: 2px;
  color: ${AccentSecondary};
  font-weight: bolder;

  transition: background 0.2s, color 0.2s;

  &:hover {
    background: ${AccentSecondary};
    color: ${BackgroundColor};
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
