---
title: FRONTEND ARCHITECTURE
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-09-19
completed: null
---
<<<<<<< HEAD
# **Folder Structure**
---
```css
.
├── .git
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   │   ├── images
│   │   └── svgs
│   ├── components/
│   │   └── tailwindcardclass/
│   ├── features/
│   ├── layouts/
│   ├── pages/
│   ├── App.js
│   ├── Constants.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── .reviewboardrc
├── eslint.config.js
├── package-lock.json
├── package.json
└── tailwind.config.js
```

# **Routing**
---
All browser routes are handled within the `App.js` file, all handled using `react-router-dom`. 

```javascript
const router = createBrowserRouter([
	{
		path:'/',
		element:<HomePage/>
	},
	{
		path:'/university',
		element:<UniversityPage/>
	},
	...
	// more routers here
])
```

The general convention of the frontend architecture is that pages should only retrieve other components and not contain any specific components without meeting such condition.
=======
# **Frontend**

## **Overview**

This is a React project set up with Vite. It includes various dependencies for styling, state management, routing, and more.

## Table of Contents

- Installation
- Scripts
- Dependencies
- Dev Dependencies
- Configuration
- Usage


## **Scripts**

- `npm start`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm run eject`: Ejects the app from `react-scripts`.


## **Dependencies**

- `@emotion/react`: ^11.13.3
- `@emotion/styled`: ^11.13.0
- `@fontsource/poppins`: ^5.0.15
- `@fontsource/roboto`: ^5.0.14
- `@mui/icons-material`: ^6.0.1
- `@mui/material`: ^6.0.1
- `@mui/styled-engine-sc`: ^6.0.0
- `@mui/styles`: ^6.0.0
- `@reduxjs/toolkit`: ^2.2.7
- `@testing-library/jest-dom`: ^5.17.0
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `axios`: ^1.7.5
- `dotenv`: ^16.4.5
- `jwt-decode`: ^4.0.0
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-icons`: ^5.3.0
- `react-redux`: ^9.1.2
- `react-router-dom`: ^6.26.1
- `react-scripts`: 5.0.1
- `react-toastify`: ^10.0.5
- `styled-components`: ^6.1.12
- `web-vitals`: ^2.1.4

## **Dev Dependencies**

- `tailwindcss`: ^3.4.10
>>>>>>> 663abcf (saving before pull)
