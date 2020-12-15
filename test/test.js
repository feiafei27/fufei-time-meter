var timeMeter = require("../index");

var instance = new timeMeter({
  intervalSpace:10,
  timeUpdate(e){
    console.log(e);
  }
})

instance.start();
