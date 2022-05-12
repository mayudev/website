import { getAllPosts, getPost } from "./posts";

export async function getUniqueTags() {
  const posts = getAllPosts();

  let tagsSet = new Set<string>();

  for (let post of posts) {
    const data = await getPost(post.params.slug);

    if (data.tags) {
      data.tags.forEach((tag) => tagsSet.add(tag));
    }
  }

  return tagsSet;
}
