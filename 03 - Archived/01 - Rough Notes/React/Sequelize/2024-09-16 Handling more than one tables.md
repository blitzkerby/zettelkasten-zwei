---
title: Handling more than one tables
allDay: false
startTime: 14:00
endTime: 14:30
date: 2024-09-16
completed: 
tags:
  - React
  - sequelize
---
In order to handle more than one table within a database, it is generally recommended to follow a proper convention similar to the MVC framework.

However, using the MVC framework directly, you can setup multiple models each with their own unique attributes and access them all individually.

[[Connecting to Database|Before beginning setup your establish a connection to your MySQL database.]]

### **Defining Multiple Models**

Within the `models/` folder, you can define several models and specify which table they belong.

Say for instance, you need to setup models for `User`, `Post`, and `Comment tables`. The setup would be as follows:
##### `User.js`
---
```javascript
const { DataTypes } = require("sequelize")
const dbConnection = require("./config/db")

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

##### `Post.js`
---
```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Post = sequelize.define('Post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Post;
```

##### `Comment.js`
---
```javascript
const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Comment = sequelize.define('Comment', {
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Comment;
```

### **Establishing [[2024-09-12 Entity Relationship Diagrams|Relationships]]**

If the tables are related, we can define associations between them.

In our example, a `User` can have many `Posts`, and a `Post` can have many `Comments`. 

Common convention is to place these associations within the `index.js` right next to the other models:

```javascript
const sequelize = require('./database');
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });

Post.hasMany(Comment, { foreignKey: 'postId' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});
```


