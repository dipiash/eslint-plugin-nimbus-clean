/** eslint-plugin-promise */
export default {
  // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/prefer-await-to-then.md
  "promise/prefer-await-to-then": "off",
  // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/always-return.md
  "promise/always-return": "off",
  // https://github.com/eslint-community/eslint-plugin-promise/blob/main/docs/rules/catch-or-return.md
  "promise/catch-or-return": [2, {"allowThen": true, "allowFinally": true}],
}
