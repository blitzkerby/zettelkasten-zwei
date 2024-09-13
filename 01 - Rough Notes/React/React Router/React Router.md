#### 1. Create a React App 
---
```bash
npm create vite@latest
```


#### 2. Install `react-router-dom` and Tailwind CSS
---
```bash
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


#### 3. Configure Tailwind CSS
---
Update your `tailwind.config.js` file to include the paths to your template files:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

```

Add the Tailwind directives to your `src/index.css` file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


#### 4. Set up Routing
---
Create a `src/components` folder and add the following files:

##### `Home.js`

```jsx
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <p className="mt-4 text-lg">Welcome to the Home Page!</p>
    </div>
  );
};

export default Home;
```


##### `About.js`

```jsx
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">About Page</h1>
      <p className="mt-4 text-lg">Learn more about us on this page.</p>
    </div>
  );
};

export default About;

```


##### `Contact.js`

```jsx
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Contact Page</h1>
      <p className="mt-4 text-lg">Get in touch with us here.</p>
    </div>
  );
};

export default Contact;
```


#### 5. Create the Router
---
Update your `src/App.js` file to include the router setup:

```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
```


## [[createBrowserRouter]]
---
The `createBrowserRouter` function is part of the `react-router-dom` library, which is used for handling routing in React applications. It leverages the [[HTML5 History API]] to keep your UI in sync with the URL, making it a powerful tool for managing navigation in single-page applications (SPAs).



```jsx
const router = createBrowserRouter([
  { path: '/', element: <Home />,},
  { path: '/about', element: <About />,},
  { path: '/contact', element: <Contact />,},
]);
```



## [[RouterProvider]]
---
The `createBrowserRouter` function is part of the `react-router-dom` library, which is used for handling routing in React applications. It leverages the [[HTML5 History API]] to keep your UI in sync with the URL, making it a powerful tool for managing navigation in single-page applications (SPAs).




```jsx
function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <nav className="flex space-x-4 p-4 bg-white shadow-md">
        <a href="/" className="text-blue-500 hover:text-blue-700">Home</a>
        <a href="/about" className="text-blue-500 hover:text-blue-700">About</a>
        <a href="/contact" className="text-blue-500 hover:text-blue-700">Contact</a>
      </nav>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
```








