const wallabyWebpack = require('wallaby-webpack')
const wallabyPostprocessor = wallabyWebpack()

module.exports = () => ({
  files: [ { pattern: 'src/*.js', load: false } ],
  tests: [ { pattern: 'test/*.test.js', load: false } ],
  testFramework: 'mocha',
  debug: true,
  env: {
    kind: 'chrome'
  },
  postprocessor: wallabyPostprocessor,
  setup: () => {
    // required to trigger test loading
    window.__moduleBundler.loadTests()
  }
})
