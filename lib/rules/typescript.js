/** @typescript-eslint-* */
module.exports = {
    // https://typescript-eslint.io/rules/no-use-before-define/
    "@typescript-eslint/no-use-before-define": ["error"],
    // https://typescript-eslint.io/rules/no-unused-vars/
    "@typescript-eslint/no-unused-vars": [
        "error"
    ],
    // https://typescript-eslint.io/rules/no-explicit-any/
    "@typescript-eslint/no-explicit-any": "error",
    // https://typescript-eslint.io/rules/ban-types/
    "@typescript-eslint/ban-types": [
        "error",
        {
            "types": {
                // un-ban a type that's banned by default
                "{}": false
            },
            "extendDefaults": true
        }
    ]
}
