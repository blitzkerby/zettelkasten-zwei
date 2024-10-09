# Implementation

This section outlines the steps to set up MyERN on your local machine.

#### Folder Structure
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
#### Prerequisites
---
Before beginning, ensure that the following are installed:

- Node.js and `npm` (or `yarn`) : Download and install it from [here](https://nodejs.org/en).
- MySQL : Download and install it from [here](https://www.mysql.com/).

## **[[Setting up MySQL via Workbench]]** 

#### ***Creating a New Connection***
---
```text
> Open MySQL workbench 
> Navigate to the homepage 
> Create new connection 
```

#### ***Set up new database***
---
In the query, enter the following:

```MYSQl
CREATE DATABASE products;
```

Then execute the query (by clicking on the lightning icon.)

![[Pasted image 20240829092549.png]]

Now create a new table product inside product database and populate it with the following indices:

```MYSQL 
USE products;

CREATE TABLE `product` (
	`productId` varchar(200) NOT null,
	`productTitle` varchar(300) DEFAULT null,
	`productDescription` varchar(500) DEFAULT null,
	`productPrice` float DEFAULT null,
	`availableQuantity` int DEFAULT null,
	`productThumbnail` varchar(500) DEFAULT null,
	PRIMARY KEY (`productId`)
);
```

Upon execution of the queries above, by switching to “Schemas” view and refreshing, you should be able to see the new `products` table.

![[Pasted image 20240829122013.png]]



Backlinks:

[[2024-09-10 Setting up MyERN (with sequelize)|Setting Up MyERN (Sequelize)]]
[[Setting Up Backend]]
[[Setting Up Frontend]]
