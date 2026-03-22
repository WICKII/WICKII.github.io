import type { CollectionEntry } from "astro:content";

export type BlogEntry = CollectionEntry<"blog">;

const POST_FILENAME = /^(\d{4})-(\d{1,2})-(\d{1,2})-(.+?)(?:\.(md|mdx))?$/;

export function getPostSegments(id: string) {
  const match = id.match(POST_FILENAME);
  if (!match) {
    throw new Error(`Unexpected post filename format: ${id}`);
  }

  const [, year, month, day, slug] = match;
  return [year, month.padStart(2, "0"), day.padStart(2, "0"), slug];
}

export function getPostPath(id: string) {
  return `/${getPostSegments(id).join("/")}/`;
}

export function getSortedPosts(posts: BlogEntry[]) {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getAllTags(posts: BlogEntry[]) {
  const tagMap = new Map<string, BlogEntry[]>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const entries = tagMap.get(tag) ?? [];
      entries.push(post);
      tagMap.set(tag, entries);
    }
  }

  return [...tagMap.entries()]
    .sort((a, b) => a[0].localeCompare(b[0], "zh-CN"))
    .map(([tag, entries]) => ({
      tag,
      slug: slugifyTag(tag),
      posts: getSortedPosts(entries)
    }));
}

export function slugifyTag(tag: string) {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
