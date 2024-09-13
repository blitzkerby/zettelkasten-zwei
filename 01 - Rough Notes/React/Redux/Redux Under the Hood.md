
Here’s what’s happening under the hood:

1. **Reducer Functions**
   
	You define your reducer functions (e.g., `increment`, `decrement`, `halve`, `incrementByAmount`) inside the `reducers` object.
   
   
2. **Action Creators**
   
   Redux Toolkit automatically creates action creators for each of these reducers. An action creator is a function that returns an action object with a `type` property corresponding to the reducer’s name and any payload you pass to it.
   
   
3. **Exporting Actions**
   
   By destructuring `counterSlice.actions`, you are extracting these automatically generated action creators and exporting them for use in your components.