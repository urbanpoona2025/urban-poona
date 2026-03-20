import { z } from 'zod';
import { insertVolunteerSchema } from './schema';
export var errorSchemas = {
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
export var api = {
    volunteers: {
        create: {
            method: 'POST',
            path: '/api/volunteers',
            input: insertVolunteerSchema,
            responses: {
                201: z.custom(),
                400: errorSchemas.validation,
            },
        },
    },
};
export function buildUrl(path, params) {
    var url = path;
    if (params) {
        Object.entries(params).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (url.includes(":".concat(key))) {
                url = url.replace(":".concat(key), String(value));
            }
        });
    }
    return url;
}
