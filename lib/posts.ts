import { readdirSync, readFileSync } from "fs";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

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

export interface Post extends Metadata {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

export async function getPost(slug: string) {
  const filename = slug.replace(/\.mdx$/, "");
  const fullpath = join(postsDirectory, filename + ".mdx");

  const contents = readFileSync(fullpath);

  const { data, content } = matter(contents);

  // Serialize MDX
  const mdxSource = await serialize(content);

  return {
    ...(data as Metadata),
    source: mdxSource,
  };
}

export function getAllPosts() {
  const filenames = readdirSync(postsDirectory);

  return filenames.map((filename) => {
    return {
      params: {
        slug: filename.replace(/\.mdx$/, ""),
      },
    };
  });
}

export function getSortedPosts() {
  const filenames = readdirSync(postsDirectory);

  const postsData = filenames.map((filename) => {
    // Figure out slug from filename
    const slug = filename.replace(/\.mdx$/, "");

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
