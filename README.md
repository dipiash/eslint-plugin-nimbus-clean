![GitHub CI](https://github.com/dipiash/eslint-plugin-nimbus-clean/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-plugin-nimbus-clean.svg?v=0.2.4)](https://badge.fury.io/js/eslint-plugin-nimbus-clean)
[![HitCount](https://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean.svg?style=flat-square)](http://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean)

# eslint-plugin-nimbus-clean

A comprehensive linting solution that sweeps your code clean. Fly through your codebase with ease and precision!

## Table of Contents

<!-- toc -->

- [Installation](#installation)
  * [Via npm](#via-npm)
  * [Via yarn](#via-yarn)
  * [Via pnpm](#via-pnpm)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)

<!-- tocstop -->

### Installation

Here you can find instructions how to install it via: `npm`, `yarn`, `pnpm`.

#### Via npm

You'll first need to install [ESLint](https://eslint.org/) and TypeScript:

```sh
npm i eslint --save-dev
npm i typescript
```

Next, install `eslint-plugin-nimbus-clean`:

```sh
npm install eslint-plugin-nimbus-clean --save-dev
```

Next, install all peerDependencies for this plugin:

```sh
npx install-peerdeps eslint-plugin-nimbus-clean
```

Next refer to [Usage](#usage) section.

#### Via yarn

Install `yarn` globally if you haven't already:

```sh
npm install -g yarn
```

Next install [ESLint](https://eslint.org/) and TypeScript:

```sh
yarn add eslint --dev
yarn add typescript
```

Next install `eslint-plugin-nimbus-clean`:

```sh
yarn add eslint-plugin-nimbus-clean --dev
```

Next install all peerDependencies for this plugin:

```sh
npx install-peerdeps eslint-plugin-nimbus-clean --yarn
```

Next refer to [Usage](#usage) section.

#### Via pnpm

Install `pnpm` globally if you haven't already:

```sh
npm install -g pnpm
# Or using yarn
yarn global add pnpm
```

Next install [ESLint](https://eslint.org/) and TypeScript:

```sh
pnpm add eslint --save-dev
pnpm add typescript
```

Next, install `eslint-plugin-nimbus-clean`:

```sh
pnpm add eslint-plugin-nimbus-clean --save-dev
```

Next install all peerDependencies for this plugin:

```sh
npx install-peerdeps eslint-plugin-nimbus-clean --pnpm
```

Next refer to [Usage](#usage) section.

### Usage

1. Add `nimbus-clean` to the extends or plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:
   ```json
   {
      "parser": "@typescript-eslint/parser",
      "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module",
        "ecmaFeatures": {
          "jsx": true,
          "modules": true,
          "experimentalObjectRestSpread": true
        }
      },
      "ignorePatterns": [
        "**/*",
        "node_modules"
      ],
      "settings": {
        "react": {
          "pragma": "React",
          "fragment": "Fragment",
          "version": "detect"
        },
        "import/resolver": {
          "typescript": {
            "alwaysTryTypes": true
          }
        }
      },
      "extends": [
        "plugin:nimbus-clean/recommended"
      ],
      "plugins": [
        "nimbus-clean"
      ]
   }
   ```

2. If you don't have a `.prettierrc` config, please add it
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

Before making any contributions, refer to [here](/CONTRIBUTING).
