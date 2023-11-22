![GitHub CI](https://github.com/dipiash/eslint-plugin-nimbus-clean/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-plugin-nimbus-clean.svg?v=0.2.4)](https://badge.fury.io/js/eslint-plugin-nimbus-clean)
[![HitCount](https://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean.svg?style=flat-square)](http://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean)

`README.md`: [EN](/README.md) | [日本語](/docs/ja/README.md) | [繁體中文](/docs/zh-tw/README.md) | [हिंदी](/docs/hi/README.md)

# eslint-plugin-nimbus-clean

A comprehensive linting solution that sweeps your code clean. Fly through your codebase with ease and precision!

## Table of Contents

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
  * [Full config](#full-config)
  * [Incrementally improvements](#incrementally-improvements)
  * [Prettier settings (optional)](#prettier-settings-optional)
- [License](#license)
- [Contributions](#contributions)
- [Show your support](#show-your-support)
- [Contributors](#contributors)

<!-- tocstop -->

### Installation

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

#### Full config

It's recommended for new projects or if you want to see all ESLint errors and warnings for existing projects.

Add `nimbus-clean` to the extends or plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:
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

#### Incrementally improvements

If you have existing project big/old/etc. you can apply `nimbus-clean` config setting incrementally:
- `plugin:nimbus-clean/common`
- `plugin:nimbus-clean/prettier`
- `plugin:nimbus-clean/import`
- `plugin:nimbus-clean/simpleImportSort`
- `plugin:nimbus-clean/react`
- `plugin:nimbus-clean/promise`
- `plugin:nimbus-clean/unicorn`
- `plugin:nimbus-clean/sonarjs`
- `plugin:nimbus-clean/typescript`
- `plugin:nimbus-clean/perfectionist`

```json
{
  ...
  "extends": [
    "plugin:nimbus-clean/common",
    "plugin:nimbus-clean/prettier",
    ...
  ],
  "plugins": [
    "nimbus-clean"
  ]
}
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
