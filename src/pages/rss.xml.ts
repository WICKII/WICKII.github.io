import { getCollection } from "astro:content";
import { siteConfig } from "../site.config";
import { getPostPath, getSortedPosts } from "../utils/blog";

export async function GET() {
  const posts = getSortedPosts(await getCollection("blog"));
  const items = posts.slice(0, 20).map((post) => `
    <item>
      <title><![CDATA[${post.data.title}]]></title>
      <description><![CDATA[${post.body}]]></description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <link>${siteConfig.url}${getPostPath(post.id)}</link>
      <guid>${siteConfig.url}${getPostPath(post.id)}</guid>
    </item>
  `).join("");

  const body = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${siteConfig.title}</title>
      <description>${siteConfig.description}</description>
      <link>${siteConfig.url}/</link>
      ${items}
    </channel>
  </rss>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
