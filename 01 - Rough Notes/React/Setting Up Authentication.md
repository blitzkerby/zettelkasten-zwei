#React 

## **Setting up Database** 
---
In order to setup our authentication we need a table to store all of the users. 

First, Use a database:

```mysql
USE Products;
```
>
>	This selects the *Products* database previously created from setting up the MyERN stack.
>

```mysql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```
>
>	We create a table that keeps track of the user’s id, username, email, password, time upon creation, and time upon updates.
> 


With that, the database is ready to receive and process the user information required for authentication.

## **Setting up a Model** 
---
With the table created in our MySQL schema, we have to create an object model in our backend to manipulate.

Import the `{ DataTypes }`, from sequelize, as well as the `dbConnection`.

```javascript
const { DataTypes } = require("sequelize")
const dbConnection = require("../config/db")

const User = dbConnection.define("Users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

module.exports = User;
```

## **Creating Controller Logic** 
---
The work-load logic required for authentication can be leveraged with the help of the `JWT` and `bcrypt` module. `Express-validator` will also be used to easily manage and handle errors.

```javascript
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const { ValidationError } = require('sequelize');
const { validationResult } = require('express-validator');
```

#### **Register Logic**
---
One of the primary functions of authentication is handling the logic for registration. 

Setup an asynchronous function for handling requests and responses.

```javascript
exports.postUser = async (request, response) => {};
```

First, we have to check for any validation errors that can arise out of the request. This can be done with the help of the `express-validator` library. 

```javascript
exports.postUser = async (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()){
		return response.status(400).json({ error: errors.array() });
	}
};
```
>
>	This block checks if there are any validation errors. If errors.isEmpty() returns false, it means there are validation errors, thus, sends a 400 Bad Request response with a JSON object containing the array of errors. 
>	
>	This prevents the function from proceeding further if the request data is invalid.
>


Now setup a `try` and `catch` block. Within the `try` block, we would like to try to save the user registration data into the database — with the added caveat that we store the hashed password instead.

```javascript
exports.postUser = async (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()){
		return response.status(400).json({ error: errors.array() });
	}
	
	try {
		// hash the password
		// save the user into the database with
		// - username
		// - email
		// - hashed password
	} catch (error) {
		// error handling
	}
};
```

We can use `bycrypt` to hash the entered password and store it under a new user alongside the username and email. This can be saved into the database with the `.save()` command.

```javascript
exports.postUser = async (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()){
		return response.status(400).json({ error: errors.array() });
	}
	
	try {
		const hashedPassword = await bycrypt.hash(request.body.password, 10);
		const user = new User({
			username : request.body.username,
			email : request.body.email,
			password : hashedPassword,
		})
		const result = await user.save();
		response.status(201).send({
			message: "User Created Successfully",
			result,
		})
	} catch (error) {
		// error handling
	}
};
```

Finally, add error handling into the catch block.

```javascript
exports.postUser = async (request, response) => {
	const errors = validationResult(request);
	if (!errors.isEmpty()){
		return response.status(400).json({ error: errors.array() });
	}
	
	try {
		const hashedPassword = await bycrypt.hash(request.body.password, 10);
		const user = new User({
			username : request.body.username,
			email : request.body.email,
			password : hashedPassword,
		})
		const result = await user.save();
		response.status(201).send({
			message: "User Created Successfully",
			result,
		})
	} catch (error) {
	    if (error instanceof ValidationError) {
		    return response.status(400).send({
			    message: "Validation Error",
				errors: error.errors,
			});
	    }
	    response.status(500).send({
		    message: "Error creating user",
			error: error.message,
	    });
	};
};
```

#### **Login Logic**
---
Now we implement the login logic. We place this right below the register logic.

```javascript
exports.postLogin = (request, response) => {
	// check if the email exists
	// if exists
	//   compare the password entered and the hashed password found
	//   if the passwords match
	//     check if the password matches
	//       create JWT token
	//       retrun success response
	//   catch error if password does not match
	// catch error if the email does not exist
}
```

Writing the code will look something like:

```javascript

exports.postLogin = (request, response) => {
	User
	.findOne({ email: request.body.email })
	.then((user) => {
		bcrypt
		.compare(request.body.password, user.password)
		.then((passwordCheck) => {
			if (!passwordCheck) {
				return response.status(400).send({
					message: "Passwords does not match",
					error,
			});
		}
				
		const token = jwt.sign(
			{
			  userId: user._id,
			  userEmail: user.email,
			},
			"RANDOM-TOKEN",
			{ expiresIn: "24h" });
			
		response.status(200).send({
				message: "Login Successful",
				email: user.email,
				token,
			});
		})
		.catch((error) => {
			response.status(400).send({
				message: "Passwords does not match",
				error,
			});
		});
	})
	.catch((e) => {
		response.status(404).send({
			message: "Email not found",
			e,
		});
	});
};
```

