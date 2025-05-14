import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
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
  }),
});

export const collections = {
  projects: projectsCollection,
};

// Type for a project entry as returned by getCollection('projects')
export type ProjectEntry = {
  id: string;
  slug: string;
  body: string;
  collection: 'projects';
  data: {
    title: string;
    description: string;
    year: string;
    githubUrl: string;
    teamMembers: Array<{
      name: string;
      email?: string;
      photoUrl?: string;
      githubUrl?: string;
      linkedinUrl?: string;
    }>;
    demoUrl?: string;
    imageUrl?: string;
  };
};