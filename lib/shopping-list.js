const getConverter = require('./conversions')

// Given a menu, the refenced recipes, and grocery list
// Return a shopping list as an object {item: {amount, neededFor[]}
function generateShoppingList(menu, recipes, groceries) {
	const shopping_list = {}
	const missing_ingredients = []

	for (dish of Object.keys(menu)) {
		const multiple = menu[dish]
		const recipe = recipes[dish]
		if (!recipe) throw new Error(`Recipe not found: ${dish}`)
		for (ingredient of recipe.ingredients) {
			const grocery = groceries[ingredient.item]
			if (!grocery) {
				missing_ingredients.push(ingredient.item)
				continue;
			}

			let amountToAdd = ingredient.number * multiple
			if (ingredient.unit && (ingredient.unit !== grocery.unit)) {
				amountToAdd = getConverter(ingredient.unit, grocery.unit, ingredient.item)(amountToAdd)
			}

			if (!(ingredient.item in shopping_list)) {
			 	shopping_list[ingredient.item] = {amount: 0, neededFor: []}
			}
			shopping_list[ingredient.item].amount += amountToAdd
			shopping_list[ingredient.item].neededFor.push(dish)
		}
	}

	if (missing_ingredients.length) {
		throw new Error('Missing ingredients! ' + missing_ingredients.join(', '))
	}
	
	return shopping_list
}


// Convert shopping list array into CSV format
function listAsCsv (shoppingList, groceries) {
	// flatten shopping list
	const flattened_list = [['STORE', 'AISLE', 'ITEM', 'NUMBER', 'SIZE', 'NEEDED FOR']];
	for (item of Object.keys(shoppingList)) {
		const grocery = groceries[item]
		const quantity = Math.ceil(shoppingList[item].amount)
		const neededFor = shoppingList[item].neededFor.join(', ')
		flattened_list.push([grocery.store, grocery.aisle, item, quantity, grocery.unit, neededFor])
	}

	const stringify = require('csv-stringify');
	return new Promise((resolve, reject) => {
		stringify(flattened_list, (err, result) => {
			if (err) reject(err)
			resolve(result)
		})
	})
}

module.exports = {
	generateShoppingList,
	listAsCsv
}