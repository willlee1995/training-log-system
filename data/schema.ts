import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const logSchema = z.object({
  id: z.string(),
  procedure: z.string(),
  date: z.string(),
  role: z.string(),
  tier: z.string(),
  category: z.string(),
  supervisor: z.string(),
});

export type Log = z.infer<typeof logSchema>;
