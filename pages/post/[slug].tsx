import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPosts, getPost, Metadata } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";
import PostHeader from "../../components/post/post-header";
import styled from "styled-components";
import { AccentPrimary, AccentSecondary } from "../../lib/themes";

interface Props extends Metadata {
  content: string;
}

const Summary = styled.p`
  font-weight: bolder;
`;

// Styling for article
const Article = styled.article`
  h1 {
    font-size: 2rem;
  }

  h1,
  h2 {
    padding-left: 1rem;

    color: ${AccentPrimary};
    border-left: 3px solid ${AccentPrimary};
  }

  h3,
  h4 {
    padding-left: 1rem;

    color: ${AccentSecondary};
    border-left: 3px solid ${AccentSecondary};
  }

  ul {
    color: ${AccentSecondary};
  }
`;

export default function Post(props: Props) {
  return (
    <Layout post>
      <Head>
        <title>{props.title}</title>
        <meta name="title" content={props.title} />
        <meta name="description" content={props.summary || "Blog post"} />
      </Head>

      <Article>
        <PostHeader {...props} />

        <Summary>{props.summary}</Summary>

        {/* We're using global css this time so we can style the post contents */}
        <div className="article" dangerouslySetInnerHTML={{ __html: props.content }} />
      </Article>
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
