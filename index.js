const shoppingList = require('./lib/shopping-list');

const recipes = require('./db/recipes')
const groceries = require('./db/groceries')

// menu
// ----

const menu = {
	'seder plate': 1,
	'haroset': 1,
	'matzah and wine': 12,

	'huevos haminadas': 2.5,
	'roasted cauliflower': 0,
	'new potatoes': 0,
	'crudite': 0,
	'artichokes + mayo': 0,
	'guacamole': 0,

	'matzah_balls': 5,
	'veggie soup': 0,
	'salmon': 6,
	'caponata': 1,
	'green beans': 0,
	'quinoa pilaf': 0,

	'apple cake': 2,
	'spice cake': 2,
	'almond cake': 1,
	'dessert fruit': 0,

	'food to eat': 1,
	'cashew butter': 1,
	'almond butter': 2,
}


const myList = shoppingList.generateShoppingList(menu, recipes, groceries)

const asCsv = shoppingList.listAsCsv(myList, groceries)
asCsv.then(console.log.bind(console))



