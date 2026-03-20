import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const volunteers = pgTable("volunteers", {
  id: serial("id").primaryKey(),
  fullName: text("full_name").notNull(),
  age: integer("age").notNull(),
  schoolCollege: text("school_college").notNull(),
  email: text("email").notNull(),
  phoneNumber: text("phone_number").notNull(),
  areaInPune: text("area_in_pune").notNull(),
  interests: text("interests").array().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertVolunteerSchema = createInsertSchema(volunteers).omit({ id: true, createdAt: true });

export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;
export type Volunteer = typeof volunteers.$inferSelect;
