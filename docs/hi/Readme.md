![GitHub CI](https://github.com/dipiash/eslint-plugin-nimbus-clean/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-plugin-nimbus-clean.svg?v=0.2.4)](https://badge.fury.io/js/eslint-plugin-nimbus-clean)
[![HitCount](https://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean.svg?style=flat-square)](http://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean)

`README.md`: [EN](/README.md) | [日本語](/docs/ja/README.md) | [繁體中文](/docs/zh-tw/README.md)

# eslint-plugin-nimbus-clean

एक व्यापक लिंटिंग समाधान जो आपके कोड को स्वच्छ रखता है। आसानी और सटीकता से अपने कोडबेस पर फ्लाइ करें!

## सामग्री-सूची

<!-- toc -->

- [स्थापना](#स्थापना)
- [उपयोग](#उपयोग)
  * [पूर्ण कॉन्फ़िगरेशन](#पूर्ण कॉन्फ़िगरेशन)
  * [अंशवद्ध सुधार](#अंशवद्ध सुधार)
  * [प्रीटीयर सेटिंग्स (वैकल्पिक)](#प्रीटीयर सेटिंग्स-वैकल्पि))
- [लाइसेंस](#लाइसेंस)
- [योगदान](#योगदान)
- [अपना समर्थन दिखाएं:](#अपना समर्थन दिखाएं:)
- [योगदानकर्ता](#योगदानकर्ता)

<!-- tocstop -->

### स्थापना

यहाँ आप npm, yarn और pnpm के माध्यम से इंस्टॉल करने के लिए निर्देश पा सकते हैं:

पहले आपको [ESLint](https://eslint.org/) और TypeScript इंस्टॉल करने की आवश्यकता है:

```sh
npm i eslint --save-dev
npm i typescript

# या इसे चलाएं ताकि yarn का उपयोग किया जा सके:
yarn add eslint --dev
yarn add typescript

# या इसे चलाएं ताकि pnpm का उपयोग किया जा सके:
pnpm add eslint --save-dev
pnpm add typescript
```

अगले कदम में, eslint-plugin-nimbus-clean को इंस्टॉल करें:

```sh
npm install eslint-plugin-nimbus-clean --save-dev

# या इसे चलाएं ताकि yarn का उपयोग किया जा सके:
yarn add eslint-plugin-nimbus-clean --dev

# या इसे चलाएं ताकि pnpm का उपयोग किया जा सके:
pnpm add eslint-plugin-nimbus-clean --save-dev
```

अगले, इस प्लगइन के लिए सभी peerDependencies को इंस्टॉल करें:

```sh
npx install-peerdeps eslint-plugin-nimbus-clean

# या इसे चलाएं ताकि yarn का उपयोग किया जा सके:
npx install-peerdeps eslint-plugin-nimbus-clean --yarn

# या इसे चलाएं ताकि pnpm का उपयोग किया जा सके:
npx install-peerdeps eslint-plugin-nimbus-clean --pnpm
```

### उपयोग

#### पूर्ण कॉन्फ़िगरेशन

यह नए परियोजनाओं के लिए या यदि आप विदित परियोजनाओं के लिए सभी ESLint त्रुटियां और चेतावनियों को देखना चाहते हैं, तो सिफारिश किया जाता है।

अपने .eslintrc कॉन्फ़िगरेशन फ़ाइल के extends या plugins खंड में nimbus-clean को जोड़ें। आप eslint-plugin- प्रीफ़िक्स को छोड़ सकते हैं:

```json
{
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 13,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true,
      "experimentalObjectRestSpread": true
    }
  },
  "ignorePatterns": [
    "**/*",
    "node_modules"
  ],
  "settings": {
    "react": {
      "pragma": "React",
      "fragment": "Fragment",
      "version": "detect"
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true
      }
    }
  },
  "extends": [
    "plugin:nimbus-clean/recommended"
  ],
  "plugins": [
    "nimbus-clean"
  ]
}
 ```

#### अंशवद्ध सुधार

यदि आपके पास मौजूदा परियोजना बड़ी/पुरानी/इत्यादि है, तो आप nimbus-clean कॉन्फ़िग सेटिंग को आंशिक रूप से लागू कर सकते हैं:
- `plugin:nimbus-clean/common`
- `plugin:nimbus-clean/prettier`
- `plugin:nimbus-clean/import`
- `plugin:nimbus-clean/simple-import-sort`
- `plugin:nimbus-clean/react`
- `plugin:nimbus-clean/promise`
- `plugin:nimbus-clean/unicorn`
- `plugin:nimbus-clean/sonarjs`
- `plugin:nimbus-clean/typescript`
- `plugin:nimbus-clean/perfectionist`

```json
{
  ...
  "extends": [
    "plugin:nimbus-clean/common",
    "plugin:nimbus-clean/prettier",
    ...
  ],
  "plugins": [
    "nimbus-clean"
  ]
}
   ```

#### प्रीटीयर सेटिंग्स (वैकल्पिक)

यदि आपके पास .prettierrc कॉन्फ़िग नहीं है, तो कृपया इसे जोड़ें (उदाहरण के लिए):
   ```prettier
   {
      "singleQuote": true,
      "printWidth": 150,
      "useTabs": false,
      "tabWidth": 2,
      "trailingComma": "all",
      "semi": false
    }
   ```

### लाइसेंस

यह कोड [MIT](/LICENSE) लाइसेंस के अंतर्गत लाइसेंस प्राप्त है।

### योगदान

किसी भी योगदान से पहले, [यहां](/CONTRIBUTING.md) संदर्भ करें।

### अपना समर्थन दिखाएं:
यदि यह आपकी सहायता करता है, तो इस रेपॉज़िटरी को स्टार (⭐️) करें!

### योगदानकर्ता:

इन अद्भुत लोगों का धन्यवाद जाता है:

<a href="https://github.com/dipiash/eslint-plugin-nimbus-clean/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=dipiash/eslint-plugin-nimbus-clean" />
</a>