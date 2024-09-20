---
title: FRONTEND ARCHITECTURE
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-09-19
completed: null
---
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