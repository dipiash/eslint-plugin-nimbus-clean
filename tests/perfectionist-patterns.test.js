import { describe, expect, it } from 'vitest'

import perfectionistRules from '../lib/rules/perfectionist.js'

const getRuleOptions = (ruleName) => perfectionistRules[ruleName][1]

const matchesPattern = (patternOrPatterns, value) => {
  const patterns = Array.isArray(patternOrPatterns) ? patternOrPatterns : [patternOrPatterns]

  return patterns.some((pattern) => new RegExp(pattern).test(value))
}

describe('perfectionist custom group patterns', () => {
  it('matches intended modules for sort-imports react group', () => {
    const options = getRuleOptions('perfectionist/sort-imports')
    const reactGroup = options.customGroups.find((group) => group.groupName === 'react')

    expect(matchesPattern(reactGroup.elementNamePattern, 'react')).toBe(true)
    expect(matchesPattern(reactGroup.elementNamePattern, 'react-dom')).toBe(true)
    expect(matchesPattern(reactGroup.elementNamePattern, '@apollo/client')).toBe(true)
    expect(matchesPattern(reactGroup.elementNamePattern, 'styled-components')).toBe(true)
    expect(matchesPattern(reactGroup.elementNamePattern, 'next/router')).toBe(true)
    expect(matchesPattern(reactGroup.elementNamePattern, '@material/ui')).toBe(true)

    expect(matchesPattern(reactGroup.elementNamePattern, 'preact')).toBe(false)
    expect(matchesPattern(reactGroup.elementNamePattern, 'my-reactive-lib')).toBe(false)
    expect(matchesPattern(reactGroup.elementNamePattern, 'nextjs')).toBe(false)
    expect(matchesPattern(reactGroup.elementNamePattern, '@materialui/core')).toBe(false)
  })

  it('matches only scoped packages for sort-imports monorepo group', () => {
    const options = getRuleOptions('perfectionist/sort-imports')
    const monorepoGroup = options.customGroups.find((group) => group.groupName === 'monorepos')

    expect(matchesPattern(monorepoGroup.elementNamePattern, '@scope')).toBe(true)
    expect(matchesPattern(monorepoGroup.elementNamePattern, '@scope/pkg')).toBe(true)

    expect(matchesPattern(monorepoGroup.elementNamePattern, 'scope/pkg')).toBe(false)
    expect(matchesPattern(monorepoGroup.elementNamePattern, '@/pkg')).toBe(false)
  })

  it('avoids substring false positives for jsx props and still matches callbacks', () => {
    const options = getRuleOptions('perfectionist/sort-jsx-props')
    const keyGroup = options.customGroups.find((group) => group.groupName === 'key')
    const idGroup = options.customGroups.find((group) => group.groupName === 'id')
    const topGroup = options.customGroups.find((group) => group.groupName === 'top')
    const callbackGroup = options.customGroups.find((group) => group.groupName === 'callback')

    expect(matchesPattern(keyGroup.elementNamePattern, 'key')).toBe(true)
    expect(matchesPattern(keyGroup.elementNamePattern, 'monkey')).toBe(false)

    expect(matchesPattern(idGroup.elementNamePattern, 'id')).toBe(true)
    expect(matchesPattern(idGroup.elementNamePattern, 'videoId')).toBe(false)

    expect(matchesPattern(topGroup.elementNamePattern, 'title')).toBe(true)
    expect(matchesPattern(topGroup.elementNamePattern, 'subtitle')).toBe(false)

    expect(matchesPattern(callbackGroup.elementNamePattern, 'onClick')).toBe(true)
    expect(matchesPattern(callbackGroup.elementNamePattern, 'handleSubmit')).toBe(true)
    expect(matchesPattern(callbackGroup.elementNamePattern, 'loadData')).toBe(true)
    expect(matchesPattern(callbackGroup.elementNamePattern, 'buttonOnClick')).toBe(false)
  })

  it('matches callback-like names for sort-object-types and sort-objects', () => {
    const objectTypesOptions = getRuleOptions('perfectionist/sort-object-types')
    const objectsOptions = getRuleOptions('perfectionist/sort-objects')

    const objectTypeCallback = objectTypesOptions.customGroups.find((group) => group.groupName === 'callback')
    const objectCallback = objectsOptions.customGroups.find((group) => group.groupName === 'callback')

    expect(matchesPattern(objectTypeCallback.elementNamePattern, 'updateUser')).toBe(true)
    expect(matchesPattern(objectTypeCallback.elementNamePattern, 'userUpdate')).toBe(false)

    expect(matchesPattern(objectCallback.elementNamePattern, 'deleteItem')).toBe(true)
    expect(matchesPattern(objectCallback.elementNamePattern, 'itemDelete')).toBe(false)
  })
})
