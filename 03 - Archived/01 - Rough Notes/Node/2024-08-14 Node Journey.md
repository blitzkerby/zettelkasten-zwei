---
title: Node Journey
allDay: false
startTime: 15:00
endTime: 15:30
date: 2024-08-14
completed: null
---

# Useful resources
---
https://codingheroes.io/resources/
https://discord.com/invite/uhMkpf4
https://github.com/jonasschmedtmann/complete-node-bootcamp




# `Require()`
---
```jsx
const fs = require("fs")
```
>	
>	The line of code `const fs = require("fs")` is used in Node.js to import the built-in **File System (fs)** module. Here’s a breakdown of what it does:
>	
>	- **`const fs`**: This declares a constant variable named `fs`.
>	- **`require("fs")`**: This function call imports the File System module, which is a core module in Node.js. The `fs` module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.
>	
>	By importing the `fs` module, you can perform various file operations such as reading, writing, updating, and deleting files. 
>	


$$
\Large{
\text{
	Creating Files
}
}
$$
---
- `fs.appendFile()`
- `fs.open()`
- `fs.writeFile()`

*Example*
```javascript
fs.writeFile('path/to/file', 'Hello, world!', (err) => {
    if (err) throw err;
    console.log('File has been saved!');
});
```



$$
\Large{
\text{
	Updating Files
}
}
$$
---
- `fs.appendFile()`
- `fs.writeFile()`


*Example*
```javascript
fs.readFile('path/to/file', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
```


$$
\Large{
\text{
	Deleting Files
}
}
$$
---
* `fs.unlink()`

```javascript
fs.unlink('path/to/file', (err) => {
    if (err) throw err;
    console.log('File has been deleted!');
});
```


$$
\Large{
\text{
	Renaming Files
}
}
$$
---
* `fs.unlink()`


$$
\Large{
\text{
	Uploading Files
}
}
$$
---
* `fs.unlink()`





