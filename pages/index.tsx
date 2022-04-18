import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { GetStaticProps } from "next";
import Heading from "../components/home/heading";
import LatestPosts from "../components/home/latest-posts";
import NiceLink, { NiceLinkText } from "../components/home/nice-link";
import Projects from "../components/home/projects";
import Layout from "../components/layout";
import { getSortedPosts, PostData } from "../lib/posts";
import { IProject, projects } from "../lib/projects";

type Props = {
  posts: PostData[];
  projects: IProject[];
};

export default function Home({ posts, projects }: Props) {
  return (
    <Layout>
      <article>
        <section>
          <p>{`Hi! I'm Mayu, an aspiring web developer.`}</p>

          <p>{`Web development is my main interest, but I also want to make mobile apps, and maybe some console tools.`}</p>

          <p>
            My favorite languages are <b>TypeScript</b> and <b>Go</b>, but I&apos;m
            currently learning Rust, and I can&apos;t wait to pick up Flutter soon.
          </p>

          <p>{`I'm something of a Linux enthusiast, currently using Void Linux with Sway (wayland!). I don't really like saying 'i use arch btw', though.`}</p>
        </section>
        <section>
          <Heading>socials</Heading>
          <p>{`I don't use social media much.`}</p>
          <NiceLink
            withIcon
            href="https://github.com/mayudev"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
            <NiceLinkText>GitHub</NiceLinkText>
          </NiceLink>
        </section>

        <section>
          <Heading>projects</Heading>
          <p>You can see more stuff on my GitHub.</p>
          <Projects projects={projects} />
        </section>

        <section>
          <Heading>latest posts</Heading>
          <LatestPosts posts={posts} />
        </section>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = () => {
  const posts = getSortedPosts();

  // Leave only 5 latest posts
  posts.splice(5);

  return {
    props: {
      posts,
      projects,
    },
  };
};
