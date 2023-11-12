## React + TypeScript + Vite + React query + React Testing Library + Vitest + Styled components

### Installation :
- npm install
- npm run dev
- npm run test

### Architecture :

- folder common
- folder features/movies
- folder hooks
- folder tests
- folder utils

### React Query : 

- the folder hooks contains the fetch api, i used react query to fetch api calls :

- get all movies : https://api.themoviedb.org/3/discover/tv
- get a movie by id: https://api.themoviedb.org/3/movie/{movie_id}
- search for a movie https://api.themoviedb.org/3/search/movie

### React Testing Library + Vitest :

- to configure testing with vitest add these : 

- in package.json install these dependecies: ( latest )

```
    "@testing-library/jest-dom": "^6.1.4",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.4.3",
    "jsdom": "latest",
    "vite": "latest",
    "vitest": "latest"
```

- add these folowwing lines in vite.config.js file : 
```
/// <reference types="vitest" />
/// <reference types="vite/client" />
{ ... } 
test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },

```

- in tsconfig.json :
  
```
 "types": [
    ["vitest/globals"]
  ],
  "include": ["vite.config.ts", ".eslintrc.cjs", "src"],
```
if you're working with typescript add this file : tsconfig.node.json : 

```
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}

```

- add a file .babelrc 
```
{
    "presets": ["@babel/preset-env", ["@babel/preset-react", { "runtime": "automatic" }], "@babel/preset-typescript"]
}
```

- add a setupTests.ts file : latest version of vitest you only need to do this import
```
import '@testing-library/jest-dom/vitest'
```
