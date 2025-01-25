import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  categories: defineTable({
    name: v.string(),
    order: v.number(),
    isFood: v.boolean(),
    imageUrl: v.optional(v.string()),
    parentId: v.optional(v.id("categories")),
  }),

  menuItems: defineTable({
    name: v.string(),
    categoryId: v.id("categories"),
    imageUrl: v.string(),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    available: v.boolean(),
    order: v.number(),
  }),
});
