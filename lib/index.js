/**
 * @fileoverview A comprehensive linting solution that sweeps your code clean. Fly through your codebase with ease and precision!
 * @author dipiash
 */
"use strict";

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------

const baseConfig = {
  extends: [
    "eslint:recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:sonarjs/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic"
  ],
  plugins: [
    "prettier",
    "simple-import-sort",
    "import",
    "react",
    "react-hooks",
    "testing-library",
    "jsx-a11y",
    "promise",
    "unicorn",
    "sonarjs",
    "@typescript-eslint",
    "perfectionist"
  ],
  rules: {
    /** eslint */
    ...require('./rules/common'),

    /** eslint-plugin-prettier */
    ...require('./rules/prettier'),

    /** eslint-plugin-import */
    ...require('./rules/import'),

    /** eslint-plugin-simple-import-sort */
    ...require('./rules/simple-import-sort'),

    /** eslint-plugin-react-* */
    ...require('./rules/react'),

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

const simpleImportSortConfig = {
  plugins: [
    "simple-import-sort",
  ],
  rules: {
    /** eslint-plugin-simple-import-sort */
    ...require('./rules/simple-import-sort'),
  },
}

const reactConfig = {
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:testing-library/react",
    "plugin:jsx-a11y/recommended"
  ],
  plugins: [
    "react",
    "react-hooks",
    "testing-library",
    "jsx-a11y",
  ],
  rules: {
    /** eslint-plugin-react-* */
    ...require('./rules/react'),
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
    "plugin:sonarjs/recommended",
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
  plugins: [
    "perfectionist"
  ],
  rules: {
    /** eslint-plugin-perfectionist */
    ...require('./rules/perfectionist'),
  },
}

module.exports = {
  ...baseConfig,
  /** Make extendable plugin */
  configs: {
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
    simpleImportSort: {
      ...simpleImportSortConfig,
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
  },
};
