import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPosts, getPost, Post } from "../../lib/posts";
import { ParsedUrlQuery } from "querystring";
import styled from "styled-components";
import { MDXRemote } from "next-mdx-remote";
import PostHeader from "../../components/post/post-header";
import { PostImage } from "../../components/post/post-image";
import BlogLink from "../../components/post/post-link";
import { PropsWithChildren } from "react";
import { MDXComponents } from "mdx/types";
import Tags from "../../components/post/post-tags";

const Summary = styled.p`
  font-weight: bolder;
`;

// Styling for article
const Article = styled.article`
  h1 {
    font-size: 2rem;
  }

  h1,
  h2,
  h3,
  h4 {
    padding-left: 1rem;
    border-left: 3px solid;
  }

  a {
    color: ${(props) => props.theme.colors.primary};

    &:hover {
      text-decoration: underline;
    }
  }

  // Styling for quotes (using \`)
  p code {
    border-radius: 6px;
    background: ${(props) => props.theme.colors.backgroundSimple};
  }

  // Styling for code blocks
  pre {
    font: inherit;
  }

  code {
    font: inherit;
  }

  .hljs {
    background: ${(props) => props.theme.colors.backgroundSimple};
    border-radius: 3px;
    font-size: 15px;
  }
`;

// Link component to be used in posts

// Components allowed in a blog post MDX
const postComponents = {
  PostImage,
  a: (props: PropsWithChildren<{ href: string }>) => <BlogLink {...props} />,
};

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

        <MDXRemote {...post.source} components={postComponents as MDXComponents} />

        {post.tags && <Tags inPost tags={post.tags} />}
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
