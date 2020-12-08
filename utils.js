function isNumber(val) {
  return typeof val === 'number';
}

function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

function msToHMS(ms){
  let hours = Math.floor((ms % 86400000) / 3600000);
  hours = hours < 10 ? '0'+hours:hours;
  let minutes = Math.floor((ms % 3600000) / 60000);
  minutes = minutes < 10 ? '0'+minutes:minutes;
  let seconds = Math.floor((ms % 60000) / 1000);
  seconds = seconds < 10 ? '0'+seconds:seconds;
  return hours + ":" + minutes + ":" + seconds;
}

module.exports = {
  isNumber: isNumber,
  isFunction: isFunction,
  msToHMS:msToHMS
}
