import Link from "next/link";
import styled from "styled-components";
import { PostData } from "../../lib/posts";
import { AccentSecondary, BackgroundColor, Foreground } from "../../lib/themes";
import NiceLink from "./nice-link";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;

export default function LatestPosts({ posts }: { posts: PostData[] }) {
  return (
    <Container>
      {posts.map((post) => (
        <Link key={post.slug} href={"/post/" + post.slug} passHref>
          <NiceLink>{post.title}</NiceLink>
        </Link>
      ))}
      <Link href="/posts" passHref>
        <NiceLink>More posts ➔</NiceLink>
      </Link>
    </Container>
  );
}
