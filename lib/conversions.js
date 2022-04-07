// UNIT conversions
// ----------------

const conversions = {
  'oz -> lb': (orig) => orig / 16,
  'tsp -> Tb': (orig) => orig / 3,
  'tsp -> cup': (orig) => orig / 3 / 16,
  'Tb -> cup': (orig) => orig / 16,
  'Tb -> bundle': (orig) => orig / 8,
  'Tb -> stick': (orig) => orig / 8,
  'cup -> lb': (orig) => orig / 4,
  'cup -> Tb': (orig) => orig * 16,
  'cup -> pint': (orig) => orig / 2,
  'cup -> gallon': (orig) => orig / 16,
  'each -> dozen': (orig) => orig / 12,
};

export default function getConverter(from, to, name) {
  const needed = `${from} -> ${to}`;
  if (needed in conversions) return conversions[needed];
  throw new Error(`Can't convert ${needed} (${name})`);
}
