import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/layout";
import PostSummary from "../../components/post-summary";
import { getSortedPosts, PostData } from "../../lib/posts";

type Props = {
  posts: PostData[];
};

export default function BlogPosts({ posts }: Props) {
  return (
    <Layout post>
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
