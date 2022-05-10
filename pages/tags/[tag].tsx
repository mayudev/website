import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllPosts, getPost, getSortedPosts, PostData } from "../../lib/posts";
import { getUniqueTags } from "../../lib/tags";
import BlogPosts from "../posts";

type Props = {
  tag: string;
  posts: PostData[];
};

interface Params extends ParsedUrlQuery {
  tag: string;
}

export default function TagsPage(props: Props) {
  return <BlogPosts tag={props.tag} posts={props.posts} tags={[]}></BlogPosts>;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const posts = getSortedPosts();

  const tag = context.params!.tag;

  const filtered = posts.filter((post) => post.tags?.includes(tag));

  return {
    props: {
      tag: tag,
      posts: filtered,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const tags = await getUniqueTags();

  let paths: { params: { tag: string } }[] = [];

  tags.forEach((tag) => {
    paths.push({
      params: {
        tag: tag,
      },
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};
