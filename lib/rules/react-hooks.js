import reactHooksPlugin from 'eslint-plugin-react-hooks';

/** eslint-plugin-react-hooks */
export default {
  ...reactHooksPlugin.configs.recommended.rules,
  // https://github.com/facebook/react/blob/main/packages/eslint-plugin-react-hooks/README.md
  "react-hooks/exhaustive-deps": [2],
}
