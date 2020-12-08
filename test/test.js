var timeMeter = require('../index');
var utils = require('../utils');

var instance = new timeMeter({
  intervalSpace:10,
  timeUpdate(e){
    console.log(e);
  }
})

instance.start();
