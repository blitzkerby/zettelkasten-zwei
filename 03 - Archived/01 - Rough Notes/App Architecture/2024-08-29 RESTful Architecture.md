---
title: RESTful Architecture
allDay: false
startTime: 20:30
endTime: 21:00
date: 2024-08-29
completed: null
---
#### Sources
---
* [CHAPTER 5 Representational State Transfer (REST)](https://ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm)

- [Understanding REST API Methods: GET, POST, PATCH, PUT, and DELETE with Express.js & TypeScript Examples](https://pierek.com/blog/understanding-rest-api-methods-get-post-patch-put-and-delete-with-express-js-typescript-examples)

#### Backlinks:
---
* [[HTTP Semantics]]


![[Pasted image 20240830080342.png]]

### [[URL Parameters]]
---


### 1. GET requests (read)
---
The following is an sample `GET` request (read request) for the tours data. 

```javascript
app.get('/api/v1/tours', (req,res) => {
	try {
		const totalTours = tours.length;

		res.status(200).json({
			status: "success",
			results: totalTours,
			data: {
				tours, // Include the actual tour data if needed
			}
		})
	} catch (error) {
		res.status(500).json({
			status: "error",
			message: "Something went wrong while fetching tours."
		})
	}
})
```


### 2. POST requests (create)
---
The following is an sample `POST` request (create request) where a new tour data is added into to the database.

```javascript
const path = `${__dirname}/dev-data/data/tours-simple.json`

app.get('/api/v1/tours', (req,res) => {
	const newId = tours[tours.length - 1].id + 1;
	const newTour = Object.assign({ id: newId}, req.body);

	tours.push(newTour)
	fs.writeFile(path, JSON.stringify(tours), err => {
		res.status(201).json({ 
			status: "sucess",
			data: {
				tours: newTour
			}
		})
	})
})
```




