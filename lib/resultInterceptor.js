function ResultInterceptor() {
  this.handlers = [];
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
