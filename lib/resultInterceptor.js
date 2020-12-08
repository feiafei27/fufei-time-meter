var moment = require('moment');

// default interceptor
function DefaultResultInterceptor(result) {
  result.second = result.milliseconds / 1000;
  result.hourMinuteSecond = moment.utc(result.milliseconds).format("HH:mm:ss");
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
