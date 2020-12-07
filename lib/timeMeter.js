var operations = require('./operation');
var ResultInterceptor = require('./resultInterceptor');
var utils = require('../utils');

function createInstance(params){
  //计时器有 3 种状态
  //0:初始状态，未开始状态
  //1:计时状态 -- 正在计时
  //2:计时状态 -- 暂停计时
  this.status = 0;
  //计时器有 4 种操作
  //(1)开始计时 (2)暂停计时 (3)继续计时 (4)重置
  this.interval = null;
  //计时器遍历的时间间隔(ms)
  this.intervalSpace = (
    params &&
    params.intervalSpace &&
    utils.isNumber(params.intervalSpace) &&
    params.intervalSpace > 0
  ) ? params.intervalSpace : 10;
  this.milliseconds = (
    params &&
    params.milliseconds &&
    utils.isNumber(params.milliseconds)
  ) ? params.milliseconds : 0;
  //要执行的回调函数
  //params.timeUpdate
  this.timeUpdate = (
    params &&
    params.timeUpdate &&
    utils.isFunction(params.timeUpdate)
  ) ? params.timeUpdate : function (e) {
    console.log(e);
    console.warn("You can customize the timeupdate callback function to get the changed time value.");
  };
  //结果拦截器
  this.resultInterceptor = new ResultInterceptor();
}

createInstance.prototype = {
  ...operations
};

module.exports = createInstance;
