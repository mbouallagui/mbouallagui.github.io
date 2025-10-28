exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'mehdibouallagui1',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'ks1QMgftzqmNqaC2jNzM',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        app: 'bs://c0297eaec87d3b5d8933961b9b40217d80dfe433',
        browserstackLocal: false,
        accessibility: false,
        testObservabilityOptions: {
              buildName: "bstack-demo",
              projectName: "BrowserStack Sample",
              buildTag: 'Any build tag goes here. For e.g. ["Tag1","Tag2"]'
            },
      },
    ]
  ],
  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S22 Ultra',
      platformVersion: '12.0',
      platformName: 'android',
    }
  }],
  commonCapabilities: {
    'bstack:options': {
      debug: true,
      networkLogs: true,
      percy: false,
      percyCaptureMode: 'off'
    }
  },
  maxInstances: 10,

  framework: 'mocha',

  specs: [
    './test/specs/app.e2e.js'
  ],
}