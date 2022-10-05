import Link from "next/link";
import styled from "styled-components";
import { PostData } from "../lib/posts";
import Timestamp from "./post/timestamp";

type Props = {
  post: PostData;
};

const Title = styled.h1`
  font-size: 1.2rem;
  padding-left: 1rem;
  padding-right: 17px;

  color: ${(props) => props.theme.colors.secondary};
  border-left: 3px solid;

  transition: border-left-width 0.2s ease-out, padding-right 0.2s ease-out;
`;

const Container = styled.div`
  &:hover ${Title} {
    padding-right: 0px;
    border-left-width: 20px;
  }
`;

const PostDate = styled.div`
  margin-top: 1rem;
  font-weight: bolder;
`;

const Summary = styled.div``;

export default function PostSummary({ post }: Props) {
  return (
    <Container>
      <Link href={`/posts/` + post.slug}>
        <a>
          <Title>{post.title}</Title>
          <PostDate>
            <Timestamp date={post.date} />
          </PostDate>
          <Summary>{post.summary}</Summary>
        </a>
      </Link>
    </Container>
  );
}
