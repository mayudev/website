import Image from "next/image";
import styled from "styled-components";

const UnstyledAvatar = ({ className }: { className?: string }) => (
  <Image
    className={className}
    priority
    src="https://avatars.githubusercontent.com/u/99561108"
    height={100}
    width={100}
    alt="Avatar"
  />
);

export const Avatar = styled(UnstyledAvatar)`
  border-radius: 50%;
`;
