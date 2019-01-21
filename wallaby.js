module.exports = function (wallaby) {
  return {
    files: [
      {
        pattern: 'node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js',
        instrument: false
      },
      {
        pattern: 'node_modules/chai/chai.js',
        instrument: false
      },
      { pattern: 'src/*.js', load: false }
    ],

    tests: ['test/*.test.js'],

    env: {
      kind: 'chrome',
      runner: '/usr/bin/google-chrome-stable'
    },

    testFramework: 'mocha',
    debug: true,

    // delaying running tests until web components are ready
    setup: function (wallaby) {
      if (!window.CustomElements || !window.CustomElements.readyTime) {
        wallaby.delayStart()
        window.addEventListener('WebComponentsReady', function () {
          wallaby.start()
        })
      }
      window.assert = chai.assert
    }
  }
}
