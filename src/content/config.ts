import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    semester: z.string(),
    tags: z.array(z.string()),
    githubUrl: z.string().url(),
    teamMembers: z.array(
      z.object({
        name: z.string(),
        email: z.string().email().optional(),
        photoUrl: z.string().optional(),
        githubUrl: z.string().url().optional(),
        linkedinUrl: z.string().url().optional(),
      })
    ),
    demoUrl: z.string().url().optional(),
    imageUrl: z.string().optional(),
    publishedDate: z.date(),
  }),
});

export const collections = {
  projects: projectsCollection,
};