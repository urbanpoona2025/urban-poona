import { z } from 'zod';
import { insertVolunteerSchema, volunteers } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  notFound: z.object({
    message: z.string(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  volunteers: {
    create: {
      method: 'POST' as const,
      path: '/api/volunteers' as const,
      input: insertVolunteerSchema,
      responses: {
        201: z.custom<typeof volunteers.$inferSelect>(),
        400: errorSchemas.validation,
      },
    },
  },
};

export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type VolunteerInput = z.infer<typeof api.volunteers.create.input>;
export type VolunteerResponse = z.infer<typeof api.volunteers.create.responses[201]>;
