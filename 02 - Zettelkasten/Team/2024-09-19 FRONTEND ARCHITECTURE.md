---
title: FRONTEND ARCHITECTURE
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-09-19
completed: null
---
### **Routing**
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

