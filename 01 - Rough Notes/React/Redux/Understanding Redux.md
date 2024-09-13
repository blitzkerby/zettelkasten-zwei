---
~
---

## **The need for Redux**

React applications allow for states to be passed from one file to another in order to manipulate the components of any particular file indirectly. 

This is especially useful for something like the global states of an application where the states are required almost at all times by any other file.

However, implementing such a process can be extremely confusing and complex — since in the process of doing so, you create a intricate rat’s nest network of a react state.

Redux simplifies all of these quandaries.

## **General Process**

1. **Global State Management**
	
	Like React’s Context API, Redux provides a way to manage global state. However, Redux offers more powerful tools for handling complex state logic and debugging.
	
	
2. **Slices**
    
    **Slices** are used to organize state and reducers for different parts of your application. Each slice contains its own piece of state and the logic to update it.
      
    Each slice includes:
    
	- Initial State:
		  The starting state for that particular slice.
		  
	- Reducers: 
		  Functions that define how the state can be updated in response to actions
		  
	- Actions: 
			Automatically generated action creators based on the reducers.
		  
		  
3. **Store**
	
	The `store.js` file is where you combine all your slices and create the Redux store. This store holds the entire state tree of your application.
	



## **Simplified Structure** (+Example)

#### **Setting up Project**
---
```bash
mkdir my_project
cd my_project
npm create vite@latest ./
```
>
>	Be sure to also select the React template and use JavaScript
>


#### **Setting up folder structure**
---
```
.
├── node_modules
├── public
├── src/
│   ├── components/
│   │   ├── App.jsx
│   │   └── Counter.jsx
│   ├── features/
│   │   └── counterSlice.js
│   ├── main.jsx
│   └── store.js
├── index.html
└── package.json
```


#### **Install Dependencies**
---
```bash
npm install @reduxjs/toolkit react-redux redux
```


#### **`/src/features/counterSlice.js`**
---
Firstly, create a slice for the counter with Redux. 

>
>	The general convention used for creating these slices involves naming the file as the component’s name followed by *Slice*.
>	
>	(eg.: `counterSlice.js`)
>	

Within the file, you can begin by importing `createSlice` from `@reduxjs/toolkit`.

```javascript
import { createSlice } from '@reduxjs/toolkit';
```

Now you can create a slice, which is essentially a state, for counter.

```javascript
const counterSlice = createSlice({
	name: "Counter",
	initialState: {},
	reducers: {}
})
```

For our basic project, we’ll need to keep track of some value `count` —that will be displayed on the screen.   

```javascript
const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {}
})
```

Reducers are essentially the functions associated with our counter. For our counter, we’ll keep things simple by requiring an `increment` function and a `decrement` function, as well as a reset function.

```javascript
const counterSlice = createSlice({
	name: "counter",
	initialState: { count: 0 },
	reducers: {
		increment: (state) => state.count += 1 ,
		decrement: (state) => state.count -= 1 ,
		reset: (state) => state.count = 0 ,
	}
})
```

But, let’s add a bit of complexity. We’d also want some function to increase the *increment value* to `increment` and `decrement` faster.

```javascript
const counterSlice = createSlice({
	name: "counter",
	initialState : { 
		count: 0,
		incrementValue : 1,
	},
	reducer: {
		increment : (state) => state.count += 1,
		decrement : (state) => state.count -= 1,
		reset : (state) => state.count = 0,
		
		setIncrementValue : (state, action) => {
			state.incrementValue = action.payload
			},
		
	}
})
```

In order to use the functions, you’d have to export them. By convention, it is often exported via [[Object Destructuring in Redux Exports|Object Destructuring in Redux Exports]]. 

