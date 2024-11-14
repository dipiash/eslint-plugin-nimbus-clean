/**
 * @fileoverview A comprehensive linting solution that sweeps your code clean. Fly through your codebase with ease and precision!
 * @author dipiash
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const recommendedRules = {
  /** eslint */
  ...require('./rules/common'),

  /** eslint-plugin-prettier */
  ...require('./rules/prettier'),

  /** eslint-plugin-import */
  ...require('./rules/import'),

  /** eslint-plugin-react */
  ...require('./rules/react'),

  /** eslint-plugin-react-hooks */
  ...require('./rules/react-hooks'),

  /** eslint-plugin-promise */
  ...require('./rules/promise'),

  /** eslint-plugin-unicorn */
  ...require('./rules/unicorn'),

  /** eslint-plugin-sonarjs */
  ...require('./rules/sonarjs'),

  /** @typescript-eslint-* */
  ...require('./rules/typescript'),

  /** eslint-plugin-perfectionist */
  ...require('./rules/perfectionist'),

  /** eslint-plugin-react-refresh */
  ...require('./rules/react-refresh'),
}

const baseConfig = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:sonarjs/recommended-legacy",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:perfectionist/recommended-natural-legacy",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic"
  ],
  plugins: [
    "prettier",
    "import",
    "sonarjs",
    "react",
    "react-hooks",
    "testing-library",
    "jsx-a11y",
    "promise",
    "unicorn",
    "@typescript-eslint",
    "perfectionist",
    "react-refresh",
  ],
  rules: {
    ...recommendedRules,
  },
}

const commonConfig = {
  extends: [
    "eslint:recommended",
  ],
  rules: {
    /** eslint */
    ...require('./rules/common'),
  },
}
const prettierConfig = {
  extends: [
    "prettier",
  ],
  plugins: [
    "prettier",
  ],
  rules: {
    /** eslint-plugin-prettier */
    ...require('./rules/prettier'),
  },
}
const importConfig = {
  extends: [
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  plugins: [
    "import",
  ],
  rules: {
    /** eslint-plugin-import */
    ...require('./rules/import'),
  },
}
const reactConfig = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jsx-a11y/recommended",
  ],
  plugins: [
    "react",
    "react-hooks",
    "testing-library",
    "jsx-a11y",
    "react-refresh",
  ],
  rules: {
    /** eslint-plugin-react */
    ...require('./rules/react'),

    /** eslint-plugin-react */
    ...require('./rules/react-hooks'),

    /** eslint-plugin-react-refresh */
    ...require('./rules/react-refresh'),
  },
}
const promiseConfig = {
  extends: [
    "plugin:promise/recommended",
  ],
  plugins: [
    "promise",
  ],
  rules: {
    /** eslint-plugin-promise */
    ...require('./rules/promise'),
  },
}
const unicornConfig = {
  extends: [
    "plugin:unicorn/recommended",
  ],
  plugins: [
    "unicorn",
  ],
  rules: {
    /** eslint-plugin-unicorn */
    ...require('./rules/unicorn'),
  },
}
const sonarConfig = {
  extends: [
    "plugin:sonarjs/recommended-legacy",
  ],
  plugins: [
    "sonarjs",
  ],
  rules: {
    /** eslint-plugin-sonarjs */
    ...require('./rules/sonarjs'),
  },
}
const typescriptConfig = {
  extends: [
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    /** @typescript-eslint-* */
    ...require('./rules/typescript'),
  },
}
const perfectionistConfig = {
  extends: [
    "plugin:perfectionist/recommended-natural-legacy",
  ],
  plugins: [
    "perfectionist"
  ],
  rules: {
    /** eslint-plugin-perfectionist */
    ...require('./rules/perfectionist'),
  },
}

const configs = {
  recommended: {
    ...baseConfig,
  },
  common: {
    ...commonConfig,
  },
  prettier: {
    ...prettierConfig,
  },
  import: {
    ...importConfig,
  },
  react: {
    ...reactConfig,
  },
  promise: {
    ...promiseConfig,
  },
  unicorn: {
    ...unicornConfig,
  },
  sonarjs: {
    ...sonarConfig,
  },
  typescript: {
    ...typescriptConfig,
  },
  perfectionist: {
    ...perfectionistConfig,
  },
}

const rules = {
  recommended: {
    ...recommendedRules,
  },
  common: {
    ...require('./rules/common'),
  },
  prettier: {
    ...require('./rules/prettier'),
  },
  import: {
    ...require('./rules/import'),
  },
  promise: {
    ...require('./rules/promise'),
  },
  unicorn: {
    ...require('./rules/unicorn'),
  },
  sonarjs: {
    ...require('./rules/sonarjs'),
  },
  typescript: {
    ...require('./rules/typescript'),
  },
  perfectionist: {
    ...require('./rules/perfectionist'),
  },
  react: {
    ...require('./rules/react'),
  },
  reactHooks: {
    ...require('./rules/react-hooks'),
  },
  reactRefresh: {
    ...require('./rules/react-refresh'),
  },
}

module.exports = {
  configs,
  rules,
};
