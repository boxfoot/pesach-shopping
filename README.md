# Pesach Shopping List Generator

Instructions:

1. Add your recipes to `db/recipes.json`
2. Build your menu in `db/menu-YEAR.json`
3. Make sure all ingredients are named in `db/groceries.json`
4. Generate shopping list CSV with `node --experimental-modules index.mjs > shopping.csv`
5. On Windows, open CSV files with `start shopping.csv`

The format for the db files is finicky and you need exact text matches to reference
across the files, but it works for now. You'll get noisy errors if things don't
match up which will help you fix them.

To recover the shopping list from a specific year, just pass the year as another parameter: `node --experimental-modules index.mjs 5777`
