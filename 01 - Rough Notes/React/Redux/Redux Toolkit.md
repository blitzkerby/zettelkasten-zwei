The `createSlice` function helps you create a slice of the Redux state, along with the actions and reducers for that slice.


### Step 1: Set Up Your Project

First, let’s create a new React project. Open your terminal and run:

```bash
npx create-react-app redux-demo
cd redux-demo
```


### Step 2: Install Redux and React-Redux

Next, you’ll need to install Redux and React-Redux, which is the official binding library for React and Redux:

```bash
npm install redux react-redux
npm install @reduxjs/toolkit
```


### Step 3: Create Your Redux Store

Create a new file called `store.js` in the `src` directory. This file will contain the configuration for your Redux store.

```jsx
import { createStore } from 'redux';

// Define an initial state

const initialState = {
  count: 0,
  loading: false,
  error: null,
};

// Define a reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + action.payload };
        case 'DECREMENT':
            return {...state, count: state.count - action.payload };
        case 'START_LOADING':
            return {...state, loading: true, error: null };
        case 'STOP_LOADING':
            return {...state, loading: false };
        case 'SET_ERROR':
            return {...state, error: action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
```


### Step 4: Provide the Store to Your React App

Wrap your application with the `Provider` component from `react-redux` to make the Redux store available to your React components.

```jsx 
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import './index.css';
import store from './store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

```


### Step 5: Connect Your Components to the Redux Store

Now, let’s create a simple component that interacts with the Redux store. We’ll create a `Counter` component that can increment and decrement the count.

```jsx
// src/Counter.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default Counter;
```


### Step 6: Use the Counter Component

Finally, use the `Counter` component in your `App` component.

```jsx
import aliensrock50 from "/aliensrock50.png"
import Counter from "./Counter";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p className="mt-4 text-lg">Im a banana</p>
      <img src={aliensrock50}/>
      <Counter />
    </div>
  );
};

export default Home;
```