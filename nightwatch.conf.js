// @flow
import * as chromedriver from 'chromedriver'

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
      webdriver: {
        start_process: true,
        server_path: chromedriver.path,
        cli_args: ['--port=4444'],
      },
    },
  },
}
