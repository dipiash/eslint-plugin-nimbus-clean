![GitHub CI](https://github.com/dipiash/eslint-plugin-nimbus-clean/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-plugin-nimbus-clean.svg?v=0.2.4)](https://badge.fury.io/js/eslint-plugin-nimbus-clean)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fdipiash%2Feslint-plugin-nimbus-clean&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# eslint-plugin-nimbus-clean

A comprehensive linting solution that sweeps your code clean. Combined rules for ESLint helps to produce high quality code by detecting suspicious patterns, bugs. Keep the code clean and consistent.

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Config](#config)
    + [Incrementally improvements](#incrementally-improvements)
    + [Separate rules](#separate-rules)
  * [Prettier settings (optional)](#prettier-settings-optional)
- [License](#license)
- [Contributions](#contributions)
- [Show your support](#show-your-support)
- [Contributors](#contributors)

<!-- tocstop -->

### Installation

**Requires ESLint `>=9.20.0`, [flat config](https://eslint.org/docs/latest/use/configure/configuration-files), and [ESM](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-make-my-typescript-project-output-esm).**

Here you can find instructions how to install it via: `npm`, `yarn`, `pnpm`.

You'll first need to install [ESLint](https://eslint.org/) and TypeScript:

```sh
npm i eslint --save-dev
npm i typescript

# Or run this to use yarn
yarn add eslint --dev
yarn add typescript

# Or run this to use pnpm
pnpm add eslint --save-dev
pnpm add typescript
```

Next, install `eslint-plugin-nimbus-clean`:

```sh
npm install eslint-plugin-nimbus-clean --save-dev

# Or run this to use yarn
yarn add eslint-plugin-nimbus-clean --dev

# Or run this to use pnpm
pnpm add eslint-plugin-nimbus-clean --save-dev
```

Next, install all peerDependencies for this plugin:

```sh
npx install-peerdeps eslint-plugin-nimbus-clean

# Or run this to use yarn
npx install-peerdeps eslint-plugin-nimbus-clean --yarn

# Or run this to use pnpm
npx install-peerdeps eslint-plugin-nimbus-clean --pnpm
```

### Usage

#### Config

Suitable for ESLint >= 9

`eslint.config.mjs` from **javascript** project

```javascript
import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";

const config = [
  ...nimbusCleanPlugin.configs.recommended,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default config;
```

`eslint.config.mjs` from **typescript** project

```typescript
import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...nimbusCleanPlugin.configs.recommended,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
);
```

##### Incrementally improvements

If you have existing project big/old/etc. you can apply `nimbus-clean` config setting incrementally:
- `nimbusCleanPlugin.configs.common`
- `nimbusCleanPlugin.configs.prettier`
- `nimbusCleanPlugin.configs.import`
- `nimbusCleanPlugin.configs.simpleImportSort`
- `nimbusCleanPlugin.configs.react`
- `nimbusCleanPlugin.configs.reactHooks`
- `nimbusCleanPlugin.configs.jsxA11y`
- `nimbusCleanPlugin.configs.promise`
- `nimbusCleanPlugin.configs.unicorn`
- `nimbusCleanPlugin.configs.sonarjs`
- `nimbusCleanPlugin.configs.typescript`
- `nimbusCleanPlugin.configs.perfectionist`
- `nimbusCleanPlugin.configs.testingLibrary`

`eslint.config.mjs` from **javascript** project

```javascript
import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";

const config = [
    ...nimbusCleanPlugin.configs.common,
    ...nimbusCleanPlugin.configs.prettier,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default config;
```

`eslint.config.mjs` from **typescript** project

```typescript
import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...nimbusCleanPlugin.configs.common,
  ...nimbusCleanPlugin.configs.prettier,
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
);
```

##### Separate rules

For flexible customization you can also use separate rules in your configs:
- `nimbusCleanPlugin.rules.recommended`
- `nimbusCleanPlugin.rules.common`
- `nimbusCleanPlugin.rules.import`
- `nimbusCleanPlugin.rules.sonarjs`
- `nimbusCleanPlugin.rules.prettier`
- `nimbusCleanPlugin.rules.react`
- `nimbusCleanPlugin.rules.reactHooks`
- `nimbusCleanPlugin.rules.reactRefresh`
- `nimbusCleanPlugin.rules.promise`
- `nimbusCleanPlugin.rules.unicorn`
- `nimbusCleanPlugin.rules.perfectionist`
- `nimbusCleanPlugin.rules.typescriptRules`

`eslint.config.mjs` from **javascript** project

```javascript
import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";

const config = [
    ...({
      ...nimbusCleanPlugin.configs.common,
      rules: {
        ... nimbusCleanPlugin.rules.common,
        // Your rules
      }
    }),
    ...nimbusCleanPlugin.configs.prettier,
    // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
];

export default config;
```

`eslint.config.mjs` from **typescript** project

```typescript
import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...({
    ...nimbusCleanPlugin.configs.common,
    rules: {
      ... nimbusCleanPlugin.rules.common,
      // Your rules
    }
  }),
  // OR
  {
    rules: {
      ...nimbusClean.rules.typescript,
    },
  },
  // Other configs

  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
);
```

#### Prettier settings (optional)

If you don't have a `.prettierrc` config, please add it (for example):
   ```prettier
   {
      "singleQuote": true,
      "printWidth": 150,
      "useTabs": false,
      "tabWidth": 2,
      "trailingComma": "all",
      "semi": false
    }
   ```

### License

This code is licensed under the [MIT](/LICENSE) License.

### Contributions

Before making any contributions, refer to [here](/CONTRIBUTING.md).

### Show your support
Star (⭐️) this repository if it helped you!

### Contributors

Thanks go to these wonderful people:

<a href="https://github.com/dipiash/eslint-plugin-nimbus-clean/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dipiash/eslint-plugin-nimbus-clean" />
</a>
