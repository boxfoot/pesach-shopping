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
	'new potatoes': 3,
	'crudite': 1,
	'artichokes + mayo': 2,
	'guacamole': 3,

	'matzah_balls': 5,
	'veggie soup': 5,
	'salmon': 6,
	'cauliflower kugel': 4,
	'caponata': 1,
	'green beans': 3,
	'quinoa pilaf': 3,

	'apple cake': 2,
	'spice cake': 2,
	'almond cake': 2,
	'dessert fruit': 3,

	'food to eat': 1,
	'cashew butter': 3,
	'almond butter': 3,
	'gnocci': 2,
	'pudding': 2,
}


const myList = shoppingList.generateShoppingList(menu, recipes, groceries)

const asCsv = shoppingList.listAsCsv(myList, groceries)
asCsv.then(console.log.bind(console))



