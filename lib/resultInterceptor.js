var utils = require('../utils');

// default interceptor
function DefaultResultInterceptor(result) {
  result.second = result.milliseconds / 1000;
  result.hourMinuteSecond = utils.msToHMS(result.milliseconds);
  result.hourMinuteSecondMs = utils.msToHMSMS(result.milliseconds);
  result.lastThreeChar = utils.getMSLastThree(result.milliseconds);
  return result;
}

function ResultInterceptor() {
  this.handlers = [DefaultResultInterceptor];
}

ResultInterceptor.prototype.add = function (resultFilter) {
  this.handlers.push(resultFilter);
  return this.handlers.length - 1;
}

ResultInterceptor.prototype.remove = function (id) {
  if(this.handlers[id]){
    this.handlers[id] = null;
  }
}

module.exports = ResultInterceptor;
