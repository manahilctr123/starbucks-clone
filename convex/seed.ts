import { Id } from "./_generated/dataModel";
import { mutation } from "./_generated/server";

const parentCategories = [
  { name: "Drinks", order: 1, isFood: false },
  { name: "Food", order: 2, isFood: true },
  { name: "At Home Coffee", order: 3, isFood: false },
  { name: "Merchandise", order: 4, isFood: false },
];

const categories = [
  // Drinks section
  { name: "Hot Coffees", order: 10, isFood: false },
  { name: "Cold Coffees", order: 20, isFood: false },
  { name: "Starbucks Refreshers® Beverages", order: 30, isFood: false },
  { name: "Frappuccino® Blended Beverages", order: 40, isFood: false },
  { name: "Iced Tea & Lemonade", order: 50, isFood: false },
  { name: "Hot Teas", order: 60, isFood: false },
  { name: "Iced Energy", order: 70, isFood: false },
  { name: "Milk, Juice & More", order: 80, isFood: false },
  { name: "Bottled Beverages", order: 90, isFood: false },

  // Food section
  { name: "Breakfast", order: 100, isFood: true },
  { name: "Bakery", order: 110, isFood: true },
  { name: "Treats", order: 120, isFood: true },
  { name: "Lunch", order: 130, isFood: true },
  { name: "Snacks", order: 140, isFood: true },

  // At Home Coffee section
  { name: "Whole Bean", order: 200, isFood: false },
  { name: "VIA® Instant", order: 210, isFood: false },

  // Merchandise section
  { name: "Cold Cups", order: 300, isFood: false },
  { name: "Tumblers", order: 310, isFood: false },
  { name: "Mugs", order: 320, isFood: false },
  { name: "Water Bottles", order: 330, isFood: false },
  { name: "Other", order: 340, isFood: false },
];

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    // Check if database is already seeded
    const existingCategories = await ctx.db.query("categories").collect();
    if (existingCategories.length > 0) {
      console.log("Database already seeded");
      return;
    }

    // Insert parent categories first
    const parentIds: Record<string, Id<"categories">> = {};
    for (const parent of parentCategories) {
      const id = await ctx.db.insert("categories", parent);
      parentIds[parent.name] = id;
    }

    // Insert all categories with their parent IDs
    for (const category of categories) {
      let parentId: Id<"categories"> | undefined;

      if (
        category.name.startsWith("Hot") ||
        category.name.startsWith("Cold") ||
        category.name.startsWith("Starbucks") ||
        category.name.startsWith("Frappuccino") ||
        category.name.startsWith("Iced") ||
        category.name === "Hot Teas" ||
        category.name === "Milk, Juice & More" ||
        category.name === "Bottled Beverages"
      ) {
        parentId = parentIds["Drinks"];
      } else if (
        category.name === "Breakfast" ||
        category.name === "Bakery" ||
        category.name === "Treats" ||
        category.name === "Lunch" ||
        category.name === "Snacks"
      ) {
        parentId = parentIds["Food"];
      } else if (
        category.name === "Whole Bean" ||
        category.name === "VIA® Instant"
      ) {
        parentId = parentIds["At Home Coffee"];
      } else if (
        category.name === "Cold Cups" ||
        category.name === "Tumblers" ||
        category.name === "Mugs" ||
        category.name === "Water Bottles" ||
        category.name === "Other"
      ) {
        parentId = parentIds["Merchandise"];
      }

      await ctx.db.insert("categories", { ...category, parentId });
    }

    console.log("Database seeded successfully");
  },
});
