// Generated by ts-to-zod
import { z } from "zod";

import type { Json } from "./schema/default";

export const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z
    .union([
      z.string(),
      z.number(),
      z.boolean(),
      z.record(z.union([jsonSchema, z.undefined()])),
      z.array(jsonSchema),
    ])
    .nullable(),
);

export const projectStatusSchema = z.union([
  z.literal("active"),
  z.literal("inactive"),
]);

export const bannerProjectInsertSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string(),
  user_id: z.string(),
});

export const bannerProjectUpdateSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string().optional(),
  user_id: z.string().optional(),
});

export const bannerProjectRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("banner_project_user_id_fkey"),
    columns: z.tuple([z.literal("user_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("user"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const feedbackProjectRowSchema = z.object({
  created_at: z.string(),
  id: z.string(),
  status: projectStatusSchema,
  title: z.string(),
  user_id: z.string(),
});

export const feedbackProjectInsertSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string(),
  user_id: z.string(),
});

export const feedbackProjectUpdateSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string().optional(),
  user_id: z.string().optional(),
});

export const feedbackProjectRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("feedback_project_user_id_fkey"),
    columns: z.tuple([z.literal("user_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("user"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const pollProjectRowSchema = z.object({
  created_at: z.string(),
  id: z.string(),
  status: projectStatusSchema,
  title: z.string(),
  user_id: z.string(),
});

export const pollProjectInsertSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string(),
  user_id: z.string(),
});

export const pollProjectUpdateSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string().optional(),
  user_id: z.string().optional(),
});

export const pollProjectRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("poll_project_user_id_fkey"),
    columns: z.tuple([z.literal("user_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("user"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const reactionProjectRowSchema = z.object({
  created_at: z.string(),
  id: z.string(),
  status: projectStatusSchema,
  title: z.string(),
  user_id: z.string(),
});

export const reactionProjectInsertSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string(),
  user_id: z.string(),
});

export const reactionProjectUpdateSchema = z.object({
  created_at: z.string().optional(),
  id: z.string().optional(),
  status: projectStatusSchema.optional(),
  title: z.string().optional(),
  user_id: z.string().optional(),
});

export const reactionProjectRelationshipsSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("reaction_project_user_id_fkey"),
    columns: z.tuple([z.literal("user_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("user"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const userMembershipSchema = z.union([
  z.literal("free"),
  z.literal("pro"),
]);

export const userInsertSchema = z.object({
  created_at: z.string().optional(),
  email: z.string(),
  id: z.string(),
  image: z.string().optional().nullable(),
  membership: userMembershipSchema.optional(),
  name: z.string(),
});

export const userUpdateSchema = z.object({
  created_at: z.string().optional(),
  email: z.string().optional(),
  id: z.string().optional(),
  image: z.string().optional().nullable(),
  membership: userMembershipSchema.optional(),
  name: z.string().optional(),
});

export const userRelationshipsSchema = z.tuple([]);

export const projectTypeSchema = z.union([
  z.literal("feedback"),
  z.literal("banner"),
  z.literal("poll"),
  z.literal("reaction"),
]);

export const bannerProjectRowSchema = z.object({
  created_at: z.string(),
  id: z.string(),
  status: projectStatusSchema,
  title: z.string(),
  user_id: z.string(),
});

export const userRowSchema = z.object({
  created_at: z.string(),
  email: z.string(),
  id: z.string(),
  image: z.string().nullable(),
  membership: userMembershipSchema,
  name: z.string(),
});
