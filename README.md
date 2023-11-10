# React + TypeScript + Vite + React query + React testing library + styled components

## Architecture : 

folder components (common components)
folder features
folder tests
folder utils

## React Query 

the folder hooks contains the fetch api, i used react query to fetch a list of movies, search movies and get a movie by id 

get all movies : https://api.themoviedb.org/3/discover/tv
get a movie by id: https://api.themoviedb.org/3/movie/{movie_id}
search for a movie https://api.themoviedb.org/3/search/movie

## UI styled components

## For test react testing library

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
