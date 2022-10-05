import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticProps } from "next";
import Link from "next/link";
import styled from "styled-components";
import NiceLink, { NiceLinkText } from "../../components/home/nice-link";
import Layout from "../../components/layout";
import PostSummary from "../../components/post-summary";
import Tags from "../../components/post/post-tags";
import { getSortedPosts, PostData } from "../../lib/posts";
import { getUniqueTags } from "../../lib/tags";

type Props = {
  posts: PostData[];
  tag?: string;
  tags: string[];
};

const TagHeading = styled.h1`
  font-size: 1.8rem;
  padding-left: 1rem;

  border-left: 3px solid;
`;

export default function BlogPosts({ posts, tag, tags }: Props) {
  return (
    <Layout post>
      {tag && (
        <>
          <Link href="/posts" passHref>
            <NiceLink>
              <FontAwesomeIcon icon={faNoteSticky} />
              <NiceLinkText>See all posts</NiceLinkText>
            </NiceLink>
          </Link>
          <TagHeading>tag: {tag}</TagHeading>
        </>
      )}
      {posts.map((post) => (
        <PostSummary key={post.slug} post={post} />
      ))}
      {!tag && (
        <>
          <TagHeading>Tags</TagHeading>
          <Tags inPost={false} tags={tags} />
        </>
      )}
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
