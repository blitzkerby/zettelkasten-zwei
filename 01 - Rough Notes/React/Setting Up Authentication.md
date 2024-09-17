#### **Setting up Database** 
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

#### **Setting up a Model** 
---
With the table created in our MySQL schema, we have to create an object model in our backend to manipulate.

Import the `{ DataTypes }`, from sequelize, as well as the `dbConnection`.

```javascript

```
