/**
 * @fileoverview A comprehensive linting solution that sweeps your code clean. Fly through your codebase with ease and precision!
 * @author dipiash
 */
"use strict";

const flat = require("./flat");
const legacy = require("./legacy");

module.exports = {
  configs: {
    flat: {
      ...flat.configs
    },
    legacy: {
      ...legacy.configs,
    },
  },
  rules: {
    flat: {
      ...flat.rules,
    },
    legacy: {
      ...legacy.rules,
    },
  }
};
