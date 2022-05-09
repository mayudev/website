import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { getAllPosts, getPost, getSortedPosts, PostData } from "../../lib/posts";
import BlogPosts from "../posts";

type Props = {
  tag: string;
  posts: PostData[];
};

interface Params extends ParsedUrlQuery {
  tag: string;
}

export default function TagsPage(props: Props) {
  return <BlogPosts tag={props.tag} posts={props.posts}></BlogPosts>;
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
  const posts = getAllPosts();

  let tagsSet = new Set<string>();

  for (let post of posts) {
    const data = await getPost(post.params.slug);

    if (data.tags) {
      data.tags.forEach((tag) => tagsSet.add(tag));
    }
  }

  let paths: { params: { tag: string } }[] = [];

  tagsSet.forEach((tag) => {
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
