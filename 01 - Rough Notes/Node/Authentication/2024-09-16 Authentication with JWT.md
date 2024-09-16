---
title: Authentication
allDay: false
startTime: 11:00
endTime: 11:30
date: 2024-09-16
completed: null
---

This guide will walk you through setting up a basic authentication system using Node.js, Express, and JSON Web Tokens (JWT).

## **Prerequisites**

- Node.js and npm installed
- Basic knowledge of JavaScript and Express
- A MySQL database setup

## **Installation**

##### Clone the repository
---
```bash
git clone <repository-url>
cd <repository-directory>
```

##### Install dependencies
---
```bash
npm install express bcryptjs jsonwebtoken mysql2 sequelize dotenv
```

##### Setup environment variables
---
Create a `.env` file in the root directory and add the following:
```
ACCESS_TOKEN_SECRET=youraccesstokensecret
REFRESH_TOKEN_SECRET=yourrefreshtokensecret
DB_HOST=yourdatabasehost
DB_USER=yourdatabaseuser
DB_PASSWORD=yourdatabasepassword
DB_NAME=yourdatabasename
```

## **Database Setup**
##### Initialize Sequelize
---

Create a `database.js` file within the `config` folder with the following content:

```javascript
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;
```

##### Create a User Model
---

Create a `UsersModel.js` under the `models/` folder with the following content: 

```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
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
  },
});

module.exports = User;
```

## **Authentication Flow**

### 1. User Registration
---

Set up a `server.js` file in the root and fill it with the following content:

```javascript
const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./models/UsersModel');

const app = express();
app.use(express.json());

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### 2. User Login
---
 
Under the same `server.js` paste in the following below:

```javascript
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(400).json({ error: 'User not found' });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.status(400).json({ error: 'Invalid password' });

  const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });

  res.json({ accessToken, refreshToken });
});
```

### 3. Middleware for Protected Routes
---
```javascript
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

```

### 4. Secure Communication
---
Ensure your server is running over HTTPS to encrypt all communication between the client and server.

### 5. Logout
---
To handle logout, you can simply delete the refresh token on the client side or maintain a blacklist of invalidated tokens on the server side.


## Running the Server
##### 1. Sync the database
---
```javascript
const sequelize = require('./database');
sequelize.sync();
```

##### 2. Start the server
---
```javascript
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```


## Conclusion

This guide provides a basic setup for handling authentication in a Node.js application using Express and JWT. You can expand on this by adding features like password reset, email verification, and more.

---

Feel free to customize this guide to fit your specific needs! If you have any questions or run into issues, let me know.