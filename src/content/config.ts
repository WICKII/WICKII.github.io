import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    layout: z.string().optional(),
    title: z.coerce.string(),
    subtitle: z.coerce.string().optional().default(""),
    date: z.coerce.date(),
    author: z.coerce.string().optional(),
    "header-img": z.string().optional(),
    catalog: z.coerce.boolean().optional().default(false),
    tags: z
      .union([z.string(), z.array(z.string())])
      .optional()
      .transform((value) => {
        if (!value) return [];
        return Array.isArray(value) ? value : [value];
      })
  })
});

export const collections = { blog };
