Object destructuring simplify the calling process of exports by specifying the object’s properties to be accessed.

Assume the line,

```javascript
// counterSlice.js
const counterSlice = createSlice({
	...
	reducers : {
		increment() {...} ,
		decrement() {...} ,
	}
})

export { increment , decrement } = counterSlice.actions;
```

[[Redux Under the Hood|Redux Under the Hood]], `createSlice` from Redux Toolkit automatically generates action creators for each of the reducer functions. 

When calling from some other file, you can write the following,

```javascript
// counter.js

import {increment, decrement} from "./counterSlice.js"

const something = increment
```


