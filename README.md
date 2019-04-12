# Pesach Shopping List Generator

Instructions:

1. Add your recipes to `db/recipes.mjs`
2. Build your menu in `db/menu.mjs`
3. Make sure all ingredients are named in `db/groceries.mjs`
4. Generate shopping list CSV with `node --experimental-modules index.mjs > shopping.csv`
5. On Windows, open CSV files with `start shopping.csv`

The format for the db files is finicky and you need exact text matches to reference
across the files, but it works for now. You'll get noisy errors if things don't
match up which will help you fix them.
