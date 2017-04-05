const getConverter = require('./conversions')

// Given a menu, the refenced recipes, and grocery list
// Return a shopping list as an object {item: amount}
function generateShoppingList(menu, recipes, groceries) {
	const shopping_list = {}
	const missing_ingredients = []

	for (dish of Object.keys(menu)) {
		const multiple = menu[dish]
		const recipe = recipes[dish]
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
			 	shopping_list[ingredient.item] = 0
			}
			shopping_list[ingredient.item] += amountToAdd
		}
	}

	if (missing_ingredients.length) {
		throw new Error('Missing ingredients! ' + missing_ingredients.join(', '))
	}
	
	return shopping_list
}

exports.generateShoppingList = generateShoppingList


// Convert shopping list array into CSV format
function listAsCsv (shoppingList, groceries) {
	// flatten shopping list
	const flattened_list = [['STORE', 'AISLE', 'ITEM', 'NUMBER', 'SIZE']];
	for (item of Object.keys(shoppingList)) {
		const grocery = groceries[item]
		flattened_list.push([grocery.store, grocery.aisle, item, shoppingList[item], grocery.unit])
	}

	const stringify = require('csv-stringify');
	return new Promise((resolve, reject) => {
		stringify(flattened_list, (err, result) => {
			if (err) reject(err)
			resolve(result)
		})
	})
}

exports.listAsCsv = listAsCsv