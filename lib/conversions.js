// UNIT conversions
// ----------------

const conversions = {
	'Tb -> cup': (orig) => orig / 16,
	'oz -> lb': (orig) => orig / 16,
	'Tb -> bundle': (orig) => orig / 8,
	'tsp -> Tb': (orig) => orig / 3,
	'cup -> lb': (orig) => orig / 4,
	'cup -> Tb': (orig) => orig * 16,
	'cup -> gallon': (orig) => orig / 16,
	'each -> dozen': (orig) => orig / 12,
}

function getConverter(from, to, name) {
	const needed = `${from} -> ${to}`
	if (needed in conversions) return conversions[needed]
	throw new Error(`Can't convert ${needed} (${name})`)
}

module.exports = getConverter;