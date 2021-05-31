// @flow strict
import * as chromedriver from 'chromedriver'

const webdriverPort: number = 9515

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
        default_path_prefix: '',
        port: webdriverPort,
        server_path: chromedriver.path,
        start_process: true,
      },
    },
  },
}

module.exports = config
