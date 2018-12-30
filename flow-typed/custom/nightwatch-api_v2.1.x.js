declare module 'nightwatch-api' {
  declare type Expect = {
    be: Expect,
    before: (number) => Api,
    contain: (string) => Expect,
    element: (string) => Expect,
    not: Expect,
    present: Expect,
    text: Expect,
    to: Expect,
    visible: Expect,
  }

  declare type Api = {
    click: (string) => Promise<Api>,
    expect: Expect,
    setValue: (string, string) => Promise<Api>,
    url: (string) => Promise<Api>,
  }

  declare export var client: Api

  declare type NightwatchApiOptions = {|
    configFile?: string,
    env?: string,
  |}

  declare export var createSession: (env: string) => Promise<Api>;
  declare export var closeSession: () => Promise<Api>;
  declare export var startWebDriver: (env: string) => Promise<Api>;
  declare export var stopWebDriver: () => Promise<Api>;
}
