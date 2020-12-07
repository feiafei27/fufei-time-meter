# fufei-time-meter

>  A simple time-meter library, you can start, pause, continue and reset the timer.



## Install

```
npm i fufei-time-meter
```

## Quick Start

```javascript
import TimeMeter from "fufei-time-meter";

let timeMeterInstance = new TimeMeter({
	// callback function
	timeUpdate(e){
		// The structure of e: {milliseconds: 240, timeMeterStatus: 1}
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
    // The structure of e: {milliseconds: 240, timeMeterStatus: 1}
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
		// The structure of e: {milliseconds: 4000, timeMeterStatus: 1}
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
        // {
        // 		milliseconds: 4000, 
        //		second: 4,
        //		message: 'New property added in interceptor'
        // 		timeMeterStatus: 1,
    	// }
		console.log(e);
	}
})

// Add interceptor
const myInterceptor = timeMeterInstance.resultInterceptor.add(function (result) {   
    result.message = 'New property added in interceptor';
    result.second = result.milliseconds / 1000;
	return result;
})

// Start timing
timeMeterInstance.start();
```

Remove interceptor

```javascript
timeMeterInstance.resultInterceptor.remove(myInterceptor);
```

