/**
 * @fileoverview A comprehensive linting solution that sweeps your code clean. Fly through your codebase with ease and precision!
 * @author dipiash
 */
"use strict";

const flat = require("./flat");
const legacy = require("./legacy");

module.exports = {
  configs: {
    ...legacy.configs,
    flat: {
      ...flat.configs
    },
  },
  rules: {
    ...flat.rules,
  }
};
