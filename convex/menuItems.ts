import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("menuItems").order("asc").collect();
  },
});

export const getByCategory = query({
  args: { categoryId: v.id("categories") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("menuItems")
      .filter((q) => q.eq(q.field("categoryId"), args.categoryId))
      .order("asc")
      .collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    categoryId: v.id("categories"),
    imageUrl: v.string(),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    available: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("menuItems", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("menuItems"),
    name: v.string(),
    categoryId: v.id("categories"),
    imageUrl: v.string(),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    available: v.boolean(),
    order: v.number(),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, rest);
  },
});

export const deleteMenuItem = mutation({
  args: { id: v.id("menuItems") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
