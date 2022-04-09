import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPosts, getPost, Metadata } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";
import PostHeader from "../../components/post/post-header";

interface Props extends Metadata {
  content: string;
}

export default function Post(props: Props) {
  return (
    <Layout post>
      <Head>
        <title>{props.title}</title>
      </Head>

      <article>
        <PostHeader {...props} />

        {/* We're using global css this time so we can style the post contents */}
        <div className="article" dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const params = context.params!;
  const postData = await getPost(params.slug);

  return {
    props: {
      ...postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts();

  return {
    paths,
    fallback: false,
  };
};
