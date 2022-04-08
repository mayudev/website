import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Mayu</title>
        <meta name="description" content="Mayu's website" />
      </Head>

      <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et velit id odio
        placerat dictum. Suspendisse ex erat, malesuada eu tincidunt sit amet, eleifend in
        nunc. Vivamus lobortis, tortor nec ultricies mollis, nisl tellus euismod risus,
        sed porttitor massa est sed erat. In nec justo elit. Nam pellentesque nibh at
        laoreet venenatis. Mauris quam ex, egestas et leo non, dignissim rutrum nunc. Sed
        ultrices blandit nulla, non iaculis dolor vestibulum vel. Nunc dignissim suscipit
        nunc nec ultrices. In lobortis lectus volutpat, egestas lectus vel, pellentesque
        felis. Praesent ullamcorper justo sapien, quis bibendum nisl consequat et. Mauris
        lacinia massa quam, a sodales justo bibendum ac. Maecenas lobortis, libero nec
        maximus imperdiet, augue velit rhoncus nisi, at convallis purus lectus in quam.
        Nulla viverra ipsum porta dui porta, eu finibus nulla laoreet. Nam consectetur
        nisl id orci feugiat, a volutpat magna dignissim. Curabitur eros lectus, cursus
        finibus dolor nec, tincidunt euismod nunc.
      </article>
    </Layout>
  );
};

export default Home;
