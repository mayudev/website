import Head from "next/head";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header/header";
import ThemeSwitcher from "./themeSwitcher";

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
  margin: ${(props) => (props.post ? "20vh" : "33vh")} auto 1rem auto;
`;

export default function Layout({ children, post }: Props) {
  return (
    <Page>
      <Container post={post!}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>Mayu</title>
          <meta name="title" content="Mayu" />
          <meta name="author" content="Mayu" />
          <meta name="description" content="Mayu's website" />

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
