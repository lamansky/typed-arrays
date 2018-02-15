'use strict'

const assert = require('assert')
const typedArrays = require('.')

describe('typedArrays#classes()', function () {
  it('should return an array with 9 functions', function () {
    const ta = typedArrays.classes()
    assert(Array.isArray(ta))
    assert.strictEqual(ta.length, 9)
    assert(ta.every(cls => typeof cls === 'function'))
  })

  it('should return a new array each time called', function () {
    assert.notStrictEqual(typedArrays.classes(), typedArrays.classes())
  })
})

describe('typedArrays#names()', function () {
  it('should return an array with 9 strings', function () {
    const ta = typedArrays.names()
    assert(Array.isArray(ta))
    assert.strictEqual(ta.length, 9)
    assert(ta.every(cls => typeof cls === 'string'))
  })

  it('should return a new array each time called', function () {
    assert.notStrictEqual(typedArrays.names(), typedArrays.names())
  })
})
