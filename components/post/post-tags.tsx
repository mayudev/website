import Link from "next/link";
import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { ForegroundSecondary } from "../../lib/themes";

const Container = styled.span`
  a {
    color: ${ForegroundSecondary};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Tags({ tags, inPost }: { tags: string[]; inPost: boolean }) {
  const build = () =>
    tags.map((tag, i) => {
      return (
        <Container key={tag}>
          <Link href={"/tags/" + tag}>{tag}</Link>
          {i != tags.length - 1 && ", "}
        </Container>
      );
    });

  return (
    <div>
      {inPost && "Tags:"} {build()}
    </div>
  );
}
