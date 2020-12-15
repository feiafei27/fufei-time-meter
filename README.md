# fufei-time-meter

>  A simple time-meter library, you can start, pause, continue and reset the timer.



## Install

```
npm i fufei-time-meter
```

## Quick Start

```javascript
var TimeMeter = require("fufei-time-meter");

let timeMeterInstance = new TimeMeter({
	// callback function
	timeUpdate(e){
		// The structure of e: 
        //{ milliseconds: 1680,
        //  timeMeterStatus: 1,
        //  second: 1.68,
        //  hourMinuteSecond: '00:00:01',
        //  hourMinuteSecondMs: '00:00:01 680',
        //  lastThreeChar: '680' }
		console.log(e);
	}
})

// Start timing
timeMeterInstance.start();

// Pause timing
timeMeterInstance.pause();

// Resume timing
timeMeterInstance.resume();

// Reset timing
timeMeterInstance.reset();
```

## Timer status

```javascript
// callback function
timeUpdate(e){
    // The structure of e: 
    //{ milliseconds: 1680,
    //  timeMeterStatus: 1,
    //  second: 1.68,
    //  hourMinuteSecond: '00:00:01',
    //  hourMinuteSecondMs: '00:00:01 680',
    //  lastThreeChar: '680' }
    // The timer has three states
    // 0: initial state
    // 1: Timing status
    // 2: Pause state
    console.log(e);
}
```



## More customization

```javascript
let timeMeterInstance = new TimeMeter({
    // The time interval to trigger the callback. The default is 10 ms
    intervalSpace: 10,
    // Initial time, the default is 0 ms
    milliseconds: 0,
	// callback function
	timeUpdate(e){
		console.log(e);
	}
})
```

## Interceptor

Add interceptor

```javascript
import TimeMeter from "fufei-time-meter";

let timeMeterInstance = new TimeMeter({
	// callback function
	timeUpdate(e){
		// The structure of e:
        //{ milliseconds: 1680,
        //  timeMeterStatus: 1,
        //  second: 1.68,
        //  hourMinuteSecond: '00:00:01',
        //  hourMinuteSecondMs: '00:00:01 680',
        //  message: 'New property added in interceptor',
        //  lastThreeChar: '680' }
		console.log(e);
	}
})

// Add interceptor
const myInterceptor = timeMeterInstance.resultInterceptor.add(function (result) {   
    result.message = 'New property added in interceptor';
	return result;
})

// Start timing
timeMeterInstance.start();
```

Remove interceptor

```javascript
timeMeterInstance.resultInterceptor.remove(myInterceptor);
```

