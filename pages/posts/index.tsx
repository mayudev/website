import { GetStaticProps } from "next";
import styled from "styled-components";
import Layout from "../../components/layout";
import PostSummary from "../../components/post-summary";
import TagIndex from "../../components/tag-index";
import { getSortedPosts, PostData } from "../../lib/posts";
import { getUniqueTags } from "../../lib/tags";
import { Accent } from "../../lib/themes";

type Props = {
  posts: PostData[];
  tag?: string;
  tags: string[];
};

const TagHeading = styled.h1`
  font-size: 1.5rem;

  color: ${Accent};
`;

export default function BlogPosts({ posts, tag, tags }: Props) {
  return (
    <Layout post>
      {tag && <TagHeading>tag: {tag}</TagHeading>}
      {posts.map((post) => (
        <PostSummary key={post.slug} post={post} />
      ))}
      {!tag && <TagIndex tags={tags} />}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPosts();
  const tags = await getUniqueTags();

  return {
    props: {
      posts,
      tags: Array.from(tags),
    },
  };
};
