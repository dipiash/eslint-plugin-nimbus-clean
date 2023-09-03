/** eslint */
module.exports = {
    // https://eslint.org/docs/latest/rules/curly
    "curly": ["error", "all"],
    // https://eslint.org/docs/latest/rules/padding-line-between-statements
    "padding-line-between-statements": [
        "error",
        { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*" },
        { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"] },
        { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    // https://eslint.org/docs/latest/rules/no-multiple-empty-lines
    "no-multiple-empty-lines": ["error"],
    // https://eslint.org/docs/latest/rules/arrow-body-style
    "arrow-body-style": ["error", "as-needed"],
    // https://eslint.org/docs/latest/rules/prefer-arrow-callback
    "prefer-arrow-callback": "off",
    // https://eslint.org/docs/latest/rules/no-console
    "no-console": ["error", { "allow": ["warn", "info", "error"] }],
    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    "no-underscore-dangle": [
        "error",
        {
            "allow": ["_id", "__typename", "__schema", "__dirname", "_global"],
            "allowAfterThis": true
        }
    ],
}