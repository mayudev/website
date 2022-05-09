import { GetStaticProps } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";
import PostSummary from "../../components/post-summary";
import { getSortedPosts, PostData } from "../../lib/posts";
import { Accent } from "../../lib/themes";

type Props = {
  posts: PostData[];
  tag?: string;
};

const TagHeading = styled.h1`
  font-size: 1.5rem;

  color: ${Accent};
`;

export default function BlogPosts({ posts, tag }: Props) {
  return (
    <Layout post>
      {tag && <TagHeading>tag: {tag}</TagHeading>}
      {posts.map((post) => (
        <PostSummary key={post.slug} post={post} />
      ))}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getSortedPosts();
  return {
    props: {
      posts,
    },
  };
};
