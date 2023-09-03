/** eslint-plugin-unicorn */
module.exports = {
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
    "unicorn/no-array-reduce": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
    "unicorn/prefer-module": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
    "unicorn/no-null": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-useless-undefined.md
    "unicorn/no-useless-undefined": "off",
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
    "unicorn/filename-case": [
        "error",
        {
            "cases": {
                "pascalCase": true,
                "camelCase": true
            },
            "ignore": [
                "next-env.d.ts",
                "vite(st)?.config.ts",
                "vite-environment.d.ts",
                "\\.spec.ts(x)?",
                "\\.types.ts(x)?",
                "\\.stories.ts(x)?",
                "\\.styled.ts(x)?",
                "\\.styles.ts(x)?",
            ]
        }
    ],
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
    "unicorn/prevent-abbreviations": [
        "error",
        {
            "checkFilenames": false
        }
    ],
}