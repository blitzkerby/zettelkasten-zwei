

##### **Create React App**
---
```bash
npx create-react-app frontend
cd frontend
```


##### **Install necessary packages**
---
```bash
npm install axios redux react-redux tailwindcss
```


##### **Set up Tailwind CSS**
---
Follow the Tailwind CSS installation guide.


##### **Create Redux Store**
---
In the `src` folder, cerate a `store.js` file:

```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
```


##### **Create User Actions and Reducer**
---
In the `src/actions` folder, create a `userActions.js` file:

```javascript
import axios from 'axios';


/* register */
export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/register', userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data });
  }
};


/* login */
export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/auth/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data });
  }
};
```


In the `src/reducers` folder, create a `userReducer.js` file:

```javascript
const initialState = {
  user: null,
  token: null,
  error: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_SUCCESS':
      return { ...state, user: action.payload.user, error: null };
    case 'REGISTER_FAIL':
      return { ...state, error: action.payload };
    case 'LOGIN_SUCCESS':
      return { ...state, token: action.payload.token, error: null };
    case 'LOGIN_FAIL':
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default userReducer;
```


##### **Create Registration Component**
---
In the `src/components` folder, create a `Register.js` file:

```javascript
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../actions/userActions';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Username" onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
```


Also create a `Login.js` file:

```jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../actions/userActions';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

```



