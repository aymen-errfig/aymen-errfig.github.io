import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { file } from 'astro/loaders';

const skills = defineCollection({
    loader: file('src/content/skills.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        bg_color: z.string(),
        icon: z.string(),
        text_color: z.string().optional(),
    }),
});

const projects = defineCollection({
    loader: file('src/content/projects.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        imageUrl: z.string(),
        isNew: z.boolean(),
    }),
});


// Expose your defined collection to Astro
// with the `collections` export
export const collections = { skills, projects };