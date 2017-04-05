// grocery items
// -------------

const groceries = {
	seltzer: { store: 'home', aisle: 'n/a', unit: 'cup' },

	eggs: { store: 'TJ', aisle: 'dairy', unit: 'egg' },
	'horse radish': { store: 'Coopers', aisle: 'dairy', unit: 'jar' },
	salmon: { store: 'Coastal', aisle: 'n/a', unit: 'lb' },
	lox: { store: 'TJ', aisle: 'meat', unit: 'lb' },
	'hard cheese': { store: 'Coopers | Cub', aisle: 'dairy', unit: 'each' },
	'cheese': { store: 'Coopers', aisle: 'dairy', unit: 'each' },
	'cream cheese': { store: 'Coopers', aisle: 'dairy', unit: 'each' },
	'(whipped) butter': { store: 'Coopers', aisle: 'dairy', unit: 'each' },
	cottage: { store: 'Coopers', aisle: 'dairy', unit: 'each' },
	feta: { store: 'Coopers', aisle: 'dairy', unit: 'each' },
	yogurt: { store: 'Lunds', aisle: 'dairy', unit: 'each' },
	mayo: { store: 'Coopers', aisle: 'dairy', unit: 'cup' },
	milk: { store: 'TJ', aisle: 'dairy', unit: 'each' },
	'whipping cream': { store: 'TJ', aisle: 'dairy', unit: 'each' },

	oil: { store: '*any*', aisle: 'liquids', unit: 'cup' },
	'orange juice': { store: '*any*', aisle: 'liquids', unit: 'cup' },
	'olive oil': { store: '*any*', aisle: 'liquids', unit: 'cup' },
	'wine vinegar': { store: 'Coopers', aisle: 'K for P', unit: 'cup' },
	honey: { store: 'TJ', aisle: 'liquids', unit: 'cup' },

	tuna: { store: 'Coopers', aisle: 'K for P', unit: 'cup' },
	sardines: { store: 'Coopers', aisle: 'K for P', unit: 'cup' },

	tea: { store: '???', aisle: 'misc', unit: 'each' },
	coffee: { store: '???', aisle: 'misc', unit: 'each' },
	quinoa: { store: '???', aisle: 'misc', unit: 'lb' },
	tehina: { store: '???', aisle: 'liquids', unit: 'each' },
	cocoa: { store: 'coop', aisle: 'misc', unit: 'each' },
	chocolate: { store: 'coop', aisle: 'misc', unit: 'bar' },

	'parchment paper': {store: '*any*', aisle: 'goods', unit: 'each' },
	'dish soap': {store: '*any*', aisle: 'goods', unit: 'each' },

	jam: { store: 'Coopers', aisle: 'K for P', unit: 'jar'},
	olives: { store: 'Coopers', aisle: 'K for P', unit: 'cup'},

	parsley: { store: '*any*', aisle: 'produce', unit: 'bundle' },
	artichokes: { store: '*any*', aisle: 'produce', unit: 'each' },
	avocado: { store: '*any*', aisle: 'produce', unit: 'each' },
	'green beans': { store: '*any*', aisle: 'produce', unit: 'lb' },
	beet: { store: '*any*', aisle: 'produce', unit: 'each' },
	eggplant: { store: '*any*', aisle: 'produce', unit: 'lb' },
	cauliflower: { store: '*any*', aisle: 'produce', unit: 'head' },
	potatoes: { store: '*any*', aisle: 'produce', unit: 'lb' },
	onions: { store: '*any*', aisle: 'produce', unit: 'each' },
	'onion skins': { store: '*any*', aisle: 'produce', unit: 'bag' },
	'red peppers': { store: '*any*', aisle: 'produce', unit: 'each' },
	garlic: { store: '*any*', aisle: 'produce', unit: 'each' },
	carrots: { store: '*any*', aisle: 'produce', unit: 'each' },
	tomatoes: { store: '*any*', aisle: 'produce', unit: 'lb' },
	maror: { store: '???', aisle: 'produce', unit: 'each' },
	bananas: { store: '*any*', aisle: 'produce', unit: 'each' },
	orange: { store: '*any*', aisle: 'produce', unit: 'each' },
	apples: { store: '*any*', aisle: 'produce', unit: 'each' },
	lemon: { store: '*any*', aisle: 'produce', unit: 'each' },
	'fruits + veggies': { store: '*any*', aisle: 'produce', unit: 'each' },

	almonds: {store: 'TJ', aisle: 'nuts', unit: 'lb' },
	cashews: {store: 'TJ', aisle: 'nuts', unit: 'lb' },
	walnuts: {store: 'TJ', aisle: 'nuts', unit: 'lb' },
	'pine nuts': {store: 'TJ', aisle: 'nuts', unit: 'oz' },
	raisins: {store: 'TJ', aisle: 'nuts', unit: 'lb' },
	'yellow raisins': {store: 'TJ', aisle: 'nuts', unit: 'lb' },
	'dates (pitted)': {store: 'TJ', aisle: 'nuts', unit: 'each' },
	figs: {store: 'TJ', aisle: 'nuts', unit: 'each' },

	shmura: {store: 'Coopers', aisle: 'K for P', unit: 'box' },
	matzah: {store: 'Coopers', aisle: 'K for P', unit: 'box' },
	'matzah meal': { store: 'Coopers', aisle: 'K for P', unit: 'cup' },
	'cake meal': { store: 'Coopers', aisle: 'K for P', unit: 'cup' },

	'red wine': {store: 'TJ', aisle: 'Wine store', unit: 'bottle' },
	'white wine': {store: 'TJ', aisle: 'Wine store', unit: 'bottle' },
	'grape juice': {store: 'Coopers', aisle: 'Kosher', unit: 'bottle' },
	'sweet wine': {store: 'TJ', aisle: 'Wine store', unit: 'bottle' },

	sugar: {store: 'Coopers', aisle: 'spices', unit: 'cup' },
	salt: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	basil: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	dill: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	cinnamon: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	ginger: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	coriander: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	allspice: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	pepper: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	sesame: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	cloves: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
	vanilla: {store: 'Coopers', aisle: 'spices', unit: 'bean' },
	curry: {store: 'Coopers', aisle: 'spices', unit: 'Tb' },
}

module.exports = groceries;