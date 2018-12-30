// @flow
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
      output: true,
      screenshots: {
        enabled: true,
        path: 'reports/screenshots',
      },
      silent: false,
      webdriver: {
        default_path_prefix: '/wb/hub',
      },
    },
    selenium_server: {
      selenium: {
        start_process: false,
      },
    },
  },
}
