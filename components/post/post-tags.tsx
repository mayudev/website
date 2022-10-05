import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Container = styled.span`
  a {
    color: ${(props) => props.theme.colors.primary};

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
