/** eslint-plugin-unicorn */
export default {
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
  "unicorn/no-array-reduce": "off",
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
  "unicorn/prefer-module": "off",
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
  "unicorn/no-null": "off",
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
  "unicorn/no-useless-undefined": "off",
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
  "unicorn/prevent-abbreviations": [
    "error",
    {
      "checkFilenames": false
    }
  ],
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
  'unicorn/filename-case': 'off',
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
  'unicorn/import-style': [
    'warn',
    {
      checkImport: false,
    },
  ],
  // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-abusive-eslint-disable.md
  'unicorn/no-abusive-eslint-disable': 'warn',
}
