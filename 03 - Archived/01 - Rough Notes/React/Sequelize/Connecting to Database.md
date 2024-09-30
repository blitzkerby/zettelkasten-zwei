#React #sequelize 

Setup a `.env` file at the root of the folder filled with necessary contents for connecting to the database. They are typically:
- Database name 
- Database username
- Database password

Ports can also be configured here for easy developmental changes down the line.

##### `.env`
---
```
DB_NAME = "products"
DB_USERNAME = "root"
DB_PASSWORD = "password"
PORT = 1618
```

##### **Setting up `db.js`**
---
Common convention is to place the `db.js` within a `config/` folder. 

```javascript
const Sequelize = require('sequelize')
const dotenv = require('dotenv')

dotenv.config()

const dbConnection = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect:'mysql',
  }
)

module.exports = dbConnection
```
