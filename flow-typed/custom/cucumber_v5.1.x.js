// flow-typed signature: c7acab6f9be073569b6df4f2ba5d1a61
// flow-typed version: <<STUB>>/cucumber_v5.0.2/flow_v0.86.0

declare module 'cucumber' {
  declare export var Before: (() => Promise<*>) => void
  declare export var BeforeAll: (() => Promise<*>) => void
  declare export var After: (() => Promise<*>) => void
  declare export var AfterAll: (() => Promise<*>) => void
  declare export var Given: (RegExp, (...matches: Array<string>) => Promise<*>) => void
  declare export var When: (RegExp, (...matches: Array<string>) => Promise<*>) => void
  declare export var Then: (RegExp, (...matches: Array<string>) => Promise<*>) => void
  declare export var setDefaultTimeout: (number) => void
}
