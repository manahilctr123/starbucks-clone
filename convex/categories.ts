import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const allCategories = await ctx.db
      .query("categories")
      .order("asc")
      .collect();

    const parents = allCategories.filter((category) => !category.parentId);
    const children = allCategories.filter((category) => category.parentId);

    const structuredCategories = parents.map((parent) => ({
      ...parent,
      children: children.filter((child) => child.parentId === parent._id),
    }));

    return structuredCategories;
  },
});

export const add = mutation({
  args: {
    name: v.string(),
    order: v.number(),
    isFood: v.boolean(),
    parentId: v.optional(v.id("categories")),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("categories", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("categories"),
    name: v.string(),
    order: v.number(),
    isFood: v.boolean(),
    parentId: v.optional(v.id("categories")),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;
    await ctx.db.patch(id, rest);
  },
});
