/** eslint-plugin-simple-import-sort */
module.exports = {
    // https://github.com/lydell/eslint-plugin-simple-import-sort#custom-grouping
    "simple-import-sort/imports": [
        "error",
        {
            "groups": [
                // Builtins
                [
                    "^(events|fs|buffer|assert|child_process|cluster|dgram|dns|domain|crypto|http|https|module|net|console|constants|os|path|punycode|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty)(/.*|$)"
                ],
                // React, Apollo, Other @**, Styled Components
                ["^react", "^@apollo", "^@?\\w", "^styled"],
                // Monorepo packages
                ["^(@.*)(/.*|$)"],
                // Types
                ["^.+?[Tt]ype.+?"],
                // Hooks
                ["^.*use[A-Z].*$"],
                // Side effect imports
                ["^\\u0000"],
                // Parent imports
                ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
                // Relative imports
                ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
                // Style
                ["^.*styled.index$", "^.*styles.index$", "^.*css$", "^.*less$", "^.*scss$"],
                // Icons
                ["^.*svg$", "^.*jpg$", "^.*png$"]
            ]
        }
    ],
    "simple-import-sort/exports": "error",
}