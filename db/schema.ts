import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const records = sqliteTable("pilot_records", {
  id: text("id").primaryKey(),
  payload: text("payload").notNull(),
});
