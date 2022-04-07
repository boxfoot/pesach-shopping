import fs from 'fs';

import generateShoppingList from './lib/shopping-list.js';

async function readJson(path) {
  const contents = await fs.promises.readFile(path, 'utf-8');
  return JSON.parse(contents);
}

const defaultYear = new Date().getFullYear() + 3760;
const year = process.argv[2] || defaultYear;

const menu = await readJson(`./db/menu-${year}.json`);
const recipes = await readJson('./db/recipes.json');
const groceries = await readJson('./db/groceries.json');
const myList = generateShoppingList(menu, recipes, groceries);
const csv = await myList.asCsv();

console.log(csv);
