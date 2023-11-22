![GitHub CI](https://github.com/dipiash/eslint-plugin-nimbus-clean/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-plugin-nimbus-clean.svg?v=0.2.4)](https://badge.fury.io/js/eslint-plugin-nimbus-clean)
[![HitCount](https://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean.svg?style=flat-square)](http://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean)

`README.md`: [EN](/README.md) | [日本語](/docs/ja/README.md) | [繁體中文](/docs/zh-tw/README.md) | [हिंदी](/docs/hi/README.md)

# eslint-plugin-nimbus-clean

一套全面的靜態程式檢查工具，能夠徹底清理您的程式。使您能夠輕鬆且精確地穿梭於您的程式庫中!

## 目錄

<!-- toc -->

- [安裝](#%E5%AE%89%E8%A3%9D)
- [使用方法](#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
  * [完整配置](#%E5%AE%8C%E6%95%B4%E9%85%8D%E7%BD%AE)
  * [循序漸進](#%E5%BE%AA%E5%BA%8F%E6%BC%B8%E9%80%B2)
  * [Prettier 設定 (可選)](#prettier-%E8%A8%AD%E5%AE%9A-%E5%8F%AF%E9%81%B8)
- [授權條款](#%E6%8E%88%E6%AC%8A%E6%A2%9D%E6%AC%BE)
- [貢獻](#%E8%B2%A2%E7%8D%BB)
- [表示支持](#%E8%A1%A8%E7%A4%BA%E6%94%AF%E6%8C%81)
- [貢獻者們](#%E8%B2%A2%E7%8D%BB%E8%80%85%E5%80%91)

<!-- tocstop -->

### 安裝

您可以在這裡找到如何透過 `npm`、`yarn`、`pnpm` 安裝的說明。

首先，您需要先安裝 [ESLint](https://eslint.org/) 以及 TypeScript:

```sh
npm i eslint --save-dev
npm i typescript

# 或執行以下指令，透過 yarn 安裝
yarn add eslint --dev
yarn add typescript

# 或執行以下指令，透過 pnpm 安裝
pnpm add eslint --save-dev
pnpm add typescript
```

接著，安裝 `eslint-plugin-nimbus-clean`:

```sh
npm install eslint-plugin-nimbus-clean --save-dev

# 或執行以下指令，透過 yarn 安裝
yarn add eslint-plugin-nimbus-clean --dev

# 或執行以下指令，透過 pnpm 安裝
pnpm add eslint-plugin-nimbus-clean --save-dev
```

完成後，安裝該插件全部的對等依賴(peerDependencies):

```sh
npx install-peerdeps eslint-plugin-nimbus-clean

# 或執行以下指令，透過 yarn 安裝
npx install-peerdeps eslint-plugin-nimbus-clean --yarn

# 或執行以下指令，透過 pnpm 安裝
npx install-peerdeps eslint-plugin-nimbus-clean --pnpm
```

### 使用方法

#### 完整配置

如果您想要查看新專案或既有專案中所有的 ESLint 錯誤或警告，推薦您使用以下的配置方法。

將 `nimbus-clean` 加入 `.eslintrc` 設定檔中的擴展 (extends) 或是插件 (plugins) 區域，您可以省略前綴 `eslint-plugin`:

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

#### 循序漸進

如果您現有的專案較為龐大或歷史悠久，您可以循序漸進地套用以下 `nimbus-clean` 的設定:

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

#### Prettier 設定 (可選)

如果您尚未設定 `.prettierrc`，請添加它(以下是範例):

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

### 授權條款

此程式使用 [MIT](/LICENSE) 授權許可證。

### 貢獻

當您要做出任何貢獻前，請您參考[此處](/CONTRIBUTING.md)。

### 表示支持
如果這份備用單能夠幫助到您，請您支持並 ⭐️

### 貢獻者們

感謝這群無與倫比的人們：

<a href="https://github.com/dipiash/eslint-plugin-nimbus-clean/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dipiash/eslint-plugin-nimbus-clean" />
</a>
