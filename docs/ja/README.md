![GitHub CI](https://github.com/dipiash/eslint-plugin-nimbus-clean/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-plugin-nimbus-clean.svg?v=0.2.4)](https://badge.fury.io/js/eslint-plugin-nimbus-clean)
[![HitCount](https://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean.svg?style=flat-square)](http://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean)

# eslint-plugin-nimbus-clean

コードをクリーンにする包括的なリンティングソリューション。コードベースを簡単に、正確に飛び回ろう！

## 目次

<!-- toc -->

- [eslint-plugin-nimbus-clean](#eslint-plugin-nimbus-clean)
  - [目次](#目次)
    - [インストール](#インストール)
    - [利用方法](#利用方法)
      - [フルコンフィグ](#フルコンフィグ)
      - [段階的な改善](#段階的な改善)
      - [Prettier 設定 (オプション)](#prettier-設定-オプション)
    - [ライセンス](#ライセンス)
    - [コントリビューション](#コントリビューション)

<!-- tocstop -->

### インストール

インストールは以下の方法で行うことができます: `npm`, `yarn`, `pnpm`.

最初に [ESLint](https://eslint.org/) と TypeScript をインストールする必要があります:

```sh
npm i eslint --save-dev
npm i typescript

# yarn を用いる場合
yarn add eslint --dev
yarn add typescript

# pnpm を用いる場合
pnpm add eslint --save-dev
pnpm add typescript
```

次に `eslint-plugin-nimbus-clean` をインストールします:

```sh
npm install eslint-plugin-nimbus-clean --save-dev

# yarn を用いる場合
yarn add eslint-plugin-nimbus-clean --dev

# pnpm を用いる場合
pnpm add eslint-plugin-nimbus-clean --save-dev
```

次に、本プラグインの peerDependencies をすべてインストールします:

```sh
npx install-peerdeps eslint-plugin-nimbus-clean

# yarn を用いる場合
npx install-peerdeps eslint-plugin-nimbus-clean --yarn

# pnpm を用いる場合
npx install-peerdeps eslint-plugin-nimbus-clean --pnpm
```

### 利用方法

#### フルコンフィグ

新しいプロジェクトや、既存プロジェクトの ESLint のエラーや警告をすべて表示したい場合にお勧めします。

`nimbus-clean`を`.eslintrc`設定ファイルの extends、または plugins に追加します。`eslint-plugin-`プレフィックスは省略可能です:
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

#### 段階的な改善

既存のプロジェクトが大きかったり、古かったりする場合には、`nimbus-clean` 設定を段階的にに適用することができます:
- `plugin:nimbus-clean/common`
- `plugin:nimbus-clean/prettier`
- `plugin:nimbus-clean/import`
- `plugin:nimbus-clean/simple-import-sort`
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

#### Prettier 設定 (オプション)

もし`.prettierrc`の設定がない場合には、追加してください（以下は例です）。
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

### ライセンス

このコードのライセンスは [MIT](/LICENSE) License です。

### コントリビューション

コントリビューションをする前には、いかなる場合でも[こちら](/CONTRIBUTING)を参照してください。
