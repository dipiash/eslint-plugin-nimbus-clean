
import sonarjsPlugin from 'eslint-plugin-sonarjs'
import importPlugin from 'eslint-plugin-import'
import js from '@eslint/js'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import reactPlugin from 'eslint-plugin-react'
import testingLibraryPlugin from 'eslint-plugin-testing-library'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import promisePlugin from 'eslint-plugin-promise'
import unicornPlugin from 'eslint-plugin-unicorn'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import tsPlugin from 'typescript-eslint'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import eslintP from 'eslint-plugin-eslint-plugin'

/** eslint */
import commonRules from'./rules/common.js'
/** eslint-plugin-import */
import importRules from'./rules/import.js'
/** eslint-plugin-sonarjs */
import sonarjsRules from'./rules/sonarjs.js'
/** eslint-plugin-prettier */
import prettierRules from'./rules/prettier.js'
/** eslint-plugin-react */
import reactRules from'./rules/react.js'
/** eslint-plugin-react-hooks */
import reactHooksRules from'./rules/react-hooks.js'
/** eslint-plugin-promise */
import promiseRules from'./rules/promise.js'
/** eslint-plugin-unicorn */
import unicornRules from'./rules/unicorn.js'
/** eslint-plugin-perfectionist */
import perfectionistRules from'./rules/perfectionist.js'
/** typescript-eslint */
import typescriptRules from'./rules/typescript.js'
/** eslint-plugin-react-refresh */
import reactRefreshRules from'./rules/react-refresh.js'

const recommendedRules = {
  ...commonRules,
  ...importRules,
  ...sonarjsRules,
  ...prettierRules,
  ...reactRules,
  ...reactHooksRules,
  ...promiseRules,
  ...unicornRules,
  ...perfectionistRules,
  ...typescriptRules,
  ...reactRefreshRules,
}

const recommended = [
  js.configs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  sonarjsPlugin.configs.recommended,
  eslintPluginPrettierRecommended,
  testingLibraryPlugin.configs['flat/react'],
  reactPlugin.configs.flat.recommended,
  jsxA11yPlugin.flatConfigs.recommended,
  promisePlugin.configs['flat/recommended'],
  perfectionistPlugin.configs['recommended-natural'],
  unicornPlugin.configs.recommended,
  eslintP.configs.recommended,
  ...tsPlugin.configs.recommended,

  {
    plugins: {
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...recommendedRules,
    },
  },
];

const common = [
  js.configs.recommended,
  {
    rules: commonRules,
  }
]
const importConfig = [
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: importRules,
  }
]
const sonarjs = [
  sonarjsPlugin.configs.recommended,
  {
    rules: sonarjsRules,
  }
]
const prettier = [
  eslintPluginPrettierRecommended,
  {
    rules: prettierRules,
  }
]
const react = [
  reactPlugin.configs.flat.recommended,
  {
    rules: reactRules,
  }
]
const reactHooks = [
  {
    plugins: {
      'react-hooks': reactHooksPlugin,
    },
    rules: reactHooksRules,
  },
]
const reactRefresh = [
  {
    plugins: {
      "react-refresh": reactRefreshPlugin,
    },
    rules: reactRefreshRules,
  }
]
const jsxA11y = [
  jsxA11yPlugin.flatConfigs.recommended,
]
const testingLibrary = [
  testingLibraryPlugin.configs['flat/react'],
]
const promise = [
  promisePlugin.configs['flat/recommended'],
  {
    rules: promiseRules,
  }
]
const unicorn = [
  unicornPlugin.configs.recommended,
  {
    rules: unicornRules,
  }
]
const perfectionist = [
  perfectionistPlugin.configs['recommended-natural'],
  {
    rules: perfectionistRules,
  }
]
const typescript = [
  ...tsPlugin.configs.recommended,
  {
    rules: typescriptRules,
  }
]
const eslintPlugin = [
  eslintP.configs.recommended,
]

const configs = {
  recommended,
  common,
  import: importConfig,
  sonarjs,
  prettier,
  react,
  reactHooks,
  reactRefresh,
  jsxA11y,
  testingLibrary,
  promise,
  unicorn,
  perfectionist,
  typescript,
  eslintPlugin,
}

const rules = {
  recommended: recommendedRules,
  common: commonRules,
  import: importRules,
  sonarjs: sonarjsRules,
  prettier: prettierRules,
  react: reactRules,
  reactHooks: reactHooksRules,
  reactRefresh: reactRefreshRules,
  promise: promiseRules,
  unicorn: unicornRules,
  perfectionist: perfectionistRules,
  typescript: typescriptRules,
}

export default {
  configs,
  rules,
};
