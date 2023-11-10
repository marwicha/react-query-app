## React + TypeScript + Vite + React query + React testing library + styled components

### Installation : 
npm install
npm run dev
npm run test

### Architecture : 

folder common
folder features
folder tests
folder utils

### React Query 

- the folder hooks contains the fetch api, i used react query to fetch a list of movies, search movies and get a movie by id 

- get all movies : https://api.themoviedb.org/3/discover/tv
- get a movie by id: https://api.themoviedb.org/3/movie/{movie_id}
- search for a movie https://api.themoviedb.org/3/search/movie

### UI styled components

### react testing library

to configure jest with vite add these : 

tsconfig.json
```
"include": ["src/**/*.ts", "src/**/*.tsx", "src/__tests__/*.test.js"],
```

add a file .babelrc 
```
{
    "presets": ["@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic" }], "@babel/preset-typescript"]
}
```

jest.config.ts
```
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^(.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
  transformIgnorePatterns: [
    'node_modules/(?!aggregate-error|clean-stack|escape-string-regexp|indent-string|p-map)',
  ],
};

export default config;
```
#### Expanding the ESLint configuration

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
