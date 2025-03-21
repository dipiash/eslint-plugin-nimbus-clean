import js from '@eslint/js'
import nodePlugin from 'eslint-plugin-n'
import globals from 'globals'

export default [
  js.configs.recommended,
  nodePlugin.configs["flat/recommended-script"],

  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
      sourceType: 'module',
    },
  },
  {
    ignores: ["dist", "node_modules", ".husky", ".idea"]
  },
]
