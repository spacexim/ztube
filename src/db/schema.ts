import { timestamp, pgTable, text, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkId: text("clerkId").unique().notNull(),
    name: text("name").notNull(),
    imageURL: text("imageURL").notNull(),
    createdAt: timestamp("createdAt").defaultNow().notNull(),
    updatedAt: timestamp("updatedAt").defaultNow().notNull(),
 }, (t) => [uniqueIndex("clerk_id_idx").on(t.clerkId)]
);