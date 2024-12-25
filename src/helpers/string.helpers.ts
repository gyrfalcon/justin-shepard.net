export const hash = (toHash: string) => {
  return toHash.split('').reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0)
    return a & a
  }, 0)
}

export const toKebabCase = (input: string) => {
  return input.toLocaleLowerCase().replace(/ /g, '-')
}
