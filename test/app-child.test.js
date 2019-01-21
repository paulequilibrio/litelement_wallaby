describe('app-child', function () {
  var element
  beforeEach(function () {
    element = document.createElement('app-child')
    document.body.appendChild(element)
  })

  afterEach(function () {
    document.body.removeChild(element)
  })

  it('should work too', function () {
    assert.equal(element.name, 'Child element')
  })
})
