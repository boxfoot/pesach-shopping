import generateShoppingList from "./lib/shopping-list";

// DB imports
import recipes from "./db/recipes";
import groceries from "./db/groceries";
import menu from "./db/menu";

const myList = generateShoppingList(menu, recipes, groceries);

myList
  .asCsv()
  .then(csv => console.log(csv))
  .catch(err => console.error(err));
