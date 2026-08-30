import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const interestSubmissions = sqliteTable("interest_submissions", { id: integer("id").primaryKey({ autoIncrement: true }), role: text("role").notNull(), name: text("name").notNull(), email: text("email").notNull(), organization: text("organization").notNull().default(""), involvement: text("involvement").notNull(), createdAt: text("created_at").notNull().default(sql`CURRENT_TIMESTAMP`) });
