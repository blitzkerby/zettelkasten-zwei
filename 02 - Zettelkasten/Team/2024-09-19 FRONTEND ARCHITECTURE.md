---
title: FRONTEND ARCHITECTURE
allDay: false
startTime: 15:30
endTime: 16:00
date: 2024-09-19
completed: null
---
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


# **State Management** 
---
The components within the application are divided into two types: *dynamic* and *static*. 

Static components are independent components that DO NOT REQUIRE management and all data are fetched directly (Eg.: cards, navbar, footer, etc…)

On the other hand, dynamic components are components which works interdependently alongside other components and is prone to change from user interactions, and will REQUIRE state management (Eg.: buttons, textboxes, etc…)  

