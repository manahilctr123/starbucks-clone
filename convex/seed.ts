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
  {
    name: "Hot Coffees",
    order: 10,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/Cortado.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Cold Coffees",
    order: 20,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/PistachioCreamColdBrew.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Starbucks Refreshers® Beverages",
    order: 30,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/CranMerryOrangeRefresher.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Frappuccino® Blended Beverages",
    order: 40,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/FY22WIN_PistachioFrapp-onGreen.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Iced Tea & Lemonade",
    order: 50,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190531_IcedBlackTea.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Hot Teas",
    order: 60,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20230612_6244_GingerbreadOatmilkChai-onGreen-MOP_1800.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Iced Energy",
    order: 70,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/TropicalCitrusEnergyDrink.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Milk, Juice & More",
    order: 80,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220607_1509_PeppermintHotChocolate-onGreen-MOP_1800.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Bottled Beverages",
    order: 90,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/bev/SpindriftLemon.jpg?impolicy=1by1_tight_288",
  },

  // Food section
  {
    name: "Breakfast",
    order: 100,
    isFood: true,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/food/EggPestoMozzarellaSandwich.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Bakery",
    order: 110,
    isFood: true,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/food/VanillaBeanCustardDanish.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Treats",
    order: 120,
    isFood: true,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/food/ValentinesDayCakePop-US.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Lunch",
    order: 130,
    isFood: true,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/food/SBX20220207_GrilledCheeseOnSourdough_US.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Snacks",
    order: 140,
    isFood: true,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/food/SBX20180710_PerfectBar_DarkChocolateChipPeanutButter.jpg?impolicy=1by1_tight_288",
  },

  // At Home Coffee section
  {
    name: "Whole Bean",
    order: 200,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/at-home/SunDriedEthiopiaOromiaWestArsi-US-WBReserve.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "VIA® Instant",
    order: 210,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/at-home/SBX20190715_ViaInstantBlondeVerandaBlend.jpg?impolicy=1by1_tight_288",
  },

  // Merchandise section
  {
    name: "Cold Cups",
    order: 300,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/merch/PURPLERECYCLDGLASSCLDCUP16OZ.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Tumblers",
    order: 310,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/merch/PURPLERECYCLDPPTMBLR16OZ.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Mugs",
    order: 320,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/merch/RECYCLDCERMCMUG16OZ.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Water Bottles",
    order: 330,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/merch/SSWTRBTLTWISTTOSIPSOFTTOUCH20OZ.jpg?impolicy=1by1_tight_288",
  },
  {
    name: "Other",
    order: 340,
    isFood: false,
    imageUrl:
      "https://globalassets.starbucks.com/digitalassets/products/merch/SILICONEPLUGKEYCHAINHOTCUP.jpg?impolicy=1by1_tight_288",
  },
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
