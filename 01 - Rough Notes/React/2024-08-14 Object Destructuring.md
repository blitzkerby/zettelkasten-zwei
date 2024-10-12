---
title: Object Destructuring
allDay: false
startTime: 16:30
endTime: 17:00
date: 2024-08-14
completed: null
tags:
  - React
type: single
---
Assume the following code,

```jsx
function MovieDetails({ seletecId , onCloseMovie }){
  const [movie, setMovie] = useState({})

  const {
    Title: title, 
    Year: year,
    Poster: poster,
    Runtime: runtime, imdbRating,
    Plot: plot,    
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie


  useEffect(function(){
    async function getMovieDetails(){
      
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${seletecId}`)

      const data = await res.json();
      console.log(data)
    }
    getMovieDetails(data)
  },[])


  return (
    <div className="details"> 
      <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
      <img src={poster} alt={`Poster of ${movie} movie`} />
      {seletecId} 
    </div>
  )
}
```


# Code Review
---

### Code Review

1. **Function Component Declaration**:
    
    JavaScript
    
    ```javascript
    function MovieDetails({ seletecId , onCloseMovie }){
    ```
    
    AI-generated code. Review and use carefully. .
    
    - **Typo**: `seletecId` should be `selectedId`.
2. **State Initialization**:
    
    JavaScript
    
    ```javascript
    const [movie, setMovie] = useState({})
    ```
    
    AI-generated code. Review and use carefully. .
    
3. **Object Destructuring**:
    
    JavaScript
    
    ```javascript
    const {
      Title: title, 
      Year: year,
      Poster: poster,
      Runtime: runtime, imdbRating,
      Plot: plot,    
      Released: released,
      Actors: actors,
      Director: director,
      Genre: genre,
    } = movie
    ```
    
    AI-generated code. Review and use carefully. .
    
    - This destructures the `movie` object, assigning its properties to variables with the specified names.
4. **useEffect Hook**:
    
    JavaScript
    
    ```javascript
    useEffect(function(){
      async function getMovieDetails(){
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${seletecId}`)
        const data = await res.json();
        console.log(data)
      }
      getMovieDetails()
    },[])
    ```
    
    AI-generated code. Review and use carefully. .
    
    - **Typo**: `seletecId` should be `selectedId`.
    - **Missing Dependency**: `selectedId` should be included in the dependency array of `useEffect`.
    - **Missing State Update**: You need to update the state with the fetched data.
5. **Return Statement**:
    
    JavaScript
    
    ```javascript
    return (
      <div className="details"> 
        <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
        <img src={poster} alt={`Poster of ${movie} movie`} />
        {selectedId} 
      </div>
    )
    ```
    
    AI-generated code. Review and use carefully. .
    

### Corrected Code

Here’s the corrected version of your code:

JavaScript

```javascript
import { useState, useEffect } from 'react';

function MovieDetails({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});

  const {
    Title: title, 
    Year: year,
    Poster: poster,
    Runtime: runtime, 
    imdbRating,
    Plot: plot,    
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
      const data = await res.json();
      setMovie(data);
      console.log(data);
    }
    if (selectedId) {
      getMovieDetails();
    }
  }, [selectedId]);

  return (
    <div className="details"> 
      <button className="btn-back" onClick={onCloseMovie}>&larr;</button>
      <img src={poster} alt={`Poster of ${title} movie`} />
      <h2>{title}</h2>
      <p>{plot}</p>
      <p><strong>Year:</strong> {year}</p>
      <p><strong>Runtime:</strong> {runtime}</p>
      <p><strong>Rating:</strong> {imdbRating}</p>
      <p><strong>Released:</strong> {released}</p>
      <p><strong>Actors:</strong> {actors}</p>
      <p><strong>Director:</strong> {director}</p>
      <p><strong>Genre:</strong> {genre}</p>
    </div>
  );
}

export default MovieDetails;
```

AI-generated code. Review and use carefully. .

### Explanation of Object Destructuring

The line:

JavaScript

```javascript
const { Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot, Released: released, Actors: actors, Director: director, Genre: genre } = movie;
```

AI-generated code. Review and use carefully. .

- **Destructures** the `movie` object.
- **Renames** properties: `Title` to `title`, `Year` to `year`, etc.
- **Creates variables**: `title`, `year`, `poster`, etc., which hold the values of the corresponding properties from the `movie` object.

Feel free to ask if you have more questions or need further assistance! 😊