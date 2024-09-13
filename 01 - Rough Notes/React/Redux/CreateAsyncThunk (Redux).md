### [What is createAsyncThunk in redux?](https://dev.to/t/redux)

Firstly, what is side effects, side effects refer to any external interaction outside an existing client application such as fetching data from an API.

In Redux, middleware has always been used to perform asynchronous tasks. Asynchronous tasks means things you have to wait for, such as fetching data from an API. A middleware is designed to enable developers to write logic that has side effects. An example is a package called `redux-thunk`.

Redux-thunk is used for asynchronous logic (tasks).

Redux toolkit comes with built-in dependencies such as `redux-thunk`, because Redux toolkit includes `redux-thunk` by default, we can use `createAsyncThunk` to make asynchronous requests.


### **`createAsyncThunk`**

`CreateAsyncThunk` is where we perform asynchronous tasks in our slice. It receives two parameters:

- ***Name of the action***
	The standard convention is "[slice name]/[action name]" such as `"posts/fetchPosts"`

- ***Callback function***
	performs an API call and returns the result when it is finished. Our API call returns a promise (which is an object that represents the status of an asynchronous operation, in our case an API call).

For each action that is created using `createAsyncThunk`, there are three probable state for the promise returned:
- `pending`
- `fulfilled`
- `rejected`

You decide what Redux should do in the three (3) different stages of the API call. Inside our slice we will add a property called `extraReducers` that holds a couple functions to handle the return of the API: `pending`, `fulfilled` and `rejected`.

### **`extraReducers`**  

You use extraReducers to handle actions that are created by `createAsyncThunk`. Based on the status of the promise, we will update our state.


## **Implementation**

#### **Setting up a store**
---
```javascript
// index.js
import { configureStore } from "@reduxjs/toolkit"
import { postsReducer } from "../features/posts/postsSlice"

export const store = configureStore({
	reducer: {
		// reducer for slice goes here
	}
})
```


#### **Providing the store to the App**
---
```javascript
// src/features/posts/postSlice
import App from "./App"
import { StrictMode } from "react"
import { store } from "./app/store"
import { Provider } from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
)
```


#### **Create a slice**
---
`src/features/posts/postSlice`

```javascript
import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
```

```javascript
const BASE_URL = "https://jsonplaceholder.typicode.com/posts"
```

```javascript
const initialState = {
	posts: [],
	status: "idle",
	error: ""
}
```

```javascript
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
	const response = await axios.get(BASE_URL)
	console.log(response.data)
	return resposne.data
})
```

```jsx
export const deletePosts = createAsyncThunk("post/deletePost", async (initialPost) => {
	const {id} = initialPost
	try {
		const response = await axios.delete(`${BASE_URL}/${id}`);
		if (response.status === 200) return initialPost
		return `${response.status} : ${response.statusText}`;  
	} catch (error) {
		return error.message
	}
})
```


```javascript
const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		// normal reducer functions go here
	},
	extraReducers(builder) {
		builder
			.addCase(fetchPosts.pending, (state, action) => {
				state.status = "loading"
			})
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.status = "success"
				state.posts = state.posts.concat(action.payload)
			})
			.addCase(fetchPosts.rejected, (state, action) => {
				state.status = "failed"
				state.error = action.error.message
			})
			.addCase(deletePost.fulfilled, (state, action) => {
				if (!action.payload.id) {
					console.log("could not delete!")
					console.log(action.payload)
					return
				}
				const { id } = action.payload;
				const OldPost = state.posts.filter(post => post.id !== id)
				state.posts = OldPost
				
			})
	}
})
```

```javascript
export default postSlice.reducer
```