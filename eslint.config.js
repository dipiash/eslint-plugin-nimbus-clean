"use strict";

const js = require("@eslint/js");
const nodePlugin = require("eslint-plugin-n");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  nodePlugin.configs["flat/recommended-script"],

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ["dist", "node_modules", ".husky", ".idea"]
  },
]
