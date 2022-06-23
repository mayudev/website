import Head from "next/head";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header/header";
import ThemeSwitcher from "./theme-switcher";

type Props = {
  children: React.ReactNode;
  post?: boolean;
};

const Page = styled.div`
  width: min(48rem, 95vw);
  margin: auto;

  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const Container = styled.div<{
  post: boolean;
}>`
  width: min(48rem, 95vw);
  padding: 0 1rem;
  margin: 20vh auto 1rem auto;
`;

export default function Layout({ children, post }: Props) {
  return (
    <Page>
      <Container post={post!}>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <title>Mayu</title>
          <meta name="title" content="Mayu" />
          <meta name="author" content="Mayu" />
          <meta name="description" content="I'm Mayu, a hobbyist web developer." />
          <meta name="theme-color" content="#f5c2e7" />

          <meta
            property="og:image"
            content="https://avatars.githubusercontent.com/u/99561108?s=120&v=4"
          />
          <meta property="og:image:width" content="120" />
          <meta property="og:image:height" content="120" />

          <meta property="og:site_name" content="Mayu" />
          <meta property="og:type" content="website" />
        </Head>
        <Header post={post!} />
        <ThemeSwitcher />
        <main>{children}</main>
      </Container>

      <span style={{ flex: 1 }} />

      <Footer />
    </Page>
  );
}
