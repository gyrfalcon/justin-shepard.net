declare module '@cucumber/cucumber' {
  declare export var Before: (() => Promise<*>) => void
  declare export var BeforeAll: (() => Promise<*>) => void
  declare export var After: (() => Promise<*>) => void
  declare export var AfterAll: (() => Promise<*>) => void
  declare export var Given: (RegExp, (...matches: Array<string>) => Promise<*>) => void
  declare export var When: (RegExp, (...matches: Array<string>) => Promise<*>) => void
  declare export var Then: (RegExp, (...matches: Array<string>) => Promise<*>) => void
  declare export var setDefaultTimeout: (number) => void
}
