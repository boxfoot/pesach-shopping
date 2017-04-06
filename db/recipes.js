const recipes = {}

// recipes
// -------

recipes['matzah_balls'] = {
	ingredients: [
		{ item: "eggs", number: 4, unit: "each" },
		{ item: "seltzer", number: 0.5 },
		{ item: "oil", number: 3, unit: "Tb" },
		{ item: "parsley", number: 2, unit: "Tb" },
		{ item: "matzah meal", number: 1 },
	]
}

recipes['salmon'] = {
	ingredients: [
		{ item: 'salmon', number: 1 },
		{ item: 'jam', number: .25 }
	]
}

recipes['gefilte fish'] = {
	ingredients: [
		{ item: 'gefilte fish', number: 1 },
	]
}

recipes['seder plate'] = {
	ingredients: [
		{ item: "eggs", number: 1, unit: "each" },
		{ item: "beet", number: 1 },
		{ item: "maror", number: 1 },
		{ item: "horse radish", number: 1 },
		{ item: "shmura", number: 1 },
	]
}

recipes['matzah and wine'] = {
	ingredients: [
		{ item: "matzah", number: .5 },
		{ item: "red wine", number: 1 },
		{ item: "white wine", number: 1 },
		{ item: "grape juice", number: 1 },
	]
}

recipes['caponata'] = {
	ingredients: [
		{ item: "eggplant", number: 3, unit: "lb" },
		{ item: "salt", number: 3, unit: "Tb" },
		{ item: "olive oil", number: 1/4 },
		{ item: "onions", number: 3, note: "large" },
		{ item: "red peppers", number: 10 },
		{ item: "garlic", number: 6 },
		{ item: "carrots", number: 3, note: "large" },
		{ item: "tomatoes", number: 3, unit: "lb" },
		{ item: "olives", number: 3, unit: "cup" },
		{ item: "wine vinegar", number: 9, unit: "Tb" },
		{ item: "sugar", number: 6, unit: "Tb" },
		{ item: "basil", number: 3, unit: "Tb" },
		{ item: "dill", number: 6, unit: "Tb" },
	]
}

recipes['huevos haminadas'] = {
	ingredients: [
		{ item: "eggs", number: 24, unit: "each" },
		{ item: "salt", number: 1, unit: "Tb" },
		{ item: "pepper", number: 0.5, unit: "tsp" },
		{ item: "onion skins", number: 1, unit: "bag" },
		{ item: "oil", number: 0.5, unit: "cup" },
	]
}

recipes['roasted cauliflower'] = {
	ingredients: [
		{ item: "cauliflower", number: 2 },
	]
}

recipes['new potatoes'] = {
	ingredients: [
		{ item: "potatoes", number: 1, unit: "lb" },
	]
}

recipes['crudite'] = {
	ingredients: [
		{ item: "fruits + veggies", number: 1 },
	]
}

recipes['artichokes + mayo'] = {
	ingredients: [
		{ item: "artichokes", number: 4 },
		{ item: "mayo", number: 1, unit: "cup" },
		{ item: "curry", number: 1, unit: "Tb" },
	]
}

recipes['guacamole'] = {
	ingredients: [
		{ item: "avocado", number: 4 },
		{ item: "lemon", number: 2 },
	]
}

recipes['veggie soup'] = {
	ingredients: [
		{ item: "fruits + veggies", number: 2 },
	]
}

recipes['green beans'] = {
	ingredients: [
		{ item: "green beans", number: 2, unit: "lb" },
	]
}

recipes['quinoa pilaf'] = {
	ingredients: [
		{ item: "quinoa", number: 1, unit: "lb" },
		{ item: "raisins", number: 0.25, unit: "lb" },
		{ item: "pine nuts", number: 3, unit: "oz" },
	]
}

recipes['apple cake'] = {
	ingredients: [
		{ item: "eggs", number: 6, unit: "each" },
		{ item: "sugar", number: 2 },
		{ item: "oil", number: 1 },
		{ item: "cake meal", number: 1.5 },
		{ item: "orange juice", number: 1, unit: "Tb" },
		{ item: "apples", number: 4 },
	]
}

recipes['spice cake'] = {
	ingredients: [
		{ item: "eggs", number: 12, unit: "each" },
		{ item: "sugar", number: 2 },
		{ item: "cinnamon", number: 1.5, unit: "tsp" },
		{ item: "cloves", number: 0.25, unit: "tsp" },
		{ item: "sweet wine", number: 1/3 },
		{ item: "cake meal", number: 1.5 },
		{ item: "almonds", number: 1, unit: "cup" },
	]
}

recipes['almond cake'] = {
	ingredients: [
		{ item: "eggs", number: 10, unit: "each" },
		{ item: "sugar", number: 1 },
		{ item: "lemon", number: 1 },
		{ item: "vanilla", number: 1, unit: "bean" },
		{ item: "almonds", number: 8, unit: "oz" },
	]
}

