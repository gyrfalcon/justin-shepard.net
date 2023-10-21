import { hash, toKebabCase } from '../../../src/helpers/string.helpers'

describe('hash function', () => {
  test('hashes a string', () => {
    const value = hash('string')

    expect(value).toBe(-891985903)
  })
})

describe('to kebab case', () => {
  test('mixed case with spaces', () => {
    const result = toKebabCase('This is a Title')

    expect(result).toEqual('this-is-a-title')
  })

  test('already lowercase', () => {
    const result = toKebabCase('some text')

    expect(result).toEqual('some-text')
  })

  test('already kebab case', () => {
    const result = toKebabCase('kebab-case')

    expect(result).toEqual('kebab-case')
  })
})
