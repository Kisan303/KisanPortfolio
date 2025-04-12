import { pgTable, text, serial, integer, boolean, json, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// User authentication table
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Projects table
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image"),
  github: text("github"),
  liveLink: text("live_link"),
  technologies: json("technologies").$type<string[]>().default([]),
  color: text("color").default("#1FB6FF"),
  icon: text("icon"),
  featured: boolean("featured").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({ 
  id: true,
  createdAt: true,
  updatedAt: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Skills table
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  icon: text("icon"),
  category: text("category").notNull(),
  categoryColor: text("category_color").default("blue"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertSkillSchema = createInsertSchema(skills).omit({ 
  id: true,
  createdAt: true, 
  updatedAt: true,
});

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;

// Experience table
export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  period: text("period").notNull(),
  logoIcon: text("logo_icon"),
  bgColor: text("bg_color").default("#1FB6FF"),
  textColor: text("text_color").default("#FFFFFF"),
  responsibilities: json("responsibilities").$type<string[]>().default([]),
  technologies: json("technologies").$type<string[]>().default([]),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertExperienceSchema = createInsertSchema(experiences).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true,
});

export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type Experience = typeof experiences.$inferSelect;

// About Me table
export const aboutMe = pgTable("about_me", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  icon: text("icon"),
  bgColor: text("bg_color").default("#1FB6FF"),
  textColor: text("text_color").default("#FFFFFF"),
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertAboutMeSchema = createInsertSchema(aboutMe).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true,
});

export type InsertAboutMe = z.infer<typeof insertAboutMeSchema>;
export type AboutMe = typeof aboutMe.$inferSelect;

// Contact Info table
export const contactInfo = pgTable("contact_info", {
  id: serial("id").primaryKey(),
  email: text("email"),
  phone: text("phone"),
  linkedin: text("linkedin"),
  github: text("github"),
  twitter: text("twitter"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertContactInfoSchema = createInsertSchema(contactInfo).omit({ 
  id: true, 
  updatedAt: true,
});

export type InsertContactInfo = z.infer<typeof insertContactInfoSchema>;
export type ContactInfo = typeof contactInfo.$inferSelect;

// Chatbot Responses table
export const chatbotResponses = pgTable("chatbot_responses", {
  id: serial("id").primaryKey(),
  keyword: text("keyword").notNull().unique(),
  response: text("response").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertChatbotResponseSchema = createInsertSchema(chatbotResponses).omit({ 
  id: true, 
  createdAt: true, 
  updatedAt: true,
});

export type InsertChatbotResponse = z.infer<typeof insertChatbotResponseSchema>;
export type ChatbotResponse = typeof chatbotResponses.$inferSelect;
