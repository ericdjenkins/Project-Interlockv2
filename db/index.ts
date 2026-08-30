import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

declare global {
  // Set by the Worker entry for each request before Vinext handles the route.
  // The Site has one DB binding, so concurrent requests share the same object.
  var __PROJECT_INTERLOCK_DB__: D1Database | undefined;
}

export function getDb() {
  const database = globalThis.__PROJECT_INTERLOCK_DB__;
  if (!database) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  return drizzle(database, { schema });
}
