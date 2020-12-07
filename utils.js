function isNumber(val) {
  return typeof val === 'number';
}

function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

module.exports = {
  isNumber: isNumber,
  isFunction: isFunction
}
