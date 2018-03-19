const shoppingList = require('./lib/shopping-list')

const recipes = require('./db/recipes')
const groceries = require('./db/groceries')
const menu = require('./db/menu')

const myList = shoppingList.generateShoppingList(menu, recipes, groceries)

const asCsv = shoppingList.listAsCsv(myList, groceries)
asCsv.then((csv) => console.log(csv))



