const { expect } = require('chai')
const is = require('./index')
const { TYPES } = require('./constants')

describe('should be true', () => {
  Reflect.ownKeys(TYPES).forEach(type => {
    it(`${type} test`, () => {
      expect(is[type](TYPES[type])).to.be.ok
    })
  })
})

describe('should be false', () => {
  Reflect.ownKeys(TYPES).forEach((type, index) => {
    it(`${type} test`, () => {
      const values = Object.values(TYPES)

      values.splice(index, 1)
      if(type === 'Number') {
        values.splice(-1, 1)
      }

      values.forEach((v) => {
        expect(is[type](v)).to.not.be.ok
      })
    })
  })
})