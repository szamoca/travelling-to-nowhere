import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema);

// Disabling linter here only so that wherever else we would use process.env, we are forced to use this validated version
// eslint-disable-next-line node/no-process-env
export default EnvSchema.parse(process.env);
