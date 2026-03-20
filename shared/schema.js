import { pgTable, text, serial, integer, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
export var volunteers = pgTable("volunteers", {
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
export var insertVolunteerSchema = createInsertSchema(volunteers).omit({ id: true, createdAt: true });
