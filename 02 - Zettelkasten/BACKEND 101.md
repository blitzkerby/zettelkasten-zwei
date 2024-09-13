
### A Simple Guide to APIs
---


```javascript
import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
```
>
>	***Import the dependencies***
>



```javascript
const app = express();
```
>
>	***Initiate instance of express***
>



```javascript
app.get("/api/v1/tours", (req, res) => {
    res
        .status(200)
        .json({
            status: "success",
            data : {
                tours : tours
            }
        })
})

```
>
>	***Handling get requests***
>



```javascript
app.post("/api/v1/tours", (req, res) => {
    console.log(req.body);
    res.send("Done")
})
```
>
>	***Handling post requests***
>



```javascript
const port = 1618

app.listen(port, (req, res) => {
	console.log(`App running on port ${port}...`)
})
```
>
>	***Running server***
>




# Using [[MongoDB]]
---
**MongoDB** is a popular **NoSQL** database. Unlike traditional relational databases (like MySQL or PostgreSQL) that use tables and rows, MongoDB stores data in **flexible JSON-like documents**. This makes it easier to handle complex, semi-structured data.


# Backend Architecture
---
## [[MVC]]