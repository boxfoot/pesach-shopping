import { promisify } from 'util';
import stringify from 'csv-stringify';

import getConverter from './conversions.js';

const stringifyP = promisify(stringify);

class ShoppingList {
  //list = {};
  //groceryDefs = {};

  constructor(groceries) {
    this.list = {};
    this.groceryDefs = groceries;
  }

  add(item, amount, forRecipe) {
    if (!(item in this.list)) {
      this.list[item] = { amount: 0, neededFor: [] };
    }
    const entry = this.list[item];
    entry.amount += amount;
    entry.neededFor.push(forRecipe);
  }

  asCsv(allGroceries) {
    return listAsCsv(this.list, this.groceryDefs);
  }
}

// Given a menu, the refenced recipes, and grocery list
// Return a shopping list as an object {item: {amount, neededFor[]}
function generateShoppingList(menu, recipes, groceries) {
  const shopping_list = new ShoppingList(groceries);
  const missing_ingredients = [];
  const failed_recipes = {};

  for (const dish of Object.keys(menu)) {
    try {
      const multiple = menu[dish];
      const recipe = recipes[dish];
      if (!recipe) {
        failed_recipes[dish] = 'Missing Recipe';
        continue;
      }
      for (const ingredient of recipe.ingredients) {
        const grocery = groceries[ingredient.item];
        if (!grocery) {
          missing_ingredients.push(ingredient.item);
          continue;
        }

        let amountToAdd = ingredient.number * multiple;
        if (ingredient.unit && ingredient.unit !== grocery.unit) {
          amountToAdd = getConverter(
            ingredient.unit,
            grocery.unit,
            ingredient.item,
          )(amountToAdd);
        }

        shopping_list.add(ingredient.item, amountToAdd, dish);
      }
    } catch (ex) {
      failed_recipes[dish] = ex.message;
    }
  }

  if (missing_ingredients.length || Object.keys(failed_recipes).length) {
    const msgs = ['Errors generating shopping list:'];
    Object.entries(failed_recipes).forEach(([recipe, reason]) => {
      msgs.push(`Failed recipe: ${recipe} (${reason})`);
    });
    missing_ingredients.length &&
      msgs.push('Missing ingredients! ' + missing_ingredients.join(', '));
    throw new Error(msgs.join('\n * '));
  }

  return shopping_list;
}

function sortByProp(first, second, property) {
  const f = first[property];
  const g = second[property];
  return f === g ? 0 : f < g ? 1 : -1;
}

// Convert shopping list array into CSV format
function listAsCsv(shoppingList, groceries) {
  // flatten shopping list
  const headers = ['STORE', 'AISLE', 'ITEM', 'NUMBER', 'SIZE', 'NEEDED FOR'];
  let flattened_list = [];
  for (const item of Object.keys(shoppingList)) {
    const grocery = groceries[item];
    const quantity = Math.ceil(shoppingList[item].amount);
    const neededFor = shoppingList[item].neededFor.join(', ');
    flattened_list.push([
      grocery.store,
      grocery.aisle,
      item,
      quantity,
      grocery.unit,
      neededFor,
    ]);
  }

  flattened_list = flattened_list.sort((i, j) => sortByProp(i, j, '0'));

  flattened_list.unshift(headers);
  return stringifyP(flattened_list);
}

export default generateShoppingList;
