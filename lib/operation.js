//interval执行的函数
function intervalHandler(){
  if(this.status == 1){
    //加上累加值
    this.milliseconds += this.intervalSpace;
    //执行回调函数
    execCallback.call(this);
  }
}

function execCallback(){
  let result = {
    milliseconds:this.milliseconds,
    timeMeterStatus:this.status
  };
  this.resultInterceptor.handlers.forEach((fn) => {
    if(fn != null){
      result = fn(result);
    }
  })
  this.timeUpdate(result)
}

//开始计时操作
function start(){
  if(this.status != 0){
    console.warn("只有初始状态才能进行开始计时操作");
    return;
  }
  //设置状态
  this.status = 1;
  execCallback.call(this);
  this.interval = setInterval(intervalHandler.bind(this),this.intervalSpace);
}

//暂停计时操作
function pause(){
  if(this.status != 1){
    console.warn("只有正在计时状态才能进行暂停操作");
    return;
  }
  this.status = 2;
  //执行回调函数
  execCallback.call(this);
}

//继续计时操作
function resume(){
  if(this.status != 2){
    console.warn("只有暂停计时状态才能进行继续操作");
    return;
  }
  this.status = 1;
  execCallback.call(this);
}

//重置计时操作
function reset(){
  if(this.status != 2){
    console.warn("只有暂停计时状态才能进行重置操作");
    return;
  }

  this.status = 0;
  this.milliseconds = 0;
  clearInterval(this.interval);
  //执行回调函数
  execCallback.call(this);
}

module.exports = {
  start,
  pause,
  resume,
  reset
}
