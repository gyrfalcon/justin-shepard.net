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
      output: false,
      screenshots: {
        enabled: true,
        path: 'reports/screenshots',
      },
      silent: true,
      webdriver: {
        default_path_prefix: '/wd/hub',
      },
    },
    selenium_server: {
      selenium: {
        start_process: false,
      },
    },
  },
}