recipes['dessert fruit'] = {
	ingredients: [
		{ item: "fruits + veggies", number: 2 },
	]
}

recipes['food to eat'] = {
	ingredients: [
		{ item: "parsley", number: 4, unit: "bundle" },
		{ item: "raisins", number: 2, unit: "lb" },

		{ item: "eggs", number: 24, unit: "each" },
		{ item: "mayo", number: 2, unit: "cup" },
		{ item: "tuna", number: 4 },
		{ item: "sardines", number: 8 },
		{ item: "jam", number: 2 },
		{ item: "fruits + veggies", number: 1 },
		{ item: "lemon", number: 8 },
		{ item: "cocoa", number: 2 },
		{ item: "chocolate", number: 12 },
		{ item: "quinoa", number: 2 },
		{ item: "apples", number: 12 },
		{ item: "tea", number: 4 },
		{ item: "coffee", number: 1 },
		{ item: "parchment paper", number: 1 },
		{ item: "tehina", number: 1 },
		{ item: "dish soap", number: 2 },
		{ item: "hard cheese", number: 4 },
		{ item: "cream cheese", number: 2 },
		{ item: "(whipped) butter", number: 2 },
		{ item: "lox", number: 2 },
		{ item: "yogurt", number: 2 },
		{ item: "feta", number: 2 },
		{ item: "cottage", number: 4 },
		{ item: "milk", number: 1 },
		{ item: "whipping cream", number: 2 },

		{ item: "olives", number: 4 },
		{ item: "raisins", number: 2 },
	]
}

recipes['cauliflower kugel'] = {
	ingredients: [
		{ item: "cauliflower", number: 2, unit: "head" },
		{ item: "olive oil", number: 6, unit: "Tb" },
		{ item: "leeks", number: 3, unit: "large" },
		{ item: "matzah meal", number: 6, unit: "Tb" },
		{ item: "eggs", number: 3, unit: "each" },
		{ item: "parsley", number: 0.5, unit: "bundle" },
		{ item: "dill", number: 0.5, unit: "cup" },
		{ item: "salt", number: 1.5, unit: "tsp" },
		{ item: "pepper", number: 0.5, unit: "tsp" },
		{ item: "almonds", number: 1/3, unit: "cup" },
	]
}

recipes['cashew butter'] = {
	ingredients: [
		{ item: "cashews", number: 1, unit: "lb" },
	]
}

recipes['almond butter'] = {
	ingredients: [
		{ item: "almonds", number: 1, unit: "lb" },
	]
}

recipes['haroset'] = {
	ingredients: [
		{ item: "eggs", number: 4, unit: "each" },
		{ item: "apples", number: 12 },
		{ item: "bananas", number: 6 },
		{ item: "lemon", number: 1 },
		{ item: "dates (pitted)", number: 130 },
		{ item: "figs", number: 60 },
		{ item: "orange", number: 1 },
		{ item: "sweet wine", number: .5 },
		{ item: "honey", number: 4, unit: "Tb" },
		{ item: "almonds", number: 8, unit: "oz" },
		{ item: "cashews", number: 8, unit: "oz" },
		{ item: "walnuts", number: 5, unit: "oz" },
		{ item: "pine nuts", number: 6, unit: "oz" },
		{ item: "sesame", number: 4, unit: "Tb" },
		{ item: "yellow raisins", number: 8, unit: "oz" },
		{ item: "cinnamon", number: 4, unit: "Tb" },
		{ item: "ginger", number: 2, unit: "Tb" },
		{ item: "coriander", number: 2, unit: "Tb" },
		{ item: "allspice", number: 2, unit: "Tb" },
	]
}

recipes['gnocci'] = {
	ingredients: [
		{ item: "potatoes", number: 2.5, unit: "lb" },
		{ item: "cake meal", number: 2/3, unit: "cup" },
		{ item: "starch", number: 1, unit: "cup" },
		{ item: "eggs", number: 2, unit: "each" },
		{ item: "salt", number: 2, unit: "tsp" },
		{ item: "pepper", number: 0.5, unit: "tsp" },
		{ item: "olive oil", number: 2, unit: "Tb" },
	]
}

recipes['pudding'] = {
	ingredients: [
		{ item: "starch", number: 0.25, unit: "cup" },
		{ item: "sugar", number: 0.5, unit: "cup" },
		{ item: "salt", number: 1/8, unit: "tsp" },
		{ item: "milk", number: 3, unit: "cup" },
		{ item: "chocolate", number: 1, unit: "bar" },
		{ item: "vanilla", number: 1, unit: "bean" },
	]
}

module.exports = recipes