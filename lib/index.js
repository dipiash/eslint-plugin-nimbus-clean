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
        "@typescript-eslint"
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
    },
}

module.exports = {
    ...baseConfig,
    /** Make extendable plugin */
    configs: {
        recommended: {
            ...baseConfig
        }
    }
};
