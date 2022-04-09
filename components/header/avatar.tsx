import Image from "next/image";
import styled from "styled-components";

const UnstyledAvatar = ({ className, size }: { className?: string; size?: number }) => (
  <Image
    className={className}
    priority
    src="https://avatars.githubusercontent.com/u/99561108"
    height={size}
    width={size}
    alt="Avatar"
  />
);

export const Avatar = styled(UnstyledAvatar)`
  border-radius: 50%;
`;
