![GitHub CI](https://github.com/dipiash/eslint-plugin-nimbus-clean/actions/workflows/ci.yml/badge.svg)
[![npm version](https://badge.fury.io/js/eslint-plugin-nimbus-clean.svg?v=0.2.4)](https://badge.fury.io/js/eslint-plugin-nimbus-clean)
[![HitCount](https://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean.svg?style=flat-square)](http://hits.dwyl.com/dipiash/eslint-plugin-nimbus-clean)

`README.md`: [EN](/README.md) | [日本語](/docs/ja/README.md) | [繁體中文](/docs/zh-tw/README.md) | [हिंदी](/docs/hi/README.md)

# eslint-plugin-nimbus-clean

एक व्यापक लिंटिंग समाधान जो आपके कोड को स्वच्छ रखता है। आसानी और सटीकता से अपने कोडबेस पर फ्लाइ करें!

## सामग्री-सूची

<!-- toc -->

- [स्थापना](#%E0%A4%B8%E0%A5%8D%E0%A4%A5%E0%A4%BE%E0%A4%AA%E0%A4%A8%E0%A4%BE)
- [उपयोग](#%E0%A4%89%E0%A4%AA%E0%A4%AF%E0%A5%8B%E0%A4%97)
  * [पूर्ण कॉन्फ़िगरेशन](#%E0%A4%AA%E0%A5%82%E0%A4%B0%E0%A5%8D%E0%A4%A3-%E0%A4%95%E0%A5%89%E0%A4%A8%E0%A5%8D%E0%A5%9E%E0%A4%BF%E0%A4%97%E0%A4%B0%E0%A5%87%E0%A4%B6%E0%A4%A8)
  * [अंशवद्ध सुधार](#%E0%A4%85%E0%A4%82%E0%A4%B6%E0%A4%B5%E0%A4%A6%E0%A5%8D%E0%A4%A7-%E0%A4%B8%E0%A5%81%E0%A4%A7%E0%A4%BE%E0%A4%B0)
  * [प्रीटीयर सेटिंग्स (वैकल्पिक)](#%E0%A4%AA%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%9F%E0%A5%80%E0%A4%AF%E0%A4%B0-%E0%A4%B8%E0%A5%87%E0%A4%9F%E0%A4%BF%E0%A4%82%E0%A4%97%E0%A5%8D%E0%A4%B8-%E0%A4%B5%E0%A5%88%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A4%BF%E0%A4%95)
- [लाइसेंस](#%E0%A4%B2%E0%A4%BE%E0%A4%87%E0%A4%B8%E0%A5%87%E0%A4%82%E0%A4%B8)
- [योगदान](#%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A4%A6%E0%A4%BE%E0%A4%A8)
- [अपना समर्थन दिखाएं:](#%E0%A4%85%E0%A4%AA%E0%A4%A8%E0%A4%BE-%E0%A4%B8%E0%A4%AE%E0%A4%B0%E0%A5%8D%E0%A4%A5%E0%A4%A8-%E0%A4%A6%E0%A4%BF%E0%A4%96%E0%A4%BE%E0%A4%8F%E0%A4%82)
- [योगदानकर्ता:](#%E0%A4%AF%E0%A5%8B%E0%A4%97%E0%A4%A6%E0%A4%BE%E0%A4%A8%E0%A4%95%E0%A4%B0%E0%A5%8D%E0%A4%A4%E0%A4%BE)

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
