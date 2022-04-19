import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPosts, getPost, Post } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";
import {
  Accent,
  AccentPrimary,
  AccentSecondary,
  Border,
  ForegroundSecondary,
} from "../../lib/themes";
import { MDXRemote } from "next-mdx-remote";
import PostHeader from "../../components/post/post-header";

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

  a {
    color: ${ForegroundSecondary};

    &:hover {
      text-decoration: underline;
    }
  }

  // Styling for code blocks
  pre {
    font: inherit;
  }

  code {
    font: inherit;
  }

  .hljs {
    border: 1px solid ${Border};
    border-radius: 3px;
  }
`;

// Components allowed in a blog post MDX
const postComponents = {};

export default function BlogPost({ post }: { post: Post }) {
  return (
    <Layout post>
      <Head>
        <title>{post.title}</title>
        <meta name="title" content={post.title} />
        <meta name="description" content={post.summary || "Blog post"} />
      </Head>

      <Article>
        <PostHeader {...post} />

        <Summary>{post.summary}</Summary>

        <MDXRemote {...post.source} components={postComponents} />
      </Article>
    </Layout>
  );
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<{ post: Post }, Params> = async (context) => {
  const params = context.params!;
  const postData = await getPost(params.slug);

  return {
    props: {
      post: {
        ...postData,
      },
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
