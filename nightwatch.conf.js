// @flow strict
import * as chromedriver from 'chromedriver'

const externalSelenium = process.env.EXTERNAL_SELENIUM === 'true'

module.exports = {
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
        default_path_prefix: externalSelenium ? '/wd/hub' : '',
        start_process: !externalSelenium,
        server_path: chromedriver.path,
        cli_args: ['--port=4444'],
      },
    },
  },
}
