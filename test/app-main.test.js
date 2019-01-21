describe('app-main', function () {
  var element
  beforeEach(function () {
    element = document.createElement('app-main')
    document.body.appendChild(element)
  })

  afterEach(function () {
    document.body.removeChild(element)
  })

  it('should work', function () {
    assert.equal(element.name, 'Main element')
  })
})
