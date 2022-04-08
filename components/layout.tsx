import Head from "next/head";
import styled from "styled-components";
import Header from "./header/header";
import Socials from "./socials";
import ThemeSwitcher from "./themeSwitcher";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  max-width: 48rem;
  padding: 0 1rem;
  margin: 33vh auto 3rem auto;
`;

export default function Layout({ children }: Props) {
  return (
    <Container>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ThemeSwitcher />

      <main>{children}</main>
    </Container>
  );
}
