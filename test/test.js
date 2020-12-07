var timeMeter = require('../index');

var instance = new timeMeter({
  intervalSpace:1000,
  timeUpdate(e){
    console.log(e);
  }
})
let myInterceptor = instance.resultInterceptor.add(function (result) {
  result.second = result.milliseconds / 1000;
  return result;
})

instance.resultInterceptor.remove(myInterceptor);

instance.start();
