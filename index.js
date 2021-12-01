const { TYPES } = require('./constants')

const isType = (type) => (param) => {
  if(type === 'NaN') {
    return param !== param
  } else {
    return Object.prototype.toString.call(param).match(/\[object (.*?)\]/)[1] === type
  }
}

Reflect.ownKeys(TYPES).forEach((type) => {
  exports[type] = isType(type)
})
