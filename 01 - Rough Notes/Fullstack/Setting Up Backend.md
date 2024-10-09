
## **Folder Structure**
---
```text
/
├── backend
│   ├── node_modules
│   ├── src
│   │   ├── config
│   │   │   └── db.js
│   │   ├── controllers
│   │   │   └── productController.js
│   │   ├── models
│   │   │   └── productModel.js
│   │   ├── routes
│   │   │   └── productRoutes.js
│   │   └── server.js
│   ├── .env
│   ├── package-lock.json
│   └── package.json
├── frontend
└── .gitignore

```

## **Backend**

##### **Initialize the Node.js project**
---
```bash
mkdir my-app
cd my-app
npm init -y
```


##### **Install necessary packages**
---
```bash
npm install express sequelize mysql2 jsonwebtoken bcryptjs body-parser cors
```


##### **Set up Sequelize**
---
Create a `config` folder with a `config.json` file for the database configuration.

Then, initialize Sequelize:

```bash
npx sequelize-cli init
```


##### **Create User Model**
---
- Create a `db.js` file within `src/config`

```javascript
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

export default sequelize;
```


##### **Create User Model**
---
- Create a `models` folder
- Within the folder, create a `user.js` file

```javascript
/*
 *   /models/user.js  
 */

import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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

export default User;
```


##### **Create Authentication Controller**
---
- Create a `controllers` folder
- Within the folder, create an `authController.js` file

```javascript
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: 'User created successfully', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

```


##### **Set Up Routes**
---
- Create a `routes` folder
- Within the folder, create an `authRoutes.js` file

```javascript
import express from 'express';
import { register, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;
```


##### **Configure Express App**
---
- Create an `app.js` or `server.js`

```javascript
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import sequelize from './config/database.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);

sequelize.sync()
  .then(() => {
    app.listen(3000, () => console.log('Server is running on port 3000'));
  })
  .catch(err => console.log(err));

```


##### **Environment Variables** (`.env`)
---
- Create a `.env` file in the root directory with the following content:

```text
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
JWT_SECRET=your_jwt_secret
```