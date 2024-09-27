---
title: How Hooks really work
allDay: false
startTime: 10:00
endTime: 10:30
date: 2024-08-19
completed: null
---
```jsx
const [A, setA] = useState(23)

if (A === 23)
	const [B, setB] = useState('')

useEffect(fnZ, [])
```


```jsx
const [A, setA] = useState(23)
const [B, setB] = useState('')

useEffect(fnZ, [])
```

