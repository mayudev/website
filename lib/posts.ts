import { readdirSync, readFileSync } from "fs";
import { micromark } from "micromark";
import { frontmatter, frontmatterHtml } from "micromark-extension-frontmatter";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import { join } from "path";
import matter from "gray-matter";

const postsDirectory = join(process.cwd(), "posts");

export interface Metadata {
  // Post title
  title: string;

  // Post summary
  summary?: string;

  // Post cover image
  coverImage?: string;

  // Publish date
  date: string;
}

export interface PostData extends Metadata {
  slug: string;
}

export async function getPost(slug: string) {
  const filename = slug.replace(/\.md$/, "");
  const fullpath = join(postsDirectory, filename + ".md");

  const contents = readFileSync(fullpath);

  const { data } = matter(contents);

  const result = micromark(contents, {
    extensions: [frontmatter(), gfm()],
    htmlExtensions: [frontmatterHtml(), gfmHtml()],

    // We allow HTML since the only person writing those blog posts
    // will be the same person who wrote HTML on this site
    // I think so.
    allowDangerousHtml: true,
  });

  return {
    ...(data as Metadata),
    content: result,
  };
}

export function getAllPosts() {
  const filenames = readdirSync(postsDirectory);

  return filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    };
  });
}

export function getSortedPosts() {
  const filenames = readdirSync(postsDirectory);

  const postsData = filenames.map((filename) => {
    // Figure out slug from filename
    const slug = filename.replace(/\.md$/, "");

    // Read file
    const fullpath = join(postsDirectory, filename);
    const contents = readFileSync(fullpath);

    // Parse matter
    const { data } = matter(contents);

    return {
      slug,
      ...(data as Metadata),
    };
  });

  return postsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
