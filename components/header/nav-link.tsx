import Link from "next/link";
import styled from "styled-components";

type Props = {
  href: string;
  name: string;
};

const StyledLink = styled.a`
  font-weight: bolder;
`;

export default function NavLink({ href, name }: Props) {
  return (
    <Link href={href} passHref>
      <StyledLink>{name}</StyledLink>
    </Link>
  );
}
