import generateShoppingList from "./lib/shopping-list";

// DB imports
import recipes from "./db/recipes";
import groceries from "./db/groceries";

(async () => {
  const year = process.argv[2] || "5779";

  const menu = (await import("./db/menu-" + year)).default;
  const myList = generateShoppingList(menu, recipes, groceries);
  const csv = await myList.asCsv();

  console.log(csv);
})().catch(err => console.error(err));
