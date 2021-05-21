// @flow strict
import * as chromedriver from 'chromedriver'

const externalSelenium: bool = process.env.EXTERNAL_SELENIUM === 'true'
const webdriverPort: number = externalSelenium ? 4444 : 9515

type NightwatchConfig = {}

const config: NightwatchConfig = {
  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['headless', 'disable-gpu'],
        },
      },
      output: false,
      screenshots: {
        enabled: true,
        path: 'reports/screenshots',
      },
      silent: true,
      webdriver: {
        cli_args: [`--port=${webdriverPort}`],
        default_path_prefix: externalSelenium ? '/wd/hub' : '',
        port: webdriverPort,
        server_path: chromedriver.path,
        start_process: !externalSelenium,
      },
    },
  },
}

module.exports = config
