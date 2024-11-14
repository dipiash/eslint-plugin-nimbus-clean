"use strict";

const sonarjsPlugin = require('eslint-plugin-sonarjs')
const importPlugin = require('eslint-plugin-import');
const js = require('@eslint/js');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const reactPlugin = require('eslint-plugin-react');
const testingLibraryPlugin = require('eslint-plugin-testing-library');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const promisePlugin = require('eslint-plugin-promise');
const unicornPlugin = require('eslint-plugin-unicorn');
const perfectionistPlugin = require('eslint-plugin-perfectionist');
const tsPlugin = require('typescript-eslint');
const reactRefreshPlugin = require('eslint-plugin-react-refresh');

/** eslint */
const commonRules = require('./rules/common');
/** eslint-plugin-import */
const importRules = require('./rules/import');
/** eslint-plugin-sonarjs */
const sonarjsRules = require('./rules/sonarjs');
/** eslint-plugin-prettier */
const prettierRules = require('./rules/prettier');
/** eslint-plugin-react */
const reactRules = require('./rules/react');
/** eslint-plugin-react-hooks */
const reactHooksRules = require('./rules/react-hooks');
/** eslint-plugin-promise */
const promiseRules = require('./rules/promise');
/** eslint-plugin-unicorn */
const unicornRules = require('./rules/unicorn');
/** eslint-plugin-perfectionist */
const perfectionistRules = require('./rules/perfectionist');
/** typescript-eslint */
const typescriptRules = require('./rules/typescript');
/** eslint-plugin-react-refresh */
const reactRefreshRules = require('./rules/react-refresh');

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

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

const recommended = tsPlugin.config(
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
  ...tsPlugin.configs.recommended,

  {
    plugins: {
      'react-hooks': reactHooksPlugin,
      unicorn: unicornPlugin,
      'react-refresh': reactRefreshPlugin,
    },
    rules: {
      ...recommendedRules,
    },
  },
);

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
  {
    plugins: {
      unicorn: unicornPlugin,
    },
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
  typescriptRules: typescriptRules,
}

module.exports = {
  configs,
  rules,
};
