import { ESLint } from 'eslint'
import perfectionistPlugin from 'eslint-plugin-perfectionist'
import { describe, expect, it } from 'vitest'

import perfectionistRules from '../lib/rules/perfectionist.js'

const lintWithRule = async ({ ruleName, code, parserOptions = {}, filename = 'test.jsx' }) => {
  const eslint = new ESLint({
    overrideConfigFile: true,
    ignore: false,
    overrideConfig: [
      {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',
          parserOptions,
        },
        plugins: {
          perfectionist: perfectionistPlugin,
        },
        rules: {
          [ruleName]: perfectionistRules[ruleName],
        },
      },
    ],
  })

  const [result] = await eslint.lintText(code, { filePath: filename })

  return result.messages
}

describe('perfectionist config works on real linted code', () => {
  it('treats callback JSX props as callback group (issue #106 regression)', async () => {
    const messages = await lintWithRule({
      ruleName: 'perfectionist/sort-jsx-props',
      filename: 'component.jsx',
      parserOptions: { ecmaFeatures: { jsx: true } },
      code: `
        const fn = () => {}
        const view = <Widget zeta="1" onClick={fn} />
      `,
    })

    expect(messages).toHaveLength(0)
  })

  it('does not treat monkey as key (no minimatch-style substring false positive)', async () => {
    const messages = await lintWithRule({
      ruleName: 'perfectionist/sort-jsx-props',
      filename: 'component.jsx',
      parserOptions: { ecmaFeatures: { jsx: true } },
      code: `
        const view = <Widget monkey="1" id="2" />
      `,
    })

    expect(messages.length).toBeGreaterThan(0)
    expect(messages[0].ruleId).toBe('perfectionist/sort-jsx-props')
  })

  it('does not treat videoId as id (no substring false positive)', async () => {
    const messages = await lintWithRule({
      ruleName: 'perfectionist/sort-jsx-props',
      filename: 'component.jsx',
      parserOptions: { ecmaFeatures: { jsx: true } },
      code: `
        const view = <Widget videoId="1" title="Title" />
      `,
    })

    expect(messages.length).toBeGreaterThan(0)
    expect(messages[0].ruleId).toBe('perfectionist/sort-jsx-props')
  })

  it('treats callback object keys as callback group in sort-objects', async () => {
    const messages = await lintWithRule({
      ruleName: 'perfectionist/sort-objects',
      filename: 'object.js',
      code: `
        const obj = {
          zeta: 1,
          onClick() {
            return 1
          },
        }
      `,
    })

    expect(messages).toHaveLength(0)
  })
})
