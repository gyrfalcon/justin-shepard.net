import { parse } from '../../../../src/components/Markdown/markdown.helpers'


describe('markdown parser', () => {
  test('returns empty for empty string', () => {
    const results = parse('')

    expect(results.length).toBe(0)
  })

  test('parses plain text', () => {
    const results = parse('This is text')

    expect(results[0]).toStrictEqual({ type: 'plain', value: 'This is text' })
  })

  test('parses emphasis', () => {
    const results = parse('*Emphasized*')

    expect(results[0]).toStrictEqual({ type: 'emphasis', value: 'Emphasized' })
  })

  test('parses emphasis and plain text', () => {
    const results = parse('*Emphasized* with plain text')

    expect(results.length).toBe(2)
    expect(results[0]).toStrictEqual({ type: 'emphasis', value: 'Emphasized' })
    expect(results[1]).toStrictEqual({ type: 'plain', value: ' with plain text' })
  })

  test('parses emphasis in the middle of plain text', () => {
    const results = parse('Some *emphasized text* inside plain text')

    expect(results.length).toBe(3)
    expect(results[0]).toStrictEqual({ type: 'plain', value: 'Some ' })
    expect(results[1]).toStrictEqual({ type: 'emphasis', value: 'emphasized text' })
    expect(results[2]).toStrictEqual({ type: 'plain', value: ' inside plain text' })
  })

  test('parses strong', () => {
    const results = parse('**Strength**')

    expect(results[0]).toStrictEqual({ type: 'strong', value: 'Strength' })
  })

  test('parses strong and plain text', () => {
    const results = parse('**Strength** with plain text')

    expect(results.length).toBe(2)
    expect(results[0]).toStrictEqual({ type: 'strong', value: 'Strength' })
    expect(results[1]).toStrictEqual({ type: 'plain', value: ' with plain text' })
  })

  test('parses strong in the middle of plain text', () => {
    const results = parse('Some **strong text** inside plain text')

    expect(results.length).toBe(3)
    expect(results[0]).toStrictEqual({ type: 'plain', value: 'Some ' })
    expect(results[1]).toStrictEqual({ type: 'strong', value: 'strong text' })
    expect(results[2]).toStrictEqual({ type: 'plain', value: ' inside plain text' })
  })

  test('parses strong and emphasis', () => {
    const results = parse('***Enchilada***')

    expect(results[0]).toStrictEqual({ type: 'strong', value: { type: 'emphasis', value: 'Enchilada' } })
  })

  test('parses strong and emphasis and single character', () => {
    const results = parse('***Enchilada***t')

    expect(results.length).toBe(2)
    expect(results[0]).toStrictEqual({ type: 'strong', value: { type: 'emphasis', value: 'Enchilada' } })
    expect(results[1]).toStrictEqual({ type: 'plain', value: 't' })
  })

  test('parses strong and emphasis and plain text', () => {
    const results = parse('***Enchilada*** with plain text')

    expect(results.length).toBe(2)
    expect(results[0]).toStrictEqual({ type: 'strong', value: { type: 'emphasis', value: 'Enchilada' } })
    expect(results[1]).toStrictEqual({ type: 'plain', value: ' with plain text' })
  })

  test('parses strong and emphasis in the middle of plain text', () => {
    const results = parse('Some ***enchilada text*** inside plain text')

    expect(results.length).toBe(3)
    expect(results[0]).toStrictEqual({ type: 'plain', value: 'Some ' })
    expect(results[1]).toStrictEqual({ type: 'strong', value: { type: 'emphasis', value: 'enchilada text' } })
    expect(results[2]).toStrictEqual({ type: 'plain', value: ' inside plain text' })
  })
})
