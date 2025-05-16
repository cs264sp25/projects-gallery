import { defineCollection, z } from "astro:content";

const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  year: z.string(),
  githubUrl: z.string().url(),
  slidesUrl: z.string(),
  teamMembers: z.array(
    z.object({
      name: z.string(),
      email: z.string().email().optional(),
      photoUrl: z.string().optional(),
      githubUrl: z.string().url().optional(),
      linkedinUrl: z.string().url().optional(),
    }),
  ),
});

export type ProjectSchemaType = z.infer<typeof projectSchema>;

export type ProjectEntry = {
  data: ProjectSchemaType;
  id: string;
  slug: string;
  collection: string;
  body: string;
};

const projectsCollection = defineCollection({
  type: "content",
  schema: projectSchema,
});

export const collections = {
  projects: projectsCollection,
};
