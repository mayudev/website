import Head from "next/head";
import styled from "styled-components";
import Header from "./header/header";
import Socials from "./socials";
import ThemeSwitcher from "./themeSwitcher";

type Props = {
  children: React.ReactNode;
  post: boolean;
};

const Container = styled.div<{
  post: boolean;
}>`
  width: min(48rem, 95vw);
  padding: 0 1rem;
  margin: ${(props) => (props.post ? "20vh" : "33vh")} auto 3rem auto;
`;

export default function Layout({ children, post }: Props) {
  return (
    <Container post={post}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header post={post} />

      <ThemeSwitcher />

      <main>{children}</main>
    </Container>
  );
}
